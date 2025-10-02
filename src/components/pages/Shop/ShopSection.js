import React, { useState, useEffect } from 'react';
import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const SHOPIFY_DOMAIN = 'wm4ydj-65.myshopify.com';
const SHOPIFY_ACCESS_TOKEN = 'd88608a2006823c4b18f45f341917b45';
const PRODUCT_ID = 'gid://shopify/Product/10142492918035';

const client = createStorefrontApiClient({
  storeDomain: SHOPIFY_DOMAIN,
  apiVersion: '2024-01',
  publicAccessToken: SHOPIFY_ACCESS_TOKEN,
});

const ShopSection = ({ isMobile }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariantId, setSelectedVariantId] = useState(null);
  const [addingToCart, setAddingToCart] = useState(false);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const query = `
        query getProduct($id: ID!) {
          product(id: $id) {
            id
            title
            description
            handle
            images(first: 5) {
              edges {
                node {
                  id
                  url
                  altText
                  width
                  height
                }
              }
            }
            variants(first: 10) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  availableForSale
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
          }
        }
      `;

      const response = await client.request(query, {
        variables: { id: PRODUCT_ID }
      });

      if (response.data?.product) {
        const productData = response.data.product;
        setProduct(productData);
        // Set default variant (e/OS)
        if (productData.variants?.edges?.length > 0) {
          setSelectedVariantId(productData.variants.edges[0].node.id);
        }
      } else {
        setError('Product not found');
      }
    } catch (err) {
      console.error('Error fetching product:', err);
      setError('Failed to load product');
    } finally {
      setLoading(false);
    }
  };

  const handleQuantityChange = (delta) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  const handleQuantityInput = (e) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(Math.max(1, value));
  };

  const proceedToCheckout = async () => {
    if (!selectedVariantId) return;

    setAddingToCart(true);
    try {
      const variantId = selectedVariantId;
      
      // Create cart with quantity
      const createCartQuery = `
        mutation cartCreate($input: CartInput!) {
          cartCreate(input: $input) {
            cart {
              id
              checkoutUrl
            }
            userErrors {
              field
              message
            }
          }
        }
      `;

      const response = await client.request(createCartQuery, {
        variables: {
          input: {
            lines: [{
              merchandiseId: variantId,
              quantity: quantity
            }]
          }
        }
      });

      const cart = response.data?.cartCreate?.cart;
      
      if (cart?.checkoutUrl) {
        // Redirect directly to Shopify checkout
        window.location.href = cart.checkoutUrl;
      } else {
        setError('Failed to create cart');
      }
    } catch (err) {
      console.error('Error creating cart:', err);
      setError('Failed to proceed to checkout');
    } finally {
      setAddingToCart(false);
    }
  };

  if (loading) {
    return (
      <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '400px'
        }}>
          <div style={{ color: 'var(--text-primary)', fontSize: '1.5rem' }}>
            Loading...
          </div>
        </div>
      </section>
    );
  }

  if (error || !product) {
    return null; // Silently fail if product can't load
  }

  const selectedVariant = product.variants.edges.find(
    edge => edge.node.id === selectedVariantId
  )?.node;
  const price = selectedVariant?.price;
  const mainImage = product.images.edges[0]?.node;
  const totalPrice = price ? (parseFloat(price.amount) * quantity).toFixed(2) : '0.00';
  const allVariants = product.variants.edges.map(edge => edge.node);

  return (
    <section className="section" data-shop-section style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '3rem' : '4rem',
        alignItems: 'center'
      }}>
        {/* Product Image */}
        <div style={{ flex: '1' }}>
          {mainImage ? (
            <img
              src={mainImage.url}
              alt={mainImage.altText || product.title}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '1rem',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
              }}
            />
          ) : (
            <div style={{
              width: '100%',
              height: '400px',
              backgroundColor: 'var(--color-gray-200)',
              borderRadius: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-gray)'
            }}>
              Product Image
            </div>
          )}
        </div>

        {/* Product Details */}
        <div style={{ flex: '1' }}>
          <h2 style={{
            fontSize: isMobile ? '2rem' : '2.5rem',
            color: 'var(--text-primary)',
            marginBottom: '1rem'
          }}>
            {product.title}
          </h2>

          {product.description && (
            <div style={{
              fontSize: '1.125rem',
              lineHeight: '1.7',
              color: 'var(--text-gray)',
              marginBottom: '2rem'
            }}
            dangerouslySetInnerHTML={{ __html: product.description }}
            />
          )}

          {/* Price */}
          {price && (
            <div style={{
              fontSize: isMobile ? '2rem' : '2.5rem',
              fontWeight: 'bold',
              color: 'var(--color-primary-teal)',
              marginBottom: '2rem'
            }}>
              ${price.amount} {price.currencyCode}
            </div>
          )}

          {/* Operating System Selector */}
          {allVariants.length > 1 && (
            <div style={{ marginBottom: '2rem' }}>
              <label style={{
                display: 'block',
                fontSize: '1rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem'
              }}>
                Operating System
              </label>
              <div style={{
                display: 'flex',
                gap: '1rem',
                flexDirection: isMobile ? 'column' : 'row'
              }}>
                {allVariants.map(variant => {
                  const osName = variant.selectedOptions?.find(opt => opt.name === 'Operating System')?.value || variant.title;
                  const isSelected = variant.id === selectedVariantId;
                  
                  return (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariantId(variant.id)}
                      style={{
                        flex: 1,
                        padding: '1rem 1.5rem',
                        fontSize: '1rem',
                        fontWeight: '600',
                        backgroundColor: isSelected ? 'var(--color-primary-teal)' : 'var(--bg-white)',
                        color: isSelected ? 'var(--text-white)' : 'var(--text-primary)',
                        border: `2px solid ${isSelected ? 'var(--color-primary-teal)' : 'var(--color-gray-300)'}`,
                        borderRadius: '0.5rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontFamily: 'inherit'
                      }}
                      onMouseOver={(e) => {
                        if (!isSelected) {
                          e.target.style.borderColor = 'var(--color-primary-teal)';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (!isSelected) {
                          e.target.style.borderColor = 'var(--color-gray-300)';
                        }
                      }}
                    >
                      {osName}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{
              display: 'block',
              fontSize: '1rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '0.5rem'
            }}>
              Quantity
            </label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <button
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '0.5rem',
                  border: '1px solid var(--color-gray-300)',
                  backgroundColor: 'var(--bg-white)',
                  color: 'var(--text-primary)',
                  fontSize: '1.5rem',
                  cursor: quantity <= 1 ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: quantity <= 1 ? 0.5 : 1
                }}
              >
                −
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityInput}
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  width: '80px',
                  textAlign: 'center',
                  border: '1px solid var(--color-gray-300)',
                  borderRadius: '0.5rem',
                  padding: '0.5rem',
                  backgroundColor: 'var(--bg-white)',
                  fontFamily: 'inherit'
                }}
              />
              <button
                onClick={() => handleQuantityChange(1)}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '0.5rem',
                  border: '1px solid var(--color-gray-300)',
                  backgroundColor: 'var(--bg-white)',
                  color: 'var(--text-primary)',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                +
              </button>
              <div style={{
                marginLeft: '1rem',
                fontSize: '1.125rem',
                color: 'var(--text-gray)'
              }}>
                Total: <span style={{ fontWeight: '600', color: 'var(--color-primary-teal)' }}>
                  ${totalPrice} {price?.currencyCode}
                </span>
              </div>
            </div>
          </div>

          {/* Pre-order Info */}
          <div style={{
            backgroundColor: 'var(--color-gray-200)',
            padding: '1.5rem',
            borderRadius: '1rem',
            marginBottom: '2rem'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              How the Pre-Order Works:
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              color: 'var(--text-gray)',
              lineHeight: '1.6'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>• Pay $99 today to reserve each device</li>
              <li style={{ marginBottom: '0.5rem' }}>• Receive an invoice and payment link for the remaining $900 per device when ready to ship</li>
              <li style={{ marginBottom: '0.5rem' }}>• Complete payment of $900 to finalize your order</li>
              <li>• Total price per device: $999 ($99 deposit + $900 balance)</li>
            </ul>
          </div>

          {/* Checkout Button */}
          <button
            onClick={proceedToCheckout}
            disabled={addingToCart || !selectedVariant?.availableForSale}
            style={{
              width: '100%',
              padding: '1rem 2rem',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              backgroundColor: addingToCart ? 'var(--color-gray-400)' : 'var(--color-primary-teal)',
              color: 'var(--text-white)',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: addingToCart ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              marginBottom: '1rem'
            }}
            onMouseOver={(e) => {
              if (!addingToCart && selectedVariant?.availableForSale) {
                e.target.style.backgroundColor = 'var(--color-primary-teal-dark)';
              }
            }}
            onMouseOut={(e) => {
              if (!addingToCart && selectedVariant?.availableForSale) {
                e.target.style.backgroundColor = 'var(--color-primary-teal)';
              }
            }}
          >
            {addingToCart ? 'Processing...' : `Proceed to Checkout - $${totalPrice}`}
          </button>

          {!selectedVariant?.availableForSale && (
            <p style={{
              color: 'var(--text-gray)',
              fontSize: '0.9rem',
              textAlign: 'center'
            }}>
              Currently unavailable for pre-order
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;


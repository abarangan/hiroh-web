import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const Accordion = ({ items, isMobile }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const styles = {
    accordionItem: {
      marginBottom: isMobile ? '1rem' : '1.5rem',
      background: 'var(--color-white-90)',
      borderRadius: '0.75rem',
      border: '1px solid var(--color-gray-200)',
      boxShadow: '0 4px 12px var(--color-black-05)',
      backdropFilter: 'blur(4px)',
      overflow: 'hidden'
    },
    accordionHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: isMobile ? '1.5rem' : '2rem',
      cursor: 'pointer',
      backgroundColor: 'var(--color-transparent)',
      border: 'none',
      width: '100%',
      textAlign: 'left',
      fontSize: isMobile ? '1.1rem' : '1.25rem',
      fontWeight: 'bold',
      color: 'var(--text-primary)',
      fontFamily: 'inherit',
      transition: 'background-color 0.2s ease'
    },
    accordionHeaderHover: {
      backgroundColor: 'var(--color-gray-50)'
    },
    accordionIcon: {
      color: 'var(--text-primary)',
      transition: 'transform 0.3s ease',
      marginLeft: '1rem',
      flexShrink: 0
    },
    accordionContent: {
      padding: '0 2rem 2rem 2rem',
      color: 'var(--text-tertiary)',
      lineHeight: '1.6',
      fontSize: isMobile ? '0.9rem' : '1rem'
    }
  };

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} style={styles.accordionItem}>
          <button
            style={styles.accordionHeader}
            onClick={() => handleToggle(index)}
          >
            <span>{item.q}</span>
            <div style={styles.accordionIcon}>
              <AnimatePresence mode="wait">
                {openIndex === index ? (
                  <motion.div
                    key="minus"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Minus size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="plus"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Plus size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </button>
          
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ 
                  duration: 0.3, 
                  ease: "easeInOut",
                  height: { duration: 0.3 },
                  opacity: { duration: 0.2 }
                }}
                style={{ overflow: 'hidden' }}
              >
                <div style={styles.accordionContent}>
                  {item.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

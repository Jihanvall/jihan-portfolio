import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import './Skills.css';

const categories = [
  { name: 'Programming', items: ['JavaScript', 'Python', 'HTML', 'CSS', 'PHP'] },
  { name: 'Frontend', items: ['React.js', 'Tailwind CSS', 'Bootstrap'] },
  { name: 'Backend', items: ['Flask', 'PHP', 'REST APIs', 'MongoDB (NoSQL)', 'SQL'] },
  { name: 'AI & Data', items: ['Pandas', 'Numpy', 'scikit-learn', 'Seaborn', 'Plotly', 'CNNs'] },
  { name: 'DevOps & Tools', items: ['Docker', 'GitHub Actions', 'Azure', 'Git'] },
  { name: 'Languages', items: ['English (Excellent)', 'French (Good)'] }
];

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const el = tabRefs.current[activeIndex];
    if (el) {
      setUnderlineStyle({
        left: el.offsetLeft,
        width: el.offsetWidth
      });
    }
  }, [activeIndex]);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-wrapper">
        <div className="skills-tabs">
          {categories.map((cat, idx) => (
            <div
              key={cat.name}
              ref={el => (tabRefs.current[idx] = el)}
              className={`skills-tab ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            >
              {cat.name}
            </div>
          ))}

          {/* ✅ underline positioned based on tabRefs */}
          <motion.div
            className="skills-underline"
            animate={underlineStyle}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="skills-content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {categories[activeIndex].items.map(item => (
              <div key={item} className="skills-item">
                {item}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}


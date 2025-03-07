'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Definition {
  word: string;
  meaning: string;
}

const definitions: Definition[] = [
  {
    word: "Information Security",
    meaning: "" // To be filled later
  },
  {
    word: "Usable Security",
    meaning: "" // To be filled later
  },
  {
    word: "Euthelian",
    meaning: "" // To be filled later
  }
];

export const HoverWord = ({ children, definition }: { children: string, definition: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span className="relative inline-block">
      <span
        className="cursor-help border-b border-dotted border-primary/40"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </span>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64"
          >
            <div className="bg-white rounded-lg shadow-xl p-4">
              <div className="relative">
                <motion.p
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                  className="text-primary text-sm font-handwriting overflow-hidden whitespace-pre-wrap"
                >
                  {definition}
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};
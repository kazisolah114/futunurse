"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GeneratingPlanProps {
  currentStage: number;
  setCurrentStage: Dispatch<SetStateAction<number>>;
}

const GeneratingPlanAnimation = ({ currentStage, setCurrentStage }: GeneratingPlanProps) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (currentStage === 2) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [currentStage])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="w-full h-[calc(100vh-10.1rem)] flex flex-col items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
        >
          {/* AI Orb */}
          <motion.div
            className="w-24 h-24 rounded-full bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-600 shadow-2xl"
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, 180, 360],
              boxShadow: [
                "0 0 30px rgba(14,165,233,0.6)",
                "0 0 45px rgba(6,182,212,0.8)",
                "0 0 30px rgba(37,99,235,0.6)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* ECG Heartbeat Line */}
          <div className="w-64 h-12 overflow-hidden">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 100"
              className="w-full h-full stroke-sky-600"
              fill="none"
              strokeWidth="3"
            >
              <motion.path
                d="M0 50 H100 L120 20 L140 80 L160 50 H220 L240 30 L260 70 L280 50 H500"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.svg>
          </div>

          {/* Text */}
          <motion.div
            className="flex flex-col items-center gap-3"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-lg font-semibold text-teal-600">
              Generating AI-Powered Nursing Care Plan
            </span>
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-3 h-3 rounded-full bg-teal-500"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GeneratingPlanAnimation;

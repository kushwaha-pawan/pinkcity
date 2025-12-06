// src/Components/Pages/Login/Auth/Auth.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';

const Auth = () => {
  const [currentForm, setCurrentForm] = useState('login');
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const changeForm = (formName) => {
    setDirection(formName === 'login' ? -1 : 1);
    setCurrentForm(formName);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.2, ease: 'easeIn' },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      
      <div className="w-full max-w-md relative h-[580px] overflow-hidden">
        <AnimatePresence custom={direction} initial={false} mode="wait">
          {currentForm === 'login' && (
            <motion.div
              key="login"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full"
            >
              <Login 
                onSignupClick={() => changeForm('signup')}
                onForgotPasswordClick={() => changeForm('forgot')}
              />
            </motion.div>
          )}

          {currentForm === 'signup' && (
            <motion.div
              key="signup"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full"
            >
              <Signup onLoginClick={() => changeForm('login')} />
            </motion.div>
          )}

          {currentForm === 'forgot' && (
            <motion.div
              key="forgot"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full"
            >
              <ForgotPassword onLoginClick={() => changeForm('login')} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Auth;

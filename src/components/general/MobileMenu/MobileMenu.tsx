'use client';

import { useEffect } from 'react';

import { motion } from 'framer-motion';

import { MainNav } from '@/components/general';
import { Container } from '@/components/ui';

import { MobileMenuProps } from './types';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.3,
      type: 'spring',
      damping: 25,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

export const MobileMenu: React.FC<MobileMenuProps> = ({ links, closeMenu }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') closeMenu();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeMenu]);

  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed-full bg-overlay-burger z-10 overflow-hidden backdrop-blur-[25px] md:hidden"
    >
      <Container>
        <div className="relative flex min-h-screen items-center justify-center">
          <MainNav links={links} onClick={closeMenu} />
        </div>
      </Container>
    </motion.div>
  );
};

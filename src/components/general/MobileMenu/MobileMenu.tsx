'use client';

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

const appear = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      type: 'spring',
      damping: 25,
      delay: 0.9,
    },
  },
};

export const MobileMenu: React.FC<MobileMenuProps> = ({ links, closeMenu }) => {
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
          <motion.div
            variants={appear}
            initial="hidden"
            animate="visible"
            className="absolute right-0 top-[42px]"
          >
            <button
              className="transition_prop py-[4px] text-[14px] uppercase tracking-[1.4px] hover:text-white/75 focus:text-white/75"
              onClick={closeMenu}
              type="button"
            >
              Close
            </button>
          </motion.div>

          <MainNav links={links} onClick={closeMenu} />
        </div>
      </Container>
    </motion.div>
  );
};

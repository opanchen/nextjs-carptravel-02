'use client';

import { useState } from 'react';

import { MainNav, MobileMenu } from '@/components/general';
import { Container, Logo } from '@/components/ui';

import { AppBarProps } from './types';

export const AppBar: React.FC<AppBarProps> = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="absolute left-0 right-0 top-0">
      <Container>
        <nav className="flex items-center justify-between py-[36px] md:py-[24px]">
          <Logo />

          <button
            className="transition_prop block py-[4px] text-[14px] uppercase tracking-[1.4px] hover:text-white/75 focus:text-white/75 md:hidden"
            type="button"
            onClick={toggleMenu}
          >
            Menu
          </button>

          <div className="hidden md:block">
            <MainNav links={links} />
          </div>
        </nav>
      </Container>

      {isMenuOpen && <MobileMenu links={links} closeMenu={closeMenu} />}
    </header>
  );
};

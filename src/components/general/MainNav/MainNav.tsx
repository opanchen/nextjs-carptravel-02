import Link from 'next/link';

import { MainNavProps } from './types';

export const MainNav: React.FC<MainNavProps> = ({ links, onClick }) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <ul className="flex flex-col items-center gap-[48px] md:flex-row md:gap-[24px] xl:gap-[56px]">
      {links.map(({ name }) => (
        <li key={name} onClick={handleClick}>
          <Link href={`#${name}`} className="group">
            <span className="nav_link transition_prop group-hover:text-white/75 group-focus:text-white/75">
              {name}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

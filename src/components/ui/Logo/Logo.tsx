import Image from 'next/image';
import Link from 'next/link';

export const Logo: React.FC = () => {
  return (
    <Link href="/" className="group inline-flex flex-col items-center">
      <Image
        src="/assets/images/logo-element.png"
        width={59}
        height={21}
        alt="Logo of the company"
      />
      <span className="font-karantina transition_prop inline-block text-[14px] leading-none tracking-[2.59px] group-hover:text-white/75 group-focus:text-white/75">
        CarpTravel
      </span>
    </Link>
  );
};

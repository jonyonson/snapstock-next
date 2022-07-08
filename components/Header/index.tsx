import Image from 'next/image';
import Link from 'next/link';

// Components
import Search from '../Search';

// Styles
import StyledHeader from './Header.styled';

type HeaderProps = {
  className?: string;
};

function Header({ className }: HeaderProps) {
  return (
    <StyledHeader className={className}>
      <Link href="/">
        <a>
          <h1>
            <Image
              src="/images/logo.svg"
              alt="Snapstock"
              height="40px"
              width="184px"
            />
          </h1>
        </a>
      </Link>
      <Search placeholder="🔍  Search Quotes" className="Search" />
    </StyledHeader>
  );
}

export default Header;

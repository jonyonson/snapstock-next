import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

// Components
import Search from './Search';

type HeaderProps = {
  className?: string;
};

const StyledHeader = styled.header`
  max-width: 100%;
  width: var(--maxWidth);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

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
      <Search placeholder="🔍  Search Quotes" />
    </StyledHeader>
  );
}

export default Header;

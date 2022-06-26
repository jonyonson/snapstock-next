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
  width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  h1 {
    margin: 0;

    @media screen and (max-width: 600px) {
      margin-bottom: 1rem;
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
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
      <Search placeholder="🔍  Search Quotes" className="Search" />
    </StyledHeader>
  );
}

export default Header;

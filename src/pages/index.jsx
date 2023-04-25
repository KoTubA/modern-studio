import * as React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-family: ${({ theme }) => theme.font.family.montserrat};
`;

const H2 = styled.h2`
  font-family: ${({ theme }) => theme.font.family.cormorant};
  font-weight: 300;
`;

function IndexPage() {
  return (
    <main>
      <H1>Modern studio</H1>
      <H2>Modern studio</H2>
    </main>
  );
}

export default IndexPage;
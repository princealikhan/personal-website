import React from 'react';
import Link from 'next/link';
import styled from "styled-components";

export const PAGE_VERT_PADDING = 15;
export const PAGE_HORIZ_PADDING = 15;

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${PAGE_VERT_PADDING}vh ${PAGE_HORIZ_PADDING}vw;
  padding: ${PAGE_VERT_PADDING - 5}vh ${PAGE_HORIZ_PADDING - 5}vw;

`;

const InnerContainer = styled.div`
  position: relative;
  max-width: 1500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  & > .PageWrapper--Heading {
    margin-bottom: 0.5em;
  }
`;

const SideButtonContainer = styled.div`
  position: fixed;
  top: ${PAGE_VERT_PADDING}vh;
  ${({ theme }) => theme.mediaQueries.tablet`
    top: unset;
    bottom: ${PAGE_VERT_PADDING - 10}vh;
  `}
`;

const Page = ({
    children
  }) => (
    <PageContainer>
    <InnerContainer>
     {children}
    </InnerContainer>
  </PageContainer>
);

export default Page;

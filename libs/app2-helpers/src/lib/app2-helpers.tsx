import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface App2HelpersProps {}

const StyledApp2Helpers = styled.div`
  color: pink;
`;

export function App2Helpers(props: App2HelpersProps) {
  return (
    <StyledApp2Helpers>
      <h1>Welcome to app2-helpers!</h1>
    </StyledApp2Helpers>
  );
}

export default App2Helpers;

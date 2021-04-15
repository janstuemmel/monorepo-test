import { render } from '@testing-library/react';

import App2Helpers from './app2-helpers';

describe('App2Helpers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Helpers />);
    expect(baseElement).toBeTruthy();
  });
});

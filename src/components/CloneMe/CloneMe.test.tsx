import { screen } from '@testing-library/react';
import Clone from './index';
import { renderTheme } from '../../styles/render-theme';

describe('<CloneMe />', () => {
  it('should render', () => {
    renderTheme(<Clone />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

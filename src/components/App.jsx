import { ThemeProvider } from 'styled-components';
import {theme} from '../utils/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        So Yummy
      </div>
    </ThemeProvider>
  );
};

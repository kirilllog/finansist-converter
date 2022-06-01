import { Provider } from 'react-redux';
import { Box, Container, Grid } from '@mui/material';

import store from './store';
import { CurrencyConverter } from './components/CurrencyConverter';
import { CurrencyList } from './components/CurrencyList';

const App = () => (
  <Provider store={store}>
    <Container maxWidth='xl'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <CurrencyList />
          </Grid>
          <Grid item xs={4}>
            <CurrencyConverter />
          </Grid>
        </Grid>
      </Box>
    </Container>
  </Provider>
);

export default App;

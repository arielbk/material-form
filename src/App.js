import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import UserForm from './components/UserForm';

const theme = {};

function App() {
  return (
    <ThemeProvider>
      <UserForm />
    </ThemeProvider>
  );
}

export default App;

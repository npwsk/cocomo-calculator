import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box, Container, Paper, Grid } from '@mui/material';
import Start from './components/Start';
import Cocomo from './components/Cocomo';
import Cocomo2 from './components/Cocomo2';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CssBaseline />
        <Container sx={{ p: 0, my: 5, display: 'flex', flexDirection: 'column' }} maxWidth="md" >
          <Header/>
          <Paper sx={{ py: 4, px: 4 }}>
            <Routes>
              <Route path="/" element={<Start />} />
              <Route path="/cocomo" element={<Cocomo />} />
              <Route path="/cocomo-2" element={<Cocomo2 />} />
            </Routes>
          </Paper>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;

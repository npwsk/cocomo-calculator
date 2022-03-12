import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box, Container } from '@mui/material';
import Start from './components/Start';
import Cocomo from './components/Cocomo';
import Cocomo2 from './components/Cocomo2';

function App() {
  return (
    <BrowserRouter>
      <Box className="App" sx={{ p: 5 }}>
        <CssBaseline />

        <Container maxWidth="md">
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/cocomo" element={<Cocomo />} />
            <Route path="/cocomo-2" element={<Cocomo2 />} />
          </Routes>
        </Container>
      </Box>
    </BrowserRouter>
  );
}

export default App;

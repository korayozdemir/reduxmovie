import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Footer from '../mainPages/Footer';
import Header from '../mainPages/Header';
import { Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router';
import HomePage from '../mainPages/HomePage';
import MovieList from '../pages/movies/index';
import MovieAdd from '../pages/movies/movieAdd';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

function App() {

  return (
    <>
      <Container component="main" sx={{ mb: 2 }} maxWidth="sm">
        <Row>
          <Header></Header>
        </Row>
        <Row>
          <Routes>
            <Route path='/movies' element={<MovieList />}></Route>
            <Route path='/movies/new' element={<MovieAdd />}></Route>
            <Route path='/movies/:id' element={<MovieAdd />}></Route>
            <Route path='/' element={<HomePage />}></Route>
          </Routes>
        </Row>
        <Row>
          <Footer></Footer>
        </Row>
      </Container>
    </>
  );
}

export default App;

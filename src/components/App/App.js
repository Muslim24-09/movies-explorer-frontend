import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Main } from '../Main';
import { Movies } from '../Movies';
import { SavedMovies } from '../SavedMovies';
import { Profile } from '../Profile';
import { Register } from '../Register';
import { Login } from '../Login';
import { Header } from '../Header';
import { PageNotFound } from '../PageNotFound';


import './App.css';
import "../../index.css";

export const App = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const closeMenuPopup = () => {
    setMenuOpened(false)
  }
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/*" element={<PageNotFound />} />
        <Route path="/signup" element={<Register />} />

        <Route path="/signin" element={<Login />} />

        <Route path='/' element={<Main />}>
          <Route element={<Header />} />
          <Route element={<Main />} />
        </Route>

        <Route path='/movies' element={
          <Movies
            menuClosed={closeMenuPopup}
            menuOpened={menuOpened}
            setMenuOpened={setMenuOpened} />
        } />

        <Route path='/saved-movies' element={
          <SavedMovies
            menuClosed={closeMenuPopup}
            menuOpened={menuOpened}
            setMenuOpened={setMenuOpened} />
        } />

        <Route path='/profile' element={
          <Profile
            menuClosed={closeMenuPopup}
            menuOpened={menuOpened}
            setMenuOpened={setMenuOpened} />
        } />

      </Routes>
    </BrowserRouter>


  );
}

export default App;

import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';

function App() {

  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet/>
      </main>
      <Footer />
    </>
  );
}

export default App;
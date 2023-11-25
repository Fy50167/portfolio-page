import { useState, useMemo } from 'react'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Socials from './components/Socials';
import MusicPlayer from './components/MusicPlayer';



function App() {
  const [welcome, setWelcome] = useState(true);

  const renderNav = () => {
    if (welcome) {
      return <Header />
    }
  }

  return (
    <>
      {renderNav()}
      <main>
        <MusicPlayer/>
        <Socials />
        <Outlet context = {setWelcome}/>
      </main>
    </>
  );
}

export default App

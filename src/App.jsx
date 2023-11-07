import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import Socials from './components/Socials';



function App(props) {
  const [welcome, setWelcome] = useState(true);

  const renderNav = () => {
    if (welcome) {
      return <Navigation />
    }
  }

  return (
    <>
      {renderNav()}
      <main>
        <Socials />
        <Outlet context = {setWelcome}/>
      </main>
    </>
  );
}

export default App

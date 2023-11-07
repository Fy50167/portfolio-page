import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Socials from './components/Socials';



function App(props) {
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
        <Socials />
        <Outlet context = {setWelcome}/>
      </main>
    </>
  );
}

export default App

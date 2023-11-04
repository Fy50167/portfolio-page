import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';



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
        <Outlet context = {setWelcome}/>
      </main>
    </>
  );
}

export default App

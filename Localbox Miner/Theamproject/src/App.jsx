import { useContext } from 'react'
import './App.css'
import { ThemeContext } from './Componets/ThemeContext';
import ThemeToggleButton from './Componets/ThemeToggleButton';

function App() {
  const  {theme}  = useContext(ThemeContext);

  return (
    <>
     <div style={{backgroundColor:theme=="light"?"white":"black",color:theme=="light"?"black":"white"}} className='mainthem'>
            <div className='vicemain'>
            <h1>Hello, World!</h1><br/>
            <ThemeToggleButton />
            </div>
        </div>
    </>
  )
}

export default App

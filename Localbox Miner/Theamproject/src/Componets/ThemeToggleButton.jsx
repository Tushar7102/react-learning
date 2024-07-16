import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} style={{backgroundColor:theme=="light"?"black":"white",color:theme=="light"?"white":"black"}}>
            Switch to {theme=="light"?"dark":"light"} mode
        </button>
    );
};

export default ThemeToggleButton;
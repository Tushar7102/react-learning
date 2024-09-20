import { useDispatch, useSelector } from 'react-redux'
import { SET_THEME } from '../Redux/ActionType';

function Theme() {
    const theme = useSelector((store) => store.TheamReducer);
    // console.log(theme) // Assuming `theme` is the key in your Redux store
    const dispatch = useDispatch();

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'dark';
        dispatch({ type: SET_THEME, payload: newTheme });
    };
    const toggleThemeLight = () => {
        const newTheme = theme === 'light' ? 'light' : 'light';
        dispatch({ type: SET_THEME, payload: newTheme });
    };

    return (
        <div>
            <button disabled={theme === 'dark'} className='dark_theme' onClick={toggleTheme}>
                {/* {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'} */}
                Switch to Dark
            </button>
            <button disabled={theme === 'light'} className='light_theme' onClick={toggleThemeLight}>
            Switch to Light
            </button>
        </div>
    )
}

export default Theme;

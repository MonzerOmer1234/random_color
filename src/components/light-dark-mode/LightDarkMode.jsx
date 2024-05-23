
import './styles.css'
import useLocalStorage from './useLocalStorage';

function LightDarkMode(){
    const [theme , setTheme] = useLocalStorage('theme'  , 'dark')

    function handleToggleTheme(){
        setTheme(theme === 'light' ? 'dark' : 'light')
    }


   return <div  className="light-dark-mode" data-theme = {theme}>
    <div className="container">
        <p >Hello World!</p>
        <button onClick={handleToggleTheme}>{`${theme === 'light' ? 'Light' : 'Dark'} Theme`}</button>
    </div>

   </div>
}
export default LightDarkMode;
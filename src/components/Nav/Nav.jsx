import style from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Nav = ({ onSearch }) => {
    return (
        <nav className={style.nav}>
            <SearchBar onSearch={onSearch}/>

            <button>
                <Link to={'/'}>Log out</Link>
            </button>
            
            <button>
            <Link to={'about'}>About</Link>
            </button>
            
            <button>
            <Link to={'home'}>Home</Link>
            </button>

            <button>
            <Link to={'favorites'}>Favorites</Link>
            </button>
        </nav>
    )
}

export default Nav;
import { useContext } from 'react';
import { MainColor } from './App';
import LogoIcon from './assets/logo.svg?react';
import { Link } from 'react-router-dom';

function Header() {
    const { actualColor } = useContext(MainColor);

    return (
        <header>
            <Link to="/">
                <div className="logo-section">
                    <LogoIcon
                        className="logo-icon"
                        width="70"
                        height="70"
                        style={{ color: actualColor }}
                    />

                    <div className="title-section">
                        <div className="title-sign">
                            <p className="sign" style={{ color: actualColor }}>{'\u03B1'}</p>
                            <p className="name">Strike</p>
                        </div>
                        <p className="slogan">Strike them all</p>
                    </div>
                </div>
            </Link>
        </header>
    );
}

export default Header;
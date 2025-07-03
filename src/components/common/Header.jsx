import { Link } from 'react-router-dom'

function Header({ logo }) {
    return (
        <header>
            <h1>
                <Link to='/'>
                    {logo && <img src={logo} alt="로고" />}
                    {!logo && <span className="no-logo">BEPLE</span>}
                </Link>
            </h1>
        </header>
    )
}

export default Header 
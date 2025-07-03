import { Link } from 'react-router-dom'
import '../../style/common.scss'

function Header({logo}) {
    return (
        <>
            <header className='header'>
                <h1>
                    <Link to='/'>
                        {logo && <img src={logo} alt="로고" />}
                        {!logo && <span className='no-logo'>BEPLE</span>}
                    </Link>
                </h1>
                <nav>
                    <ul>
                        <li><Link to='/test/page'>test</Link></li>
                        <li><Link to='/test2/page'>test2</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header

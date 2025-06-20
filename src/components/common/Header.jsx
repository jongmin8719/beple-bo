import { Link } from 'react-router-dom'
import '../../style/common.scss'

function Header() {
    return (
        <>
            <header className='header'>
                <h1><Link to='/'>Home</Link></h1>
                <nav>
                    <ul>
                        <li><Link to='components/faq/page'>FAQ</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header

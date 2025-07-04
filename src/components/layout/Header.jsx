import { Link } from 'react-router-dom'
import routes from '@/routes/index'
// 스타일시트
import '@style/common.scss'


function Header({logo}) {

    const pathname = window.location.pathname;

    return (    
        <>
            <header className='header'>
                <h1>
                    <Link to={routes[0].path}>
                        {logo && <img src={logo} alt="로고" />}
                        {!logo && <span className='no-logo'>BEPLE</span>}
                    </Link>
                </h1>
                <nav>
                    <ul>
                        {routes
                            .filter(route => route.showInNav)
                            .map(route => (
                                <li
                                    key={route.path}
                                    className={pathname === route.path ? 'active' : ''}
                                >
                                    <Link to={route.path}>
                                        {route.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header

import { Link } from 'react-router-dom'
import routes from '@/routes/Route'
// 스타일시트
import '@style/common.scss'

function Header({logo, pageTitle}) {

    const pathname = window.location.pathname;


    return (    
        <>
            <header className={`header`}>
                <h1>
                    <Link to={routes[0].path}>
                        {logo && <img src={logo} alt="로고" />}
                        {!logo && <span className='no-logo'>{pageTitle}</span>}
                    </Link>
                </h1>

                {/* 네비게이션 */}
                <nav className='nav-wrap'>
                    {routes
                        .filter(route => route.showInNav)
                        .map(route => (
                            <div
                                key={route.path}
                                className={`nav-item`}
                            >
                            {/* 메인 네비게이션 */}
                                <Link 
                                    key={route.path}
                                    className={`nav-link ${pathname === route.path ? 'active' : ''}`}
                                    to={route.path}
                                >
                                    {route.name}
                                </Link>
                            </div>
                        ))
                    }
                </nav>
            </header>
        </>
    )
}

export default Header

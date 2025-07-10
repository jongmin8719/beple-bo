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


                                {/* 서브 네비게이션 */}
                                <div className='nav-item__sub'>
                                    {route.children &&
                                        route.children
                                        .filter(subRoute => subRoute.showInNav)
                                        .map(subRoute => (
                                            <Link
                                                key={subRoute.path}
                                                className={`nav-link nav-link__sub ${pathname === subRoute.path ? 'active' : ''}`}
                                                to={subRoute.path}
                                            >
                                                {subRoute.name}
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </nav>
            </header>
        </>
    )
}

export default Header

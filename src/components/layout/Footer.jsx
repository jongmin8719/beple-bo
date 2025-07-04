import { Link } from 'react-router-dom'
import '../../style/common.scss'

function Footer({copyright, corp, tel, email, className}) {
    return (
        <>
            <footer className={'footer' + (className ? ' ' + className : '')}>
                <section className='footer__container'>
                    <div className='footer__info'>
                        <p className='footer__corp'>{corp}</p>
                        <p className='footer__tel'>{tel}</p>
                        <p className='footer__email'>
                            <Link to={`mailto:${email}`}>{email}</Link>
                        </p>
                        <p className='footer__address'>{address}</p>
                    </div>

                    <div className='copyright'>
                        <p className='copyright__text'>{copyright}</p>
                    </div>
                </section>

            </footer>
        </>
    )
}

export default Footer

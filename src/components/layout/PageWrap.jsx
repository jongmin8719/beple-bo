import '@style/common.scss'

function PageWrap({ children, className }) {
    return (
        <>
            <div className="skip-nav">
                <a href="#none" className='skip-nav__link'>본문 바로가기</a>
                <a href="#none" className='skip-nav__link'>네비게이션 바로가기</a>
                <a href="#none" className='skip-nav__link'>푸터 바로가기</a>
            </div>
            <div className={'wrap' + (className ? ' '+className : '')}>
                {children}
            </div>
        </>
    )
}

export default PageWrap

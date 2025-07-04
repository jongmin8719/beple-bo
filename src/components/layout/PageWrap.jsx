import '@style/common.scss'

function PageWrap({ children, className }) {
    return (
        <>
            <div className={'wrap' + (className ? ' '+className : '')}>
                {children}
            </div>
        </>
    )
}

export default PageWrap

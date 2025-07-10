import { Outlet } from 'react-router-dom'
import '@/style/common.scss'

function ContainerWrap({ className, children }) {
    return (
        <>
            <main className={'container-wrap' + (className ? ' '+className : '')}>
                {children ? children : <Outlet />}
            </main>
        </>
    )
}

export default ContainerWrap

import { Outlet } from 'react-router-dom'
import '../../style/common.scss'

function ContainerWrap({ className }) {
    return (
        <>
            <main className={'container-wrap' + (className ? ' '+className : '')}>
                <Outlet />
            </main>
        </>
    )
}

export default ContainerWrap

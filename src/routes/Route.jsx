import App from '@/App';  // Test 페이지 컴포넌트 import
import WorkingPage from '@/pages/working/Page';  // 작업 현황 페이지
import BeplePay from '@/pages/working/sub/BeplePay';  // 비플페이 페이지
import ViewPage from '@/pages/view/Page';  // 페이지 뷰 관리


const routes = [
    {
        path: '/',
        name: 'Home',
        element: <App />,
        showInNav: false
    },
    {
        path: '/working',
        name: '작업 현황',
        element: <WorkingPage />,
        showInNav: true,
        children: [
            {
                path: '/working/beple-pay',
                name: '비플페이',
                element: <BeplePay />,
                showInNav: true
            },
            {
                path: '/working/beple-pay',
                name: '비플페이 서브2',
                element: <BeplePay />,
                showInNav: true
            },
            {
                path: '/working/beple-pay',
                name: '비플페이 서브3',
                element: <BeplePay />,
                showInNav: true
            }
        ]
    },
    {
        path: '/view',
        name: 'PageViewList',
        element: <ViewPage />,
        showInNav: true
    }
]

export default routes;
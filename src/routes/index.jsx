import App from '@/App';  // Test 페이지 컴포넌트 import
import TestPage from '@/pages/test/Page';  // Test 페이지 컴포넌트 import
import TestPage2 from '@/pages/test2/Page';  // Test2 페이지 컴포넌트 import

const routes = [
    {
        path: '/',
        name: 'Home',
        element: <App />,
        showInNav: false
    },
    {
        path: '/test/page',
        name: 'Test',
        element: <TestPage />,
        showInNav: true
    },
    {
        path: '/test2/page',
        name: 'Test2',
        element: <TestPage2 />,
        showInNav: true
    }
]

export default routes;
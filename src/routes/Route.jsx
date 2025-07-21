import App from '@/App';  // Test 페이지 컴포넌트 import
import Dashboard from '@/pages/dashboard/Page';  // 작업 현황 페이지
import ProjectsPage from '@/pages/projects/Page';  // 프로젝트 관리
import MainPage from '@/pages/main';  // 프로젝트 관리


const routes = [
    {
        path: '/',
        element: <App />,
        showInNav: false,
        children: [
            {
                index: true,
                element: <MainPage />,
                showInNav: true
            }
        ]
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        element: <Dashboard />,
        showInNav: true
    },
    {
        path: '/projects',
        name: 'Projects',
        element: <ProjectsPage />,
        showInNav: true
    }
]

export default routes;
import App from './App';

import LandingPage from '@pages/LandingPage/LandingPage';
import ErrorPage from '@pages/ErrorPage/ErrorPage';

import AutoMage from '@pages/content/AutoMage/AutoMage';


const routes = [
    {
        path: '/', element: <App />, errorElement: <ErrorPage />, children: [
            { index: true, element: <LandingPage /> },
            { path: 'auto', element: <AutoMage /> }
        ]
    },
];


export default routes;
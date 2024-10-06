import {createBrowserRouter } from 'react-router-dom'
import App from '../app/App'
interface Routes {
    path: string,
    element: React.ReactNode
}


export const router: Routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    }
])


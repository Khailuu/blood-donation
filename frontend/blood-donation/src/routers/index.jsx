import { useRoutes } from "react-router-dom"
import { MainLayout } from "../components/layouts/MainLayout"
import { HomePage } from "../pages/HomePage"

const router = [
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            }
        ]
    }
]
export const Router = () => useRoutes(router)
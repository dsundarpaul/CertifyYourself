import React, { Suspense } from "react";
import { Spin } from 'antd'
import {
    BrowserRouter,
    Routes as RouterRoutes,
    Route
} from 'react-router-dom'
import UserLayout from '../layouts/UserLayout/UserLayout'
import GuestLayout from "../layouts/GuestLayout/GuestLayout";
import UserHome from '../views/Home/UserHome'
import Login from '../views/auth/login/Login'

const Navigations = () => {

    return (
        <BrowserRouter>
            <Suspense fallback={<UserLayout><div className="text-center w-100 h-screen pt-40"><Spin /></div></UserLayout>}>
            
                <RouterRoutes>

                    <Route path="/login" element={
                        <GuestLayout>
                            <Login />
                        </GuestLayout>
                    } />

                    <Route path="/home" element={<UserLayout><UserHome /></UserLayout>} />


                </RouterRoutes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Navigations
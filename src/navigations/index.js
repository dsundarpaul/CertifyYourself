import React, { Suspense } from "react";
import { Spin } from 'antd'
import {
    BrowserRouter,
    Routes as RouterRoutes,
    Route
} from 'react-router-dom'
import UserLayout from '../layouts/UserLayout'

import userHome from '../views/Home/userHome'

const Navigations = () => {

    return (
        <BrowserRouter>
            <RouterRoutes>
                <Route path="/" element={
                    <UserLayout>
                        <userHome />
                    </UserLayout>
                } />
                
            </RouterRoutes>
            {/* <Suspense fallback={<UserLayout><div className="text-center w-100 h-screen pt-40"><Spin /></div></UserLayout>}> */}
            {/* <Suspense fallback={<UserLayout />}>
                <RouterRoutes> */}

                    {/* <Route path="/login" element={
                        <GuestLayout>
                            <Login />
                        </GuestLayout>
                    } /> */}
                    {/* <Route path="/home" element={
                        <UserLayout>
                            hi
                        </UserLayout>
                    } />


                </RouterRoutes>
            </Suspense> */}
        </BrowserRouter>
    )
}

export default Navigations
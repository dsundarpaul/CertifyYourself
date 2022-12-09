import React, { Suspense } from "react";
import { Spin } from 'antd'
import {
    BrowserRouter,
    Routes as RouterRoutes,
    Route
} from 'react-router-dom'
import UserLayout from '../layouts/UserLayout'

const Navigations = () => {

    return (
        <BrowserRouter basename={'/'}>
            <Suspense fallback={<UserLayout><div className="text-center w-100 h-screen pt-40"><Spin /></div>cl</UserLayout>}>
                <RouterRoutes>

                    {/* <Route path="/login" element={
                        <GuestLayout>
                            <Login />
                        </GuestLayout>
                    } /> */}


                </RouterRoutes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Navigations
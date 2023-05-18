import React, { Suspense } from "react";
import { Spin } from 'antd'
import {
    BrowserRouter,
    Routes as RouterRoutes,
    Route
} from 'react-router-dom'
import UserLayout from '../layouts/UserLayout/UserLayout'
import GuestLayout from "../layouts/GuestLayout/GuestLayout";
import UserHome from '../views/UserScreens/Home/UserHome'
import Login from '../views/auth/login/Login'
import SubjectSelection from "../views/UserScreens/SubjectSelection/SubjectSelection";
import Signup from "../views/auth/SignUp/Signup";
import CommunityFeed from "../views/UserScreens/CommunityFeed/CommunityFeed";
import NotFound from "../views/auth/NotFound/NotFound";
// import LandingLayout from "../layouts/LandingLayout/LandingLayout";

const Navigations = () => {

    return (
        <BrowserRouter basename={'/'}>
            <Suspense fallback={<UserLayout><div className="text-center w-100 h-screen pt-40"><Spin /></div></UserLayout>}>
                <RouterRoutes>

                    <Route path="/*" element={
                        <GuestLayout>
                            <NotFound />
                        </GuestLayout>
                    } />
                    <Route path="/login" element={
                        <GuestLayout>
                            <Login />
                        </GuestLayout>
                    } />
                    <Route path="/signup" element={
                        <GuestLayout>
                            <Signup />
                        </GuestLayout>
                    } />
                    {/* <Route path="/login" element={<GuestLayout><Login /></GuestLayout>} /> */}

                    <Route path="/home" element={<UserLayout><UserHome /></UserLayout>} />
                    <Route path="/subjects" element={<UserLayout><SubjectSelection /></UserLayout>} />
                    <Route path="/feed" element={<UserLayout><CommunityFeed /></UserLayout>} />

                </RouterRoutes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Navigations
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
import Community from "../views/UserScreens/Community/Community";
import NotFound from "../views/auth/NotFound/NotFound";
import Store from "../views/UserScreens/Store/Store";
import InGameLayout from "../layouts/InGameLayout";
import UserProfile from "../views/UserScreens/UserProfile";
// import LandingLayout from "../layouts/LandingLayout/LandingLayout";

const Navigations = () => {

    return (
        <BrowserRouter basename={'/'}>
            <Suspense fallback={<UserLayout><div className="text-center w-100 h-screen pt-40"><Spin /></div></UserLayout>}>
                <RouterRoutes>

                    {/* AUTH ROUTING */}
                    <Route path="/*" element={<GuestLayout><NotFound /></GuestLayout>} />
                    <Route path="/login" element={<GuestLayout><Login /></GuestLayout>} />
                    <Route path="/signup" element={<GuestLayout><Signup /></GuestLayout>} />

                    {/* USER LAYOUT */}
                    <Route path="/home" element={<UserLayout><UserHome /></UserLayout>} />
                    <Route path="/subjects" element={<UserLayout><SubjectSelection /></UserLayout>} />
                    <Route path="/feed" element={<UserLayout><Community /></UserLayout>} />
                    <Route path="/store" element={<UserLayout><Store /></UserLayout>} />
                    <Route path="/profile" element={<UserLayout><UserProfile /></UserLayout>} />

                    {/* IN GAME SCREENS */}
                    <Route path="/started" element={<InGameLayout><h1>hello, i m in game</h1></InGameLayout>} />
                    
                </RouterRoutes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Navigations
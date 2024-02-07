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
import InGame from '../views/UserScreens/InGame/InGame';
import UserProfile from "../views/UserScreens/UserProfile";
import CreateEditFeed from "../views/UserScreens/Community/CreateEditFeed/CreateEditFeed";
import ResultScreen from "../views/UserScreens/InGame/Result/Result";
import Events from "../views/UserScreens/Events/Events";
import Career from "../views/UserScreens/Career/Career";
import SignUpSteps from "../views/auth/SignUp/steps/SignUpSteps";
import UserProfileWidget from "../views/UserScreens/UserProfile/UserDetails";
import UserDetails from "../views/UserScreens/UserProfile/UserDetails/UserProfileMenus/UserDetails/UserDetails";
import SelectGameMode from "../views/UserScreens/GameViews/SelectGameMode/SelectGameMode";
// import LandingLayout from "../layouts/LandingLayout/LandingLayout";

const Navigations = () => {

    return (
        <BrowserRouter basename={'/'}>
            <Suspense fallback={<UserLayout><div className="text-center w-100 h-screen pt-40"><Spin /></div></UserLayout>}>
                <RouterRoutes>

                    {/* AUTH ROUTING */}
                    <Route path="/*" element={<GuestLayout><NotFound /></GuestLayout>} />
                    <Route path="/" element={<GuestLayout><Login /></GuestLayout>} />
                    <Route path="/login" element={<GuestLayout><Login /></GuestLayout>} />
                    <Route path="/signup" element={<GuestLayout><Signup /></GuestLayout>} />
                    <Route path="/steps" element={<GuestLayout><SignUpSteps /></GuestLayout>} />

                    {/* USER LAYOUT */}
                    <Route path="/home" element={<UserLayout><UserHome /></UserLayout>} />
                    <Route path="/subjects" element={<UserLayout><SubjectSelection /></UserLayout>} />

                    <Route path="/feed" element={<UserLayout><Community /></UserLayout>} />
                    <Route path="/feed-create" element={<UserLayout><CreateEditFeed isEditing={false} /></UserLayout>} />
                    <Route path="/feed-edit/:feedId" element={<UserLayout><CreateEditFeed isEditing={true} /></UserLayout>} />

                    <Route path="/store" element={<UserLayout><Store /></UserLayout>} />

                    {/* USER PROFILE */}
                    {/* <Route path="/profile" element={<UserLayout><UserProfile /></UserLayout>} /> */}
                    <Route path="/profile" element={<UserLayout><UserProfileWidget><UserDetails /></UserProfileWidget></UserLayout>} />

                    <Route path="/events" element={<UserLayout><Events /></UserLayout>} />

                    <Route path="/career" element={<UserLayout><Career /></UserLayout>} />

                    {/* IN GAME SCREENS */}
                    <Route path="/started" element={<InGameLayout><InGame /></InGameLayout>} />
                    <Route path="/result" element={<InGameLayout><ResultScreen /></InGameLayout>} />
                    <Route path='/select-gamemode' element={<UserLayout><SelectGameMode /></UserLayout>} />
                    
                    
                    <Route path='/lobby/:mode' element={<UserLayout><SelectGameMode /></UserLayout>} /> 
                    
                </RouterRoutes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Navigations
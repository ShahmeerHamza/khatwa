import BottomTabsNavigator from "../config/navigation/bottom";
import Login_User from "../screens/login";
import SignUp_User from "../screens/signUp";
import SignIn_User from "../screens/singin";

export const all_screens = [
    {
        name:'login',
        auth_required:false,
        Screen_Component:Login_User,
        header_shown:false
    },
    {
        name:'signin',
        auth_required:false,
        Screen_Component:SignIn_User,
        header_shown:false
    },
    {
        name:'signup',
        auth_required:false,
        Screen_Component:SignUp_User,
        header_shown:false
    },
    {
        name:'HomeScreen',
        auth_required:true,
        Screen_Component:BottomTabsNavigator,
        header_shown:false,
        admin:false
    },
] 

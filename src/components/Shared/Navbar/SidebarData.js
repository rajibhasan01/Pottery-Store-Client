import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
        cname: 'nav-text'

    },
    {
        title: 'Products',
        path: '/allproducts',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text',
        cname: 'nav-text'
    },
    {
        title: 'Register',
        path: '/register',
        icon: <SiIcons.SiGnuprivacyguard />,
        cName: 'nav-text',
        cname: 'nav-text'
    },
    {

        title: 'Login',
        path: '/login',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text',
        cname: 'nav-text'
    },

    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdIcons.MdDashboardCustomize />,
        cName: 'nav-text d-none',
        cname: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text',
        cname: 'nav-text'
    }

];
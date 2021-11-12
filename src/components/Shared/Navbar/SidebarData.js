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
        title: 'Packages',
        path: '/servicesprovider',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text',
        cname: 'nav-text'
    },
    {
        title: 'Our Guides',
        path: '/guides',
        icon: <IoIcons.IoIosPeople />,
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
        title: 'My Bookings',
        path: '/mybooking',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text d-none',
        cname: 'nav-text'
    },
    {
        title: 'Manage Users',
        path: '/manageusers',
        icon: <MdIcons.MdDashboardCustomize />,
        cName: 'nav-text d-none',
        cname: 'nav-text'
    },
    {
        title: 'Add Service',
        path: '/addservice',
        icon: <MdIcons.MdOutlinePostAdd />,
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
import Link from 'next/link';
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
import { ArticleIcon, HomeIcon } from '../Icons';
import styles from './navbar.module.css';

const menuItems = [
    { id: 1, label: 'Dashboard', icon: HomeIcon, link: '/dashboard'},
    { id: 2, label: 'Forms', icon: ArticleIcon, link: '/forms'}
];

const Navbar = () => {
    const [ checkActive, setCheckActive] = useState(false);
    const router = useRouter();

    const activeMenu = useMemo(() => menuItems.find(menu => menu.link === router.pathname),[router.pathname]);

    const handleClick = () => {
        setCheckActive(!checkActive);
    }

    return (
        <>
            <div className="flex bg-gray-800 p-1 px-4 relative items-center justify-between lg:bg-white lg:p-2 lg:justify-end border-b">
                <img
                src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                className="rounded-full h-9 w-9 border"
                alt="profileImage"
                loading="lazy"
                />
                <button 
                id="hamburger" 
                name="hamburger" 
                type="button" 
                className={`block toggle lg:hidden ${checkActive ? styles['hamburger-active'] : ''}`}
                onClick={handleClick}
                >
                    <span className="w-[30px] h-[2px] my-2 block bg-white origin-top-left transition duration-300 ease-in-out"></span>
                    <span className="w-[30px] h-[2px] my-2 block bg-white transition duration-300 ease-in-out"></span>
                    <span className="w-[30px] h-[2px] my-2 block bg-white origin-bottom-left transition duration-300 ease-in-out"></span>
                </button>
            </div>
            <div className={`flex bg-gray-500 mt-12 w-full text-sm absolute z-50 items-start justify-between lg:hidden ${checkActive ? styles['navbar-menu-active'] : styles['navbar-menu']}`}>
                <div className="flex flex-col items-start text-white w-full">
                    {menuItems.map(({ icon: Icon, ...menu }) => {
                        return (
                            <div key={menu.id} className="w-full">
                                <Link href={menu.link}>
                                    <a className="flex py-4 px-4 items-center">
                                        <div>
                                            <Icon />
                                        </div>
                                        <span className="px-4 text-white">{menu.label}</span>
                                    </a>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Navbar;
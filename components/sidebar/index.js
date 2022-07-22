import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { CollapsIcon, HomeIcon, ArticleIcon } from '../Icons';
import { FaChevronDown } from 'react-icons/fa';

const menuItems = [
    { id: 1, label: 'Dashboard', icon: HomeIcon, link: '/dashboard' },
    { 
        id: 2,
        label: 'Forms',
        icon: ArticleIcon,
        link: '/forms',
        subMenu: true,
        subMenuItems: [
            { label: 'Inputs', link: '/forms/inputs' },
            { label: 'Select', link: '/forms/select' }
        ]
    },
    { 
        id: 3,
        label: 'Table',
        icon: ArticleIcon,
        link: '/tables',
        subMenu: true,
        subMenuItems: [
            { label: 'Table A', link: '/tables' },
            { label: 'Table B', link: '/tables' }
        ]
    }
];

const Sidebar = () => {
    const [toggleCollapse, setToggleCollapse] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [parentActive, setParentActive] = useState('');
    const [pathActive, setPathActive] = useState('');
    const router = useRouter();
    
    const handleToggleMenu = () => {
        setToggleCollapse(!toggleCollapse);
    }

    const handleSubMenu = (menu) => {
        if(menu?.subMenu){
            setSubMenuOpen(!subMenuOpen);
            setParentActive(menu.label);
        }else{
            return;
        }
    }
    
    const activeMenu = useMemo(() => menuItems.find(menu => menu.link === router.pathname),[router.pathname]);

    const wrapperClasses = classNames(
        'hidden h-screen pt-4 pb-4 bg-white border-r-4 shadow-lg rounded-xl flex flex-col justify-between ease-in-out duration-300 lg:flex overflow-auto',
        {
            'w-72' : !toggleCollapse,
            'w-[4.5rem]' : toggleCollapse
        }
    );

    const collapseBrandClasses = classNames(
        'flex items-center pl-1 gap-4 text-black font-medium',
        {
            hidden: toggleCollapse
        }
    );

    const collapseMenuClasses = classNames(
        'p-2 right-0 border-2 rounded-lg',
        {
            'ml-1 rotate-180 left-0' : toggleCollapse
        }
    );

    const labelMenuClasses = (menu) => {
        return classNames('px-4 w-full',
        {
            'text-white font-semibold' : activeMenu?.id === menu.id || pathActive ===  menu.label.toLowerCase(),
            'text-gray-800 font-semibold' : activeMenu?.id !== menu.id && pathActive !==  menu.label.toLowerCase()
        });
    };

    const getNavItemClasses = (menu) => {
        return classNames('flex items-center cursor-pointer hover:bg-teal-100 p-1 rounded-lg',
        {
            'bg-theme hover:bg-theme' : activeMenu?.id === menu.id || pathActive ===  menu.label.toLowerCase()
        });
    }

    const getSubMenuClasses = (subMenu) => {
        return classNames('flex py-1 px-11 text-md text-black w-full hover:bg-teal-100 rounded-lg',
        {
            'bg-gray-300 hover:bg-gray-300' : router.pathname === subMenu.link,
        });
    }

    const iconSubmenuFill = (menu) => { 
        return (activeMenu?.id === menu.id || pathActive ===  menu.label.toLowerCase()) ? '#ffffff' : '#374151';
    }

    useEffect(() => {
        const path = router.pathname.split('/');
        setPathActive(path[1]);
    }, []);
    
    return (
        <div className={wrapperClasses}>
            <div className="flex flex-col">
              <div className="flex flex-row px-2 items-center justify-between relative">
                <div className={collapseBrandClasses}>
                    <Image src="/folker_logo.png" alt="Logo" width={35} height={30} />
                    <span className="text-sm lg:text-xl">FolkPlate</span>
                </div>
                <button className={collapseMenuClasses} onClick={handleToggleMenu}>
                    <CollapsIcon fill="#2dd4bf" />
                </button>
              </div>
              <div className=" mt-4 h-[2px] bg-theme"></div>
              <div className="flex flex-col items-start mt-4 p-2 text-white">
                {menuItems.map(({ icon: Icon, ...menu }) => {
                    const classes = getNavItemClasses(menu);
                    const labelClasses = labelMenuClasses(menu);
                    return (
                        <div key={menu.id} className="w-full">
                            <div className={classes} onClick={() => handleSubMenu(menu)}>
                                <Link href={!menu.subMenu ? menu.link : router.pathname}>
                                    <a className="flex py-2 px-2 items-center w-full">
                                        <div>
                                            <Icon fill={iconSubmenuFill(menu)}/>
                                        </div>
                                        {!toggleCollapse &&
                                            <>
                                                <span className={labelClasses}>{menu.label}</span>
                                                {menu.subMenu && 
                                                    <FaChevronDown
                                                        className={`${subMenuOpen && (menu.label === parentActive) && 'rotate-180'}`}
                                                        color={iconSubmenuFill(menu)}
                                                    />
                                                }
                                            </>
                                        }
                                    </a>
                                </Link>
                            </div>
                            {!toggleCollapse && menu.subMenu && subMenuOpen && (menu.label === parentActive) &&
                                <ul className="p-2" id={menu.id}>
                                    {menu.subMenuItems.map((subMenuItems, index) => {
                                        const subActive = getSubMenuClasses(subMenuItems);
                                        return (
                                            <Link href={subMenuItems.link} key={index}>
                                                <a className={subActive}>
                                                    <span>
                                                        {subMenuItems.label}
                                                    </span>
                                                </a>
                                            </Link>
                                        )
                                    })}
                                </ul>
                            }
                        </div>
                    )
                })}
              </div>
            </div>
        </div>
    )
}

export default Sidebar;
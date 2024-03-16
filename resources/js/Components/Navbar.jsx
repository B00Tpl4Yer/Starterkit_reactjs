import React from "react";
import { Link, usePage } from '@inertiajs/react';
import { DarkMode } from "/resources/js/Components/Darkmode.jsx";
import Dropdown from '@/Components/Dropdown';
import { IconHome,IconLayoutDashboard,IconUserCircle,IconLogout, } from '@tabler/icons-react';


export default function Navbar() {
    const { auth } = usePage().props;
    return (
        <nav className="bg-transparent backdrop-filter backdrop-blur-sm transition-all duration-300 fixed w-full z-20 top-0 left-0 border-b border-gray-300 dark:border-gray-900">
            <div className="max-w-screen-full flex flex-wrap items-center justify-between p-4">
                <div className="justify-start">
                    <DarkMode />
                </div>
                <div className="justify-end">
                    {auth.user ? (
                        <div className="flex items-center space-x-4">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            {auth.user.name}
                                            <svg
                                                className="ms-2 -me-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                <Dropdown.Link className="flex flex-row gap-1" href="/"><IconHome className="h-5 w-5"/>Home</Dropdown.Link>
                                <Dropdown.Link className="flex flex-row gap-1" href={route('dashboard')}><IconLayoutDashboard className="h-5 w-5"/>Dashboard</Dropdown.Link>
                                    <Dropdown.Link className="flex flex-row gap-1" href={route('profile.edit')}><IconUserCircle/>Profile</Dropdown.Link>
                                    <Dropdown.Link className="flex flex-row gap-1" href={route('logout')} method="post" as="button">
                                        <IconLogout className="h-5 w-5"/>
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>

                        </div>
                    ) : (
                        <div className="flex items-center space-x-4">
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route('register')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

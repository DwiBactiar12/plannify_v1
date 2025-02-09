import { Avatar, AvatarFallback } from '@/Components/ui/avatar';
import { Link } from '@inertiajs/react';
import { PiPlus } from 'react-icons/pi';

export default function Sidebar({ menus }) {
    return (
        <nav className="flex flex-col flex-1">
            <ul role="list" className="flex flex-col flex-1 gap-y-7">
                <li>
                    <ul role="list" className="-mx-2 space-y-2">
                        {/* menu */}

                        {menus.map((menu, index) => (
                            <li>
                                <Link
                                    key={index}
                                    href={menu.href}
                                    className="flex  p-3 text-sm font-semibold leading-relaxed tracking-tighter text-foreground hover:bg-gray-100 rounded-md group gap-x-3 "
                                >
                                    <menu.icon className="w-6 h-6 text-foreground shrink-0" />
                                    {menu.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
                <li>
                    {/* workspaces */}
                    <div className="flex justify-between items-center">
                        <div className="text-xs font-smeibold leading-relaxed uppercase text-foreground">
                            Workspaces
                        </div>

                        <Link>
                            <PiPlus className="w-4 h-4 text-foreground hover:text-red-500" />
                        </Link>
                    </div>
                    <ul role="list" className="mt-2 -mx-2 space-y-2">
                        <li>
                            <Link
                                href="#"
                                className="flex w-full p-3 text-sm font-semibold leading-relaxed rounded-md text-foreground hover:bg-gray-100 gap-x-3"
                            >
                                <span className="border-foreground text-foreground flex h-6 w-6  shrink-0 items-center justify-center rounded-lg  border bg-white text-[0.625rem] font-medium">
                                    B
                                </span>
                                <span className="truncate">Backed Developer</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="mt-auto -mx-6">
                    {/* profile */}
                    <Link
                        href="#"
                        className="flex items-center px-6 py-3 text-sm font-semibold leading-relaxed  text-foreground hover:bg-gray-100 gap-x-4"
                    >
                        <Avatar>
                            <AvatarFallback>X</AvatarFallback>
                        </Avatar>
                        <span> John Doe</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { PiPlus } from 'react-icons/pi';

export default function SidebarResponsive({ menus, auth, url }) {
    return (
        <div className="flex flex-col px-6 pb-2 overflow-y-auto bg-white dark:bg-gray-900 grow gap-y-5">
            <div className="flex h-16 shrink-0 items-center space-x-1.5">
                <Link href="/" className="-m-1.5 p-1.5 text-2xl font-black leading-relaxed tracking-tighter">
                    Plannify<span className="text-red-500">.</span>
                </Link>
            </div>
            <nav className="flex flex-col flex-1">
                <ul role="list" className="flex flex-col flex-1 gap-y-7">
                    <li>
                        <ul role="list" className="-mx-2 space-y-1">
                            {/* menu */}
                            {menus.map((menu, index) => (
                                <li>
                                    <Link
                                        key={menu.title}
                                        href={menu.href}
                                        method={menu?.method ? menu?.method : 'get'}
                                        as="button"
                                        className={cn(
                                            url.startsWith(menu.href)
                                                ? 'bg-red-500 text-white'
                                                : 'text-foreground hover:bg-gray-100',
                                            'flex w-full p-3 text-sm font-semibold leading-relaxed tracking-tighter  rounded-md group gap-x-3 ',
                                        )}
                                    >
                                        <menu.icon
                                            className={cn(
                                                url.startsWith(menu.href) ? ' text-white' : 'text-foreground ',
                                                'w-6 h-6  shrink-0',
                                            )}
                                        />
                                        {menu.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li>
                        {/* workspaces */}
                        <div className="flex items-center justify-between">
                            <div className="text-xs font-semibold leading-relaxed uppercase text-foreground">
                                Workspaces
                            </div>
                            <Link>
                                <PiPlus className="w-4 h-4 text-foreground hover:text-red-500" />
                            </Link>
                        </div>
                        <ul role="list" className="mt-2 -mx-2 space-y-1">
                            <li>
                                <Link
                                    href="#"
                                    className="flex w-full p-3 text-sm font-semibold leading-relaxed rounded-md text-foreground group hover:bg-gray-100 gap-x-3"
                                >
                                    <span className="border-foreground text-foreground flex h-6 w-6  shrink-0 items-center justify-center rounded-lg  border  text-[0.625rem] ">
                                        B
                                    </span>
                                    <span className="truncate">Backed Developer</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

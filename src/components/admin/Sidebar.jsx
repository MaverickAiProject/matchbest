import { Layers2, LayoutDashboard, LayoutList } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
// import AuthContextProvider from "@/lib/contexts/AuthContext";
// import LoginButton from "../Header/LoginButton";

function Sidebar() {
    const pathname = usePathname();
    const links = [
        {
            name: "Dashboard",
            link: "/",
            icon: <LayoutDashboard />,
        },
        {
            name: "Blogs",
            link: "/blogs",
            icon: <LayoutList />,
        },
        {
            name: "Categories",
            link: "/categories",
            icon: <Layers2 />,
        },
    ];

    return (
        <aside className="w-64 h-screen bg-white border-r border-gray-200 shadow-md flex flex-col p-6 justify-between">
            <div>
                <Link href="/">
                    <img src="/logo.png" alt="logo" className="h-16 mx-auto mb-6" />
                </Link>

                <nav className="flex flex-col gap-4 mt-10">
                    {links.map((item, index) => {
                        const isActive = item.link === "/"
                            ? pathname === "/"
                            : pathname.startsWith(item.link);

                        return (
                            <Link
                                key={index}
                                href={item.link}
                                className={`flex gap-3 items-center px-4 py-3 rounded-lg font-medium transition-all duration-200 ${isActive
                                    ? "bg-[#5f12c6] text-white"
                                    : "text-[#5f12c6] border border-[#5f12c6] hover:bg-[#5f12c6] hover:text-white"
                                    }`}
                            >
                                {item.icon}
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* <AuthContextProvider>
                <LoginButton />
            </AuthContextProvider> */}
        </aside>
    );
}

export default Sidebar;

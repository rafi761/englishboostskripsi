"use client"

import { adminLink } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function RightSidebar() {
    const pathname = usePathname()
    return (
        <section className="custom-scrollbar rightsidebar">
            <div className="flex w-[200px] flex-1 flex-col justify-center gap-6 px-6">
                {/* <h1 className="head-text text-center">Admin Panel</h1>
                {adminLink.map((link) => {
                    const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route

                    return(
                        <Link href={link.route} key={link.label} className={`leftsidebar_link ${isActive && "bg-primary-500"}`}>
                            <Image 
                                src={link.imgURL}
                                alt={link.label}
                                width={24}
                                height={24}
                            />
                            <p className="text-light-1">{link.label}</p>
                        </Link>
                    )
                })} */}
                <p className="text-white text-body-medium">"Never discourage anyone who continually makes progress, no matter how slow."</p>
            </div>
        </section>
    )
}
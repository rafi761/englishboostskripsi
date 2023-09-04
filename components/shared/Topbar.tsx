"use client"

import Link from "next/link"
import Image from "next/image"
import {SignedIn, SignOutButton} from "@clerk/nextjs"
import { useRouter } from "next/navigation"

export default function Topbar(){
    const router = useRouter()
    return(
        <nav className="topbar">
            <Link href="/" className="flex items-center gap-4">
                <Image 
                    src="/assets/logoenglish.png"
                    alt="Logo English Boost"
                    width={28}
                    height={28}
                />
                <p className="text-heading3-bold text-light-1">English Boost</p>    
            </Link>

            <div className="flex items-center gap-1">
                <div className="block md:hidden">
                    <SignedIn>
                        <SignOutButton signOutCallback={() => router.push("/sign-in")}>
                            <div className="flex cursor-pointer">
                                <Image
                                    src="/assets/logout.svg"
                                    alt="Logout button"
                                    width={24}
                                    height={24}
                                />
                            </div>
                        </SignOutButton>
                    </SignedIn>
                </div>
            </div>
        </nav>
    )
}
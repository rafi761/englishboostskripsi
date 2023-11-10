import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import "../globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "English Boost",
    description: "An application to learn english"
}

export const revalidate = 0

export default function RootLayout(
    { children
    }: {
        children: React.ReactNode
    }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-dark-1`}>
                    <div className="flex w-full min-h-screen justify-center items-center">
                        {children}
                    </div>
                </body>
            </html>
        </ClerkProvider>
    )
}


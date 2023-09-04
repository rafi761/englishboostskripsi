import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Page(){
    const user = await currentUser()
    if(!user) return null

    const userInfo = await fetchUser(user.id)
    if(!userInfo?.onboarded) redirect("/onboarding")
    return(
        <section className="flex flex-col gap-20 mt-16">
            <div className="flex max-lg:flex-col max-lg:items-center max-lg:gap-10 w-full">
                <div className="flex-1 flex flex-col gap-3">
                    <h1 className="text-heading1-bold from-indigo-700 via-indigo-400 to-indigo-200 bg-gradient-to-r bg-clip-text text-transparent uppercase">Reading is essensial for improving our English language skills.</h1>
                    <p className="text-light-1 text-small-regular"><span className="underline decoration-solid decoration-1 underline-offset-4 decoration-white">Not sure what to read next? </span>Explore our full list book now.</p>
                    <Button className="w-fit mt-3 flex gap-2 items-center">
                        Explore Now | <Image src="/assets/arrow.png" alt="Arrow" width={18} height={18} className="object-contain" />
                    </Button>
                </div>

                <div className="flex-1 flex gap-5 h-fit relative lg:ml-10">
                    <div className="lg:absolute flex flex-col items-center gap-3">
                        <Image 
                            src="/assets/nextjs.png"
                            alt="Next Js"
                            width={100}
                            height={100}
                            className=""
                        />
                        <Link href="/reading/next">
                            <Image 
                                src="/assets/playbutton.png"
                                alt="Play Button"
                                width={40}
                                height={40}
                                className="lg:hidden"
                            />
                        </Link>
                    </div>
                    <div className="lg:absolute top-16 left-32 flex flex-col items-center gap-3">
                        <Image 
                            src="/assets/flutter.png"
                            alt="Flutter"
                            width={100}
                            height={100}
                            className=""
                        />
                        <Link href="/reading/flutter">
                            <Image 
                                src="/assets/playbutton.png"
                                alt="Play Button"
                                width={40}
                                height={40}
                                className="lg:hidden"
                            />
                        </Link>
                    </div>
                    <div className="lg:absolute top-32 left-64 flex flex-col items-center gap-3">
                        <Image 
                            src="/assets/uiux.png"
                            alt="Ui icon"
                            width={100}
                            height={100}
                            className=""
                        />
                        <Link href="/reading/uiux">
                            <Image 
                                src="/assets/playbutton.png"
                                alt="Play Button"
                                width={40}
                                height={40}
                                className="lg:hidden"
                            />
                        </Link>
                    </div>
                </div>
            </div> 

            <div className="flex gap-4 max-lg:hidden">
                <div className="flex gap-2">
                    <div>
                        <Image 
                            src="/assets/nextjs.png"
                            alt="Next Js"
                            width={100}
                            height={100}
                            className=""
                        />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-heading3-semibold text-light-1">Evolution Next JS</h1>
                        <p className="text-base-regular text-gray-600">English Boost</p>
                        <Link href="/reading/next" className="mt-3">
                            <Image 
                                src="/assets/playbutton.png"
                                alt="Play Button"
                                width={40}
                                height={40}
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div>
                        <Image 
                            src="/assets/flutter.png"
                            alt="Flutter"
                            width={100}
                            height={100}
                            className=""
                        />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-heading3-semibold text-light-1">Flutter's Journey</h1>
                        <p className="text-base-regular text-gray-600">English Boost</p>
                        <Link href="/reading/flutter" className="mt-3">
                            <Image 
                                src="/assets/playbutton.png"
                                alt="Play Button"
                                width={40}
                                height={40}
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div>
                        <Image 
                            src="/assets/uiux.png"
                            alt="Uiux"
                            width={100}
                            height={100}
                            className=""
                        />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-heading3-semibold text-light-1">The Art of UI/UX</h1>
                        <p className="text-base-regular text-gray-600">English Boost</p>
                        <Link href="/reading/uiux" className="mt-3">
                            <Image 
                                src="/assets/playbutton.png"
                                alt="Play Button"
                                width={40}
                                height={40}
                            />
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    )
}
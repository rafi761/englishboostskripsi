import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Page(){
    const user = await currentUser()
    if(!user) return null

    const userInfo = await fetchUser(user.id)
    if(!userInfo?.onboarded) redirect("/onboarding")
    return(
        <section className="w-full p-10 flex flex-col gap-5">
            <h1 className="text-heading1-bold text-center from-indigo-700 via-indigo-400 to-indigo-200 bg-gradient-to-r bg-clip-text text-transparent">{`Let's improve your english skills by completing this quiz`}</h1>
            <div className="flex items-center gap-2">
                <Image 
                    src="/assets/question.png"
                    alt="Question mark"
                    width={24}
                    height={24}
                    className="object-cover"
                />
                <p className="text-small-regular text-light-1"><span className="text-small-medium">Tips:</span> Klik sesuai tingkat level quiz yang ingin anda kerjakan</p>
            </div>
            <div className="flex gap-3">
                <Link href="/quiz/beginner">
                    <Button>
                        Beginner
                    </Button>
                </Link>
                <Link href="/quiz/intermediate">
                    <Button>
                        Intermediate
                    </Button>
                </Link>
                <Link href="/quiz/advance">
                    <Button>
                        Advance
                    </Button>
                </Link>
            </div>
        </section>
    )
}
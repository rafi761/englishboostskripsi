import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import { fetchUser } from "@/lib/actions/user.actions"
import { fetchPosts } from "@/lib/actions/thread.actions"
import ThreadCard from "@/components/cards/ThreadCard"
import Pagination from "@/components/shared/Pagination"

export const revalidate = 0

export default async function Page({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
    const user = await currentUser()
    console.log(user)
    if (!user) return null

    const userInfo = await fetchUser(user.id)
    if (!userInfo?.onboarded) redirect("/onboarding")

    const result = await fetchPosts(searchParams.page ? +searchParams.page : 1, 10)

    return (
        <>
            <h1 className="head-text text-left">All Discussion</h1>

            <section className="mt-9 flex flex-col gap-10">
                {result.posts.length === 0 ? (
                    <p className="no-result">No discussion found</p>
                ) : (
                    <>
                        {result.posts.map((post) => (
                            <ThreadCard
                                key={post._id}
                                id={post._id}
                                currentUserId={user.id}
                                parentId={post.parentId}
                                content={post.text}
                                author={post.author}
                                createdAt={post.createdAt}
                                comments={post.children}
                            />
                        ))}
                    </>
                )}
            </section>

            <Pagination
                path='discussion'
                pageNumber={searchParams?.page ? +searchParams.page : 1}
                isNext={result.isNext}
            />
        </>
    )
}
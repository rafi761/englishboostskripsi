import Image from "next/image"
import { currentUser } from "@clerk/nextjs"
import { fetchUser } from "@/lib/actions/user.actions"
import { fetchVocabs } from "@/lib/actions/vocab.actions"
import { redirect } from "next/navigation"
import VocabCard from "@/components/cards/VocabCard"
import Pagination from "@/components/shared/Pagination"
import SearchbarVocab from "@/components/shared/SearchbarVocab"
import LevelLinkButton from "@/components/shared/LevelLinkButton"
import { levelLink } from "@/constants"

export default async function Page({ params, searchParams }: {
    params: { level: string }
    searchParams: { [key: string]: string | undefined }
}) {
    const user = await currentUser()
    if (!user) return null

    const userInfo = await fetchUser(user.id)
    if (!userInfo?.onboarded) redirect("/onboarding")

    const result = await fetchVocabs({
        level: params.level,
        searchString: searchParams.q,
        pageNumber: searchParams.page ? +searchParams.page : 1,
        pageSize: 9
    })
    return (
        <>
            <section className="flex flex-col gap-8">
                <h1 className="text-heading1-bold p-4 text-center from-indigo-700 via-indigo-400 to-indigo-200 bg-gradient-to-r bg-clip-text text-transparent">Vocabulary List</h1>

                <div className="flex gap-2">
                    {levelLink.map((level) => (
                        <LevelLinkButton key={level.label} label={level.label} route={level.route} />
                    ))}
                </div>

                <div className="flex flex-col gap-y-2">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/assets/question.png"
                            alt="Question mark"
                            width={24}
                            height={24}
                            className="object-cover"
                        />
                        <p className="text-small-regular text-light-1">Selamat datang di fitur Belajar Vocabulary! Fitur ini dirancang untuk membantu Anda meningkatkan kosakata bahasa Inggris Anda. Di bawah ini adalah panduan langkah demi langkah untuk memanfaatkan fitur ini:</p>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-base-regular text-light-1 font-semibold">Pemilihan Level</h2>
                        <p className="text-small-regular text-light-1">Pilih level yang sesuai dengan tingkat kemampuan Anda. Terdapat enam level yang berbeda, dari yang mudah hingga yang sulit.</p>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-base-regular text-light-1 font-semibold">Daftar Kosakata</h2>
                        <p className="text-small-regular text-light-1">Setiap level memiliki daftar kosakata yang berbeda. Temukan kata yang ingin Anda pelajari.</p>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-base-regular text-light-1 font-semibold">Klik pada Kosakata</h2>
                        <p className="text-small-regular text-light-1">Klik pada salah satu kosakata untuk mengetahui artinya. Tunggu sejenak, dan arti kata akan muncul di layar.</p>
                    </div>
                </div>

                <SearchbarVocab routeType="vocabulary" level={params.level} />

                <div className="flex flex-wrap justify-center gap-4">
                    {result.vocabs.length === 0 ? (
                        <p className="no-result">No vocab found</p>
                    ) : (
                        <>
                            {result.vocabs.map((post) => (
                                <VocabCard
                                    key={post._id}
                                    kata={post.kata}
                                    arti={post.arti}
                                    level={post.level}
                                />
                            ))}
                        </>
                    )}
                </div>
            </section>
            <Pagination
                path={`vocabulary/${params.level}`}
                pageNumber={searchParams?.page ? +searchParams.page : 1}
                isNext={result.isNext}
            />
        </>
    )
}
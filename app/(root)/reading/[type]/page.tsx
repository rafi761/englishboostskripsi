import Image from "next/image"
import { fetchReadContent } from "@/lib/actions/read.actions"

export default async function Page({params}: {params: {type: string}}){

    const result = await fetchReadContent(params.type)
    return (
        <section className="flex max-lg:flex-col w-full h-[36rem]">
            <div className="flex max-lg:flex-1 lg:w-72 justify-center items-center p-8">
                <Image 
                    src={`/${result.image}`}
                    alt={result.type}
                    width={200}
                    height={200}
                    className="object-contain"
                />
            </div>

            <div className="flex flex-col gap-2 flex-1 account-form_input rounded-lg p-6 custom-scrollbar overflow-auto">
                <h1 className="text-heading3-bold from-indigo-700 via-indigo-400 to-indigo-200 bg-gradient-to-r bg-clip-text text-transparent">Title: {result.title}</h1>
                <p className="text-base-regular">{result.introduction}</p>
                <p className="text-base-regular">{result.chapter1}</p>
                <p className="text-base-regular">{result.chapter2}</p>
                <p className="text-base-regular">{result.chapter3}</p>
                <p className="text-base-regular">{result.chapter4}</p>
                <p className="text-base-regular">{result.chapter5}</p>
                <p className="text-base-regular">{result.chapter6}</p>
                <p className="text-base-regular">{result.chapter7}</p>
                <p className="text-base-regular"><span className="text-heading3-bold">Conclusion:</span> {result.conclusion}</p>
            </div>
        </section>
    )
}
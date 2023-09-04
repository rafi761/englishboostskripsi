import AddRead from "@/components/forms/AddRead"

export default async function Page(){
    return(
        <section className="flex flex-col gap-10 items-center">
            <h1 className="text-heading1-bold p-4 text-center from-indigo-700 via-indigo-400 to-indigo-200 bg-gradient-to-r bg-clip-text text-transparent">Add new content</h1>
            <AddRead />
        </section>
    )
}
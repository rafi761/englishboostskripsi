"use client"

import { useState } from "react"

interface Props {
    kata: string,
    arti: string,
    level: string
}
export default function VocabCard({ kata, arti, level }: Props) {
    const [isClicked, setIsClicked] = useState(false)
    const handleClick = () => {
        setIsClicked(!isClicked)
    }
    return (
        <article onClick={handleClick} className={`flex flex-col ${!isClicked && "justify-center"} gap-2 bg-dark-3 w-60 h-24 rounded-xl custom-scrollbar overflow-auto p-3 cursor-pointer`}>
            <h1 className={`text-heading3-bold text-center ${isClicked ? "text-indigo-700" : "text-light-1"}`}>{kata}</h1>
            {isClicked && <p className="text-base-medium text-indigo-700 text-center">{arti}</p>}
        </article>
    )
}
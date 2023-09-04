import Link from "next/link"
import { Button } from "../ui/button"

interface Props {
    label: string,
    route: string
}
export default function LevelLinkButton({label, route}: Props){
    return (
        <Link href={route}>
            <Button className="bg-indigo-500 hover:bg-indigo-400">
                {label}
            </Button>
        </Link>
    )
}
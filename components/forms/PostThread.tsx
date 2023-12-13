"use client"

import { useState } from "react"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from "../ui/textarea"
import { threadValidation } from "@/lib/validations/thread"
import { createThread } from "@/lib/actions/thread.actions"
import ClipLoader from "react-spinners/ClipLoader";

interface Props {
    userId: string
}

export default function PostThread({ userId }: Props) {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const pathname = usePathname()

    const form = useForm<z.infer<typeof threadValidation>>({
        resolver: zodResolver(threadValidation),
        defaultValues: {
            thread: "",
            accountId: userId,
        },
    })

    const onSubmit = async (values: z.infer<typeof threadValidation>) => {
        try {
            setIsLoading(true)
            await createThread({
                text: values.thread,
                author: userId,
                path: pathname
            })

            router.push("/discussion")
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <Form {...form}>
            <form
                className='mt-10 flex flex-col justify-start gap-10'
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <FormField
                    control={form.control}
                    name='thread'
                    render={({ field }) => (
                        <FormItem className='flex w-full flex-col gap-3'>
                            <FormLabel className='text-base-semibold text-light-2'>
                                Content
                            </FormLabel>
                            <FormControl className='no-focus border border-dark-4 bg-dark-3 text-light-1'>
                                <Textarea rows={15} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type='submit' className={`bg-primary-500 ${isLoading && `bg-gray-600`}`} disabled={isLoading}>
                    {isLoading ? (
                        <ClipLoader
                            color="#fff"
                            loading={isLoading}
                            size={30}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    ) : (
                        `${isLoading ? "Loading..." : "Post Discussion"}`
                    )}
                </Button>
            </form>
        </Form>
    )
}
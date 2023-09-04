"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { readValidation } from "@/lib/validations/read"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { usePathname, useRouter } from "next/navigation"
import { createRead } from "@/lib/actions/read.actions"

export default function AddRead(){
    const router = useRouter()
    const pathname = usePathname()
    const form = useForm<z.infer<typeof readValidation>>({
        resolver: zodResolver(readValidation),
        defaultValues: {
            type: "",
            title: "",
            introduction: "",
            image: "",
            chapter1: "",
            chapter2: "",
            chapter3: "",
            chapter4: "",
            chapter5: "",
            chapter6: "",
            chapter7: "",
            conclusion: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof readValidation>) => {
        await createRead({
            type: values.type,
            title: values.title,
            introduction: values.introduction,
            image: values.image,
            chapter1: values.chapter1,
            chapter2: values.chapter2,
            chapter3: values.chapter3,
            chapter4: values.chapter4,
            chapter5: values.chapter5,
            chapter6: values.chapter6,
            chapter7: values.chapter7,
            conclusion: values.conclusion,
            path: pathname
        })
        router.push(`/reading`)
    }
    return(
        <section className="flex flex-col account-form_input p-10 rounded-lg">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start gap-6">
                    <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                            <FormItem className="flex w-full flex-col gap-3">
                                <FormLabel className="text-base-semibold text-light-2">Type</FormLabel>
                                <FormControl>
                                    <Input 
                                        type="text"
                                        className="account-form_input no-focus" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem className="flex w-full flex-col gap-3">
                                <FormLabel className="text-base-semibold text-light-2">Title</FormLabel>
                                <FormControl>
                                    <Input 
                                        type="text"
                                        className="account-form_input no-focus" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="introduction"
                        render={({ field }) => (
                            <FormItem className="flex w-full flex-col gap-3">
                                <FormLabel className="text-base-semibold text-light-2">Introduction</FormLabel>
                                <FormControl>
                                    <Input 
                                        type="text"
                                        className="account-form_input no-focus" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <FormItem className="flex w-full flex-col gap-3">
                                <FormLabel className="text-base-semibold text-light-2">Image</FormLabel>
                                <FormControl>
                                    <Input 
                                        type="text"
                                        className="account-form_input no-focus" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="chapter1"
                        render={({ field }) => (
                            <FormItem className="flex w-full flex-col gap-3">
                                <FormLabel className="text-base-semibold text-light-2">Chapter 1</FormLabel>
                                <FormControl>
                                    <Input 
                                        type="text"
                                        className="account-form_input no-focus" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="chapter2"
                        render={({ field }) => (
                            <FormItem className="flex w-full flex-col gap-3">
                                <FormLabel className="text-base-semibold text-light-2">Chapter 2</FormLabel>
                                <FormControl>
                                    <Input 
                                        type="text"
                                        className="account-form_input no-focus" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="chapter3"
                        render={({ field }) => (
                            <FormItem className="flex w-full flex-col gap-3">
                                <FormLabel className="text-base-semibold text-light-2">Chapter 3</FormLabel>
                                <FormControl>
                                    <Input 
                                        type="text"
                                        className="account-form_input no-focus" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="chapter4"
                        render={({ field }) => (
                            <FormItem className="flex w-full flex-col gap-3">
                                <FormLabel className="text-base-semibold text-light-2">Chapter 4</FormLabel>
                                <FormControl>
                                    <Input 
                                        type="text"
                                        className="account-form_input no-focus" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="chapter5"
                        render={({ field }) => (
                            <FormItem className="flex w-full flex-col gap-3">
                                <FormLabel className="text-base-semibold text-light-2">Chapter 5</FormLabel>
                                <FormControl>
                                    <Input 
                                        type="text"
                                        className="account-form_input no-focus" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="chapter6"
                        render={({ field }) => (
                            <FormItem className="flex w-full flex-col gap-3">
                                <FormLabel className="text-base-semibold text-light-2">Chapter 6</FormLabel>
                                <FormControl>
                                    <Input 
                                        type="text"
                                        className="account-form_input no-focus" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="chapter7"
                        render={({ field }) => (
                            <FormItem className="flex w-full flex-col gap-3">
                                <FormLabel className="text-base-semibold text-light-2">Chapter 7</FormLabel>
                                <FormControl>
                                    <Input 
                                        type="text"
                                        className="account-form_input no-focus" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="conclusion"
                        render={({ field }) => (
                            <FormItem className="flex w-full flex-col gap-3">
                                <FormLabel className="text-base-semibold text-light-2">Conclusion</FormLabel>
                                <FormControl>
                                    <Input 
                                        type="text"
                                        className="account-form_input no-focus" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="bg-primary-500">Add read</Button>
                </form>
            </Form>
        </section>
    )
}
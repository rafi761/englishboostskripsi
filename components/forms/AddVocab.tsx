"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { vocabValidation } from "@/lib/validations/vocab"
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
import { createVocab } from "@/lib/actions/vocab.actions"

export default function AddVocab(){
    const router = useRouter()
    const pathname = usePathname()
    const form = useForm<z.infer<typeof vocabValidation>>({
        resolver: zodResolver(vocabValidation),
        defaultValues: {
            kata: "",
            arti: "",
            level: ""
        },
    })

    const onSubmit = async (values: z.infer<typeof vocabValidation>) => {
        await createVocab({
            kata: values.kata,
            arti: values.arti,
            level: values.level,
            path: pathname
        })
        router.push(`/vocabulary/${values.level}`)
    }
    return(
        <section className="flex flex-col account-form_input p-10 rounded-lg">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start gap-6">
                    <FormField
                        control={form.control}
                        name="kata"
                        render={({ field }) => (
                            <FormItem className="flex w-full flex-col gap-3">
                                <FormLabel className="text-base-semibold text-light-2">Kata</FormLabel>
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
                        name="arti"
                        render={({ field }) => (
                            <FormItem className="flex w-full flex-col gap-3">
                                <FormLabel className="text-base-semibold text-light-2">Arti</FormLabel>
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
                        name="level"
                        render={({ field }) => (
                            <FormItem className="flex w-full flex-col gap-3">
                                <FormLabel className="text-base-semibold text-light-2">Level</FormLabel>
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
                    <Button type="submit" className="bg-primary-500">Add vocab</Button>
                </form>
            </Form>
        </section>
    )
}
"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { choiceValidation } from "@/lib/validations/choice"
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
import { createChoiceQuestion } from "@/lib/actions/question.actions"

export default function AddChoice(){
    const router = useRouter()
    const pathname = usePathname()
    const form = useForm<z.infer<typeof choiceValidation>>({
        resolver: zodResolver(choiceValidation),
        defaultValues: {
            type: "",
            totalQuestions: "",
            question: "",
            answer: "",
            correctAnswer: ""
        },
    })

    const onSubmit = async (values: z.infer<typeof choiceValidation>) => {
        await createChoiceQuestion({
            type: values.type,
            totalQuestions: values.totalQuestions,
            question: values.question,
            answer: values.answer,
            correctAnswer: values.correctAnswer,
            path: pathname
        })
        router.push(`/quiz/beginner`)
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
                        name="totalQuestions"
                        render={({ field }) => (
                            <FormItem className="flex w-full flex-col gap-3">
                                <FormLabel className="text-base-semibold text-light-2">Total Questions</FormLabel>
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
                        name="question"
                        render={({ field }) => (
                            <FormItem className="flex w-full flex-col gap-3">
                                <FormLabel className="text-base-semibold text-light-2">Question</FormLabel>
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
                        name="answer"
                        render={({ field }) => (
                            <FormItem className="flex w-full flex-col gap-3">
                                <FormLabel className="text-base-semibold text-light-2">Answer</FormLabel>
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
                        name="correctAnswer"
                        render={({ field }) => (
                            <FormItem className="flex w-full flex-col gap-3">
                                <FormLabel className="text-base-semibold text-light-2">Correct Answer</FormLabel>
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
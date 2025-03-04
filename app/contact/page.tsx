"use client"

import { useForm } from "react-hook-form"
import type { FieldValues } from "react-hook-form"

export default function Contact() {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        getValues
    } = useForm()


    const onSubmit = async (data: FieldValues) => {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(data)
            }, 4500)
        })

        reset()
    }


    return (
        <div className="flex flex-col items-center justify-center">
            <h1>Form with React Form Hook / no Zod</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input type="text" {...register('name', {
                    required: "Name is required",
                })} name="name" id="name" className="text-black" />
                {errors.name && (
                    <span>{`${errors.name?.message}`}</span>
                )}

                <label htmlFor="email">Email</label>
                <input type="email" {...register('email', {
                    required: "Email is required"
                })} name="email" id="email" className="text-black" />

                {errors.email && (
                    <span>{`${errors.email?.message}`}</span>
                )}


                <label htmlFor="inquiry">Inquiry</label>
                <textarea {...register('inquiry', {
                    required: "Inquiry is required"
                })} id="inquiry" className="text-black" ></textarea>

                {errors.inquiry && (
                    <span>{`${errors.inquiry?.message}`}</span>
                )}

                <button type="submit" className="bg-blue-500 rounded-lg p-2"  disabled={isSubmitting}>{isSubmitting ? 'Loading...' :'Submit'}</button>
            </form>
        </div>
    )
}
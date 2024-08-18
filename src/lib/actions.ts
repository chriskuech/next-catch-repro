"use server"

import { cookies } from "next/headers"

export const triggerRepro = async () => {
    cookies().get("foo")

    throw new Error("This is an error")
}
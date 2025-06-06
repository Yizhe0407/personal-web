import React from 'react'
import Stack from "@/components/Stack";

export default function page() {
    return (
        <div className="flex flex-col gap-6 w-full h-full pt-32 pb-4 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Stack</h2>
            <Stack isStack={true} />
        </div>
    )
}

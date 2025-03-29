import React from 'react'
import Stack from "@/components/Stack";

export default function page() {
    return (
        <div className="sm:z-5 flex flex-col gap-6 w-full rounded-2xl max-w-[1400px] min-h-[1000px] pt-4 mt-28 sm:mt-0 sm:ml-[120px] lg:ml-[300px]">
            <h2 className="text-2xl sm:text-3xl font-bold">Stack</h2>
            <Stack isStack={true} />
        </div>
    )
}

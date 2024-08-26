"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { getLunarMonthAndDay } from "@/utils/date/convertToLunarDate";
import { NameMeaning } from "@/app/types/name.interface";
import { generateNameWithMeaning } from "@/utils/name/generateName";
import Image from "next/image";
import bgResult from "@/assets/bg_result.jpg";

function ResultContent() {
    const searchParams = useSearchParams();
    const bday = searchParams.get('bday') || '';

    const [result, setResult] = useState<NameMeaning>();

    useEffect(() => {
        const { month, day } = getLunarMonthAndDay(bday);
        const generatedName = generateNameWithMeaning(month, day);
        setResult(generatedName);
    }, [bday]);

    if (!result) return (<p>loading...</p>);

    return (
        <div className="relative w-full h-full max-w-screen-sm bg-white shadow-lg rounded-lg">
            <Image src={bgResult} alt="result" layout="responsive" className="w-full h-auto"/>
            <div className="absolute left-[50%] top-[56%] transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col justify-center items-center">
                <p className="text-[5vw] sm:text-[5vw] md:text-[5vw] lg:text-[3vw] mb-5">{result.name}</p>
                <p className="w-[50%] text-center text-[2vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1.25vw] xl:text-[1vw] 2xl:text-[0.75vw]  mb-5">{result.monthMeaning}</p>
                <p className="w-[50%] text-center text-[2vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1.25vw] xl:text-[1vw] 2xl:text-[0.75vw] mb-5">{result.dayMeaning}</p>
            </div>
            <div className="bg-[#F1E5C8] p-5 w-full">
            </div>
        </div>
    );
}

export default function ResultPage() {
    return (
        <Suspense fallback={<p>로딩 중...</p>}>
            <ResultContent/>
        </Suspense>
    );
}


"use client"

import {useSearchParams} from 'next/navigation';
import {useEffect, useState} from "react";
import {getLunarMonthAndDay} from "@/utils/date/convertToLunarDate";
import {NameMeaning} from "@/app/types/name.interface";
import {generateNameWithMeaning} from "@/utils/name/generateName";
import Image from "next/image";
import bgResult from "@/assets/bg_result.jpg";

export default function ResultPage() {
    const searchParams = useSearchParams();
    const bday = searchParams.get('bday') || '';

    const [result, setResult] = useState<NameMeaning>();

    useEffect(() => {
        const {month, day} = getLunarMonthAndDay(bday);

        const generatedName = generateNameWithMeaning(month, day);

        setResult(generatedName);
    }, [bday]);

    if (!result) return (<p>loading...</p>)

    return (
        <div className="w-full h-full max-w-screen-sm bg-white shadow-lg rounded-lg">
            <Image src={bgResult} alt="result" className="w-full h-auto"/>
            <div className="absolute left-1/2 top-2/3 transform -translate-x-1/2 -translate-y-1/2">
                <p className="text-center text-5xl mb-5">{result.name}</p>
                <p className="w-48 text-center mb-5">{result.monthMeaning}</p>
                <p className="w-48 text-center mb-5">{result.dayMeaning}</p>
            </div>
        </div>
    );
}

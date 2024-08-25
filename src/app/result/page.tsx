"use client"

import {useSearchParams} from 'next/navigation';
import {useEffect, useState} from "react";
import {getLunarMonthAndDay} from "@/utils/date/convertToLunarDate";
import {NameMeaning} from "@/app/types/name.interface";
import {generateNameWithMeaning} from "@/utils/name/generateName";

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
        <div>
            <p>{result.name}</p>
            <p>{result.monthMeaning}</p>
            <p>{result.dayMeaning}</p>
        </div>
    );
}

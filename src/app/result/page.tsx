"use client";

import {useSearchParams} from "next/navigation";
import {useEffect, useState, Suspense} from "react";
import {getLunarMonthAndDay} from "@/utils/date/convertToLunarDate";
import {NameMeaning} from "@/app/types/name.interface";
import {generateNameWithMeaning} from "@/utils/name/generateName";
import Image from "next/image";
import bgResult from "@/assets/bg_result.jpg";

function ResultContent() {
    const searchParams = useSearchParams();
    const bday = searchParams.get('bday') || '';

    const [result, setResult] = useState<NameMeaning>();

    useEffect(() => {
        const {month, day} = getLunarMonthAndDay(bday);
        const generatedName = generateNameWithMeaning(month, day);
        setResult(generatedName);
    }, [bday]);

    const handleShare = async () => {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_KEY_JS);

        const { Kakao, location } = window;

        Kakao.Share.createCustomButton({
            container: '#kakao-link-btn',
            templateId: 111532,
        });
    };

    if (!result) return (<p>loading...</p>);

    return (
        <div className="relative w-full h-full max-w-screen-sm bg-white shadow-lg rounded-lg">
            <Image src={bgResult} alt="result" layout="responsive" className="w-full h-auto"/>
            <div
                className="
                    absolute
                    left-1/2
                    transform
                    -translate-x-1/2
                    text-center
                    flex
                    flex-col
                    justify-center
                    items-center
                    top-[80vw]        /* 기본 top 값 */
                    sm:top-[36%]     /* 작은 화면일 때 top 값 */
                    md:top-[36%]     /* 중간 화면일 때 top 값 */
                    lg:top-[36%]     /* 큰 화면일 때 top 값 */
                    xl:top-[36%]      /* 더 큰 화면일 때 top 값 */
                "
            >
                <p className="text-[5vw] sm:text-[5vw] md:text-[5vw] lg:text-[3vw]">{result.name}</p>
                <br/>
                <p className="w-[50%] text-center text-[2vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1.25vw] xl:text-[1vw] 2xl:text-[0.75vw]">{result.monthMeaning}</p>
                <p className="w-[50%] text-center text-[2vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1.25vw] xl:text-[1vw] 2xl:text-[0.75vw]">{result.dayMeaning}</p>
            </div>
            <div className="bg-[#F1E5C8] p-5 w-full">
                <button
                    className="block w-full h-12 bg-[#3b3b6d] text-[#fdf4e3] font-semibold rounded-full shadow-md"
                    onClick={() => {
                        window.location.href = 'https://github.com/sponsors/ChoSeyoung'
                    }}
                >
                    개발자 후원하기
                </button>

                <br/>
                <button
                    id="kakao-link-btn"
                    className="block w-full h-12 bg-[#FEE500] text-[#191919] font-semibold rounded-full shadow-md"
                    onClick={handleShare}
                >카카오톡 공유하기
                </button>
                <br/>
                <button
                    className="block w-full h-12 bg-[#df605e] text-[#fdf4e3] font-semibold rounded-full shadow-md"
                    onClick={() => {
                        window.history.back()
                    }}
                >
                    다시하기
                </button>
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


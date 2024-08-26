"use client";  // 이 지시문을 추가하여 클라이언트 컴포넌트로 지정

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";  // useRouter 대신 useRouter를 사용해야 함
import intro from '@/assets/intro.jpg';

export default function Home() {
    const [bday, setBday] = useState<string>(""); // 생년월일 상태 관리
    const router = useRouter(); // 라우터 사용

    const handleSubmit = () => {
        console.log('handleSubmit');
        // 생년월일이 8글자인지 확인 및 숫자인지 확인
        if (bday.length !== 8 || isNaN(Number(bday))) {
            alert("생년월일은 8자리 숫자로 입력해 주세요."); // 유효하지 않은 경우 경고
            return;
        }

        // 유효한 경우 /result 페이지로 이동
        router.push(`/result?bday=${encodeURIComponent(bday)}`);
    };

    return (
        <div className="w-full h-full max-w-screen-sm bg-white shadow-lg rounded-lg">
            <Image src={intro} alt="intro" className="w-full h-auto"/>

            <div className="bg-[#F1E5C8] p-5 w-full">
                <p className="text-center">시대적 배경을 고려하여</p>
                <p className="text-center">양력 생년월일을 입력하면 음력 생년월일로 변환되어 이름이 생성됩니다.</p>

                <br/>

                <div className="flex items-center justify-center space-x-4">
                    <label className="text-[#3b3b6d] font-semibold mr-2">생년월일</label>
                    <input
                        className="w-1/2 h-10 border-2 border-[#3b3b6d] rounded-md bg-[#fdf4e3] text-[#3b3b6d] font-semibold mr-2 text-center"
                        placeholder="예: 19970606"
                        value={bday} // input 값을 상태로 관리
                        onChange={(e) => setBday(e.target.value)} // 입력 변화 감지
                    />
                </div>

                <br/>
                <button
                    className="w-full h-12 bg-[#3b3b6d] text-[#fdf4e3] font-semibold rounded-full shadow-md hover:bg-[#4a4a85] transition duration-300"
                    onClick={handleSubmit} // 버튼 클릭 시 handleSubmit 함수 실행
                >
                    지금 바로 확인
                </button>
            </div>
        </div>
    );
}

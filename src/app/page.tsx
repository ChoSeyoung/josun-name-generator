import Image from "next/image";
import intro from '@/assets/intro.jpg';

export default function Home() {
    return (
        <div className="w-full h-full max-w-screen-sm bg-white shadow-lg rounded-lg">
            <Image src={intro} alt="intro" className="w-full h-auto"/>

            <div className="bg-[#F1E5C8] p-5 w-full">
                <p className="text-center">시대적 배경을 고려하여</p>
                <p className="text-center">양력 생년월일을 입력하면 음력 생년월일로 변환되어 이름이 생성됩니다.</p>

                <br/>

                <div className="flex items-center justify-center space-x-4">
                    <label className="text-[#3b3b6d] font-semibold mr-2">생년월일</label>
                    <input className="w-1/2 h-10 border-2 border-[#3b3b6d] rounded-md bg-[#fdf4e3] text-[#3b3b6d] font-semibold mr-2 text-center" placeholder="예: 19970606"/>
                </div>

                <br/>
                <button
                    className="w-full h-12 bg-[#3b3b6d] text-[#fdf4e3] font-semibold rounded-full shadow-md hover:bg-[#4a4a85] transition duration-300">
                    지금 바로 확인
                </button>
            </div>
        </div>
    );
}

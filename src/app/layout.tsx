import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {SpeedInsights} from "@vercel/speed-insights/next"
import React from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "나의 조선시대 이름은?",
    description: "조선 이름 유횽 테스트",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <head>
            <title></title>
            <script defer src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
        </head>
        <body className={`${inter.className} w-screen h-max bg-[#F1E5C8] flex justify-center `}>
        {children}
        <SpeedInsights/>
        </body>
        </html>
    );
}

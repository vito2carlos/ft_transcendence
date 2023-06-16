"use client";
import React, { use, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";

export default function Maps(){
	const router = useRouter();
	return (
		<div className="h-screen w-full bg-dark-gray mt-[56px] py-4 pt-[200px]">
			<div className="w-full px-2">
				<div 
					className="bg-[#4B5468] m-auto w-[200px] my-4 py-4 rounded-[10px] text-[#B5B3BD] text-center"
				>
					selet the map
				</div>
				
				<div className="flex justify-center gap-8 items-center flex-col sm:flex-row w-full">

					<div className="w-full max-w-[320px]">
						<Image width={100} height={100} alt="#" src="/game/m3a-m3a.svg" className="h-full w-full"/>
					</div>
					<div className="w-full max-w-[320px] ">
						<Image width={100} height={100} alt="#" src="/game/ched-ched.svg" className="h-full w-full"/>
					</div>
					<div className="w-full max-w-[320px] ">
						<Image width={100} height={100} alt="#" src="/game/default-map.svg" className="h-full w-full"/>
					</div>

				</div>

			</div>
				<button
					className=" mt-6 w-full max-w-[320px] sm:max-w-auto sm:fixed bottom-[40px] right-[40px] text-white text-[20px] bg-red w-[150px] py-2 rounded-[10px] hover:bg-[#FBACB3]" onClick={() => {router.push('http://localhost:3000/game/table')}}
				>
					play
				</button>

		</div>
	)
}
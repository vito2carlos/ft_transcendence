import React from 'react'
import { redirect } from 'next/navigation';
import getData from  "@/apis/getInServer";
import userDto from "@/dto/userDto";
import SingInForm from '@/components/singIn/SingInForm';


const singIn = async() => {

  const data: userDto | null = await getData('/users/me');
  if (!data)
    redirect('/');

  return (
    <main className="grid place-content-center h-screen w-h-screen bg-ping-pong bg-cover text-base">
        <section className="flex flex-col items-center bg-light-gray/60 rounded-[50px] py-[5.5rem] px-[2.25rem]
                    md:py-[5rem] md:px-[5.25rem] lg:px-[9rem] lg:py-[7.25rem] ">
            <SingInForm user={data}/>
        </section>
    </main>
  )
}

export default singIn;
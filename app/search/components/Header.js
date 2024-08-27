"use client"
import React, { useState } from 'react'
import qs from "query-string";
import { useRouter, useSearchParams } from 'next/navigation';
import AvatarUser from '../../components/AvatarUser';
import ToolsHeaders from './ToolsHeaders';
import Link from 'next/link';
const Header = () => { 
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  console.log('Header',searchTerm)

  const [value, setValue] = useState( ""); 
  const webSearch = (e) => {
    e.preventDefault();
    // @ts-ignore

    // Encode the term to handle special characters
    //  const encodedTerm = encodeURIComponent(term);
    router.push(`/search/web?searchTerm=${value}`);
  };

    // console.log('header',searchParams)

 
 

  return (
              <>
    <div className='flex flex-1 justify-between fixed w-full bg-white top-0 '>
<div>

          <Link href={'/'}>
        <img src={"/images/googlenew.png"} alt="google" className=" w-24  h-8   mx-4    "  />
        </Link>
</div>
        <form  onSubmit={webSearch }className='flex mx-4 w-full my-6 items-center'>
        <div className="  w-3/5   bg-white flex relative  border-t border-gray-100   items-center mx-4 shadow-md   rounded-full h-12   ">
          <div className="ml-4 text-gray-400 ">
       
          </div>

          <div className="relative flex flex-1 h-full items-center">
            <input
              onChange={(e)=>setValue(e.target.value)}
              value={value}
              type="text"
              name="q"
              placeholder="Search"
              className="flex-1 w-full h-full outline-none mx-4  bg-white  "
            />
            {value && (
              <div
                className=" cursor-pointer px-4 transition-all     "
                // onClick={onClear}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
            )}
          </div>
          <div className="flex gap-x-3 mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" h-5 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" h-5  text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>

          {/* show items suggetion */}
        </div>
      

        </form>
        <div className="flex items-center  mx-4  gap-x-8 ">
     
     <div className="rounded-full p-2  hover:bg-gray-200 cursor-pointer  trtansition ">

     <svg className="gb_g" focusable="false" height="24px" viewBox="0 -960 960 960" width="24px"> <path d="M209-120q-42 0-70.5-28.5T110-217q0-14 3-25.5t9-21.5l228-341q10-14 15-31t5-34v-110h-20q-13 0-21.5-8.5T320-810q0-13 8.5-21.5T350-840h260q13 0 21.5 8.5T640-810q0 13-8.5 21.5T610-780h-20v110q0 17 5 34t15 31l227 341q6 9 9.5 20.5T850-217q0 41-28 69t-69 28H209Zm221-660v110q0 26-7.5 50.5T401-573L276-385q-6 8-8.5 16t-2.5 16q0 23 17 39.5t42 16.5q28 0 56-12t80-47q69-45 103.5-62.5T633-443q4-1 5.5-4.5t-.5-7.5l-78-117q-15-21-22.5-46t-7.5-52v-110H430Z"></path> </svg>
     </div>
     {/* <Image src="/images/lab.png" alt="lab"  width={42} height={42} className="py-1 px-1 rounded-full hover:bg-gray-400 cursor-pointer" /> */}
   <AvatarUser />
   </div>

    </div>
    <ToolsHeaders/>
    </>
  )
}

export default Header
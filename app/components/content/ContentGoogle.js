"use client"
import { Button } from "../../../components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import React, {  useState } from "react";
import '../../globals.css';
const ContentGoogle = () => {
  const SearchParams = useSearchParams();

  const searchTerm = SearchParams.get('searchTerm')
  const [term,setTerm] = useState(searchTerm || '');
  const router = useRouter()
  // ...
 
  const SearchData = (e) => {

      e.preventDefault();
      // @ts-ignore

      if (!term.trim()) return;
   // Encode the term to handle special characters
   const encodedTerm = encodeURIComponent(term);
   router.push(`/search/web?searchTerm=${encodedTerm}`);
  
  };
  const onClear = () =>{
    setTerm('')
  }
  return (
    <div className="w-full main-google flex-col items-center flex justify-center">
      <img src={"/images/googlenew.png"} alt="google" className=" " />
      <form className="items-center flex-col flex my-10 relative">
        <div className="google flex relative border items-center mx-4 hover:shadow-md  border-gray-300 rounded-full h-56 ">
          <div className="ml-4 text-gray-400 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>

          <div className="relative flex flex-1">
            <input
            
          value={term}
          onChange={(e)=>setTerm(e.target.value)}
              type="text"
              name="q"
              placeholder="Search"
              className="flex-1 w-full h-full outline-none mx-4 bg-transparent "
            />
            {term && (
              <div
                className=" cursor-pointer px-4 transition-all     "
                onClick={onClear}
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
              className="size-4 cursor-pointer"
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
              className="size-4 cursor-pointer"
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
          </div>

          {/* show items suggetion */}
        </div>
        <div className="btns my-5 space-x-4">
          <Button
            onClick={SearchData}
            title="Google Search"
            className="w-18 bg-gray-50 hover:shadow-md  hover:bg-bg-gray-50  text-black "
            value={"Google Search"}
          >
            <p className="text-xs">Google Search</p>
          </Button>
          <Button
            title="Google Search"
            className="w-18 bg-gray-50 hover:shadow-md  hover:bg-bg-gray-50  text-black"
            value={"Google Search"}
          >
            <p className="text-xs">i'm Filling Lucky</p>
          </Button>
        </div>
        <div className="Suggestion-Items items-center border border-gra-400">
          <hr className="hr"></hr>
        </div>
      </form>
      <div className="Lamguage flex items-center h-auto">
        <p className="text-sm">Google offered in.</p>
        <ul className="flex space-x-2   h-auto ">
          <li> हिन्दी</li>
          <li> বাংলা</li>
          <li> తెలుగు</li>
          <li> मराठी</li>
          <li> தமிழ்</li>
          <li> ગુજરાતી</li>
          <li> ಕನ್ನಡ</li>
          <li> മലയാളം</li>
          <li> ਪੰਜਾਬੀ</li>
        </ul>
      </div>
    </div>
  );
};

export default ContentGoogle;

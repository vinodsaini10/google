"use client";
import React from "react";
import HeaderOptions from "./HeaderOptions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function ToolsHeaders() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  const webSearch = (e) => {
    e.preventDefault();
    // @ts-ignore

    // Encode the term to handle special characters
    //  const encodedTerm = encodeURIComponent(term);
    router.push(`/search/web?searchTerm=${searchTerm}`);
  };
  const ImageSearch = (e) => {
    e.preventDefault();
    // @ts-ignore

    // Encode the term to handle special characters
    //  const encodedTerm = encodeURIComponent(term);
    router.push(`/search/image?searchTerm=${searchTerm}`);
    console.log("image clieck");
  };

  return (
    <div className="w-full flex  mt-28   border-b justify-evenly lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-gray-300">
      <div className="flex space-x-6">
        <div className="flex items-center space-x-6 border-b-4 border-transparent pb-3 cursor-pointer">
          <p
            onClick={webSearch}
            className=" sm:inline-flex text-sm text-gray-600"
          >
            {" "}
            {"All"}
          </p>
          <p
            onClick={ImageSearch}
            className=" sm:inline-flex text-sm text-gray-600"
          >
            {" "}
            {"Images"}
          </p>
          <p
            onClick={webSearch}
            className=" sm:inline-flex text-sm text-gray-600"
          >
            {" "}
            {"News"}
          </p>
          <p
            onClick={ImageSearch}
            className=" sm:inline-flex text-sm text-gray-600"
          >
            {" "}
            {"Videos"}
          </p>
          <p
            onClick={webSearch}
            className=" sm:inline-flex text-sm text-gray-600"
          >
            {" "}
            {"SHopping"}
          </p>
          <p
            onClick={ImageSearch}
            className=" sm:inline-flex text-sm text-gray-600"
          >
            {" "}
            {"Web"}
          </p>{" "}
          <p
            onClick={webSearch}
            className=" sm:inline-flex text-sm text-gray-600"
          >
            {" "}
            {"More"}
          </p>
        </div>

        {/* <HeaderOptions  title={"All "}   />
        <HeaderOptions  title={"Images "}  />
        <HeaderOptions title={"News "} />
        <HeaderOptions title={"Videos "} />
        <HeaderOptions title={"Map "} />
        <HeaderOptions title={"Shopping "} />
        <HeaderOptions title={"Web "} />
        <HeaderOptions title={"More "} /> */}
      </div>

      <div>
        <p className="text-sm text-gray-700 cursor-pointer">Tools</p>
      </div>
    </div>
  );
}
export default ToolsHeaders;

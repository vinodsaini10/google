// "use client"
import Link from "next/link";

import ImageSearchResults from "../components/ImageSearchResult";
export default async function ImageSearchWeb({searchParams}) {

const startIndex = searchParams.start || '1';
await new Promise((resolve) => setTimeout(resolve, 1000));
const response = await fetch(
  `https://www.googleapis.com/customsearch/v1?key=AIzaSyBodwlnf2JDNuDuLDytQESADNy987x-ufc&cx=b2bc3fa201cb64e15&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
);
const data = await response.json();
const results = data.items;
if (!results) {
  return (  
    <div className='flex flex-col justify-center items-center pt-10'>
      <h1 className='text-3xl mb-4'>
        No results found for {searchParams.searchTerm}
      </h1>
      <p className='text-lg'>
        Try searching the web or images for something else{' '}
        <Link href='/' className='text-blue-500'>
          Home
        </Link>
      </p>
    </div>
  );
}
return (
  <>
<div>
{/* <Header searchParams={searchParams}/> */}

{results && <ImageSearchResults results={data} />}
</div>
  </>
)

}
"use client"
import Link from 'next/link';
import Parser from 'html-react-parser';
import PaginationButton from './PaginationButton';
export default function WebSearchResults({ results }) {
  console.log('resilts',results)
    return (
   <>
      <div className='w-full mx-auto   mt-21   px-3 sm:pb-24 pb-40 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
        <p className='text-gray-600 text-sm mb-5 mt-3'>
          About {results.searchInformation?.formattedTotalResults} results (
          {results.searchInformation?.formattedSearchTime} seconds)
        </p>
        {results.items?.map((result) => (
          <div className='mb-8 max-w-xl' key={result.link}>
            <div className='group flex flex-col'>
              <Link href={result.link} className='text-xs mb-1'>{result.formattedUrl}</Link>
              <Link
                href={result.link}
                className='group-hover:underline decoration-blue-800 text-md truncate font-medium text-blue-800'
              >
                {result.title}
              </Link>
            </div>
            <p className='text-gray-600 line-clamp-2 text-sm '> {Parser(result.htmlSnippet ?JSON.stringify(result.htmlSnippet) : '' ) }   </p>
          </div>
        ))}
      </div>
        <div className=' w-full flex m-auto pb-20 justify-between   items-center'>
        <div className='m-auto'>

        <PaginationButton />
        </div>
      </div>
   
   </>
    );
}
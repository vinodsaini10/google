const  getServersSideProps = async (context)=>{

    const useDummyData = false;
    const data = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}`
    ).then((response)=>response.json());
  
    return {
      props:{
        results:data,
      }
    }

  }
  export default getServersSideProps;
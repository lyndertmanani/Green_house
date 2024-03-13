// import App from "../../../App";
const Logdata =({ token }) =>{
  const username = token && token.user && token.user.user_metadata ? token.user.user_metadata.Username : '';

    return (
      <>
      <div className='px-2 ml-0 lg:ml-60  text-green-700'>
            {/* weather-display */}
        <div  className="cursor-default px-10 lg:px-10 md:px-10 py-0 lg:mt-0 md:mt-0 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-2">
        {/* Dates */}
       <div className="bg-[#0c0c0c]  rounded h-16  w-full duration-700">
        
       </div>
       {/* Wearther-humidity */}
       <div className="bg-[#0c0c0c] rounded h-16 w-full duration-700">
        <section className='p-2'>
         <h1 className='text-xl font-bold'> {username}</h1>
         <p className='text-sm text-[#3a3a3a]'>employees role / duty</p>
         </section>
       </div>
        
       </div>
       </div>
      </>
    );
  };
  
  export default Logdata;
  
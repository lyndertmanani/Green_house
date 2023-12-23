 

const Hero= () => {
    return (
      <section className="text-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm  duration-700 ease-in-out border-[#252525] hover:border-transparent border-[1px]  rounded-full hover:bg-[#252525]" role="alert">
          <span className="text-xs bg-green-700 rounded-full text-white px-4 py-1.5 mr-3">New</span>
          <span className="text-sm font-medium">Sign up to get started</span>
          <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
          </svg>
        </a>
        <h1 className="mb-4 text-6xl font-bold tracking-tight leading-none  md:text-5xl lg:text-8xl">An Agriculture System Built For Commerical Farmers</h1>
        <p className="mb-8 text-lg font-normal text-[#545454] lg:text-xl sm:px-16 xl:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <a href="#" className="duration-700 ease-in-out inline-flex justify-center items-center py-2 px-3 text-base font-medium text-center rounded-lg border border-green-500 bg-green-700 hover:bg-green-900 focus:ring-4 focus:ring-gray-100">
            Get your project Stared 
         </a>
          <a href="#" className="duration-700 ease-in-out inline-flex justify-center items-center py-2 px-3 text-base font-medium text-center rounded-lg border border-[#303030] hover:bg-[#252525] focus:ring-4 focus:ring-gray-100">
          Documentation
          </a>
        </div>
        
      </div>
      </section>
    );
  };
  
  export default Hero;
  
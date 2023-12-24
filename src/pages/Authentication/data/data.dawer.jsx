 
  
const Datadawer = () => {
    
    const handleSearch = (e) => {
        e.preventDefault();
        // Add your search logic here
      };
    
  return (
    <>
      <div className="container px-2 ml-0 lg:pl-60 pt-16 text-slate-200 h-[5500px] justify-center">
  <section className="text-center">
    <h1 className="text-5xl lg:text-7xl font-medium title-font mb-1">
      Solution
    </h1>
    <p className="text-[#3a3a3a] text-sm">
      Search of disease and soil Recommendation
    </p>
  </section>

  <form onSubmit={handleSearch} className="my-2 px-5 lg:px-60">
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-3 ps-10 text-sm text-slate-200 border-1 outline-none border-[#151515] rounded-md bg-[#060606] active:none "
          placeholder="enter text here..."
          required
        />
        <button
          type="submit"
          className="text-white absolute end-1.5  bottom-1.5  bg-[#3f3f3f]  font-medium rounded-md text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
   
</div>
</>
  );
};

export default Datadawer;

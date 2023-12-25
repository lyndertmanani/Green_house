import { useState } from 'react';
  
const Datadawer = () => {
   
    // State variables to track soilType, cropRecommendation, and searchPerformed
    const [soilType, setSoilType] = useState('Unknown');
    const [cropRecommendation, setCropRecommendation] = useState('No recommendation for unknown soil types');
    const [searchPerformed, setSearchPerformed] = useState(false);
  
    // Predefined descriptions for each soil type
    const soilDescriptions = {
      'Clay Soil': 'Sticky when wet, hard when dry, more water, dark colour rich in nutrients and very fertile if their cloddiness can be broken up by the addition of organic matter...',
      'Sandy Soil': 'hold less water light soils, usually low in nutrients, and lose water not keep water very quickly being particularly free-draining...',
      'Silt Soil': 'Silt soils are made up of fine particles that can be easily compacted by treading and use of garden machinery...',
      'Loam Soil': 'Loam soils are the gardener’s best friend, being a ‘perfect’ balance of all soil particle types...',
      'Chalky Soil': 'Chalky soils are alkaline, so will not support ericaceous plants that need acid soil conditions...',
    };
  
    const handleSearch = (e) => {
      e.preventDefault();
      const userInput = e.target.elements['default-search'].value.toLowerCase();
  
      // Function to calculate similarity between user input and soil descriptions
      const calculateSimilarity = (str1, str2) => {
        const words1 = new Set(str1.split(' '));
        const words2 = new Set(str2.split(' '));
  
        const intersection = [...words1].filter((word) => words2.has(word));
        const union = new Set([...words1, ...words2]);
  
        return intersection.length / union.size;
      };
  
      // Calculate similarity for each soil type and choose the one with the highest similarity
      let maxSimilarity = 0;
      let bestMatch = 'Unknown';
  
      Object.keys(soilDescriptions).forEach((type) => {
        const description = soilDescriptions[type].toLowerCase();
        const similarity = calculateSimilarity(userInput, description);
  
        if (similarity > maxSimilarity) {
          maxSimilarity = similarity;
          bestMatch = type;
        }
      });
  
      // Set the identified soil type and crop recommendation
      setSoilType(bestMatch);
      setCropRecommendation(` ${bestMatch}: ${getRecommendationForSoilType(bestMatch)}`);
  
      // Set the searchPerformed state to true
      setSearchPerformed(true);
  
      // Log the results (you can remove these console logs in production)
      console.log(`Identified Soil Type: ${soilType}`);
      console.log(`Crop Recommendation: ${cropRecommendation}`);
    };
  
    // Function to get crop recommendation based on soil type
    const getRecommendationForSoilType = (type) => {
      switch (type) {
        case 'Clay Soil':
          return `  is characterized by its fine particles that compact easily, leading to potential drainage issues. This soil type tends to retain water, making it beneficial for plants that enjoy consistent moisture levels. However, the compact nature of clay can hinder root development and nutrient absorption. To improve fertility, incorporate organic matter like compost or well-rotted manure. This not only enhances nutrient content but also helps break up clods, promoting better aeration and water movement. Ideal crops for clay soil include Potatoes, Beans, and Cabbages, which thrive in the nutrient-rich environment. However, be mindful of waterlogged conditions, and consider raised beds to improve drainage and prevent root rot. Additionally, mulching can help regulate soil temperature and reduce moisture loss.`;
    
        case 'Sandy Soil':
          return `  with its coarse and loose texture, provides excellent drainage but lacks nutrient retention. This soil type allows water to pass through quickly, making it suitable for plants that prefer drier conditions. Carrots, Radishes, and Lettuce are well-suited for sandy soil, as they thrive in well-drained environments. However, the low nutrient content in sandy soil requires regular fertilization to ensure healthy plant growth. To enhance water retention, incorporate organic matter such as compost or leaf mulch. Consider using a layer of mulch to reduce water evaporation and maintain moisture levels for optimal plant growth. Amending sandy soil with organic materials not only improves its overall structure but also creates a more favorable environment for a variety of crops. Additionally, drip irrigation systems can efficiently deliver water to the root zone, minimizing water wastage and promoting plant health.`;
    
        case 'Silt Soil':
          return `   composed of fine particles, offers good fertility but is prone to compaction. This soil type has a smooth, silky texture and retains moisture well. Peas, Spinach, and Broccoli thrive in the nutrient-rich conditions of silt soil. However, its fine particles can easily compact, reducing aeration and impeding root development. To prevent compaction, add organic matter regularly, promoting better aeration and root development. Implementing no-till practices can further preserve soil structure and enhance its overall health. Be cautious with excessive foot traffic or heavy machinery that can lead to compaction. With proper care, silt soil can provide an excellent foundation for a diverse range of crops, offering a balance between drainage and water retention.`;
    
        case 'Loam Soil':
          return `  often considered the gardener’s dream, features a balanced mix of sand, silt, and clay particles. This versatile soil type provides optimal drainage, moisture retention, and fertility, making it suitable for a wide range of plants. Tomatoes, Peppers, and Pumpkins thrive in the well-aerated and nutrient-rich environment of loam soil. The combination of good drainage and fertility reduces the need for extensive amendments. Maintaining this balance is key, achieved by regularly incorporating organic matter such as compost or well-rotted manure. This not only enhances nutrient content but also promotes a healthy soil structure. Additionally, cover cropping can help reduce erosion, improve soil fertility, and suppress weeds, contributing to the overall health of loam soil.`;
    
        case 'Chalky Soil':
          return ` characterized by its alkaline nature due to the presence of limestone, requires careful consideration for plant selection. Lavender, Rosemary, and Thyme are well-suited for this soil type, thriving in alkaline conditions. To accommodate other plants, adjust the soil’s pH by adding acidic amendments. Chalky soil tends to drain well, but it may lack certain nutrients. Incorporating organic matter such as well-rotted manure or compost helps improve fertility and structure. Gardeners should monitor pH levels regularly and choose plants accordingly, ensuring they thrive in the alkaline conditions of chalky soil. Additionally, using ground cover plants can help reduce erosion and maintain soil structure, contributing to the overall health of chalky soil.`;
    
        default:
          return 'No recommendation';
      }
    };
    
  return (
    <>
      <div className="container px-2 ml-0 lg:pl-60 pt-16 text-slate-200 h-[599px] justify-center">
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
          className="text-white absolute end-1.5  bottom-1.5  bg-[#3f3f3f] hover:bg-slate-900 duration-700 font-medium rounded-md text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
    {/* Update the content below to display search results */}
    {searchPerformed && (
        <div className="h-[355px] px-10 py-2   overflow-y-scroll overflow-x-hidden">
          <section className="w-full bg-black h-28 p-2 rounded-lg    ">
            {/* <h1 className="text-[#585858] font-bold text-lg">Search Results</h1> */}
            {/* Display identified soil type and crop recommendations */}
            <p className="text-[#727272] text-lg"><span className="font-bold">Identified Soil Type <br /></span> {soilType}</p><br />
            <p className="text-[#727272] text-md"> <span className="font-bold">Crop Recommendation<br /></span> {cropRecommendation}</p>
            {/* TODO: Display crop recommendations */}
          </section>
        </div>
      )}
</div>
</>
  );
};

export default Datadawer;

import React, { useEffect, useState } from 'react';
 

const Weather = () => {
  const [city] = useState(''); // State to store the city name

  const getWeather = async (city) => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fdd2b9289d7b31b399f475c08ffa56aa&units=metric`);
      const data = await res.json();

      // Update UI with weather data
      document.querySelector('.celcius').innerHTML = Math.round(data.main.temp) + "°c";
      document.querySelector('.humidity').innerHTML = Math.round(data.main.humidity) + "%";
      document.querySelector('.windspeed').innerHTML = Math.round(data.wind.speed) + "km/h";
      document.querySelector('.pressure').innerHTML = Math.round(data.main.pressure) + "mb";
      // document.querySelector('.city').innerHTML =  data.name.data;

      const recommendationElement = document.querySelector('.recommand');
      if (data.main.temp > 25 && data.main.humidity > 50) {
        recommendationElement.innerHTML = "It's a great time to water your plants!";
      } else {
        recommendationElement.innerHTML = "Check weather conditions before watering your plants. ";
      }

    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const getWeatherByCoordinates = async (latitude, longitude) => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=fdd2b9289d7b31b399f475c08ffa56aa&units=metric`);
      const data = await res.json();

      // Call getWeather function with city name
      getWeather(data.name);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const trackLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        getWeatherByCoordinates(latitude, longitude);
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  };

  useEffect(() => {
    // Prompt user to allow location tracking
    if (navigator.geolocation) {
      navigator.permissions.query({ name: 'geolocation' }).then((result) => {
        if (result.state === 'granted') {
          // If permission granted, track location
          trackLocation();
        } else if (result.state === 'prompt') {
          // If permission prompt, ask user for permission
          alert("This site wants to track your location for better weather accuracy. Please allow.");
          trackLocation();
        }
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    // Fetch weather data every 0.5 minutes (3,000 milliseconds)
    const interval = setInterval(() => {
      if (city) {
        getWeather(city);
      }
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount

  }, [city]);

  return (
        <>
        <div className='bg-black h-[650px] py-5 ml-0 lg:ml-60  text-green-700'>
            {/* weather-display */}
        <div  className="cursor-default px-10 lg:px-10 md:px-10 py-0 lg:mt-0 md:mt-0 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-2">
        {/* Wearther-degree-celcius */}
       <div className="bg-[#0c0c0c] border  border-green-700  rounded max-h-20  max-w-[400px]  duration-700">
         <span className="inline-flex items-center p-5 justify-center ">
           <p className="text-3xl lg:text-4xl celcius text-center px-1 ">Weather</p>
           <p className="text-[8px] lg:text-xs text-[#3a3a3a] p-[2px] city rounded-xl ">weather</p> 
         </span>
       </div>
       {/* Wearther-humidity */}
       <div className="bg-[#0c0c0c] border border-green-700   rounded h-20  max-w-[400px] duration-700">
       <span className="inline-flex items-center p-5 justify-center  ">
           <p className="text-3xl lg:text-4xl humidity text-center px-1 ">humidity</p>
           <p className="text-[8px] lg:text-xs text-[#3a3a3a] p-[2px]  rounded-xl ">humidity</p> 
         </span>
       </div>
       {/* Wind-speed */}
       <div className="bg-[#0c0c0c] border border-green-700  rounded h-20  max-w-[400px] duration-700">
       <span className="inline-flex items-center p-5 justify-center  ">
           <p className="text-3xl lg:text-4xl windspeed text-center px-1 ">Wind</p>
           <p className="text-[8px] lg:text-xs text-[#3a3a3a] p-[2px] rounded-xl ">W/Speed</p> 
         </span>
       </div>
       {/* atmospheric pressure */}
       <div className="bg-[#0c0c0c] border border-green-700   rounded h-20  max-w-[400px]  duration-700">
       <span className="inline-flex items-center p-5 justify-center  ">
           <p className="text-3xl lg:text-4xl pressure text-center px-1 ">pressure</p>
           <p className="text-[8px] lg:text-xs text-[#3a3a3a] p-[2px] rounded-xl ">pressure</p> 
         </span>
       </div>
       </div>

     <section className='px-8 py-6'>
    <div className='prompt text-green-700 bg-black  xs'>
    <div className='title'>
     Irrigation Recommendation
    </div>
    <div className='content'>
      <p className=" recommand ">
      Recommended data will display here as for now check your internet connection and geo-location settings to be allowed
      </p>
    </div>
    

  </div>
       </section>

        </div>
        </>
     );
};

export default Weather;
import {Card, CardHeader, CardBody, CardFooter, Divider,   Image} from "@nextui-org/react";
import heroImage from '../../assets/images/green (12).jpg';

const Services= () => {

    return (
      <>  
      <div className="h-auto lg:h-[550px] ">
    <div className="container px-5 py-0 mx-auto  text-stone-200 ">
      <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
        <h1 className="text-3xl lg:text-7xl  font-medium title-font mb-1">Our Service</h1>
        <p className="lg:w-1/2 w-full leading-relaxed text-[#545454]">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
      </div>
      </div>
      <div  className="cursor-default px-10 lg:px-24 md:px-20 py-0 lg:mt-0 md:mt-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8">
      {/* card starts here */}
      <Card className="  max-w-[400px] bg-inherit border-stone-700 border-[1px] hover:border-stone-500 hover:bg-[#070707] duration-700 transition ease-out delay-500">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col ">
          <p className="text-sm">Plant-Specific Information</p>
          {/* <p className="text-small text-default-500">nextui.org</p> */}
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className="text-xs">Our cutting-edge system provides farmers with real-time, plant-specific information tailored to the unique needs of each crop. Receive insights about optimal temperature, humidity, light levels, and nutrient requirements for various plants in your greenhouse.</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        {/* <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link> */}
      </CardFooter>
    </Card>
    {/* card starts here */}
    <Card className="  max-w-[400px] bg-inherit border-stone-700 border-[1px] hover:border-stone-500 hover:bg-[#070707] duration-700 transition ease-out delay-500">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col ">
          <p className="text-sm">Customized Recommendations</p>
          {/* <p className="text-small text-default-500">nextui.org</p> */}
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className="text-xs">Say goodbye to guesswork. Our system generates personalized recommendations for each stage of a plants growth cycle. From planting to harvesting, youll receive actionable guidance to maximize yields and quality.</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        {/* <Link
          isExternal
          showAnchorIcon
          href=" "
        >
          Green House system
        </Link> */}
      </CardFooter>
    </Card>
     {/* card starts here */}
     <Card className="  max-w-[400px] bg-inherit border-stone-700 border-[1px] hover:border-stone-500 hover:bg-[#070707]duration-700 transition ease-out delay-500">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col ">
          <p className="text-sm">Data-Driven Insights</p>
          {/* <p className="text-small text-default-500">nextui.org</p> */}
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className="text-xs">Make informed decisions based on data-driven insights. Our system compiles historical and real-time data, allowing you to track trends, identify patterns, and optimize your farming practices for improved outcomes.</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        {/* <Link
          isExternal
          showAnchorIcon
          href=" "
        >
          Green House system
        </Link> */}
      </CardFooter>
    </Card>
     {/* card starts here */}
     <Card className="  max-w-[400px] bg-inherit border-stone-700 border-[1px] hover:border-stone-500 hover:bg-[#070707] duration-700 transition ease-out delay-500">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col ">
          <p className="text-sm">24/7 Support</p>
          {/* <p className="text-small text-default-500">nextui.org</p> */}
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className="text-xs">Our dedicated support team is available around the clock to assist you. Whether you have technical questions or need help interpreting data, we are here to ensure you make the most of our systems capabilities.</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        
        {/* <Link
          isExternal
          showAnchorIcon
          href=" "
        >
          Green House system.
        </Link> */}
      </CardFooter>
    </Card>
   </div>
   </div>
   
   <section className="h-[500px]">
    <div className="container mx-auto flex px-8 py-4 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">

        <img className="object-cover object-center rounded" alt="hero" src={heroImage}/>
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"  >
        <h1 className="text-4xl lg:text-7xl font-medium title-font mb-1">Everything in your control</h1>
        <p className="mb-8 leading-relaxed  text-start">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        
      </div>
    </div>
  </section> 
  
    </>
    )
  };
  
  export default Services;
  
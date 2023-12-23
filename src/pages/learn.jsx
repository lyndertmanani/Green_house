import Heroimg from '../assets/images/green (15).jpg';
import Car from '../assets/images/green (19).jpg';

const Learning = () => {
    return (
     <>
     <section className="h-[550px] overflow-clip">
     <img src={Heroimg} alt="" className=" " />

     {/* effect-layer   */}
     {/* <div className="bg-gradient-to-t from-transparent to-black w-full h-full absolute top-0 left-0 z-0"></div>
    <div className="bg-gradient-to-r from-transparent to-black w-full h-full absolute top-0 left-0 z-0"></div>
    <div className="bg-gradient-to-l from-transparent to-black w-full h-full absolute top-0 left-0 z-0"></div> */}
    <div className="bg-gradient-to-b from-transparent to-black w-full h-full absolute top-5 left-0 z-0"></div>
     </section>
     <div className='h-[550px]'>
     <div className="container mx-auto flex px-8 py-4 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <div className="bg-gradient-to-b from-transparent to-black w-full h-full absolute top-5 left-0 z-0"></div>
        <img className="object-cover object-center rounded" alt="hero" src={Car}/>
        
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"  >
        <h1 className="text-4xl lg:text-7xl font-medium title-font mb-1">Everything in your control</h1>
        <p className="mb-8 leading-relaxed  text-start">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        
      </div>
    </div>
     </div>
     </>
    );
  };
  
  export default Learning;
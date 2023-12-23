import Hero from "../components/home/hero";
import Services from "../components/home/services"
import Community from "../components/home/community"
import Fqas from "../components/home/fqas";
import {ScrollShadow} from "@nextui-org/react";

const Home= () => {
  return (
    <>
    <ScrollShadow >
    <Hero/>  
    <Services/>
    <Fqas/>
    <Community/>
    </ScrollShadow>
    </>
  )
};

export default Home;

import heroImage from '../../assets/images/green (12).jpg';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

 
const Community = () => {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <div className="h-[80vh] md:h-[70vh] lg:h-[660px] w-full flex overflow-hidden relative justify-center items-center  ">
     <img src={heroImage} alt="" className="w-full h-full object-cover object-center absolute flex" />

     {/* effect-layer   */}
     <div className="bg-gradient-to-t from-transparent to-black w-full h-full absolute top-0 left-0 z-0"></div>
    <div className="bg-gradient-to-r from-transparent to-black w-full h-full absolute top-0 left-0 z-0"></div>
    <div className="bg-gradient-to-l from-transparent to-black w-full h-full absolute top-0 left-0 z-0"></div>
    <div className="bg-gradient-to-b from-transparent to-black w-full h-full absolute top-0 left-0 z-0"></div>
    <div className="flex flex-col text-center absolute">
    <div className="flex flex-wrap w-full mb-0 flex-col items-center text-center">
        <h1 className="text-3xl lg:text-7xl  font-medium title-font mb-1">Join The Community</h1>
        <p className="  w-full leading-relaxed text-[#545454]">Supported by a network of early advocates, contributors, and champions</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <Button onPress={onOpen} className="duration-700 ease-in-out inline-flex justify-center items-center py-2 px-3 text-base font-medium text-center rounded-lg border bg-[#202020] border-[#303030] hover:bg-[#252525] hover:border-green-600">  Github Discussion</Button>
      <Modal 
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10  "
        }}
      >
        <ModalContent className=" bg-black bg-opacity-20 backdrop-filter backdrop-blur-xl text-white  border border-green-500">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1  ">Green House Community Guide</ModalHeader>
              <ModalBody>
                <p  className="text-xs font-light"> 
                Join our vibrant community dedicated to sustainable living and green practices. Heres how you can get started:
                </p>

                <p className="text-xs font-light">
                <span className="font-bold">Respect Nature:</span><br/>
                Embrace a respectful attitude towards nature and fellow community members.
                </p>

                <p className="text-xs font-light">
                 <span className="font-bold">Share Knowledge</span><br/>
                   Contribute your insights, tips, and green living hacks with the community.
                   </p>

                   <p className="text-xs font-light">
                 <span className="font-bold">Support Others</span><br/>
                  Encourage and assist fellow members in their journey towards a greener lifestyle.
                  </p>

                  <p className="text-xs font-light">
                 <span className="font-bold">Stay Positive:</span><br/>
                 Foster a positive environment by focusing on solutions and uplifting stories.
                 </p>
                
                 <p className="text-xs font-light">
                 <span className="font-bold">Connect on Discord:</span><br/>
                Join our Discord group to engage in real-time discussions and connect with like-minded individuals.
                </p>
                <p className="text-xs font-light">
                Ready to grow together? Lets make the world a greener place!
                </p>
                 
              </ModalBody>
              <ModalFooter>
              <Button className="duration-700 ease-in-out inline-flex justify-center items-center py-[5px] px-[5px] text-white font-medium text-center rounded-lg border border-green-500 bg-green-700 hover:bg-green-900 focus:ring-4 focus:ring-gray-100" onPress={onClose}>
                 Join coummunity
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
           
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Community;

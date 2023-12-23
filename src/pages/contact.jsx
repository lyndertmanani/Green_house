import { Button, Input, Textarea } from "@nextui-org/react";


const Contact = () => {
    return (
     <>
     <div className="max-w-[calc(100vw-20px)] lg:w-[70%] xl:w-[80%] 2xl:w-[60%] lg:flex mx-auto p-5 md:p-10">
      <div className="w-full lg:w-[70%] flex flex-col p-3 md:p-8">
        <div>
          <h1 className="font-bold text-[#919191] text-4xl leading-tighter">
            Contact Us
          </h1>
          <p className="font-normal text-[#919191] text-md leading-tight pr-60">
            Feel free to contact us and we will get
            back to you as soon as we can
          </p>
        </div>
        <div className="flex flex-col my-6 md:my-8 p-3">
          <Input
            type="text"
            variant="underlined"
            placeholder="Enter your name"
            className=""
          />
          <Input
            type="email"
            variant="underlined"
            placeholder="Enter your email"
            className=""
          />
          <Textarea
            key="underlined"
            variant="underlined"
            labelPlacement="outside"
            placeholder="Enter your message let's talk"
            className="col-span-12 md:col-span-6"
          />
          <Button
            radius="md"
            
            className="w-full my-4 md:w-[30%] rounded-sm border border-[#353535] bg-[#252525] hover:border-green-500 duration-700"
          >
            Send
          </Button>
        </div>
      </div>
      <div className="h-80 w-[2px] bg-[#353535] hidden lg:flex mt-12"></div>
      <div className="my-8 p-3 text-[#7c7c7c]">
        <div className="m-3 md:m-5 ">
          <span className="font-bold text-green-700 text-lg">
            Opening Hours
          </span>
          <p className="font-normal  text-sm  ">
            Monday - Friday
            <br />
            9am - 5am <br />
            Saturday - Sunday
            <br />
            7am - 5am (next day)
          </p>
        </div>
        <div className="m-3 md:m-5">
          <span className="font-bold text-green-700 text-lg">
            Location
          </span>
          <a
          href=""
            size="sm"
            className=" bg-[#252525] ml-2 p-[2px] text-[#7c7c7c] rounded-full hover:opacity-60 duration-700">
            Google Map
          </a>
          <p className="font-normal text-sm">
            Golden Peacock <br />
            Complex Suit # B1
          </p>
        </div>
        <div className="m-3 md:m-5">
          <h1 className="font-bold text-green-700 text-lg">Support</h1>
          <p className="font-normal text-sm">
            hello@greenhouse.com
            <br />
            +265 991 234 567
          </p>
        </div>
      </div>
    </div>
  
     </>
    );
  };
  
  export default Contact;
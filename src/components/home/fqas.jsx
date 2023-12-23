 
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Fqas() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div  className="px-10 lg:px-24 md:px-20 py-0 lg:mt-0  ">
        <h1 className="text-3xl lg:text-7xl text-center py-10 font-medium title-font mb-1">Frequently questioned answers</h1>
    <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="How does the system work?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Whats the avarage pricing per month?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Is the system only used for green housing?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="1" aria-label="Accordion 4" title="How can I get started for free">
        {defaultContent}
      </AccordionItem>
    </Accordion>
    </div>
  );
}

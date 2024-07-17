import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type DetailAccordionParams = {
  overview: string | null;
  materials: string | null;
};

export const DetailAccordion = ({
  overview,
  materials,
}: DetailAccordionParams) => {
  return (
    <Accordion type="single" collapsible className="w-full font-plus text-lg">
      <AccordionItem value="item-1">
        <AccordionTrigger>Overview</AccordionTrigger>
        <AccordionContent>
          {overview ?? "No overview information"}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Materials</AccordionTrigger>
        <AccordionContent>
          {materials ?? "No materials information"}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

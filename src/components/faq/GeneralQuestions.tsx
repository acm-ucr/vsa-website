import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface GeneralQuestionProps {
  title: string;
  questions: string[];
  answers: string[];
  color: string;
  titleColor: string;
}

const GeneralQuestions = ({
  title,
  questions,
  answers,
  color,
  titleColor,
}: GeneralQuestionProps) => {
  return (
    <div className="flex items-center justify-center p-5 md:p-20">
      <div className="w-6xl">
        <div
          className={`${titleColor} mb-4 flex items-center justify-center text-3xl font-extrabold text-nowrap md:text-6xl`}
        >
          {title}
        </div>
        <div className="border-vsa-green-400 mt-12 border-x-2 border-b-2">
          <Accordion type="single" collapsible className="w-full">
            {questions.map((question, i) => (
              <AccordionItem
                key={`item-${i}`}
                value={`item-${i}`}
                className={` ${i % 2 === 1 ? color : "bg-vsa-yellow-100"}`}
              >
                <AccordionTrigger className="text-vsa-brown cursor-pointer flex-row-reverse items-center justify-end rounded-none border-t-2 border-black pl-2 text-sm hover:no-underline md:text-3xl [&>svg]:h-6 [&>svg]:w-6 md:[&>svg]:h-12 md:[&>svg]:w-12">
                  {i + 1}. {question}
                </AccordionTrigger>
                <AccordionContent className="text-vsa-brown flex gap-4 border-t-2 border-black bg-white p-2 text-sm md:text-3xl">
                  <div className="p-4 md:ml-12">{answers[i]}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default GeneralQuestions;

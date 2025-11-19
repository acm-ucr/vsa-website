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
    <div className="flex items-center justify-center p-20">
      <div className="w-6xl">
        <div
          className={`${titleColor} mb-4 flex items-center justify-center p-6 text-6xl font-semibold`}
        >
          {title}
        </div>
        <div className="border-vsa-green-400 border-x-2 border-b-2">
          <Accordion type="single" collapsible className="w-full">
            {questions.map((question, i) => (
              <AccordionItem
                key={`item-${i}`}
                value={`item-${i}`}
                className={` ${i % 2 === 1 ? color : "bg-vsa-yellow-100"}`}
              >
                <AccordionTrigger className="text-vsa-brown cursor-pointer flex-row-reverse items-center justify-end rounded-none border-t-2 border-black text-3xl hover:no-underline [&>svg]:h-12 [&>svg]:w-12">
                  {i + 1}. {question}
                </AccordionTrigger>
                <AccordionContent className="text-vsa-brown flex gap-4 border-t-2 border-black bg-white p-2 text-3xl">
                  <div className="ml-12 p-4">{answers[i]}</div>
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

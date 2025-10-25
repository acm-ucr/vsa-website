import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type GeneralQuestionProps = {
  title: string;
  questions: string[];
  answers: string[];
  color: string;
};

const GeneralQuestions = ({
  title,
  questions,
  answers,
  color,
}: GeneralQuestionProps) => {
  return (
    <div className="flex items-center justify-center p-20">
      <div className="w-6xl">
        <div className="text-vsa-pink-200 mb-4 flex items-center justify-center p-6 text-6xl font-semibold">
          {title}
        </div>
        <div className="border-vsa-green-400 border-r-2 border-b-2 border-l-2">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue={questions.length ? "item-0" : undefined}
          >
            {questions.map((question, i) => (
              <AccordionItem
                key={`item-${i}`}
                value={`item-${i}`}
                className={` ${i % 2 === 1 ? color : "bg-vsa-yellow-100"}`}
              >
                <AccordionTrigger className="text-vsa-brown flex-row-reverse items-center justify-end rounded-none border-t-2 border-black text-3xl hover:no-underline [&>svg]:h-12 [&>svg]:w-12">
                  {" "}
                  <div className="">
                    {i + 1}. {question}
                  </div>
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

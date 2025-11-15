import GeneralQuestions from "@/components/faq/GeneralQuestions";
import { GeneralQuestions as generalData } from "@/data/Faq/GeneralQuestions";

const FAQ = () => {
  const title = "General Questions";
  const questions = generalData.map((index) => index.question);
  const answers = generalData.map((index) => index.answer);
  const color = "bg-vsa-pink-100";
  return (
    <GeneralQuestions
      title={title}
      questions={questions}
      answers={answers}
      color={color}
    />
  );
};

export default FAQ;

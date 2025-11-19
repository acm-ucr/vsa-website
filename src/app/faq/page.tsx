import GeneralQuestions from "@/components/faq/GeneralQuestions";
import { GeneralQuestions as generalData } from "@/data/Faq/GeneralQuestions";
import { MembershipQuestions } from "@/data/Faq/MembershipQuestions";
import { OtherQuestions } from "@/data/Faq/OtherQuestions";

const FAQ = () => {
  const questions1 = generalData.map((index) => index.question);
  const answers1 = generalData.map((index) => index.answer);

  const questions2 = generalData.map((index) => index.question);
  const answers2 = generalData.map((index) => index.answer);

  const questions3 = generalData.map((index) => index.question);
  const answers3 = generalData.map((index) => index.answer);

  return (
    <div>
      <GeneralQuestions
        title="General Questions"
        questions={questions1}
        answers={answers1}
        color="bg-vsa-pink-100"
        titleColor="text-vsa-pink-200"
      />

      <GeneralQuestions
        title="Membership Questions"
        questions={questions2}
        answers={answers2}
        color="bg-vsa-green-100"
        titleColor="text-vsa-green-300"
      />

      <GeneralQuestions
        title="Other Related Questions"
        questions={questions3}
        answers={answers3}
        color="bg-vsa-pink-100"
        titleColor="text-vsa-pink-200"
      />
    </div>
  );
};

export default FAQ;

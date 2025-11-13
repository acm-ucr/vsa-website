import GeneralQuestions from "@/components/faq/GeneralQuestions";

const FAQ = () => {
  return (
    <div className="">
      <GeneralQuestions
        title="General Questions"
        questions={[
          "Do I have to be Vietnamese to join VSA?",
          "Do I have to be Vietnamese to join VSA?",
        ]}
        answers={[
          "Not at all! VSA is open to everyone — we welcome individuals of all backgrounds who are interested in Vietnamese culture or simply want to be part of our community.",
          "Not at all! VSA is open to everyone — we welcome individuals of all backgrounds who are interested in Vietnamese culture or simply want to be part of our community.",
        ]}
        color="bg-vsa-pink-100"
      />
    </div>
  );
};

export default FAQ;

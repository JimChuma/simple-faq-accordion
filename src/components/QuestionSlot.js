export default function QuestionSlot({ option, select, setSelect, item }) {
  const { question, answer } = item;
  return (
    <div className="question-slot">
      <div
        className="question-div"
        onClick={() => {
          select === option ? setSelect(0) : setSelect(option);
        }}
      >
        <div className="question">
          <span>{question}</span>
        </div>
        <div
          className={
            "question-toggle-icon" + (select === option ? " rotate-icon" : "")
          }
        >
          <img src="/simple-faq-accordion/arrow-up.svg" alt="" />
        </div>
      </div>
      <div className={"answer-div" + (select === option ? " show-div" : "")}>
        <span>{answer}</span>
      </div>
    </div>
  );
}

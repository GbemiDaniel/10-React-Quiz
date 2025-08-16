function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return;
  if (index + 1 < numQuestions) {
    return (
      <div
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </div>
    );
  }
  if (index + 1 === numQuestions) {
    return (
      <div className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
        Finish
      </div>
    );
  }
}

export default NextButton;

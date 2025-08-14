function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz App!</h2>
      <h3>{numQuestions} Questions to test your react mastery</h3>
      <button className="btn btn-ui">Click here to start</button>
    </div>
  );
}

export default StartScreen;

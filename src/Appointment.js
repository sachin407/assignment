import React, { useState } from "react";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";

function Appointment() {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    }
  };

  const handleRetry = () => {
    setCorrectAnswers(0);
  };
  return (
    <div>
      <MultipleChoiceQuestion
        question="What does a yellow traffic light indicate?"
        options={["Stop", "Slow down", "Proceed with caution", "Speed up"]}
        answer="Proceed with caution"
        onAnswer={handleAnswer}
      />
      <MultipleChoiceQuestion
        question="What does a white line at the edge of the road indicate?"
        options={[
          "No parking",
          "No overtaking",
          "No entry",
          "Shoulder of the road",
        ]}
        answer="Shoulder of the road"
        onAnswer={handleAnswer}
      />
      <MultipleChoiceQuestion
        question="What should you do if you encounter foggy weather conditions while driving?"
        options={[
          "Increase your speed to get through it quickly",
          "Use high beams to see better",
          "Reduce your speed and use low beams",
          "Pull over and wait until the fog clears",
        ]}
        answer="Reduce your speed and use low beams"
        onAnswer={handleAnswer}
      />
      <MultipleChoiceQuestion
        question="What does a broken white line on the road indicate?"
        options={["No parking", "Overtaking allowed", "No entry", "Stop"]}
        answer="Overtaking allowed"
        onAnswer={handleAnswer}
      />
      <MultipleChoiceQuestion
        question="When should you use your turn signals while driving?"
        options={[
          "Only when changing lanes",
          "Only when turning",
          "Both when changing lanes and turning",
          "Never",
        ]}
        answer="Both when changing lanes and turning"
        onAnswer={handleAnswer}
      />
      <MultipleChoiceQuestion
        question="What is the purpose of a speed limit sign?"
        options={[
          "To indicate the maximum speed allowed",
          "To indicate the minimum speed allowed",
          "To indicate the average speed of traffic",
          "To indicate the recommended speed",
        ]}
        answer="To indicate the maximum speed allowed"
        onAnswer={handleAnswer}
      />
      <MultipleChoiceQuestion
        question="What should you do if you see pedestrians crossing the road?"
        options={[
          "Speed up to avoid them quickly",
          "Sound your horn to warn them",
          "Slow down or stop to let them cross safely",
          "Drive around them if possible",
        ]}
        answer="Slow down or stop to let them cross safely"
        onAnswer={handleAnswer}
      />
      <MultipleChoiceQuestion
        question="What should you do if you are involved in a minor accident with no injuries?"
        options={[
          "Drive away quickly",
          "Exchange insurance information with the other party",
          "Leave a note with your contact information",
          "Ignore it and continue driving",
        ]}
        answer="Exchange insurance information with the other party"
        onAnswer={handleAnswer}
      />
      <MultipleChoiceQuestion
        question="What does a red triangle sign with an exclamation mark indicate?"
        options={[
          "No entry",
          "School zone",
          "Warning or caution",
          "Stop sign ahead",
        ]}
        answer="Warning or caution"
        onAnswer={handleAnswer}
      />
      <MultipleChoiceQuestion
        question="What should you do if you miss your exit on the highway?"
        options={[
          "Make a U-turn and go back",
          "Pull over and wait for assistance",
          "Exit at the next available exit and find an alternate route",
          "Reverse and go back to the exit",
        ]}
        answer="Exit at the next available exit and find an alternate route"
        onAnswer={handleAnswer}
      />
      ;
      {correctAnswers >= 6 ? (
        <p>Congratulations! You have successfully passed.</p>
      ) : (
        <p>Try again later.</p>
      )}
      {/* Option to retry */}
      {correctAnswers < 6 && (
        <button style={{ width: "100px" }} onClick={handleRetry}>
          Retry
        </button>
      )}
    </div>
  );
}
export default Appointment;

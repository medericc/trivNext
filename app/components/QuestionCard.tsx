import React from "react";

interface QuestionCardProps {
  question: string;
  options: string[];
  onAnswer: (option: string) => void;
}

export default function QuestionCard({ question, options, onAnswer }: QuestionCardProps) {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">{question}</h2>
      <div className="flex flex-col space-y-2">
        {options.map((option, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

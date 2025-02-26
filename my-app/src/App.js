import React, { useState } from "react";
import axios from "axios";

const SpellAI = () => {
  const [inputText, setInputText] = useState("");
  const [correctedText, setCorrectedText] = useState("");

  const handleCorrect = async () => {
    try {
      const response = await axios.post("http://localhost:5000/correct", {
        text: inputText,
      });
      setCorrectedText(response.data.correctedText);
    } catch (error) {
      console.error("Error:", error);
      setCorrectedText("Error in correction.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Spell-AI Corrector</h1>
      <textarea
        className="border p-2 w-96 h-24"
        placeholder="Enter your sentence..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-3 rounded"
        onClick={handleCorrect}
      >
        Correct Spelling
      </button>
      {correctedText && (
        <p className="mt-4 p-2 border w-96 bg-gray-100">{correctedText}</p>
      )}
    </div>
  );
};

export default SpellAI;

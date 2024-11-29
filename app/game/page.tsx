'use client';

import React, { useState, useEffect } from "react";
import shuffleArray from "../utils/shuffleArray";
import questionsData from '../data/questions';

interface Question {
  question: string;
  answer: string;
}

interface Player {
  name: string;
  camemberts: string[];
  points: number;
  answeredQuestions: Set<string>;
}

const categories = Object.keys(questionsData);

export default function GamePage() {
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [usedQuestions, setUsedQuestions] = useState<Set<string>>(new Set());
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [players] = useState<Player[]>([
    {
      name: localStorage.getItem("player1") || "Player 1",
      camemberts: [],
      points: 0,
      answeredQuestions: new Set<string>(),
    },
    {
      name: localStorage.getItem("player2") || "Player 2",
      camemberts: [],
      points: 0,
      answeredQuestions: new Set<string>(),
    },
  ]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [isCamembertRound, setIsCamembertRound] = useState(false);

  useEffect(() => {
    const shuffled = shuffleArray(questionsData[currentCategory]);
    setShuffledQuestions(shuffled);
    setNextQuestion();
  }, [currentCategory]);

  const setNextQuestion = () => {
    const currentPlayer = players[currentPlayerIndex];
    const availableQuestions = shuffledQuestions.filter(
      (q) =>
        !currentPlayer.answeredQuestions.has(q.question) &&
        !usedQuestions.has(q.question)
    );
  
    if (availableQuestions.length === 0) {
      alert("Plus de questions disponibles dans cette catégorie !");
      return;
    }
  
    const nextQuestion = availableQuestions[0];
    setCurrentQuestion(nextQuestion);
  
    // Ajouter la question aux questions utilisées
    setUsedQuestions((prev) => new Set(prev).add(nextQuestion.question));
  
    // Spécifique au joueur
    currentPlayer.answeredQuestions.add(nextQuestion.question);
  };
  

  const handleAnswer = (isCorrect: boolean) => {
    const currentPlayer = players[currentPlayerIndex];
  
    if (isCorrect) {
      if (isCamembertRound) {
        // Si en mode camembert, attribuer le camembert
        if (!currentPlayer.camemberts.includes(currentCategory)) {
          currentPlayer.camemberts.push(currentCategory);
          alert(`${currentPlayer.name} gagne un camembert pour ${currentCategory} !`);
        }
        resetRound(); // Réinitialiser et passer au joueur suivant
      } else {
        // Ajouter un point si ce n'est pas un tour camembert
        currentPlayer.points += 1;
  
        // Activer le mode camembert après 3 bonnes réponses
        if (currentPlayer.points === 3) {
          setIsCamembertRound(true);
          alert("Tu peux choisir une catégorie pour tenter un camembert !");
        } else {
          // Passer à la question suivante
          setNextQuestion();
        }
      }
    } else {
      // Réinitialiser les points et passer au joueur suivant
      resetRound();
    }
  };
  
  
  
  const resetRound = () => {
    const currentPlayer = players[currentPlayerIndex];
    currentPlayer.points = 0; // Réinitialiser les points
    setIsCamembertRound(false); // Désactiver le mode camembert
    nextPlayer(); // Passer au joueur suivant
  };

  const nextPlayer = () => {
    setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % players.length);
    setNextQuestion();
  };

  const hasWon = (player: Player) => player.camemberts.length === categories.length;

  const remainingCamemberts = (player: Player) => categories.length - player.camemberts.length;

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl mb-6">Tour de {players[currentPlayerIndex].name}</h1>
      <h2 className="text-lg mb-6">Catégorie actuelle : {currentCategory}</h2>

      <div className="mt-4">
  {categories.map((cat) => {
    const currentPlayer = players[currentPlayerIndex];
    const isCategoryWon = currentPlayer.camemberts.includes(cat);
    const isDisabled = isCamembertRound
      ? isCategoryWon // Désactiver les catégories où le camembert est déjà gagné
      : false;

    return (
      <button
        key={cat}
        onClick={() => {
          if (isCamembertRound) {
            setCurrentCategory(cat); // Choisir la catégorie pour la question camembert
            setNextQuestion(); // Charger une question de cette catégorie
          } else {
            setCurrentCategory(cat); // Changer la catégorie normalement
          }
        }}
        className={`px-4 py-2 ${
          cat === currentCategory
            ? "bg-blue-700"
            : isDisabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gray-500"
        } text-white rounded`}
        disabled={isDisabled}
      >
        {cat}
      </button>
    );
  })}
</div>



      <div className="mb-6">
        <p className="text-xl">{currentQuestion?.question}</p>
        <p className="text-sm text-gray-500">(Réponse : {currentQuestion?.answer})</p>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={() => handleAnswer(true)}
          className="px-6 py-3 bg-green-500 text-white font-bold rounded"
        >
          Bon
        </button>
        <button
          onClick={() => handleAnswer(false)}
          className="px-6 py-3 bg-red-500 text-white font-bold rounded"
        >
          Pas bon
        </button>
      </div>

      <div className="mt-6">
        {players.map((player) => (
          <div key={player.name}>
            <p>
              {player.name} : {player.camemberts.join(", ") || "Aucun"} (Points : {player.points})
            </p>
            <p className="text-sm text-gray-500">
              Camemberts restants : {remainingCamemberts(player)}
            </p>
          </div>
        ))}
      </div>

      {players.map((player) => hasWon(player) && (
        <div key={player.name} className="mt-6 text-xl font-bold">
          Félicitations {player.name}, tu as gagné !
        </div>
      ))}
    </div>
  );
}

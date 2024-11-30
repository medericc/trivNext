"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  initializePlayers,
  nextPlayer,
  incrementPoints,
  resetPoints,
  addCamembert,
  resetGame,
  toggleCamembertRound,
} from "../store/gameSlice"; // Remplace par le chemin réel de gameSlice
import { RootState } from "../store";
import questionsData from "../data/questions";
import shuffleArray from "../utils/shuffleArray"; // Remplace par ton utilitaire de mélange
import { addUsedQuestion } from "../store/gameSlice"; // Assure-toi que le chemin est correct

export default function GamePage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { players, currentPlayerIndex, isCamembertRound, usedQuestions } = useSelector(
    (state: RootState) => state.game
  );

  const [currentQuestion, setCurrentQuestion] = useState<{
    question: string;
    answer: string;
    category: string;
  } | null>(null);

  const [showAnswer, setShowAnswer] = useState(false);
  const [modalMessage, setModalMessage] = useState<string | null>(null);

  const categories = Object.keys(questionsData);

  // Initialisation des joueurs depuis localStorage
  useEffect(() => {
    const player1 = localStorage.getItem("player1");
    const player2 = localStorage.getItem("player2");

    if (!player1 || !player2) {
      setModalMessage("Les joueurs ne sont pas définis, retour à l'accueil.");
      setTimeout(() => router.push("/"), 2000);
    } else {
      dispatch(
        initializePlayers([
          { name: player1, points: 0, camemberts: [] },
          { name: player2, points: 0, camemberts: [] },
        ])
      );
      setNextQuestion();
    }
  }, [dispatch, router]);

  useEffect(() => {
    if (players.length > 0) {
      setNextQuestion();
    }
  }, [players, currentPlayerIndex, isCamembertRound]);

  // Fonction pour sélectionner la prochaine question
  const setNextQuestion = () => {
    const player = players[currentPlayerIndex];

    const availableCategories = isCamembertRound
      ? categories.filter(
          (cat) =>
            !player.camemberts.map((c) => c.toLowerCase().trim()).includes(cat.toLowerCase().trim())
        )
      : categories;

    if (availableCategories.length === 0) {
      if (isCamembertRound) {
        setModalMessage(`${player.name} a déjà tous les camemberts disponibles !`);
        dispatch(toggleCamembertRound(false));
        setNextQuestion();
      } else {
        setModalMessage("Toutes les catégories ont été complétées !");
      }
      return;
    }

    const selectedCategory = shuffleArray(availableCategories)[0];
    const shuffledQuestions = shuffleArray(questionsData[selectedCategory]);

    const availableQuestions = shuffledQuestions.filter(
      (q) => !usedQuestions.includes(q.question)
    );

    if (availableQuestions.length === 0) {
      setModalMessage(`Plus de questions disponibles dans la catégorie ${selectedCategory} !`);
      return;
    }

    const question = availableQuestions[0];
    setCurrentQuestion({
      question: question.question,
      answer: question.answer,
      category: selectedCategory,
    });

    dispatch(addUsedQuestion(question.question));
  };

  // Fonction pour gérer les réponses
  const handleAnswer = (isCorrect: boolean) => {
    const player = players[currentPlayerIndex];

    if (isCorrect) {
      if (isCamembertRound) {
        dispatch(addCamembert(currentQuestion?.category || ""));
        setModalMessage(
          `${player.name} gagne un camembert ${currentQuestion?.category} !`
        );

        const hasAllCamemberts = categories.every((cat) =>
          player.camemberts.includes(cat)
        );

        if (hasAllCamemberts) {
          setModalMessage(`${player.name} a gagné la partie !`);
          setTimeout(() => {
            dispatch(resetGame());
            router.push("/");
          }, 2000);
          return;
        }

        dispatch(toggleCamembertRound(false));
        dispatch(resetPoints());
        dispatch(nextPlayer());
      } else {
        dispatch(incrementPoints());
        if (player.points + 1 === 3) {
          dispatch(toggleCamembertRound(true));
          setModalMessage(
            `QUESTION CAMEMBERT !`
          );
        }
      }
    } else {
      if (isCamembertRound) {
        setModalMessage(`${player.name} rate la question camembert !`);
        dispatch(toggleCamembertRound(false));
      }
      dispatch(resetPoints());
      dispatch(nextPlayer());
    }

    setNextQuestion();
  };

  if (!players.length) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white">
      {modalMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 shadow-xl text-black max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Information</h2>
            <p>{modalMessage}</p>
            <button
              onClick={() => setModalMessage(null)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <h1 className="text-4xl font-bold mb-6">
        Tour de {players[currentPlayerIndex]?.name}
      </h1>
      <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-xl font-semibold">
          Catégorie : {currentQuestion?.category}
        </h2>
        <p className="text-lg mt-4">{currentQuestion?.question}</p>
        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? "Cacher" : "Révéler"} la réponse
        </button>
        {showAnswer && (
          <p className="text-sm text-gray-700 mt-4">Réponse : {currentQuestion?.answer}</p>
        )}
      </div>
      <div className="flex space-x-4 mt-6">
        <button
          onClick={() => handleAnswer(true)}
          className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition"
        >
          Répondre Correctement
        </button>
        <button
          onClick={() => handleAnswer(false)}
          className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition"
        >
          Répondre Incorrectement
        </button>
      </div>
      <div className="bg-white text-black p-4 rounded-lg shadow-lg max-w-md w-full mt-6">
        <h3 className="text-xl font-semibold mb-4">Scores</h3>
        {players.map((player, index) => (
          <p key={index} className="mb-2">
            {player.name}: {player.points} points, Camemberts:{" "}
            {player.camemberts.join(", ") || "Aucun"}
          </p>
        ))}
      </div>
    </div>
  );
}

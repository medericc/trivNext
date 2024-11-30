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
  const [showNextPlayerModal, setShowNextPlayerModal] = useState(false);
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
        setShowNextPlayerModal(true); // Afficher la modale pour le prochain joueur
        dispatch(nextPlayer());
      } else {
        dispatch(incrementPoints());
        if (player.points + 1 === 3) {
          dispatch(toggleCamembertRound(true));
          setModalMessage(`QUESTION CAMEMBERT !`);
        }
      }
    } else {
      if (isCamembertRound) {
        setModalMessage(`${player.name} rate la question camembert !`);
        dispatch(toggleCamembertRound(false));
      }
      dispatch(resetPoints());
      setShowNextPlayerModal(true); // Afficher la modale pour le prochain joueur
      dispatch(nextPlayer());
    }

    setNextQuestion();
  };
  if (!players.length) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-blue-800 flex flex-col items-center justify-center text-white">
  {modalMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 shadow-2xl text-black max-w-md w-full">
            <h2 className="text-2xl font-extrabold mb-4 text-center text-gradient bg-gradient-to-r from-gray-500 to-blue-500 text-transparent bg-clip-text">
              Information
            </h2>
            <p className="text-center">{modalMessage}</p>
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setModalMessage(null)}
                className="bg-gradient-to-r from-gray-500 to-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
  
  {showNextPlayerModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 shadow-2xl text-black max-w-md w-full">
            <p className="text-center">À TON TOUR !</p>
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowNextPlayerModal(false)}
                className="bg-gradient-to-r from-gray-500 to-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
              >
                Continuer
              </button>
            </div>
          </div>
        </div>
      )}
      <h1 className="text-3xl font-extrabold mb-8 text-gradient bg-gradient-to-r from-gray-300 to-blue-400 text-transparent bg-clip-text">
        Tour de {players[currentPlayerIndex]?.name}
      </h1>
  
      <div className="bg-white text-black p-8  shadow-xl max-w-lg w-full text-center">
        <h2 className="text-2xl font-semibold text-gradient bg-gradient-to-r from-gray-500 to-blue-500 text-transparent bg-clip-text">
          {currentQuestion?.category}
        </h2>
        <p className="text-lg mt-4">{currentQuestion?.question}</p>
        <button
          className="mt-6 bg-gradient-to-r from-blue-500 to-gray-500 text-white py-2 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? "Cacher" : "Révéler"} la réponse
        </button>
        {showAnswer && (
          <p className="text-md text-gray-700 mt-4">
            Réponse : {currentQuestion?.answer}
          </p>
        )}
      </div>
  
      <div className="flex space-x-4 mt-6">
  <button
    onClick={() => handleAnswer(true)}
    className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2.5 px-8 rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition duration-300 text-sm"
  >
   VRAI
  </button>
  <button
    onClick={() => handleAnswer(false)}
    className="bg-gradient-to-r from-red-500 to-red-700 text-white py-2.5 px-8 rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition duration-300 text-sm"
  >
    FAUX
  </button>
</div>

  
      <div className="bg-white text-black p-6 shadow-xl max-w-lg w-full mt-8">
        <h3 className="text-2xl text-center font-bold text-gradient bg-gradient-to-r from-blue-500 to-gray-600 text-transparent bg-clip-text mb-6">
          Scores
        </h3>
        {players.map((player, index) => (
          <div
            key={index}
            className="flex justify-between items-center mb-4 border-b pb-2 last:border-none last:pb-0"
          >
            <span className="font-medium">{player.name}</span>
            <span className="text-sm text-gray-600">
              {player.points}/3, Camemberts :{" "}
              {player.camemberts.length > 0 ? player.camemberts.length : "Aucun"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
  
}

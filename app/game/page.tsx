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

  const categories = Object.keys(questionsData);

  // Initialisation des joueurs depuis localStorage
  useEffect(() => {
    const player1 = localStorage.getItem("player1");
    const player2 = localStorage.getItem("player2");

    if (!player1 || !player2) {
      alert("Les joueurs ne sont pas définis, retour à l'accueil.");
      router.push("/");
    } else {
      dispatch(initializePlayers([{ name: player1, points: 0, camemberts: [] }, { name: player2, points: 0, camemberts: [] }]));
      setNextQuestion(); // Préparer la première question
    }
  }, [dispatch, router]);
useEffect(() => {
  if (players.length > 0) {
    setNextQuestion();
  }
}, [players, currentPlayerIndex, isCamembertRound]);

  // Fonction pour sélectionner la prochaine question
// Fonction pour passer à la question suivante
const setNextQuestion = () => {
  
const setNextQuestion = () => {
  console.log("État Redux des joueurs :", players);
  const player = players[currentPlayerIndex]; // Joueur actuel
  console.log("Joueur actuel :", player);
  console.log("Camemberts actuels :", player.camemberts);

  const availableCategories = isCamembertRound
    ? categories.filter(
        (cat) =>
          !player.camemberts.map((c) => c.toLowerCase().trim()).includes(cat.toLowerCase().trim())
      )
    : categories;

  console.log("Catégories disponibles après filtrage :", availableCategories);

  if (availableCategories.length === 0) {
    if (isCamembertRound) {
      alert(`${player.name} a déjà tous les camemberts disponibles !`);
      dispatch(toggleCamembertRound(false));
      setNextQuestion(); // Revenir à une question normale
    } else {
      alert("Toutes les catégories ont été complétées !");
    }
    return;
  }

  const selectedCategory = shuffleArray(availableCategories)[0];
  const shuffledQuestions = shuffleArray(questionsData[selectedCategory]);

  const availableQuestions = shuffledQuestions.filter(
    (q) => !usedQuestions.includes(q.question)
  );

  if (availableQuestions.length === 0) {
    alert(`Plus de questions disponibles dans la catégorie ${selectedCategory} !`);
    return;
  }

  const question = availableQuestions[0];
  setCurrentQuestion({
    question: question.question,
    answer: question.answer,
    category: selectedCategory,
  });

  dispatch(addUsedQuestion(question.question)); // Ajouter à la liste des questions utilisées
};

  const player = players[currentPlayerIndex]; // Récupérer le joueur actuel
  const availableCategories = isCamembertRound
  
    ? categories.filter((cat) => !player.camemberts.includes(cat)) // Exclure les catégories déjà gagnées
    : categories;
    console.log("Catégories disponibles :", availableCategories);

  if (availableCategories.length === 0) {
    if (isCamembertRound) {
      alert(`${player.name} a déjà tous les camemberts disponibles !`);
      dispatch(toggleCamembertRound(false)); // Revenir à la phase normale
      setNextQuestion(); // Relancer une question dans la phase normale
    } else {
      alert("Toutes les catégories ont été complétées !");
    }
    return;
  }

  const selectedCategory = shuffleArray(availableCategories)[0];
  const shuffledQuestions = shuffleArray(questionsData[selectedCategory]);

  const availableQuestions = shuffledQuestions.filter(
    (q) => !usedQuestions.includes(q.question)
  );

  if (availableQuestions.length === 0) {
    alert(`Plus de questions disponibles dans la catégorie ${selectedCategory} !`);
    return;
  }

  const question = availableQuestions[0];
  setCurrentQuestion({
    question: question.question,
    answer: question.answer,
    category: selectedCategory,
  });
  dispatch(addUsedQuestion(question.question)); // Ajouter la question utilisée
};



  // Fonction pour gérer les réponses
  const handleAnswer = (isCorrect: boolean) => {
    const player = players[currentPlayerIndex]; // Joueur actuel
  
    if (isCorrect) {
      if (isCamembertRound) {
        // Ajouter un camembert et sortir de la phase camembert
        dispatch(addCamembert(currentQuestion?.category || ""));
        alert(
          `${player.name} gagne un camembert pour ${currentQuestion?.category} !`
        );
  
        // Vérifie si le joueur a tous les camemberts
        const hasAllCamemberts = categories.every((cat) =>
          player.camemberts.includes(cat)
        );
  
        if (hasAllCamemberts) {
          alert(`${player.name} a gagné la partie !`);
          dispatch(resetGame()); // Réinitialise le jeu
          router.push("/"); // Retour à l'accueil
          return;
        }
  
        // Revenir à la phase normale et passer au joueur suivant
        dispatch(toggleCamembertRound(false));
        dispatch(resetPoints());
        dispatch(nextPlayer());
      } else {
        // Phase normale : Incrémenter les points
        dispatch(incrementPoints());
        if (player.points + 1 === 3) {
          // Passer en phase camembert
          dispatch(toggleCamembertRound(true));
          alert(
            `${player.name} est en phase camembert pour ${currentQuestion?.category} !`
          );
        }
      }
    } else {
      // Mauvaise réponse
      if (isCamembertRound) {
        alert(`${player.name} rate la question camembert !`);
        dispatch(toggleCamembertRound(false)); // Revenir à la phase normale
      }
      dispatch(resetPoints());
      dispatch(nextPlayer());
    }
  
    setNextQuestion(); // Charger la prochaine question
  };
  
  
  if (!players.length) {
    return <p>Chargement...</p>; // Afficher un état de chargement si les joueurs ne sont pas encore initialisés
  }

  return (
    <div>
      <h1>Tour de {players[currentPlayerIndex]?.name}</h1>
      <div>
        <h2>Catégorie : {currentQuestion?.category}</h2>
        <p>Question : {currentQuestion?.question}</p>
        <p>Question : {currentQuestion?.answer}</p>
      </div>
      <button onClick={() => handleAnswer(true)}>Répondre Correctement</button>
      <button onClick={() => handleAnswer(false)}>Répondre Incorrectement</button>

      <h3>Scores</h3>
      {players.map((player, index) => (
        <p key={index}>
          {player.name}: {player.points} points, Camemberts:{" "}
          {player.camemberts.join(", ") || "Aucun"}
        </p>
      ))}
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const handleStartGame = () => {
    if (player1 && player2) {
      localStorage.setItem("player1", player1);
      localStorage.setItem("player2", player2);
      router.push("/game");
    } else {
      alert("Veuillez entrer les noms des deux joueurs !");
    }
  };

  return (
    <div className="min-h-screen bg-blue-800 flex flex-col items-center justify-center p-8">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Bienvenue sur Trivial Pursuit !
        </h1>
        <p className="text-gray-600 mb-8">
          Entrez les noms des joueurs pour commencer.
        </p>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Nom du Joueur 1"
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Nom du Joueur 2"
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            onClick={handleStartGame}
            className="px-6 py-3 bg-blue-700 text-gray-100 font-bold rounded-md hover:bg-orange-600 transition"
          >
            Commencer le jeu
          </button>
        </div>
      </div>
      <footer className="mt-12 text-gray-500 text-sm">
        © 2024 Trivial Pursuit. Tous droits réservés.
      </footer>
    </div>
  );
}

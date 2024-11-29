"use client"

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
    
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Bienvenue sur Trivial Pursuit !</h1>
      <p className="mb-8">Entrez les noms des joueurs pour commencer.</p>
      <div className="flex flex-col space-y-4 items-center">
        <input
          type="text"
          placeholder="Nom du Joueur 1"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
          className="p-2 border rounded w-1/2"
        />
        <input
          type="text"
          placeholder="Nom du Joueur 2"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
          className="p-2 border rounded w-1/2"
        />
        <button
          onClick={handleStartGame}
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded mt-4"
        >
          Commencer le jeu
        </button>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-blue-800 flex flex-col items-center justify-center p-8 text-white">
      
      <h1 className="text-4xl font-extrabold mb-6 text-gradient bg-gradient-to-r from-gray-300 to-blue-300 text-transparent bg-clip-text drop-shadow-lg">
        Trivia Biblique
      </h1>

      <div className="bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-md text-center border border-white/20">
        
        <h2 className="text-2xl font-bold text-blue-100 mb-3 drop-shadow">
          Entrez les joueurs
        </h2>

        <p className="text-blue-200 mb-8 text-sm">
          Inscrivez les noms pour démarrer la partie.
        </p>

        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Nom du Joueur 1"
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
            className="p-3 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Nom du Joueur 2"
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
            className="p-3 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <button
            onClick={handleStartGame}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-md shadow-lg hover:shadow-xl transform hover:scale-105 transition"
          >
            Commencer le jeu
          </button>
        </div>
      </div>

      <footer className="mt-12 text-blue-200/80 text-sm">
        © 2025{" "}
        <Link href="/politique" className="underline hover:text-blue-100 transition">
          BibleEnMain
        </Link>
        . Tous droits réservés.
      </footer>

    </div>
  );
}

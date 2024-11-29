"use client"

import React from "react";
import { useGame } from "../context/GameContext";

export default function PlayerStats() {
  const { players } = useGame();

  return (
    <div className="flex justify-between bg-gray-100 p-4 rounded shadow-md">
      {players.map((player, index) => (
        <div key={index} className="text-center">
          <h2 className="text-xl font-bold">{player.name}</h2>
          <p>Score : {player.score}</p>
          <div className="flex justify-center space-x-2 mt-2">
            {["Football", "Bible", "France", "Géographie", "Sport", "Général"].map((category) => (
              <div
                key={category}
                className={`w-6 h-6 rounded-full ${
                  player.camemberts.includes(category) ? "bg-green-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

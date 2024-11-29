import React from "react";

interface GameBoardProps {
  currentCategory: string;
}

export default function GameBoard({ currentCategory }: GameBoardProps) {
  return (
    <div className="bg-white p-8 rounded shadow-lg text-center">
      <h2 className="text-2xl font-bold">Catégorie actuelle</h2>
      <p className="text-lg mt-4">{currentCategory}</p>
    </div>
  );
}

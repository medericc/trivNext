import React, { createContext, useState, ReactNode, useContext } from "react";

interface Player {
  name: string;
  score: number;
  camemberts: string[];
}

interface GameContextType {
  players: Player[];
  currentPlayer: number;
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
  setCurrentPlayer: React.Dispatch<React.SetStateAction<number>>;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [players, setPlayers] = useState<Player[]>([
    { name: "Joueur 1", score: 0, camemberts: [] },
    { name: "Joueur 2", score: 0, camemberts: [] },
  ]);
  const [currentPlayer, setCurrentPlayer] = useState<number>(0);

  return (
    <GameContext.Provider value={{ players, currentPlayer, setPlayers, setCurrentPlayer }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
}

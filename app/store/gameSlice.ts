import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Player {
    name: string;
    points: number;
    camemberts: string[];
  }
interface GameState {
  players: Array<{
    name: string;
    points: number;
    camemberts: string[];
  }>;
  currentPlayerIndex: number;
  isCamembertRound: boolean;
  usedQuestions: string[]; // Changed to string array
  currentCategory: string | null;
}

const initialState: GameState = {
  players: [],
  currentPlayerIndex: 0,
  isCamembertRound: false,
  usedQuestions: [], // Changed to an array
  currentCategory: null,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    initializePlayers(state, action: PayloadAction<Player[]>) {
        state.players = action.payload;
      },
    setPlayers(state, action: PayloadAction<GameState["players"]>) {
      state.players = action.payload;
    },
    setCurrentCategory(state, action: PayloadAction<string>) {
      state.currentCategory = action.payload;
    },
    incrementPoints(state) {
      const player = state.players[state.currentPlayerIndex];
      player.points += 1;
    },
    resetPoints(state) {
      const player = state.players[state.currentPlayerIndex];
      player.points = 0;
    },
    addCamembert(state, action: PayloadAction<string>) {
      const player = state.players[state.currentPlayerIndex];
      if (!player.camemberts.includes(action.payload)) {
        player.camemberts.push(action.payload);
      }
    },
    nextPlayer(state) {
      state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;
    },
    toggleCamembertRound(state, action: PayloadAction<boolean>) {
      state.isCamembertRound = action.payload;
    },
    addUsedQuestion(state, action: PayloadAction<string>) {
      if (!state.usedQuestions.includes(action.payload)) {
        state.usedQuestions.push(action.payload); // Add to array
      }
    },
    resetUsedQuestions(state) {
      state.usedQuestions = []; // Reset array
    },
    resetGame() {
      return initialState;
    },
  },
});

export const {
    initializePlayers,
  setPlayers,
  setCurrentCategory,
  incrementPoints,
  resetPoints,
  addCamembert,
  nextPlayer,
  toggleCamembertRound,
  addUsedQuestion,
  resetUsedQuestions,
  resetGame,
} = gameSlice.actions;

export default gameSlice.reducer;

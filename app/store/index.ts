import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // Par défaut, utilise localStorage
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
import gameReducer from './gameSlice'; // Remplace par ton slice réel

// Configuration de redux-persist
const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  game: gameReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Création du store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          // Ces actions sont propres à redux-persist
          'persist/PERSIST',
          'persist/REHYDRATE',
        ],
      },
    }),
});

// Types pour le typage Redux
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// Export des instances du store et du persistor
export const persistor = persistStore(store);
export default store;

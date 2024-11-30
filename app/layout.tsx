"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // Nécessaire pour redux-persist
import store, { persistor } from "./store"; // Assurez-vous que le chemin est correct
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {/* PersistGate s'assure que le store est rehydraté avant d'afficher les enfants */}
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}

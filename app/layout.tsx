import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Trivia Biblique – Trivial Pursuit Chrétien | Quiz Biblique Gratuit",
  description:
    "Trivia Biblique est un jeu chrétien inspiré du Trivial Pursuit : quiz biblique, camemberts, défis et questions.",

  keywords: [
    "trivial pursuit chrétien",
    "trivia biblique",
    "quiz bible",
    "jeu chrétien",
    "jeu biblique",
    "trivial chrétien",
    "christian trivia",
    "quiz chrétien",
  ],

  openGraph: {
    title: "Trivia Biblique – Trivial Pursuit Chrétien",
    description:
      "Le meilleur quiz biblique façon Trivial Pursuit : camemberts, questions et multijoueur.",
    url: "https://jeu-trivia-biblique.vercel.app/",
    siteName: "Trivia Biblique",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Trivia Biblique - Trivial Pursuit Chrétien",
      },
    ],
    type: "website",
    locale: "fr_FR",
  },

  twitter: {
    card: "summary_large_image",
    title: "Trivia Biblique – Trivial Pursuit Chrétien",
    description:
      "Jeu chrétien inspiré du Trivial Pursuit. Gratuit, familial, multijoueur.",
    images: ["/preview.jpg"],
  },

  // 🟨 Tous les favicons + apple + manifest
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180" }
    ],
    shortcut: ["/favicon.ico"],
  },

  manifest: "/site.webmanifest",

  metadataBase: new URL("https://jeu-trivia-biblique.vercel.app/"),
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>

        <Analytics />
      </body>
    </html>
  );
}

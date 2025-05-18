export default function PolitiqueConfidentialite() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Politique de confidentialité</h1>

      <p className="mb-4">
        Nous respectons votre vie privée. En visitant notre site, vous acceptez que des cookies soient utilisés pour analyser le trafic et personnaliser les annonces via Google AdSense.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Cookies</h2>
      <p className="mb-4">
        Nous utilisons des cookies pour améliorer l’expérience utilisateur et fournir des publicités personnalisées via le service Google AdSense. Ces cookies peuvent suivre votre navigation sur ce site et d’autres sites.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Google AdSense</h2>
      <p className="mb-4">
        Google peut utiliser des cookies pour diffuser des annonces basées sur vos visites précédentes sur ce site ou d’autres sites. Vous pouvez en savoir plus sur l’utilisation des données par Google ici :{" "}
        <a
          href="https://policies.google.com/technologies/ads"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://policies.google.com/technologies/ads
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Vos droits</h2>
      <p className="mb-4">
        Vous pouvez désactiver les cookies dans les paramètres de votre navigateur ou en visitant la page suivante :{" "}
        <a
          href="https://www.aboutads.info/choices/"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.aboutads.info/choices/
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
      <p>
        Pour toute question, veuillez nous contacter à :{" "}
        <a href="mailto:ton@email.com" className="text-blue-600 underline">
          ton@email.com
        </a>
      </p>
    </div>
  );
}

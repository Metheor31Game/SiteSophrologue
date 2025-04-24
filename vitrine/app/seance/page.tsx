export default function SeancePage() {
  return (
    <div className="bg-blanc-casse rounded-xl text-center p-6">
      <h1 className="text-4xl font-bold text-vert-fonce mb-6">
        Une séance type
      </h1>

      <p className="text-lg text-marron-doux leading-relaxed mb-6">
        Déroulement d'une séance{" "}
      </p>

      <div className="bg-beige-sable shadow-md rounded-xl p-6 mb-6 w-full max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-marron-doux mb-4"></h2>
        <p className="text-marron-doux leading-relaxed mb-4">
          Toute séance commence par un temps d’écoute où la personne exprime ses
          besoins et ses motivations.
          <br></br>
          <br></br>
          Ensuite, la séance se poursuit la plupart du temps par quelques
          exercices de respiration et des mouvements très simple pour prendre
          conscience de son corps, se concentrer et commencer à se détendre
          <br></br>
          <br></br>
          Puis, je vous guiderai dans une séance de relaxation qui pourra faire
          appel à différentes techniques, comme des visualisations d’images
          positives par exemple.
          <br></br>
          <br></br>
          La séance se termine par un échange durant lesquels vous pourrez
          exprimer votre ressenti. Je pourrais éventuellement vous proposer des
          exercices à faire dans votre quotidien.
          <br></br>
          <br></br>
          La sophrologie propose de nombreuses techniques qui permettent
          d’apprendre à se relâcher et à trouver à l’intérieur de soi les
          ressources pour se sentir mieux et faire face aux évènements de la
          vie.
        </p>
      </div>
      {/* Appel à l'action */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-marron-doux mb-2">
          🌟 Prêt à franchir le cap ?!
        </h2>
        <p className="text-lg text-marron-doux mb-4">Prenez rendez-vous !</p>
        <a
          href="/contact"
          className="bg-vert-fonce text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-vert-doux transition"
        >
          📅 Prendre rendez-vous
        </a>
      </div>
    </div>
  );
}

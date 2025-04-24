export default function HomePage() {
  return (
    <div className="bg-blanc-casse rounded-xl text-center p-6">
      <h1 className="text-4xl font-bold text-vert-fonce mb-6">
        Sophrologue
      </h1>

      <p className="text-lg text-marron-doux leading-relaxed mb-6">
        Raji Elmasri{" "}
      </p>

      <div className="bg-beige-sable shadow-md rounded-xl p-6 mb-6 w-full max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-marron-doux mb-4"></h2>
        <p className="text-marron-doux leading-relaxed mb-4">
          <ul>
            <li>Mieux gérer son stress et ses émotions</li>
            <li>Développer la confiance en soi</li>
            <li>Lutter contre les troubles du sommeil</li>
            <li>Apprendre à mieux maîtriser son mental</li>
            <li>Préparer un examen...</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-blanc-casse rounded-xl text-center p-6">
      <h1 className="text-4xl font-bold text-vert-fonce mb-6">Raji Elmasri </h1>

      <p className="text-lg text-marron-doux leading-relaxed mb-6">
        📜 Sophrologue d&apos;iplômé de l&apos;ISSO
      </p>

      <div className="bg-beige-sable shadow-md rounded-xl p-6 mb-6 w-full max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-marron-doux mb-4"></h2>
        <p className="text-vert-fonce leading-relaxed mb-4"> </p>
        <ul>
          <li>Mieux gérer son stress et ses émotions</li>
          <br></br>
          <li>Développer la confiance en soi</li>
          <br></br>
          <li>Lutter contre les troubles du sommeil</li>
          <br></br>
          <li>Apprendre à mieux maîtriser son mental</li>
          <br></br>
          <li>Préparer un examen...</li>
        </ul>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="text-center p-6 bg-background text-foreground">
      <h1 className="text-3xl font-bold text-vert-fonce mb-4">Contact</h1>
      <p className="text-lg mb-6 text-marron-doux">Prenez rendez-vous ou posez vos questions.</p>
      
      {/* Carte de visite */}
      <div className="bg-beige-sable shadow-md rounded-xl p-6 mb-6 w-full max-w-md mx-auto">
        <h2 className="text-xl font-semibold text-marron-doux">Jean Dupont</h2>
        <p className="text-marron-doux">Sophrologue certifié</p>
        <p className="text-marron-doux mt-2">123 Rue du Bien-Être, 75000 Paris</p>
        <p className="text-marron-doux">Tél: 01 23 45 67 89</p>
        <p className="text-marron-doux">Email: contact@sophrologie.fr</p>
      </div>
      
      {/* Horaires */}
      <div className="bg-beige-sable shadow-md rounded-xl p-6 w-full max-w-md mx-auto">
        <h2 className="text-xl font-semibold text-marron-doux mb-4">Horaires d'ouverture</h2>
        <table className="w-full text-left border-collapse">
          <tbody>
            {[
              ["Lundi", "9h - 12h", "14h - 18h"],
              ["Mardi", "9h - 12h", "14h - 18h"],
              ["Mercredi", "9h - 12h", "14h - 18h"],
              ["Jeudi", "9h - 12h", "14h - 18h"],
              ["Vendredi", "9h - 12h", "14h - 17h"],
              ["Samedi", "10h - 13h", "Fermé"],
              ["Dimanche", "Fermé", "Fermé"],
            ].map(([jour, matin, apresMidi]) => (
              <tr key={jour} className="border-t border-vert-clair">
                <td className="py-2 font-medium text-vert-fonce">{jour}</td>
                <td className="py-2 text-vert-fonce">{matin}</td>
                <td className="py-2 text-vert-fonce">{apresMidi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

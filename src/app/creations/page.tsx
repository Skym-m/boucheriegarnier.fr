import "@/app/styles/creations.css";

export default function Creations() {
  return (
    <section id="creations">
      <div className="creations">
        <h1>
          <span className="weight">NOS</span> CREATIONS
        </h1>
        <h2>Nos créations</h2>
        <h4>
          L&apos;équipe de la Maison GARNIER a toujours de bonnes idées et vous propose des créations diverses et
          variées pour répondre à vos attentes.
          <br />
          A vous de choisir !
          <br />
          <br />
          Un devis pourra être réalisé à votre demande
        </h4>

        <div className="image-grid">
          <img src="/creations/barquette-savoyarde.jpg" alt="Barquette savoyarde" className="tall" />
          <img src="/creations/chair-a-saucisse.jpg" alt="Chair à saucisse" className="wide" />
          <img src="/creations/crique-chair-a-saucisse.jpg" alt="Crique chair à saucisse" className="tall" />
          <img src="/creations/fondant-savoyard.jpg" alt="Fondant savoyard" className="tall" />
          <img src="/creations/burgers.jpg" alt="Burgers maison" className="wide" />
          <img src="/creations/paupiettes-citron.jpg" alt="Paupiettes au citron" className="tall" />
          <img src="/creations/legumes.jpg" alt="Préparation de légumes" className="tall" />
          <img src="/creations/verrines-saumon.jpg" alt="Verrines au saumon" className="wide" />
        </div>
      </div>
    </section>
  );
}

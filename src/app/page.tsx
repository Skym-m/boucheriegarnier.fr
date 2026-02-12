export default function Accueil() {
  return (
    <>
      <div className="welcome">
        <img src="/accueil/logo.png" alt="Logo Maison Garnier" />
      </div>

      <section id="about">
        <div className="about">
          <h1>
            <span className="weight">LA</span> MAISON GARNIER
          </h1>
          <h2>Bienvenue</h2>
          <h4>
            La Maison GARNIER située à proximité du centre-ville de Montélimar et au sein d’un espace commercial est
            heureuse de vous accueillir du Mardi au Samedi de 6h30 à 19h.
            <br />
            Un parking est à votre disposition devant le magasin.
            <br />
            Une équipe souriante, dynamique et compétente vous proposera des produits pour toutes vos envies : bœuf,
            veau, agneau, porc, charcuterie et tant d’autres, des produits de qualité avec une origine contrôlée.
          </h4>
        </div>
        <div className="image-grid">
          <img src="/accueil/vitrine.jpg" alt="Vitrine de la boutique" />
          <img src="/accueil/plat-1.jpg" alt="Préparation traiteur 1" />
          <img src="/accueil/equipe.jpg" alt="Équipe Maison Garnier" />
          <img src="/accueil/plat-2.jpg" alt="Préparation traiteur 2" />
        </div>
      </section>

      <section id="breeders">
        <h1>PORTRAIT DE NOS ELEVEURS</h1>
        <div className="breeders">
          <div className="cards">
            <img src="/accueil/1.jpg" alt="Famille Sevenier à Berzème" />
            <h2>Famille SEVENIER à Berzème</h2>
            <h4>
              Au GAEC de Chaix, Serge Sevenier, son fils Rémi et sa belle-fille Mathilde Florenson élèvent 60 vaches
              allaitantes et 200 brebis sur 200 hectares. Éleveurs passionnés depuis plus de 40 ans, ils nourrissent
              leurs animaux avec des céréales et les fourrages de l’exploitation. Le bien-être animal est leur
              priorité : les animaux passent avant tout. Leur fierté est de voir leurs bêtes en bonne santé et en
              confiance. Partenaires de longue date avec Thierry, ils défendent les circuits courts pour plus de
              transparence et de proximité.”
            </h4>
          </div>
          <div className="cards">
            <img src="/accueil/2.jpg" alt="Jean Christophe Labeille à Saint Martin sur Lavezon" />
            <h2>Jean Christophe LABEILLE à St Martin sur Lavezon</h2>
            <h4>
              Installé depuis 1994, M. Labeille élève avec passion ses bovins sur près de 100 hectares de prairies
              ardéchoises. Ses bêtes vivent en plein air toute l’année et sont nourries exclusivement avec les
              céréales cultivées sur l’exploitation, un mélange équilibré d’orge et de maïs, sans granulés.
              L’éleveur réalise l’engraissement à la ferme, garantissant ainsi une viande tracée, savoureuse et issue
              d’un élevage respectueux du bien-être animal. Fidèle partenaire de Thierry depuis plus de 15 ans, M.
              Labeille incarne les valeurs que nous défendons : qualité, transparence et production locale au service
              du goût.”
            </h4>
          </div>
          <div className="cards">
            <img src="/accueil/3.jpg" alt="Famille Sevenier à Saint-Pons" />
            <h2>Famille SEVENIER à Saint-Pons</h2>
            <h4>
              À Saint-Pons, Cyril et Jérémy Sevenier dirigent le GAEC de la Selve depuis 2006. Ils élèvent 40 vaches,
              100 chèvres et des veaux sur 150 hectares. Le troupeau est nourri principalement au foin, dans un
              environnement respectueux. Leur plaisir : être au milieu des bêtes et constater qu’elles se sentent
              bien. Engagés auprès de Thierry depuis près de 30 ans, ils misent sur les circuits courts pour valoriser
              leur production et renforcer la confiance avec les consommateurs.“
            </h4>
          </div>
        </div>
      </section>

      <section id="location">
        <div className="location">
          <h1>
            <span className="weight">NOUS</span> TROUVER
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d298.7708063564446!2d4.754766960115389!3d44.56832337598007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b56ae38dcaf0e3%3A0x75e33a4852743965!2s51%20Avenue%20St%20Lazare%2C%2026200%20Mont%C3%A9limar!5e0!3m2!1sfr!2sfr!4v1727798356677!5m2!1sfr!2sfr"
            width="800"
            height="300"
            title="Localisation Maison Garnier"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <h4>
            PAR TÉLÉPHONE : 04 75 01 53 21
            <br />
            <br />
            ADRESSE : 51 Avenue St Lazare, 26200 Montélimar
            <br />
            <br />
            FACEBOOK : MAISON GARNIER
          </h4>
        </div>
      </section>

      <section id="history">
        <div className="history">
          <h1>
            <span className="weight">L&apos;HISTOIRE DE LA</span> MAISON GARNIER
          </h1>
          <h4>
            La boucherie GARNIER existe depuis 1930. Elle s’appelait alors &quot;Au sacrifice&quot; et se trouvait au
            centre-ville.
            <br />
            En 1964, Ida et Marcel GARNIER reprennent le magasin, changent le nom puis le transmettent à leur fils
            Gérard en 1992.
            <br />
            <br />
            Des années plus tard, le magasin se déplace non loin de là, Avenue St Lazare pour être plus facilement
            accessible. Gérard GARNIER, doué d’une capacité relationnelle innée se consacre toute sa vie à sa
            boutique.
            <br />
            Proche de la retraite, il choisit lui-même son successeur et décide de transmettre son œuvre à un de ses
            anciens apprentis, Thierry VEYRENCHE.
            <br />
            <br />
            Et c’est ainsi que celui-ci acquiert en 2020 un second magasin après celui du Teil.
            <br />
            Tout en gardant l’âme de la boucherie GARNIER, Thierry VEYRENCHE a repris la méthode des anciens et
            propose des viandes issues d’élevages des alentours où il se rend lui-même pour sélectionner les
            meilleures bêtes.
            <br />
            En juin 2024, des travaux sont réalisés afin d’agrandir, moderniser le magasin et améliorer la qualité de
            la prestation. Et en septembre 2024, la boucherie GARNIER devient Maison GARNIER pour vous servir.
          </h4>
        </div>
        <img
          src="/accueil/thierry-veyrenche-gerard-garnier.jpg"
          alt="Thierry Veyrenche et Gérard Garnier"
        />
      </section>
    </>
  );
}

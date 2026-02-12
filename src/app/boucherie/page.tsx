import "@/app/styles/boucherie.css";

export default function Boucherie() {
  return (
    <>
      <section id="boucherie">
        <div className="boucherie">
          <h1>
            <span className="weight">LA</span> BOUCHERIE
          </h1>
          <h2>Nos produits</h2>
          <h4>
            Toutes les bêtes sont sélectionnées par nos soins en Ardèche ou dans la Drôme.
            <br />
            La viande est ensuite travaillée dans nos ateliers à St Privat ou au Teil.
            <br />
            Les bouchers connaissent tous parfaitement l’origine des produits, les éleveurs et les conditions
            d’élevage.
            <br />
            Ils sauront aussi vous conseiller pour les modes de préparation ou de cuisson. N’hésitez pas à les
            solliciter !
            <br />
          </h4>
        </div>

        <img
          src="/boucherie/coupe.jpg"
          alt="Découpe de viande en atelier"
          width="200"
          height="300"
          className="random-size-image"
        />
        <img
          src="/boucherie/etalage-1.jpg"
          alt="Étalage de la boucherie"
          width="260"
          height="280"
          className="random-size-image"
        />
        <img
          src="/boucherie/rotis.jpg"
          alt="Sélection de rôtis en vitrine"
          width="270"
          height="360"
          className="random-size-image"
        />
      </section>
      <section id="especes">
        <div className="espece boeuf">
          <h4>Toute l’année du bœuf français d’origine locale</h4>
          <img src="/boucherie/boeuf.png" alt="Illustration de bœuf" />
        </div>
        <div className="espece fin gras">
          <h4>De février à juin Le Fin Gras du Mézenc, une viande persillée au goût unique</h4>
          <img src="/boucherie/fin-gras.png" alt="Label Fin Gras du Mézenc" />
        </div>
        <div className="espece veau">
          <img src="/boucherie/veau.jpg" alt="Morceau de veau" />
          <h4>Le Veau : une viande rosée tendre à souhait</h4>
        </div>
        <div className="espece agneau">
          <h4>L’Agneau des montagnes ardéchoises</h4>
          <img src="/boucherie/agneau.jpg" alt="Morceau d'agneau" />
        </div>
        <div className="espece porc">
          <img src="/boucherie/porc.jpg" alt="Morceau de porc" />
          <h4>Le porc, élevé en plein air en région Rhône Alpes Auvergne avec une alimentation sans OGM</h4>
        </div>
        <div className="espece volaille">
          <h4>Des volailles fermières élevées en Drôme provençale</h4>
          <img src="/boucherie/volaille.png" alt="Illustration de volaille" />
        </div>
      </section>
    </>
  );
}

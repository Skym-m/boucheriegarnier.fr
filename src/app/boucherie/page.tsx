import '@/app/styles/boucherie.css'

export default function Home() {
    return (
        <>
            <section id="boucherie">
                <div className="boucherie">
                    <h1><span className="weight">LA</span> BOUCHERIE</h1>
                    <h2>Nos produits</h2>
                    <h4>Toutes les bêtes sont sélectionnées par nos soins en Ardèche ou dans la Drôme.<br />
                        La viande est ensuite travaillée dans nos ateliers à St Privat ou au Teil.<br />
                        Les bouchers connaissent tous parfaitement l’origine des produits, les éleveurs et les conditions d’élevage.<br />
                        Ils sauront aussi vous conseiller pour les modes de préparation ou de cuisson. N’hésitez pas à les solliciter !<br />
                        <br />Toute l’année du bœuf français d’origine locale.<br />
                        De février à juin le Fin Gras du Mézenc, une viande persillée au goût unique.<br />
                    </h4>
                    <div className='fin-gras'>
                        <img src="/boucherie/fin-gras.png" alt="" />
                    </div>
                    <h4>
                        Veau : une viande rosée tendre à souhait.<br />
                        L’Agneau des montagnes ardéchoises<br />
                        Le porc, élevé en plein air en région Rhône Alpes Auvergne avec une alimentation sans OGM.
                    </h4>
                </div>

                <img src="/boucherie/coupe.jpg" alt="" width="200" height="300" className="random-size-image" />
                <img src="/boucherie/etalage-1.jpg" alt="" width="260" height="280" className="random-size-image" />
                <img src="/boucherie/etalage-2.jpg" alt="" width="230" height="320" className="random-size-image" />
                <img src="/boucherie/etalage-3.jpg" alt="" width="250" height="340" className="random-size-image" />
                <img src="/boucherie/rotis.jpg" alt="" width="270" height="360" className="random-size-image" />

            </section>
        </>
    )
}
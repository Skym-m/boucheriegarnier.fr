import '@/app/styles/epicerie.css'

export default function Home() {
    return (
        <>
            <section id="epicerie">
                <div className="epicerie">
                    <h1><span className="weight">L'</span>EPICERIE</h1>
                    <h2>Le rayon</h2>
                    <h4>Les fromages : Picodons de Dieulefit, St Marcelin, St Félicien, Tome du Larzac, brie, morbier, raclette tout un panel de nos régions.
                    <br/>Des vins, rouge, rosé ou blanc en cubi ou en bouteille.
                    <br/>Un peu d’épicerie : chips, bières, croutons…</h4>
                </div>
                <img src="/epicerie/burgers.jpg" alt=""></img>
                <img src="/epicerie/chair-a-saucisse.jpg" alt=""></img>
                <img src="/epicerie/crique-chair-a-saucisse.jpg" alt=""></img>
                <img src="/epicerie/fondant-savoyard.jpg" alt=""></img>
                <img src="/epicerie/fromage-1.jpg" alt=""></img>
                <img src="/epicerie/fromage-2.jpg" alt=""></img>
                <img src="/epicerie/paupiettes-citron.jpg" alt=""></img>
                <img src="/epicerie/presentation.jpg" alt=""></img>
                <img src="/epicerie/verrines-saumon.jpg" alt=""></img>
            </section>
        </>
    )
}
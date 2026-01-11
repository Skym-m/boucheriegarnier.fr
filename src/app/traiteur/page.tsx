import '@/app/styles/traiteur.css'

export default function Traiteur() {
    return (
        <>
            <section id="traiteur">
                <div className="traiteur">
                    <h1><span className="weight">SERVICE</span> TRAITEUR</h1>
                    <h2>Nos préparations</h2>
                    <h4>La Maison GARNIER dispose d’un large choix de salades, entrées, plats, fabriqués au Teil avec
                        des produits frais :<br/>
                        des plats classiques que vous trouverez régulièrement, des nouvelles recettes au fil du temps,
                        ou encore des plats au rythme des saisons<br/>

                        <br/>Que ce soit des salades composées froides ou des viandes en sauce à faire réchauffer chez
                        soi, il y en a pour tous les goûts.</h4>

                    <h2>La carte</h2>
                    <img src="/traiteur/carte.jpg" alt="" className='carte'></img>

                    <div className="image-grid">
                        <img src="/traiteur/preparation-1.jpg" alt=""></img>
                        <img src="/traiteur/preparation-2.jpg" alt=""></img>
                        <img src="/traiteur/preparation-3.jpg" alt=""></img>
                        <img src="/traiteur/salade.jpg" alt=""></img>
                        <img src="/traiteur/vitrine-1.jpg" alt=""></img>
                        <img src="/traiteur/vitrine-2.jpg" alt=""></img>
                        <img src="/traiteur/verrines.jpg" alt=""></img>
                        <img src="/traiteur/presentation.jpg" alt=""></img>
                    </div>
                </div>
            </section>
        </>
    )
}

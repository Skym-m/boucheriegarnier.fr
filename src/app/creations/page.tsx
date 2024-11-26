import '@/app/styles/creations.css'

export default function Home() {
    return (
        <>
            <section id="creations">
                <div className="creations">
                    <h1><span className="weight">NOS</span> CREATIONS</h1>
                    <h2>Nos créations</h2>
                    <h4>L&apos;équipe de la Maison GARNIER a toujours de bonnes idées et vous propose des créations diverses et variées pour répondre à vos attentes.<br />
                        A vous de choisir !<br />

                        <br />Un devis pourra être réalisé à votre demande</h4>

                    <div className="image-grid">
                        <img src="/creations/barquette-savoyarde.jpg" alt="" className='tall'></img>
                        <img src="/creations/chair-a-saucisse.jpg" alt="" className='wide'></img>
                        <img src="/creations/crique-chair-a-saucisse.jpg" alt="" className='tall'></img>
                        <img src="/creations/fondant-savoyard.jpg" alt="" className='tall'></img>
                        <img src="/creations/paupiettes-citron.jpg" alt="" className='tall'></img>
                        <img src="/creations/legumes.jpg" alt="" className='tall'></img>
                        <img src="/creations/verrines-saumon.jpg" alt="" className='wide'></img>
                        <img src="/epicerie/burgers.jpg" alt="Burgers" className="wide" />
                        <img src="/epicerie/chair-a-saucisse.jpg" alt="Chair à saucisse" className='wide' />
                        <img src="/epicerie/crique-chair-a-saucisse.jpg" alt="Crique chair à saucisse" className="wide" />
                        <img src="/epicerie/fondant-savoyard.jpg" alt="Fondant savoyard" className='wide' />
                        <img src="/epicerie/paupiettes-citron.jpg" alt="Paupiettes citron" className="tall-wide" />
                        <img src="/epicerie/presentation.jpg" alt="Présentation" />
                        <img src="/epicerie/verrines-saumon.jpg" alt="Verrines saumon" className="tall" />
                        <img src="/epicerie/produits-1.jpg" alt="Produits divers" />
                    </div>
                </div>
            </section>
        </>
    )
}
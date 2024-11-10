import '@/app/styles/epicerie.css';

export default function Home() {
	return (
		<>
			<section id="epicerie">
				<div className="epicerie">
					<h1><span className="weight">L&apos;</span>EPICERIE</h1>
					<h2>Le rayon</h2>
					<h4>
						Des fromages : Picodons de Dieulefit, St Marcelin, St Félicien, Tome du Larzac, brie, morbier, raclette tout un panel de nos régions.
					</h4>
					<div className="image-grid">
						<img src="/epicerie/fromage-1.jpg" alt="" className='wide' />
						<img src="/epicerie/fromage-2.jpg" alt="" className='wide' />
					</div>
					<h4><br />Des vins, rouge, rosé ou blanc en cubi ou en bouteille.
						<br />Un peu d’épicerie : chips, bières, croutons…
					</h4>
				</div>
				<div className="image-grid">
					<img src="/epicerie/burgers.jpg" alt="Burgers" className="wide" />
					<img src="/epicerie/chair-a-saucisse.jpg" alt="Chair à saucisse" className='wide' />
					<img src="/epicerie/crique-chair-a-saucisse.jpg" alt="Crique chair à saucisse" className="wide" />
					<img src="/epicerie/fondant-savoyard.jpg" alt="Fondant savoyard" className='wide' />
					<img src="/epicerie/paupiettes-citron.jpg" alt="Paupiettes citron" className="tall-wide" />
					<img src="/epicerie/presentation.jpg" alt="Présentation" />
					<img src="/epicerie/verrines-saumon.jpg" alt="Verrines saumon" className="tall" />
					<img src="/epicerie/produits-1.jpg" alt="Produits divers" />
				</div>
			</section>
		</>
	);
}

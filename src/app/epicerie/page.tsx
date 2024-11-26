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
						<div className="image-grid">
							<img src="/epicerie/Epicerie-1.png" alt="" />
							<img src="/epicerie/Epicerie-2.png" alt="" />
							<img src="/epicerie/Epicerie-3.png" alt="" />
							<img src="/epicerie/Epicerie-4.png" alt="" />
						</div>
					</h4>
				</div>
			</section>
		</>
	);
}

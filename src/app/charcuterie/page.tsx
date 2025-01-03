import '@/app/styles/charcuterie.css'

export default function Charcuterie() {
	return (
		<>
			<section id="charcuterie">
				<div className="charcuterie">
					<h1><span className="weight">LA</span> CHARCUTERIE</h1>
					<h2>Notre charcuterie</h2>
					<h4>Notre charcuterie est travaillée, affinée et séchée dans nos locaux avec des recettes traditionnelles
					</h4>
					<img src="/charcuterie/hiver.jpg" alt=""></img>
					<h4>
						et à partir de viande de porc sélectionnée par nos soins.
					</h4>
					<div className='conteneur'>
						<img src="/charcuterie/coppa.jpg" alt=""></img>
						<img src="/charcuterie/pate-croute.jpg" alt=""></img>
						<img src="/charcuterie/saucisses.jpg" alt=""></img>
					</div>
					<h4>
						Vous trouverez de nombreux produits : saucisson, saucisse sèche, caillette, jambon cuit nature ou aux herbes, jambon cru, viande séchée, pâté en croute…
					</h4>
					<img src="/charcuterie/preparation-2.jpg" alt=""></img>
				</div>
			</section>
		</>
	)
}
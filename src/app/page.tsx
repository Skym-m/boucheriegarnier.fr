export default function Home() {
	return (
		<>
			<div className="welcome">
				<img src="/accueil/logo.png" alt="" />
			</div>

			<section id="about">
				<div className="about">
					<h1><span className="weight">LA</span> MAISON GARNIER</h1>
					<h2>Bienvenue</h2>
					<h4>
						La Maison GARNIER située à proximité du centre-ville de Montélimar et au sein d’un espace commercial est heureuse de vous accueillir du Mardi au Samedi de 6h30 à 19h.<br />
						Un parking est à votre disposition devant le magasin.<br />
						Une équipe souriante, dynamique et compétente vous proposera des produits pour toutes vos envies : bœuf, veau, agneau, porc, charcuterie et tant d’autres, des produits de qualité avec une origine contrôlée.
					</h4>
				</div>
				<div className="image-grid">
					<img src="/accueil/vitrine.jpg" alt="Vitrine" />
					<img src="/accueil/plat-1.jpg" alt="Plat 1" />
					<img src="/accueil/equipe.jpg" alt="Équipe" />
					<img src="/accueil/plat-2.jpg" alt="Plat 2" />
					<img src="/accueil/carte-fidelite.png" alt="Carte de fidélité" className="carte-fidelite" />
				</div>
			</section>


			<section id="location">
				<div className="location">
					<h1><span className="weight">NOUS</span> TROUVER</h1>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d298.7708063564446!2d4.754766960115389!3d44.56832337598007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b56ae38dcaf0e3%3A0x75e33a4852743965!2s51%20Avenue%20St%20Lazare%2C%2026200%20Mont%C3%A9limar!5e0!3m2!1sfr!2sfr!4v1727798356677!5m2!1sfr!2sfr" width="800" height="300"></iframe>
					<h4>
						PAR TÉLÉPHONE : 04 75 01 53 21<br />
						<br />ADRESSE : 51 Avenue St Lazare, 26200 Montélimar<br />
						<br />FACEBOOK : MAISON GARNIER
					</h4>
				</div>
			</section>

			<section id='history'>
				<div className='history'>
					<h1><span className="weight">L&apos;HISTOIRE DE LA</span> MAISON GARNIER</h1>
					<h4>
						La boucherie GARNIER existe depuis 1930. Elle s’appelait alors &quot;Au sacrifice&quot; et se trouvait au centre-ville.<br />
						En 1964, Ida et Marcel GARNIER reprennent le magasin, changent le nom puis le transmettent à leur fils Gérard en 1992.<br />
						<br />Des années plus tard, le magasin se déplace non loin de là, Avenue St Lazare pour être plus facilement accessible.
						Gérard GARNIER, doué d’une capacité relationnelle innée se consacre toute sa vie à sa boutique.<br />
						Proche de la retraite, il choisit lui-même son successeur et décide de transmettre son œuvre à un de ses anciens apprentis, Thierry VEYRENCHE.<br />
						<br />Et c’est ainsi que celui-ci acquiert en 2020 un second magasin après celui du Teil.<br />
						Tout en gardant l’âme de la boucherie GARNIER, Thierry VEYRENCHE a repris la méthode des anciens et propose des viandes issues d’élevages des alentours où il se rend lui-même pour sélectionner les meilleures bêtes.<br />
						En juin 2024, des travaux sont réalisés afin d’agrandir, moderniser le magasin et améliorer la qualité de la prestation.
						Et en septembre 2024, la boucherie GARNIER devient Maison GARNIER pour vous servir.
					</h4>
				</div>
				<img src="/accueil/thierry-veyrenche-gerard-garnier.jpg" alt="" />
			</section>
		</>
	)
}

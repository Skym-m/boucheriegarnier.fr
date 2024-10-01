export default function Home() {
	return (
		<>
			<div className="welcome">
				<img src="/logo.png" alt=""></img>
			</div>

			<section id="about">
				<img src="/1.jpg" alt=""></img>
				<img src="/2.jpg" alt=""></img>
				<img src="/3.jpg" alt=""></img>
				<div className="about">
					<h1><span className="weight">LA</span> MAISON GARNIER</h1>
					<h2>Bienvenue</h2>
					<h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam excepturi ea nisi cum inventore, eos, vel voluptatem aspernatur accusamus maiores delectus fuga quaerat, laboriosam culpa labore? Reiciendis impedit veritatis expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perferendis maiores autem voluptatem cum iure blanditiis veritatis fuga quas qui cupiditate sit repellat ea quo modi exercitationem, nam tempore quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam sed praesentium veniam, eos molestiae enim itaque unde repellat debitis accusantium dolor minus mollitia sapiente sint fugit perferendis assumenda aperiam?
					</h4>
				</div>
			</section>

			<section id="location">
				<div className="location">
					<h1>NOUS TROUVER</h1>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d298.7708063564446!2d4.754766960115389!3d44.56832337598007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b56ae38dcaf0e3%3A0x75e33a4852743965!2s51%20Avenue%20St%20Lazare%2C%2026200%20Mont%C3%A9limar!5e0!3m2!1sfr!2sfr!4v1727798356677!5m2!1sfr!2sfr" width="800" height="300"></iframe>
					<h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias ipsam quos minus voluptas tenetur consequuntur aperiam iusto fugit non rem nulla ex, culpa aut repellat quod odit sunt eligendi repellendus?</h4>
				</div>
			</section>

			<section id="charcuterie">
				<div className="charcuterie">
					<h1>CHARCUTERIE ET PREPARATIONS</h1>
					<div className="grid">
						<div className="item">
							<img src="/1.jpg" alt=""></img>
							<h5>Préparation 1</h5>
						</div>
						<div className="item">
							<img src="/3.jpg" alt=""></img>
							<h5>Préparation 2</h5>
						</div>
						<div className="item">
							<img src="/2.jpg" alt=""></img>
							<h5>Préparation 3</h5>
						</div>
						<div className="item">
							<img src="/2.jpg" alt=""></img>
							<h5>Préparation 4</h5>
						</div>
						<div className="item">
							<img src="/1.jpg" alt=""></img>
							<h5>Préparation 5</h5>
						</div>
						<div className="item">
							<img src="/3.jpg" alt=""></img>
							<h5>Préparation 6</h5>
						</div>
					</div>
					<h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fugiat nisi sed quaerat, reprehenderit dolore non illum itaque tempore accusantium quae corrupti fugit modi, sit magni, natus nemo ea? Aspernatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fugiat nisi sed quaerat, reprehenderit dolore non illum itaque tempore accusantium quae corrupti fugit modi, sit magni, natus nemo ea? Aspernatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fugiat nisi sed quaerat, reprehenderit dolore non illum itaque tempore accusantium quae corrupti fugit modi, sit magni, natus nemo ea? Aspernatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fugiat nisi sed quaerat, reprehenderit dolore non illum itaque tempore accusantium quae corrupti fugit modi, sit magni, natus nemo ea? Aspernatur!</h4>
				</div>
			</section>

			<section id="actualites">
				<div className="actualites">
					<h1>ACTUALITES DE LA <span className="garnier">MAISON GARNIER</span></h1>
					<div className="grid">
						<a href="/" className="item">
							<img src="/1.jpg" alt=""></img>
							<h5>Concours</h5>
						</a>
						<a href="" className="item">
							<img src="/3.jpg" alt=""></img>
							<h5>Fêtes de Noël</h5>
						</a>
						<a href="" className="item">
							<img src="/2.jpg" alt=""></img>
							<h5>Nouvel arrivage !</h5>
						</a>
					</div>
				</div>
			</section>
		</>
	)
}
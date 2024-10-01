const header = () => {

    return (
        <header>
        <nav className="nav">
            <ul id="list" className="flex items-center justify-center fixed z-50 w-full h-16 bg-black text-white">
                <li>
                    <a href="#welcome">ACCUEIL</a>
                </li>
                <li>
                    <a href="#about">LA BOUCHERIE</a>
                </li>
                <li>
                    <a href="#location">NOUS TROUVER</a>
                </li>
                <li>
                    <a href="#charcuterie">PRODUITS</a>
                </li>
                <li>
                    <a href="#actualites">ACTUALITES</a>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default header
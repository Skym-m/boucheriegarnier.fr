const header = () => {

    return (
        <header>
        <nav className="nav">
            <ul id="list" className="flex items-center justify-center fixed z-50 w-full h-16 bg-black text-white">
                <li>
                    <a href="/">ACCUEIL</a>
                </li>
                <li>
                    <a href="/articles">ARTICLES</a>
                </li>
                <li>
                    <a href="/">LOREM</a>
                </li>
                <li>
                    <a href="/">IPSUM</a>
                </li>
                <li>
                    <a href="/">DES</a>
                </li>
                <li>
                    <a href="/">ILES</a>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default header
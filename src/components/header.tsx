"use client" // Ceci doit être la première ligne du fichier

import { useEffect, useState } from 'react'
import { client } from '../sanity/lib/client' // Assure-toi que ce chemin est correct

const Header = () => {
  const [bannerData, setBannerData] = useState<any>(null)
  const [loading, setLoading] = useState(true) // État pour suivre le chargement des données
  const [isSticky, setIsSticky] = useState(false) // État pour gérer le sticky

  useEffect(() => {
    const fetchBannerData = async () => {
      const query = `*[_type == "banner"][0]`
      const data = await client.fetch(query)
      setBannerData(data)
      setLoading(false) // Met à jour l'état de chargement une fois les données récupérées
    }

    fetchBannerData()

    // Gérer le scroll pour rendre la navbar sticky
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    // Nettoyage de l'écouteur d'événements
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const eventDate = bannerData ? new Date(bannerData.eventDate).toLocaleString() : null

  return (
    <header>
      <nav className={`nav ${isSticky ? 'sticky' : ''}`}>
        <ul id="list">
          <li><a href="/">ACCUEIL</a></li>
          <li><a href="/boucherie">BOUCHERIE</a></li>
          <li><a href="/charcuterie">CHARCUTERIE</a></li>
          <li><a href="/traiteur">TRAITEUR</a></li>
          <li><a href="/epicerie">EPICERIE</a></li>
          <li><a href="/creations">NOS CREATIONS</a></li>
          <li><a href="/articles">ARTICLES</a></li>
        </ul>
      </nav>

      {/* Message de chargement si les données de la bannière ne sont pas encore disponibles */}
      {loading ? (
        <p>Chargement de la bannière...</p>
      ) : (
        bannerData && (
          <div className="banner">
            <h1>{bannerData.text}</h1>
            <p>{bannerData.location}</p>
            <p>{eventDate}</p>
          </div>
        )
      )}
    </header>
  )
}

export default Header

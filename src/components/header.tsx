"use client" // Ceci doit être la première ligne du fichier

import { useEffect, useState } from 'react'
import { client } from '../sanity/lib/client' // Assure-toi que ce chemin est correct

const Header = () => {
  const [bannerData, setBannerData] = useState<any>(null)

  useEffect(() => {
    const fetchBannerData = async () => {
      const query = `*[_type == "banner"][0]`
      const data = await client.fetch(query)
      setBannerData(data)
    }

    fetchBannerData()
  }, [])

  if (!bannerData) return <p>Chargement de la bannière...</p>

  const eventDate = new Date(bannerData.eventDate).toLocaleString()

  return (
    <header>
      <nav className="nav">
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

      <div className="banner">
        <h1>{bannerData.text}</h1>
        <p>{bannerData.location}</p>
        <p>{eventDate}</p>
      </div>
    </header>
  )
}

export default Header

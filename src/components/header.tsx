import Link from "next/link";
import { navigationLinks } from "@/config/navigation";
import { formatFrenchDateTime } from "@/lib/date";
import { client } from "@/sanity/lib/client";
import { bannerQuery } from "@/sanity/lib/queries";

interface BannerData {
  text?: string;
  location?: string;
  eventDate?: string;
}

async function getBannerData(): Promise<BannerData | null> {
  try {
    return await client.fetch<BannerData | null>(bannerQuery, {}, { next: { revalidate: 60 } });
  } catch (error) {
    console.error("Unable to fetch banner data", error);
    return null;
  }
}

const Header = async () => {
  const bannerData = await getBannerData();
  const eventDate = bannerData?.eventDate ? formatFrenchDateTime(bannerData.eventDate) : null;
  const shouldShowBanner = Boolean(bannerData?.text || bannerData?.location || eventDate);

  return (
    <header>
      <nav className="nav">
        <ul id="list">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {shouldShowBanner ? (
        <div className="banner">
          {bannerData?.text ? <h1>{bannerData.text}</h1> : null}
          {bannerData?.location ? <p>{bannerData.location}</p> : null}
          {eventDate ? <p>{eventDate}</p> : null}
        </div>
      ) : null}
    </header>
  );
};

export default Header;

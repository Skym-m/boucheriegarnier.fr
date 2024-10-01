import type { Metadata } from "next";
import { Zilla_Slab } from "next/font/google";
import "./globals.css";
import '@/app/styles/style.css';
import Header from "@/components/header";
import Footer from "@/components/footer";

const zilla_Slab = Zilla_Slab({
	weight: ['300', '400'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: "Maison Garnier | Montélimar"
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="fr">
			<body className={zilla_Slab.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
import header from "@/components/header";
// import footer from "@/components/Footer";
import '../../app/globals.css'
import '@/app/styles/articles.css';

export default function Layout({children}: { children: any }) {
    return (
        <>
            <header/>
            <main>{children}</main>
            {/* <footer/> */}
        </>
    )
}
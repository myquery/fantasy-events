
// app/layout.tsx
import type { Metadata } from "next";
// import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fantasy Events - Lagos Top Events Decorator",
  description: "Professional event planning services",
  keywords: "event planning, wedding, corporate events",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Client-side code needs to be in a separate component
  return (
    <html lang="en" >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Favicon */}
        <link rel="icon" href="/assets/img/favicon.png" />
        <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png" />
        
        {/* Font preloading */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Open+Sans:wght@300;400;500&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Open+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        {/* <ClientScripts /> */}
      </body>
    </html>
  );
}

// // Separate component for client-side scripts
// function ClientScripts() {
//   useEffect(() => {
//     // Dynamically load Bootstrap JS
//     import('bootstrap/dist/js/bootstrap.bundle.min.js')
//       .catch(console.error);

//     // Navbar scroll effect
//     const handleScroll = () => {
//       const navbar = document.getElementById('navbar');
//       if (navbar) {
//         navbar.classList.toggle('navbar-scrolled', window.scrollY > 100);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return null;
// }
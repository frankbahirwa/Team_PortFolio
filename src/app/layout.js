import "./globals.css";
import Navbar from "../components/Header";
import Footer from "../components/Footer";
import AuthProvider from "./providers/SessionProvider";

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
       
      <AuthProvider>
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
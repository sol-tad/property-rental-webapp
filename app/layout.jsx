import Footer from "@/components/Footer";
import "../assets/styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Property Pulse",
  keywords: "real estate, property, rental, buy, sell, invest",
  description: "Find the perfect rental property",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en" >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
};

export default MainLayout;

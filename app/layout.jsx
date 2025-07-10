import Footer from "@/components/Footer";
import "../assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/assets/styles/globals.css";
import { GlobalProvider } from "@/context/GlobalContext";
import 'photoswipe/dist/photoswipe.css';

export const metadata = {
  title: "Property Pulse",
  keywords: "real estate, property, rental, buy, sell, invest",
  description: "Find the perfect rental property",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <GlobalProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer/>
        </body>
      </html>

      </GlobalProvider>
    </AuthProvider>
  );
};

export default MainLayout;

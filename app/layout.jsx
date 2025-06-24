import "../assets/styles/globals.css";
export const metadata = {
  title: "Property Pulse",
  keywords: "real estate, property, rental, buy, sell, invest",
  description: "Find the perfect rental property",
};
import React from "react";
const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;

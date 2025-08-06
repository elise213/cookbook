// app/layout.jsx
import "./globals.css";
import Providers from "./context/Providers";
import LayoutWrapper from "./components/LayoutWrapper";

export const metadata = {
  title: "Fatima's Cookbook",
  description: "Recipes from Rafah",
  icons: {
    icon: "/picnic.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}

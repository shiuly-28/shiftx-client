import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "ShiftX",
  description: "Next-Gen Web Applications Built with Precision.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
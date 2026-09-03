import "./globals.css";

export const metadata = {
  title: "Dark Landing",
  description: "Minimal landing page on Next.js 16"
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}

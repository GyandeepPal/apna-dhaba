import "./globals.css";

export const metadata = {
  title: "अपना ढाबा | Corporate Meals & Tiffin | Jabalpur",
  description:
    "अपना ढाबा, अंधमुख बायपास जबलपुर. Corporate Meals, Monthly Tiffin और Bulk Orders.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}
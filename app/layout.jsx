import "./globals.css";

export const metadata = {
  title: "Dirección de Servicios Académicos | UNSA",
  description:
    "Portal institucional de la Dirección de Servicios Académicos de la Universidad Nacional de San Agustín de Arequipa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

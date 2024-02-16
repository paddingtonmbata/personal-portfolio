import "./globals.css";


export const metadata = {
  title: "Paddington Mbata",
  description: "Personal developer portfolio for Paddington Mbata",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

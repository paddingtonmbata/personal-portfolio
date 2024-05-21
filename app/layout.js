import PageTransition from "@/components/PageTransition";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export const metadata = {
  title: "Paddington Mbata",
  description: "Personal developer portfolio for Paddington Mbata",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PageTransition>
          {children}
        </PageTransition>        
      </body>
    </html>
  );
}

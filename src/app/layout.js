import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <p>root header</p>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

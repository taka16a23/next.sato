import "./globals.css";
import header_img from '@/assets/images/header.webp';


export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <div id="root">
          <div className="wrapper">
            <div className="wrapper-inner">
              <div id="content">
                <div className="content-inner">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

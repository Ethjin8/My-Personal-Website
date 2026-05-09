import "./globals.css";
import { Playfair_Display, Lora } from "next/font/google";
import Navbar from "./components/navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata = {
  title: "Ethan's Personal Website",
  description: "Personal site of Ethan Jin",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="ucla"
      suppressHydrationWarning
      className={`${playfair.variable} ${lora.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="torrey-pines"){document.documentElement.setAttribute("data-theme","torrey-pines")}else{document.documentElement.setAttribute("data-theme","ucla")}}catch(e){}})();`,
          }}
        />
      </head>
      <body style={{ color: "var(--foreground)" }}>
        <div className="fixed inset-0 -z-10 overflow-hidden" style={{ backgroundColor: "var(--background)" }}>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
              linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)
            `,
            backgroundSize: `40px 40px`
          }}></div>

          <div
            className="glow-orb absolute w-[500px] h-[500px] rounded-full opacity-30"
            style={{
              background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
              top: "-10%",
              right: "-5%",
              filter: "blur(80px)",
              animation: "float-glow-1 12s ease-in-out infinite",
            }}
          />
          <div
            className="glow-orb absolute w-[400px] h-[400px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, var(--accent-gold) 0%, transparent 70%)",
              bottom: "10%",
              left: "-5%",
              filter: "blur(80px)",
              animation: "float-glow-2 15s ease-in-out infinite",
            }}
          />
          <div
            className="glow-orb absolute w-[350px] h-[350px] rounded-full opacity-15"
            style={{
              background: "radial-gradient(circle, var(--gradient-mid) 0%, transparent 70%)",
              top: "40%",
              left: "50%",
              filter: "blur(100px)",
              animation: "float-glow-3 18s ease-in-out infinite",
            }}
          />
        </div>
        <Navbar />
        <main className="min-h-screen relative z-0">{children}</main>
      </body>
    </html>
  );
}

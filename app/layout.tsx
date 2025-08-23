import "./globals.css";

export const metadata = {
  title: "Ethan's Personal Website",
  description: "Personal site of Ethan Jin",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-gray-900">
        <div className="fixed inset-0 -z-10 bg-[#f8f7f4]">
          <div className="absolute inset-0 bg-grid-[#2774AE]/[0.03] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" style={{ 
            backgroundImage: `
              linear-gradient(to right, rgba(39, 116, 174, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(39, 116, 174, 0.08) 1px, transparent 1px),
              radial-gradient(circle, rgba(39, 116, 174, 0.05) 2px, transparent 2px),
              radial-gradient(circle at 50% 50%, rgba(255, 209, 0, 0.06) 10px, transparent 10px)
            `,
            backgroundSize: `40px 40px, 40px 40px, 100px 100px, 200px 200px`
          }}></div>
        </div>
        <main className="min-h-screen relative z-0">{children}</main>
      </body>
    </html>
  );
}

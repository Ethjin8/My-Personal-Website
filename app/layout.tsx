import "./globals.css";

export const metadata = {
  title: "My Website",
  description: "Personal site of [Your Name]",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#f8f7f4] text-gray-900">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}

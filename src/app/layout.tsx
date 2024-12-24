import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <header className="bg-blue-900 text-white py-6 shadow-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-white">Next.js Fetch Data App By Umm e Fizza</h1>
          </div>
        </header>

        <main className="max-w-4xl mx-auto p-8">
          {children}
        </main>
      </body>
    </html>
  );
}




"use client";
import "./globals.css";
import { ThemeProvider } from "./material";
import { MultiLevelSidebar } from "./MultiLevelSidebar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex">
        <ThemeProvider>
          <MultiLevelSidebar />
          <main className="flex-1 p-4">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

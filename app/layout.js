import "./globals.css";

export const metadata = {
  title: "CIPHER Deploy Hunt",
  description: "IET CIPHER SMP 2026 — Deployment Scavenger Hunt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

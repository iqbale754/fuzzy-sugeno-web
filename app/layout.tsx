export const metadata = {
  title: "Fuzzy Sugeno App",
  description: "Prediksi produksi dengan logika fuzzy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

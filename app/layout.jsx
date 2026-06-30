import "./globals.css";

export const metadata = {
  title: "Jon Wheeler | Automotive Market Analyst & Residual Value Specialist",
  description:
    "Automotive market analyst, residual value specialist and Head of Vehicle Valuation Services. Industry commentary, research and consultancy across the UK automotive market.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

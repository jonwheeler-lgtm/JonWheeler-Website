import "./globals.css";

export const metadata = {
  title: "Jon Wheeler | Automotive Market Insight",
  description:
    "Automotive Market Insight, Residual Values, Vehicle Valuation & Consultancy"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

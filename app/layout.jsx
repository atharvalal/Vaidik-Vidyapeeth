import "./globals.css";

export const metadata = {
  title: "Vaidik Vidyapeeth | School In Kathmandu-32, Koteshwor",
  description:
    "Vaidik Vidyapeeth in Kathmandu-32, Koteshwor, offering values-led learning, clear academics, and a caring school environment."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

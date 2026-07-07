// import "./variables.css";
// import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Header/Header";

// export const metadata: Metadata = {
//   title: "",
//   description: "",
//   icons: {
//     icon: "/logo-black.svg",
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className="">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

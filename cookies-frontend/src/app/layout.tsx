import { Navbar } from "@/components/navbar"
import type { Metadata } from "next"
import "./globals.css"
import { inter } from "@/styles/font"

export const metadata: Metadata = {
  title: "Le cookie du patron",
  description: "Un cookie qui impose le respect.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

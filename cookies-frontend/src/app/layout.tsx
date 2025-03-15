import { Navbar } from "@/components/navbar"
import { bebasNeue } from "@/styles/font"
import type { Metadata } from "next"
import "./globals.css"

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
      <body className={`${bebasNeue.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

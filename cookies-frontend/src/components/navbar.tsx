"use client"

import { cn } from "@/utils/utils"
import { Menu, ShoppingCart, X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "./ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = () => {
    setIsOpen((previousState) => !previousState)
  }

  return (
    <>
      <nav>
        {/* Desktop version */}
        <div className="max-sm:hidden flex justify-between items-center">
          <div className="relative max-w-32">
            <Image
              alt="Les cookies du patron"
              width={2048}
              height={2048}
              src={"/logoLCDPblack.png"}
            />
          </div>
          <MenuList className="flex grow justify-around text-2xl" />
          <div className="flex items-center gap-6">
            <Button className="px-8 py-2">Connexion</Button>
            <Button intent="hollow" className="p-0">
              <ShoppingCart className="stroke-charcoal" />
            </Button>
          </div>
        </div>

        {/* Mobile version */}
        <div className="md:hidden">
          <button onClick={handleMenu} className="p-0">
            {!isOpen ? (
              <Menu className="stroke-dahlia" size="24px" />
            ) : (
              <X className="stroke-dahlia" size="24px" />
            )}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen ? <MenuListMobileContainer handleMenu={handleMenu} /> : null}
      </AnimatePresence>
    </>
  )
}

function MenuList({
  handleMenu,
  className,
}: {
  handleMenu?: () => void
  className?: string
}) {
  const pathname = usePathname()
  const links: Record<"name" | "href", string>[] = [
    { name: "Accueil", href: "/" },
    { name: "A propos", href: "/a-propos" },
    { name: "E-Boutique", href: "/e-shop" },
  ]

  return (
    <menu className={cn(className)}>
      {links.map((link) => (
        <li key={`${link.href}-${link.name}`} onClick={handleMenu}>
          <Link
            className={cn(
              "hover:text-dahlia/80 tracking-wider transition-colors",
              pathname === link.href ? "text-dahlia" : "text-charcoal"
            )}
            href={link.href}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </menu>
  )
}

function MenuListMobileContainer({ handleMenu }: { handleMenu: () => void }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 100, transition: { duration: 0.25 } }}
      exit={{ x: 200, opacity: 0, transition: { duration: 0.25 } }}
      className="bg-charcoal/30 p-4 flex flex-col absolute w-full bottom-0 min-h-2/3 z-10"
    >
      <div className="flex items-center justify-end">
        <Button intent="hollow" className="p-0" onClick={handleMenu}>
          <X />
        </Button>
      </div>
      <MenuList
        handleMenu={handleMenu}
        className="mt-8 flex flex-col gap-4 text-2xl items-center"
      />
      <div className="flex items-center justify-center mt-8">
        <div className="flex relative max-w-32">
          <Image
            alt="Les cookies du patron"
            width={2048}
            height={2048}
            src={"/logoLCDPblack.png"}
          />
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <Button>Connexion</Button>
        <Button
          intent="hollow"
          className="text-charcoal flex items-center gap-4 justify-center"
        >
          <span>
            <ShoppingCart />
          </span>{" "}
          Aller au panier
        </Button>
      </div>
    </motion.div>
  )
}

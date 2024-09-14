"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { ModeToggle } from '@/components/global/mode-toggle'
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/server'
import Image from 'next/image'
import { siteConfig } from "@/config/site";

type Props = {
  user?: null | User
}
type NavComponent = {
  title: string
  href: string
  description: string
}

const navIntroLinks: NavComponent[] = siteConfig.navcontent.intro
const navExploreLinks: NavComponent[] = siteConfig.navcontent.explore

export default function Navigation({ user }: Props) {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/10">
      <div className="container flex items-center justify-between py-0">
        <aside className="flex items-center gap-2">
          <Image
            src="/assets/lowrestopriselogo.svg"
            width={100}
            height={100}
            alt="app logo"
          />
          <div className="mb-2 mt-4 text-lg font-medium">Pro</div>
        </aside>
        <NavigationMenu className="relative z-10">
          <NavigationMenuList className="flex items-center justify-center gap-8">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a href="/" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                        <Image src={'./assets/lowrestopriselogo.svg'} width={100} height={100} alt="toprise_logo" />
                        <p className="text-sm leading-tight text-muted-foreground">
                          {siteConfig.slogan}
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  {navIntroLinks.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {navExploreLinks.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <aside className="flex gap-2 items-center">
          <SignedIn>
            <UserButton />
            <Link href="/agency/" className="p-2 px-4 rounded-md hover:bg-primary/10 hover:text-primary transition-colors">Dashboard</Link>
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <ModeToggle />
        </aside>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

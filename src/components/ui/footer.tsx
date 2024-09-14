import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, MapPin, Phone } from "lucide-react"
import { siteConfig } from "@/config/site"
import Link from "next/link"


export default function SiteFooter() {
  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto px-4">
        <Card className="mx-auto mb-14 max-w-3xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Join the wailtlist</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="flex max-w-md mx-auto gap-2">
              <Input type="email" placeholder="Email here" className="flex-1" />
              <Button type="submit">Subscribe</Button>
            </form>
          </CardContent>
        </Card>
        <div className="container align-center px-4 max-w-7xl">
          <div className="flex flex-wrap md:ml-20 px-20 align-center justify-between mb-12">
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
              <h3 className="text-xl font-semibold mb-4 text-primary">{siteConfig.name}</h3>
              <p className="text-muted-foreground">
                {siteConfig.slogan}
              </p>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
              <h3 className="text-xl font-semibold mb-4 text-primary">Useful Links</h3>
              <div className="flex flex-col space-y-2">
                <Link href="/agency" className="text-muted-foreground hover:text-primary transition-colors">Agency</Link>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
                <Link href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</Link>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">How it works</Link>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
              <h3 className="text-xl font-semibold mb-4 text-primary">Services</h3>
              <ul className="flex flex-col space-y-2">
                {siteConfig.services.map((item, _) => (
                  <Link href="#" key={_} className="text-muted-foreground hover:text-primary transition-colors">{item}</Link>
                ))}
              </ul>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
              <h3 className="text-xl font-semibold mb-4 text-primary">Get In Touch</h3>
              <div className="space-y-2">
                <p className="flex items-center text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" /><Link href={siteConfig.org.googlemap} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"> {siteConfig.org.location}</Link>
                </p>
                <p className="flex items-center text-muted-foreground">
                  <Phone className="mr-2 h-4 w-4" /> <Link href={siteConfig.org.administration.watlink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">{siteConfig.org.administration.tel}</Link>
                </p>
                <p className="flex items-center text-muted-foreground">
                  <Mail className="mr-2 h-4 w-4" /> <Link href={`mail.to:${siteConfig.org.administration.email}`} className="text-muted-foreground hover:text-primary transition-colors">{siteConfig.org.administration.email}</Link>
                </p>
              </div>
            </div>
          </div>

          <Separator className="mb-6" />

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Use</Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/about-cookies" className="text-muted-foreground hover:text-primary transition-colors">Cookies</Link>
            <Link href="/support" className="text-muted-foreground hover:text-primary transition-colors">Support</Link>
            <Link href="#faqs" className="text-muted-foreground hover:text-primary transition-colors">FAQs</Link>
          </div>

          <Separator className="mb-6" />

          <div className="text-center text-muted-foreground">
            <p className="mb-2">
              &copy; <Link href={siteConfig.org.Site} className="font-medium hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">{siteConfig.org.name}</Link> · {siteConfig.year} · All Rights Reserved.
            </p>
            <p>
              Developed by <Link href={siteConfig.devteam.site} className="font-medium hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">{siteConfig.devteam.name}</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
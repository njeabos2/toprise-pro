import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { pricingCards } from '@/lib/constants'
import SiteFooter from "@/components/ui/footer";
import clsx from 'clsx'
import { Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Homepage
export default function Home() {
  return <>
    <section className="h-full w-full md:pt-44 mt-[-70px] relative flex items-center justify-center flex-col ">
      {/* grid empty div : */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10"></div>
      <p className="text-center font-bold">Professional Services For Your Home & Commercial needs</p>
      <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
        <h1 className="text-9xl font-bold text-center md:text-[200px]">
          toprise
        </h1>
      </div>
      <div className="flex justify-center items-center relative md:mt-[-15px]">
        <Image
          src={'/assets/previewx.png'}
          alt="banner image"
          height={480}
          width={1000}
          className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
        />
        <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
      </div>
    </section>
    <section className="flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[-60px]">
      <h2 className="text-4xl text-center"> Choose what fits you right</h2>
      <p className="text-muted-foreground text-center">
        Straightforward pricing plans tailored for any agency owner. If
        {" you're"} not <br />
        ready to commit you can always start for free.
      </p>
      <div className="flex justify-center gap-4 flex-wrap mt-6">
        {pricingCards.map((card) => (
          <Card key={card.title} className={clsx('w-[300px] flex flex-col justify-between', {
            'border-2 border-primary': card.title === 'Unlimited Saas',
          })}
          >
            <CardHeader>
              <CardTitle className={clsx('', { 'text-muted-foreground': card.title !== 'Unlimited Saas', })}>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">
                {card.price}
              </span>
              <span className="text-muted-foreground">
                <span>/m</span>
              </span>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div>
                {card.features.map((feature) => (
                  <div key={feature} className="flex gap-2 items-center">
                    <Check className="text-muted-foreground" />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              <Link href={`/agency?plan=${card.priceId}`}
                className={clsx(
                  'w-full text-center bg-primary p-2 rounded-md',
                  {
                    '!bg-muted-foreground':
                      card.title !== 'Unlimited Saas',
                  }
                )}
              >
                Get Started
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
    <SiteFooter />
  </>;
}


/*
<div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
*/
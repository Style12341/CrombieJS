import Image from "next/image";
import { ReactNode } from "react";
import LandingImage from "../public/images/landing_image.jpg";
import Logo from "../public/images/ecommerce_logo.svg";
import Shirts from "../public/images/shirts_landing.jpeg";
import Products from "../public/images/products_landing.jpg";

const Section = ({ children, className = "" }: { children: ReactNode, className: string }) => {
  return (
    <section className={`relative w-full h-screen flex items-center justify-center ${className}`}>
      {children}
    </section>
  );
};

export default function LandingPage() {
  return (
    <div className="w-full h-auto">
      <Section className="relative bg-blue-500 text-white">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={LandingImage}
            alt="Landing image"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </div>
        <div className="absolute top-4 left-4 z-10" id="logo">
          <Image src={Logo} alt="Logo" height={100} width={100} />
        </div >
        <div className="flex flex-col items-center z-10 gap-10">
          <h1 className="relative bottom-56 text-white lg:text-8xl sm:text-6xl text-4xl">
            Eccomerce
          </h1>
          <h2 className="relative top-56 text-slate-300 lg:text-4xl sm:text-3xl text-2xl">
            Your one stop shop for everything
          </h2>
        </div>
      </Section>
      <Section className="bg-black gap-8 flex-wrap">
        <Image src={Shirts} alt="Pile of shirts" className="rounded-md flex-1 max-w-screen-sm  mx-6" />
        <div className="flex flex-col items-center text-white flex-1 min-w-60  max-w-2xl">
          <h2 className="text-4xl">Shop the latest trends</h2>
          <p className="mx-6"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque at nesciunt esse voluptatem eligendi! Totam similique sequi odit accusamus voluptate autem ullam. Quod asperiores animi error sequi perferendis. Voluptatum, fugit!</p>
        </div>
      </Section>
      <Section className="bg-black gap-8 flex-wrap">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl">Our products</h2>
          <Image src={Products} alt="Accesories" className="rounded-md flex-1 max-w-screen-sm  mx-6" />
        </div>
        <ul className="flex flex-col gap-4 text-white flex-1 min-w-60   max-w-2xl">
          <li className="text-2xl flex gap-2 ">
            <h2 className="text-6xl text-slate-400">01</h2>
            <div className="flex flex-col gap-2">
              <h4 className="text-6xl">Watches</h4>
              <p>Best watches</p>
            </div>
          </li>
          <li className="text-2xl flex gap-2">
            <h2 className="text-6xl text-slate-400">02</h2>
            <div className="flex flex-col gap-2">
              <h4 className="text-6xl">Shirts</h4>
              <p>Best shirts</p>
            </div>
          </li>
          <li className="text-2xl flex gap-2">
            <h2 className="text-6xl text-slate-400">03</h2>
            <div className="flex flex-col gap-2">
              <h4 className="text-6xl">Belts</h4>
              <p>Best Belts</p>
            </div>
          </li>
        </ul>
      </Section>
    </div>
  );
}
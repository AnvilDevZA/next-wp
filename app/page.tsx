// Craft Imports
import { Section, Container, Prose } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import Card from "../components/ui/card";

// Next.js Imports
import Link from "next/link";

// Icons
import { File, Pen, Tag, Diamond, User, Folder } from "lucide-react";
import { WordPressIcon } from "@/components/icons/wordpress";
import { NextJsIcon } from "@/components/icons/nextjs";

import Hero from "../components/ui/hero";

// This page is using the craft.tsx component and design system
export default function Home() {
  return (
    <>
        <Hero />
        <main className="max-w-6xl m-auto py-12">
          <article className="max-w-4xl m-auto"> 
            <h1 className="text-lg text-center mb-2 font-black">You tell us what you need, we smith it!</h1>
            <p className="text-base">From personal websites to enterprise and organisation sites and apps, we will create the design and the development of your specifications. Anvil's designs are curated and use cutting edge technologies to deliver a fast, beautiful and unique user experience. Using a wide field of tools, libraries and frameworks and the benefit of nearly a decade of experience, Anvil can create the site or app of your dreams!</p>
            <div className="flex flex-col justify-center items-center lg:flex-row gap-4 lg:items-stretch">
              <Card cardTitle="Cutting-Edge Technology" cardText="We make sites and apps with cutting edge tools like React and NextJS (for web), and Tauri v2 and React Native (for mobile). We are devoted to CI/CD and will share our work via GitHub." buttonText="Learn More" />
              <Card cardTitle="Beautiful and Fast UX/UI" cardText="We ensure every optimization is made to your project. Sites not only look good, but feel like native applications. We using anything from concatenation and minification to advanced caching to speed up performance." buttonText="Learn More" />
              <Card cardTitle="Constant Communication" cardText="During business hours we always available via Zoom or Google Meet. We always keep our client in the loop using lcaol development servers, and GitHub ensuring clients know what the final deliverables will be." buttonText="Learn More" />
              <Card cardTitle="Responsive Design" cardText="All our web and mobile applications are built using mobile-first responsive design with progressive enhancement to ensure they work and look beautiful, regardless of resolution or device. Our apps will compile across devices and platforms. natively" buttonText="Learn More" />
            </div>
          </article>
          <article className="max-w-4xl m-auto mt-6"> 
	    <h1 className="text-lg text-center mb-2 font-black">Latest from the Forge</h1>
            <p className="text-base text-center">
  	      We love to show off our work! Check out our latest projects below!
            </p>
	  </article>
 	  <article className="max-w-4xl m-auto mt-6">
 	    <h1 className="text-lg text-center mb-2 font-black">Shop Talk</h1>
	    <p className="text-base text-center">
	     Check out the latest ramblings and semi-mindful musings from us
             about UX/UI, software development, the web, and beyond&hellip;Comments always welcome (mind your Ps and Qs though).
	    </p>
	  </article>
        </main>
    </>
  );
}

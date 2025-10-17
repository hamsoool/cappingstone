import { Metadata } from "next";

import ButtonComponent from "./button";


export const metadata: Metadata = {
  title: "About Capppingstone",
  description: "Lot of description here",
  keywords: "about, cap, sol, next",
  twitter: {
    card: "summary_large_image",
    title: "About Cappingstone",
  },
};

export default async function Contact() {
    console.log("Contact page loaded in the server or client");

    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await response.json()
    console.log(posts);


    return (
        <div>
          <ButtonComponent />
        </div>
    );
}
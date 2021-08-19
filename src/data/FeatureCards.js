import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const CollapsibleImage = () => (
  <StaticImage src="../images/collapse.png" />
);
export const LightingImage = () => <StaticImage src="../images/SideShot.png" />;
export const BackgroundsImage = () => (
  <StaticImage src="../images/backgrounds.png" />
);

export const CardData = [
  {
    title: "Collapsible",
    text: "The Shotbox collapses down and comes with a deluxe carrying bag that will hold everything that you need.",
    image: <CollapsibleImage />,
  },
  {
    title: "Perfect Lighting",
    text: "Lights on the inside along with the included SideShot for front lighting means that you will have incredible results.",
    image: <LightingImage />,
  },
  {
    title: "Unique Images",
    text: "The Shotbox includes a variety of prints along with solid backdrops so that you can setup any scene you can imagine.",
    image: <BackgroundsImage />,
  },
];

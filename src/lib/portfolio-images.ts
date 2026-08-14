/**
 * Central registry of optimized portfolio images.
 *
 * Every import is processed by vite-imagetools at build time into responsive
 * AVIF / WebP / original-format variants (480w → 1600w) with proper
 * compression. Each export is a `picture` object:
 *   { sources: { avif: "...", webp: "..." }, img: { src, w, h } }
 * Render it with <ResponsiveImage picture={...} />.
 */

const RESPONSIVE = "?w=480;768;1200;1600&format=avif;webp;jpg&as=picture&quality=72";

export type PictureSource = {
  sources: Record<string, string>;
  img: { src: string; w: number; h: number };
};

import ghanaExim from "@/assets/portfolio-ghana-exim.jpg?w=480;768;1200;1600&format=avif;webp;jpg&as=picture&quality=72";
import healthConnect from "@/assets/portfolio-health-connect.jpg?w=480;768;1200;1600&format=avif;webp;jpg&as=picture&quality=72";
import transitGateway from "@/assets/portfolio-transit-gateway.jpg?w=480;768;1200;1600&format=avif;webp;jpg&as=picture&quality=72";
import alorConnect from "@/assets/portfolio-alor-connect.jpg?w=480;768;1200;1600&format=avif;webp;jpg&as=picture&quality=72";
import vivaHealth from "@/assets/portfolio-viva-health.jpg?w=480;768;1200;1600&format=avif;webp;jpg&as=picture&quality=72";
import prudential from "@/assets/portfolio-prudential.jpg?w=480;768;1200;1600&format=avif;webp;jpg&as=picture&quality=72";
import hogbetsotso from "@/assets/portfolio-hogbetsotso.jpg?w=480;768;1200;1600&format=avif;webp;jpg&as=picture&quality=72";
import paullyRice from "@/assets/portfolio-paully-rice-real.png?w=480;768;1200;1600&format=avif;webp;png&as=picture&quality=72";
import emmaldo from "@/assets/portfolio-emmaldo-real.jpg?w=480;768;1200;1600&format=avif;webp;jpg&as=picture&quality=72";
import sesiEdem from "@/assets/portfolio-sesi-edem.jpg?w=480;768;1200;1600&format=avif;webp;jpg&as=picture&quality=72";
import qlickers from "@/assets/portfolio-qlickers.png?w=480;768;1200;1600&format=avif;webp;png&as=picture&quality=72";
import stylebyfef from "@/assets/portfolio-stylebyfef.png?w=480;768;1200;1600&format=avif;webp;png&as=picture&quality=72";
import uewg from "@/assets/portfolio-uewg.jpg?w=480;768;1200;1600&format=avif;webp;jpg&as=picture&quality=72";
import socialGunu from "@/assets/social-hogbe-gunu.jpg?w=480;768;1200&format=avif;webp;jpg&as=picture&quality=72";
import socialPresident from "@/assets/social-hogbe-president.jpg?w=480;768;1200&format=avif;webp;jpg&as=picture&quality=72";
import socialInvitation from "@/assets/social-hogbe-invitation.jpg?w=480;768;1200&format=avif;webp;jpg&as=picture&quality=72";

export const portfolioImages = {
  ghanaExim: ghanaExim as PictureSource,
  healthConnect: healthConnect as PictureSource,
  transitGateway: transitGateway as PictureSource,
  alorConnect: alorConnect as PictureSource,
  vivaHealth: vivaHealth as PictureSource,
  prudential: prudential as PictureSource,
  hogbetsotso: hogbetsotso as PictureSource,
  paullyRice: paullyRice as PictureSource,
  emmaldo: emmaldo as PictureSource,
  sesiEdem: sesiEdem as PictureSource,
  qlickers: qlickers as PictureSource,
  stylebyfef: stylebyfef as PictureSource,
  uewg: uewg as PictureSource,
  socialGunu: socialGunu as PictureSource,
  socialPresident: socialPresident as PictureSource,
  socialInvitation: socialInvitation as PictureSource,
};

export { RESPONSIVE };

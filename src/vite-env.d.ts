/// <reference types="vite/client" />

// vite-imagetools: `?...&as=picture` imports resolve to a picture descriptor.
declare module "*&as=picture&quality=72" {
  const picture: {
    sources: Record<string, string>;
    img: { src: string; w: number; h: number };
  };
  export default picture;
}

import type { PictureSource } from "@/lib/portfolio-images";

interface ResponsiveImageProps {
  picture: PictureSource;
  alt: string;
  className?: string;
  sizes?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
}

/**
 * Renders an imagetools `picture` descriptor as a <picture> element with
 * AVIF + WebP sources, responsive srcsets and a compressed fallback.
 */
const ResponsiveImage = ({
  picture,
  alt,
  className,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 1200px",
  loading = "lazy",
  fetchPriority = "auto",
}: ResponsiveImageProps) => {
  return (
    <picture>
      {Object.entries(picture.sources).map(([format, srcset]) => (
        <source key={format} type={`image/${format}`} srcSet={srcset} sizes={sizes} />
      ))}
      <img
        src={picture.img.src}
        width={picture.img.w}
        height={picture.img.h}
        alt={alt}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        sizes={sizes}
        className={className}
      />
    </picture>
  );
};

export default ResponsiveImage;

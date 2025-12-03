import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Gotechpluz transformed our operations completely. The app has become indispensable to our daily workflow, and our clients love the transparency it provides.",
    author: "Operations Director",
    company: "Welhaven Homecare",
    rating: 5,
  },
  {
    quote: "Working with Gotechpluz was a game-changer. They didn't just build us a website—they created a complete digital strategy that has driven incredible growth.",
    author: "Marketing Manager",
    company: "Healthcare Provider",
    rating: 5,
  },
  {
    quote: "The new website has exceeded all our expectations. Gotechpluz delivered a professional, secure, and high-performing platform that our clients love.",
    author: "Digital Transformation Lead",
    company: "Prudential Life Insurance",
    rating: 5,
  },
  {
    quote: "Professional team that delivers on promises. They understood our vision and created a platform that truly represents our brand and serves our community.",
    author: "CEO",
    company: "Financial Services Company",
    rating: 5,
  },
  {
    quote: "From concept to launch, Gotechpluz was with us every step of the way. Their expertise in both design and technology is unmatched.",
    author: "Project Manager",
    company: "Tech Startup",
    rating: 5,
  },
];

const TestimonialsCarousel = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="h-full p-6 bg-gradient-hero border-primary/10 hover:border-primary/30 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-sm mb-6 italic text-foreground/90">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default TestimonialsCarousel;

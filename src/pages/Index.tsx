import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";

const Index = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0); // Changed from set-based to individual testimonial index
  const [selectedVenue, setSelectedVenue] = useState<string>("");
  const [customVenueName, setCustomVenueName] = useState<string>("");
  const [currentVenueIndex, setCurrentVenueIndex] = useState(0);
  const [emailCopied, setEmailCopied] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Venue data for carousel
  const venues = [
    { name: "Corazon", image: "/ChatGPT Image Jul 12, 2025, 10_17_29 PM.png" },
    { name: "Acre", image: "/ChatGPT Image Jul 12, 2025, 10_19_38 PM.png" },
    { name: "Viceroy", image: "/ChatGPT Image Jul 12, 2025, 10_20_03 PM.png" },
    { name: "Baja Luna", image: "/ChatGPT Image Jul 12, 2025, 10_41_25 PM.png" },
    { name: "Más Olas", image: "/ChatGPT Image Jul 12, 2025, 10_20_59 PM.png" },
    { name: "Cascadas", image: "/Cascadas.png" },
    { name: "Costa Palmas", image: "/Costa Palmas.png" },
    { name: "Garza Blanca", image: "/Garza Blanca.png" },
    { name: "Grand Velas", image: "/grandvelas.png" },
    { name: "Mar del Cabo", image: "/Mar del Cabo.png" },
    { name: "The Cape", image: "/The Cape.png" },
    { name: "Pueblo Bonito", image: "/pueblo bonito logo.png" },
    { name: "Esperanza", image: "/esperanza logo.png" },
  ];

  // Auto-advance venue carousel - smooth continuous rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVenueIndex((prev) => prev + 0.1);
    }, 60); // Smooth animation timing

    return () => clearInterval(interval);
  }, []);

  // Testimonials data
  const testimonials = [
    {
      image: "/UCW - Testimonial 1.png",
      quote: "We can't say enough good things about Luba and Borja at Unique Cabo Weddings! Planning a destination wedding from Texas while they were in Cabo could have been overwhelming, but they made it so easy and stress-free from the very beginning.",
      author: "Ayana & Austin",
      link: "https://www.instagram.com/p/DL8D3zcStWx/?img_index=1"
    },
    {
      image: "/ucw testimonial 2.png",
      quote: "We had started planning on our own for a few months before meeting her, but once we started working together she made the whole process feel much less intimidating. Luba worked incredibly hard to make the wedding planning as stress-free as possible and the day-of go as smoothly as it did.",
      author: "Victoria & Patrick",
      link: "https://www.instagram.com/p/DAbkLrsRdA6/?img_index=1"
    },
    {
      image: "/UCW - Testimonial 1.png", // Placeholder - reusing image
      quote: "She makes sure that you are not alone, that she is there to help you and guide you, and honestly, she's someone that makes you feel like there's no such thing as a stupid question. She helps you work with your budget to find what things are most important to you and helping you achieve all the extra things you may want.",
      author: "Eli & Ashley",
      link: "#"
    },
    {
      image: "/ucw testimonial 2.png", // Placeholder - reusing image
      quote: "Luba was an absolute dream wedding planner! From start to finish, she poured her heart and soul into creating the most magical weekend for my husband and me. Her attention to detail was impeccable, and her genuine care and love shone through in every aspect of the planning process.",
      author: "Nicole & Chris",
      link: "#"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Touch swipe handling
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextTestimonial();
    } else if (isRightSwipe) {
      prevTestimonial();
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const scrollToWork = () => {
    const processSection = document.getElementById('process-section');
    if (processSection) {
      processSection.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const scrollToWhyCabo = () => {
    const workSection = document.getElementById('work-section');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTestimonials = () => {
    const workSection = document.getElementById('work-section');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to convert venue names to form values
  const getVenueFormValue = (venueName: string): string => {
    const venueMap: { [key: string]: string } = {
      "Corazon": "corazon",
      "Acre": "acre", 
      "Viceroy": "viceroy",
      "Baja Luna": "baja-luna",
      "Más Olas": "mas-olas",
      "Cascadas": "cascadas",
      "Costa Palmas": "costa-palmas",
      "Garza Blanca": "garza-blanca",
      "Grand Velas": "grand-velas",
      "Mar del Cabo": "mar-del-cabo",
      "The Cape": "the-cape",
      "Esperanza": "esperanza",
      "Pueblo Bonito": "pueblo-bonito"
    };
    return venueMap[venueName] || "";
  };

  // Handle venue click from carousel
  const handleVenueClick = (venueName: string) => {
    const formValue = getVenueFormValue(venueName);
    if (formValue) {
      setSelectedVenue(formValue);
      // Scroll to contact form
      const contactSection = document.getElementById('contact-form');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('luba@uniquecaboweddings.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Responsive Header */}
      <header className="w-full py-6 px-6">
        {/* Desktop & Tablet Navigation */}
        <div className="hidden md:block relative w-full h-16">
          {/* BOOK Button - Absolutely centered on page */}
          <Button 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-3 font-bold bg-foreground text-background hover:bg-purple-600 hover:text-white shadow-md hover:shadow-lg transition-all duration-200 rounded-full min-w-[100px]" 
            onClick={scrollToContact}
          >
            BOOK
          </Button>
          
          {/* Right Buttons - Positioned to the right of center */}
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 ml-[80px] flex gap-6">
            <Button 
              variant="outline" 
              className="px-8 h-12 font-light rounded-full leading-none flex items-center justify-center min-w-[120px]" 
              onClick={scrollToWork}
            >
              OUR WORK
            </Button>
            <Button 
              variant="outline" 
              className="px-8 h-12 font-light rounded-full leading-none flex items-center justify-center min-w-[120px]" 
              onClick={scrollToWhyCabo}
            >
              WHY CABO
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-center items-center relative">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full absolute left-0">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <div className="flex flex-col space-y-6 mt-8">
                <Button 
                  variant="ghost" 
                  className="justify-start text-lg font-light h-12" 
                  onClick={scrollToWork}
                >
                  OUR WORK
                </Button>
                <Button 
                  variant="ghost" 
                  className="justify-start text-lg font-light h-12" 
                  onClick={scrollToWhyCabo}
                >
                  WHY CABO
                </Button>
                <Button 
                  variant="ghost" 
                  className="justify-start text-lg font-light h-12" 
                  onClick={scrollToContact}
                >
                  CONTACT
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          <Button 
            className="px-6 py-2 font-bold bg-foreground text-background hover:bg-purple-600 hover:text-white shadow-md hover:shadow-lg transition-all duration-200 rounded-full" 
            onClick={scrollToContact}
          >
            BOOK
          </Button>
        </div>
      </header>

      {/* Main hero section */}
      <main className="flex flex-col items-center justify-center px-6 py-12">
        {/* Central rectangle div - responsive size with aspect ratio */}
        <div 
          className="w-[75vw] max-w-6xl rounded-3xl mb-8 aspect-[16/9] max-h-[60vh] shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          onClick={scrollToTestimonials}
        >
          <img 
            src="/UCW placeholder hero image .jpg" 
            alt="Beautiful Cabo wedding venue"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        {/* Headline and CTA */}
        <div className="text-center max-w-5xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6 text-foreground">
            Your Dream Cabo Wedding Starts Here
          </h1>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-full font-light"
            onClick={scrollToContact}
          >
            Contact a Local Wedding Planner
          </Button>
        </div>
      </main>

      {/* Social Proof Section - Venue Logos */}
      <section className="pt-20 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-lg font-light text-muted-foreground">
              Trusted by Cabo's Premier Wedding Venues
            </p>
          </div>
          
          {/* Infinite Carousel - Shows 5 venues at a time */}
          <div className="relative overflow-hidden">
            <div 
              className="flex"
              style={{ 
                transform: `translateX(-${(currentVenueIndex * 2) % (venues.length * 20)}%)`,
                transition: 'transform 0.1s linear'
              }}
            >
              {/* Multiple sets for seamless infinite scroll */}
              {[...venues, ...venues, ...venues, ...venues, ...venues].map((venue, index) => (
                <div 
                  key={`${venue.name}-${index}`} 
                  className="flex-shrink-0 w-1/5 flex flex-col items-center px-2 md:px-4 cursor-pointer group"
                  onClick={() => handleVenueClick(venue.name)}
                >
                  <div className="w-20 h-16 md:w-32 md:h-24 flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-105">
                    <img 
                      src={venue.image} 
                      alt={venue.name} 
                      className="max-w-full max-h-full object-contain group-hover:opacity-80 transition-opacity duration-200"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span className="text-sm md:text-base font-light text-muted-foreground text-center group-hover:text-foreground transition-colors duration-200">{venue.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Simple Text Section */}
      <section id="process-section" className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-8 text-foreground tracking-wide">
            Dreaming of a Cabo Wedding but Feeling Overwhelmed?
          </h2>
          
          <div className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-12 max-w-3xl mx-auto">
            <p className="mb-6">
              Planning a wedding in a beautiful destination like Cabo can feel like a dream, but it often comes with challenges. Have you started your planning process only to find that hotels and vendors seem overwhelming? Are you worried about unclear costs or finding the right fit for your budget?
            </p>
            
            <p>
              We understand these concerns. Our goal at Unique Cabo Weddings is to guide you through every step, offering clarity and peace of mind. Let us help turn your vision into reality with transparency and expert support.
            </p>
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="text-lg px-10 py-6 rounded-full font-light shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={scrollToContact}
            >
              No more second-guessing, schedule a call!
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="work-section" className="py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal mb-4 text-foreground tracking-wide">
              WORDS FROM THE HEART
            </h2>
            <div className="w-24 h-1 bg-foreground/20 mx-auto"></div>
          </div>
          
          {/* Testimonial Carousel */}
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Testimonial Counter */}
            <div className="text-center mb-4">
              <div className="text-sm text-muted-foreground">
                {currentTestimonialIndex + 1} of {testimonials.length}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mb-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonialIndex 
                      ? 'bg-foreground' 
                      : 'bg-foreground/30 hover:bg-foreground/50'
                  }`}
                  title={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Testimonial Content */}
            <div 
              className="relative min-h-[600px]"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* Navigation Buttons - Hidden on mobile, visible on tablet+ */}
              <button
                onClick={prevTestimonial}
                className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-foreground/10 hover:bg-foreground/20 text-foreground transition-colors z-10 shadow-lg"
                title="Previous Testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-foreground/10 hover:bg-foreground/20 text-foreground transition-colors z-10 shadow-lg"
                title="Next Testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex flex-col items-center transition-opacity duration-500 ${
                    index === currentTestimonialIndex ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <div 
                    className="w-4/5 max-w-md aspect-square rounded-2xl mb-6 cursor-pointer hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                    onClick={() => {
                      console.log('Clicked on:', testimonial.author, 'Link:', testimonial.link);
                      if (testimonial.link && testimonial.link !== '#') {
                        console.log('Attempting to open:', testimonial.link);
                        const opened = window.open(testimonial.link, '_blank');
                        console.log('Window opened?', opened ? 'Yes' : 'Blocked by popup blocker');
                      } else {
                        console.log('No valid link to open');
                      }
                    }}
                  >
                    <img 
                      src={testimonial.image} 
                      alt={`Testimonial from ${testimonial.author}`}
                      className="w-full h-full object-cover"
                      loading={index === currentTestimonialIndex ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </div>
                  <blockquote className="text-center max-w-2xl">
                    <p className="text-lg font-light text-foreground leading-relaxed italic mb-4">
                      "{testimonial.quote}"
                    </p>
                    <footer className="text-muted-foreground font-light">
                      — {testimonial.author}
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>

            {/* More Reviews Button */}
            <div className="flex justify-center mt-4 md:mt-8">
              <Button 
                variant="outline"
                size="lg"
                className="px-8 py-3 rounded-full font-light hover:bg-foreground hover:text-background transition-all duration-300"
                onClick={() => window.open('https://www.weddingwire.com/reviews/unique-cabo-weddings/a93ce236a1751046.html#gallery', '_blank')}
              >
                More from our clients
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-4 md:pt-8 pb-12 md:pb-16 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-normal mb-8 text-foreground">
            Ready to Start Planning Your Dream Wedding?
          </h2>
          
          <Button 
            size="lg" 
            className="text-lg px-10 py-6 rounded-full font-light shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={scrollToContact}
          >
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 px-6 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          {/* Mobile: GET IN TOUCH heading above form */}
          <div className="lg:hidden text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-normal text-background">
              GET IN TOUCH
            </h2>
          </div>
          
          {/* Mobile/Tablet: Subtext between form and contact info */}
          <div className="lg:hidden text-center mb-8">
            <p className="text-lg font-light text-background/80 leading-relaxed">
              For any inquiries or to begin planning your wedding journey, please contact our team using the details below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mobile: Contact Info Second, Desktop: Contact Info Left */}
            <div className="order-2 lg:order-1">
              {/* Desktop: GET IN TOUCH heading */}
              <h2 className="hidden lg:block text-4xl md:text-5xl font-normal mb-8 text-background">
                GET IN TOUCH
              </h2>
              {/* Desktop: Subtext above contact info */}
              <p className="hidden lg:block text-lg font-light text-background/80 mb-12 leading-relaxed">
                For any inquiries or to begin planning your wedding journey, please contact our team using the details below.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1">
                    <svg className="w-full h-full text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-background/60 text-sm mb-1">Location</p>
                    <p className="text-background font-light">El Tezal, C.P. 23454</p>
                    <p className="text-background font-light">Cabo San Lucas, BCS, México</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1">
                    <svg className="w-full h-full text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-background/60 text-sm mb-1">Mobile</p>
                    <p className="text-background font-light">+52 (624) 122 0146</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1">
                    <svg className="w-full h-full text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-background/60 text-sm mb-1">Email</p>
                    <div className="flex items-center gap-3">
                      <a 
                        href="mailto:luba@uniquecaboweddings.com?subject=Wedding Inquiry"
                        className="text-background font-light hover:text-background/80 transition-colors cursor-pointer underline"
                        onClick={(e) => {
                          // Fallback for browsers that might block mailto
                          try {
                            window.location.href = "mailto:luba@uniquecaboweddings.com?subject=Wedding Inquiry";
                          } catch (error) {
                            console.log('Mailto not supported, please copy email manually');
                          }
                        }}
                      >
                        luba@uniquecaboweddings.com
                      </a>
                      <button
                        onClick={copyEmail}
                        className="p-1.5 rounded-md bg-background/10 hover:bg-background/20 transition-colors group"
                        title="Copy email address"
                      >
                        {emailCopied ? (
                          <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-background group-hover:text-background/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 flex items-center justify-center">
                    <span className="text-background text-xl font-light">@</span>
                  </div>
                  <div>
                    <p className="text-background/60 text-sm mb-1">Follow us</p>
                                        <div className="flex gap-3 mt-2">
                      <a 
                        href="https://www.instagram.com/UniqueCaboWeddings/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-6 h-6 text-background hover:text-background/80 cursor-pointer transition-colors mt-1"
                      >
                        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://uniquecaboweddings.com/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 text-background hover:text-background/80 cursor-pointer transition-colors"
                      >
                        <img 
                          src="/ucw.png" 
                          alt="Unique Cabo Weddings" 
                          className="w-full h-full object-contain"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              

            </div>
            
            {/* Mobile: Form First, Desktop: Form Right */}
            <div className="bg-slate-800 rounded-2xl p-8 order-1 lg:order-2">
              <form 
                name="contact" 
                method="POST" 
                action="/success"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="space-y-6"
              >
                {/* Hidden field for Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                
                {/* Honeypot field for spam protection */}
                <div style={{ display: 'none' }}>
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full px-4 py-3 bg-slate-700 text-background rounded-lg border border-slate-600 focus:border-slate-400 focus:outline-none placeholder-slate-400"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 bg-slate-700 text-background rounded-lg border border-slate-600 focus:border-slate-400 focus:outline-none placeholder-slate-400"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <select
                    name="country-code"
                    defaultValue="+52"
                    className="w-full px-4 py-3 bg-slate-700 text-background rounded-lg border border-slate-600 focus:border-slate-400 focus:outline-none"
                  >
                    <option value="+52">🇲🇽 +52 (MX)</option>
                    <option value="+1">🇺🇸 +1 (US)</option>
                    <option value="+1">🇨🇦 +1 (CA)</option>
                    <option value="+44">🇬🇧 +44 (UK)</option>
                    <option value="+49">🇩🇪 +49 (DE)</option>
                    <option value="+33">🇫🇷 +33 (FR)</option>
                    <option value="+39">🇮🇹 +39 (IT)</option>
                    <option value="+34">🇪🇸 +34 (ES)</option>
                    <option value="+31">🇳🇱 +31 (NL)</option>
                    <option value="+41">🇨🇭 +41 (CH)</option>
                    <option value="+43">🇦🇹 +43 (AT)</option>
                    <option value="+32">🇧🇪 +32 (BE)</option>
                    <option value="+45">🇩🇰 +45 (DK)</option>
                    <option value="+46">🇸🇪 +46 (SE)</option>
                    <option value="+47">🇳🇴 +47 (NO)</option>
                    <option value="+358">🇫🇮 +358 (FI)</option>
                    <option value="+61">🇦🇺 +61 (AU)</option>
                    <option value="+64">🇳🇿 +64 (NZ)</option>
                    <option value="+81">🇯🇵 +81 (JP)</option>
                    <option value="+82">🇰🇷 +82 (KR)</option>
                    <option value="+86">🇨🇳 +86 (CN)</option>
                    <option value="+91">🇮🇳 +91 (IN)</option>
                    <option value="+55">🇧🇷 +55 (BR)</option>
                    <option value="+54">🇦🇷 +54 (AR)</option>
                    <option value="+56">🇨🇱 +56 (CL)</option>
                    <option value="+57">🇨🇴 +57 (CO)</option>
                    <option value="+51">🇵🇪 +51 (PE)</option>
                    <option value="+58">🇻🇪 +58 (VE)</option>
                    <option value="+27">🇿🇦 +27 (ZA)</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (e.g., 624 123 4567)"
                    className="w-full px-4 py-3 bg-slate-700 text-background rounded-lg border border-slate-600 focus:border-slate-400 focus:outline-none placeholder-slate-400 md:col-span-2"
                  />
                </div>
                
                <input
                  type="text"
                  name="wedding-date"
                  placeholder="Ideal Wedding Date (e.g., Spring 2025, June 15th, Summer)"
                  className="w-full px-4 py-3 bg-slate-700 text-background rounded-lg border border-slate-600 focus:border-slate-400 focus:outline-none placeholder-slate-400"
                />
                
                {selectedVenue === "custom" ? (
                  <div className="relative">
                    <input
                      type="text"
                      name="venue"
                      placeholder="Please specify your preferred venue"
                      value={customVenueName}
                      onChange={(e) => setCustomVenueName(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700 text-background rounded-lg border border-slate-600 focus:border-slate-400 focus:outline-none placeholder-slate-400"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedVenue("");
                        setCustomVenueName("");
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-background/60 hover:text-background transition-colors"
                      title="Back to venue selection"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </button>
                  </div>
                ) : (
                  <select 
                    name="venue"
                    value={selectedVenue}
                    onChange={(e) => {
                      setSelectedVenue(e.target.value);
                      if (e.target.value !== "custom") {
                        setCustomVenueName("");
                      }
                    }}
                    className="w-full px-4 py-3 bg-slate-700 text-background rounded-lg border border-slate-600 focus:border-slate-400 focus:outline-none"
                  >
                    <option value="" disabled hidden>Venue of Interest</option>
                    <option value="custom">Other / Custom Venue</option>
                    <option value="acre">Acre</option>
                    <option value="baja-luna">Baja Luna</option>
                    <option value="cascadas">Cascadas</option>
                    <option value="corazon">Corazón</option>
                    <option value="costa-palmas">Costa Palmas</option>
                    <option value="garza-blanca">Garza Blanca</option>
                    <option value="grand-velas">Grand Velas</option>
                    <option value="mar-del-cabo">Mar del Cabo</option>
                    <option value="mas-olas">Más Olas</option>
                    <option value="pueblo-bonito">Pueblo Bonito</option>
                    <option value="esperanza">Esperanza</option>
                    <option value="the-cape">The Cape</option>
                    <option value="viceroy">Viceroy</option>
                  </select>
                )}
                
                <input
                  type="number"
                  name="guest-count"
                  placeholder="Number of Guests"
                  className="w-full px-4 py-3 bg-slate-700 text-background rounded-lg border border-slate-600 focus:border-slate-400 focus:outline-none placeholder-slate-400"
                />
                
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 text-background rounded-lg border border-slate-600 focus:border-slate-400 focus:outline-none placeholder-slate-400 resize-none"
                ></textarea>
                
                <Button 
                  type="submit"
                  className="w-full py-4 text-lg font-light bg-background text-foreground hover:bg-background/90 rounded-lg transition-colors"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
      </div>
      </section>
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Index = () => {
  const [currentTestimonialSet, setCurrentTestimonialSet] = useState(0); // 0 for testimonials 1&2, 1 for testimonials 3&4
  return (
    <div className="min-h-screen bg-background">
      {/* Header with three buttons */}
      <header className="w-full py-6">
        <div className="flex justify-center gap-8">
          <Button variant="outline" className="px-6 py-2 font-light">
            Button 1
          </Button>
          <Button variant="outline" className="px-6 py-2 font-light">
            Button 2
          </Button>
          <Button variant="outline" className="px-6 py-2 font-light">
            Button 3
          </Button>
        </div>
      </header>

      {/* Main hero section */}
      <main className="flex flex-col items-center justify-center px-4 py-12">
        {/* Central rectangle div - responsive size with aspect ratio */}
        <div 
          className="w-[75vw] max-w-6xl rounded-3xl mb-8 aspect-[16/9] max-h-[60vh] bg-cover bg-center bg-no-repeat shadow-lg"
          style={{
            backgroundImage: "url('/UCW placeholder hero image .jpg')"
          }}
        >
        </div>

        {/* Headline and CTA */}
        <div className="text-center max-w-5xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6 text-foreground">
            Your Dream Cabo Wedding Starts Here
          </h1>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-full font-light"
            onClick={() => {
              // Add your contact action here
              console.log("Contact CTA clicked");
            }}
          >
            Contact a Local Wedding Pioneer
          </Button>
        </div>
      </main>

      {/* Social Proof Section - Venue Logos */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-lg font-light text-muted-foreground">
              Trusted by Cabo's Premier Wedding Venues
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {/* Corazon */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-16 flex items-center justify-center mb-2">
                <img 
                  src="/ChatGPT Image Jul 12, 2025, 10_17_29 PM.png" 
                  alt="Corazon" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <span className="text-xs font-light text-muted-foreground">Corazon</span>
            </div>
            {/* Acre */}
            <div className="flex flex-col items-center">
              <div className="w-28 h-20 flex items-center justify-center mb-2">
                <img 
                  src="/ChatGPT Image Jul 12, 2025, 10_19_38 PM.png" 
                  alt="Acre" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <span className="text-xs font-light text-muted-foreground">Acre</span>
            </div>
            {/* Viceroy */}
            <div className="flex flex-col items-center">
              <div className="w-28 h-20 flex items-center justify-center mb-2">
                <img 
                  src="/ChatGPT Image Jul 12, 2025, 10_20_03 PM.png" 
                  alt="Viceroy" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <span className="text-xs font-light text-muted-foreground">Viceroy</span>
            </div>
            {/* Baja Luna */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-16 flex items-center justify-center mb-2">
                <img 
                  src="/ChatGPT Image Jul 12, 2025, 10_41_25 PM.png" 
                  alt="Baja Luna" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <span className="text-xs font-light text-muted-foreground">Baja Luna</span>
            </div>
            {/* Mas Olas */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-16 flex items-center justify-center mb-2">
                <img 
                  src="/ChatGPT Image Jul 12, 2025, 10_20_59 PM.png" 
                  alt="Mas Olas" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <span className="text-xs font-light text-muted-foreground">Mas Olas</span>
            </div>
            {/* CTA Button */}
            <div className="flex flex-col items-center">
              <Button 
                variant="outline" 
                className="w-24 h-16 text-xs font-semibold flex items-center justify-center mb-2 border-2 border-foreground hover:bg-foreground hover:text-background transition-colors"
                onClick={() => {
                  console.log("Reach Out clicked");
                }}
              >
                Reach Out
              </Button>
            </div>
                    </div>
        </div>
      </section>

      {/* Client Timeline Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal mb-4 text-foreground tracking-wide">
              WHAT'S NEXT?
            </h2>
            <div className="w-24 h-1 bg-foreground/20 mx-auto"></div>
          </div>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-foreground/20 via-foreground/40 to-foreground/20 hidden md:block"></div>
            
            <div className="space-y-16 md:space-y-20">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center gap-8 relative">
                <div className="md:w-1/2 text-center md:text-right md:pr-12">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-muted/30 text-center">
                    <h3 className="text-xl md:text-2xl font-normal text-foreground mb-3">
                      Share Your Vision
                    </h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      (However Abstract)
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center font-semibold text-xl shadow-lg z-10 border-4 border-background">
                  1
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center gap-8 relative">
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="flex-shrink-0 w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center font-semibold text-xl shadow-lg z-10 border-4 border-background">
                  2
                </div>
                <div className="md:w-1/2 text-center md:text-left md:pl-12">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-muted/30 text-center">
                    <h3 className="text-xl md:text-2xl font-normal text-foreground mb-3">
                      We Bring it to Life
                    </h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      Professional planning and execution
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center gap-8 relative">
                <div className="md:w-1/2 text-center md:text-right md:pr-12">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-muted/30 text-center">
                    <h3 className="text-xl md:text-2xl font-normal text-foreground mb-3">
                      Celebrate Your Day
                    </h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      Stress free and present
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center font-semibold text-xl shadow-lg z-10 border-4 border-background">
                  3
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-20">
            <p className="text-2xl md:text-3xl font-normal text-foreground mb-8 italic">
              It's That Easy!
            </p>
            
            <Button 
              size="lg" 
              className="text-lg px-10 py-6 rounded-full font-light shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                console.log("Bring Your Vision to Life clicked");
              }}
            >
              Bring Your Vision to Life
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal mb-4 text-foreground tracking-wide">
              WORDS FROM THE HEART
            </h2>
            <div className="w-24 h-1 bg-foreground/20 mx-auto"></div>
          </div>
          
          <div className="relative">
            {/* Left Arrow - Only show when on testimonials 3&4 */}
            {currentTestimonialSet === 1 && (
              <button
                onClick={() => setCurrentTestimonialSet(0)}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 hover:scale-105"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>
            )}
            
            {/* Right Arrow - Only show when on testimonials 1&2 */}
            {currentTestimonialSet === 0 && (
              <button
                onClick={() => setCurrentTestimonialSet(1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 hover:scale-105"
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </button>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {currentTestimonialSet === 0 ? (
                <>
                  {/* Testimonial 1 */}
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-full aspect-square rounded-2xl mb-6 cursor-pointer hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-cover bg-center"
                      style={{
                        backgroundImage: "url('/UCW - Testimonial 1.png')"
                      }}
                      onClick={() => {
                        console.log("Instagram post 1 clicked");
                        // Add Instagram link here
                      }}
                    >
                    </div>
                    <blockquote className="text-center">
                      <p className="text-lg font-light text-foreground leading-relaxed italic mb-4">
                        "Our wedding day was absolutely perfect! Every detail was taken care of, and we could just focus on celebrating our love. Thank you for making our dreams come true!"
                      </p>
                      <footer className="text-muted-foreground font-light">
                        — Sarah & Michael
                      </footer>
                    </blockquote>
                  </div>
                  
                  {/* Testimonial 2 */}
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-full aspect-square rounded-2xl mb-6 cursor-pointer hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-cover bg-center"
                      style={{
                        backgroundImage: "url('/ucw testimonial 2.png')"
                      }}
                      onClick={() => {
                        console.log("Instagram post 2 clicked");
                        // Add Instagram link here
                      }}
                    >
                    </div>
                    <blockquote className="text-center">
                      <p className="text-lg font-light text-foreground leading-relaxed italic mb-4">
                        "From the first consultation to the last dance, everything was flawless. The team went above and beyond to create the most magical day of our lives!"
                      </p>
                      <footer className="text-muted-foreground font-light">
                        — Jessica & David
                      </footer>
                    </blockquote>
                  </div>
                </>
              ) : (
                <>
                  {/* Testimonial 3 */}
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-full aspect-square rounded-2xl mb-6 cursor-pointer hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-cover bg-center bg-muted/30"
                      onClick={() => {
                        console.log("Instagram post 3 clicked");
                        // Add Instagram link here
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center text-muted-foreground">
                          <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4"></div>
                          <p className="text-sm">Testimonial 3 Image</p>
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-center">
                      <p className="text-lg font-light text-foreground leading-relaxed italic mb-4">
                        "The attention to detail was incredible! Every moment was captured beautifully, and our guests are still talking about how amazing everything was."
                      </p>
                      <footer className="text-muted-foreground font-light">
                        — Emma & James
                      </footer>
                    </blockquote>
                  </div>
                  
                  {/* Testimonial 4 */}
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-full aspect-square rounded-2xl mb-6 cursor-pointer hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-cover bg-center bg-muted/30"
                      onClick={() => {
                        console.log("Instagram post 4 clicked");
                        // Add Instagram link here
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center text-muted-foreground">
                          <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4"></div>
                          <p className="text-sm">Testimonial 4 Image</p>
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-center">
                      <p className="text-lg font-light text-foreground leading-relaxed italic mb-4">
                        "Working with this team was a dream! They made our destination wedding seamless and stress-free. We couldn't have asked for a better experience."
                      </p>
                      <footer className="text-muted-foreground font-light">
                        — Maria & Carlos
                      </footer>
                    </blockquote>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

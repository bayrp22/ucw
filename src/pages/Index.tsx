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

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-normal mb-8 text-foreground">
            Ready to Start Planning Your Dream Wedding?
          </h2>
          
          <Button 
            size="lg" 
            className="text-lg px-10 py-6 rounded-full font-light shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              console.log("Get Started CTA clicked");
            }}
          >
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side - Contact Info */}
            <div>
              <h2 className="text-4xl md:text-5xl font-normal mb-8 text-background">
                GET IN TOUCH
              </h2>
              <p className="text-lg font-light text-background/80 mb-12 leading-relaxed">
                For questions or to begin planning your event with us, please contact our team using the details below.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1">
                    <svg className="w-full h-full text-background" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-background/60 text-sm mb-1">Office Line Phone</p>
                    <p className="text-background font-light">info@blackandwhite.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1">
                    <svg className="w-full h-full text-background" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-background/60 text-sm mb-1">Email</p>
                    <p className="text-background font-light">info@blackandwhite.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1">
                    <svg className="w-full h-full text-background" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-background/60 text-sm mb-1">Telephone</p>
                    <p className="text-background font-light">+54 3834-67-8765</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1">
                    <svg className="w-full h-full text-background" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-background/60 text-sm mb-1">Follow us</p>
                    <div className="flex gap-3 mt-2">
                      <div className="w-6 h-6 text-background hover:text-background/80 cursor-pointer">
                        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </div>
                      <div className="w-6 h-6 text-background hover:text-background/80 cursor-pointer">
                        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <div className="w-6 h-6 text-background hover:text-background/80 cursor-pointer">
                        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Contact Form */}
            <div className="bg-slate-800 rounded-2xl p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-slate-700 text-background rounded-lg border border-slate-600 focus:border-slate-400 focus:outline-none placeholder-slate-400"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-slate-700 text-background rounded-lg border border-slate-600 focus:border-slate-400 focus:outline-none placeholder-slate-400"
                  />
                </div>
                
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 bg-slate-700 text-background rounded-lg border border-slate-600 focus:border-slate-400 focus:outline-none placeholder-slate-400"
                />
                
                <input
                  type="text"
                  placeholder="Wedding Date (e.g., Spring 2025, June 15th, Summer)"
                  className="w-full px-4 py-3 bg-slate-700 text-background rounded-lg border border-slate-600 focus:border-slate-400 focus:outline-none placeholder-slate-400"
                />
                
                <select className="w-full px-4 py-3 bg-slate-700 text-background rounded-lg border border-slate-600 focus:border-slate-400 focus:outline-none">
                  <option value="">Venue of Interest</option>
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
                  <option value="the-cape">The Cape</option>
                  <option value="viceroy">Viceroy</option>
                </select>
                
                <input
                  type="number"
                  placeholder="Number of Guests"
                  className="w-full px-4 py-3 bg-slate-700 text-background rounded-lg border border-slate-600 focus:border-slate-400 focus:outline-none placeholder-slate-400"
                />
                
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 text-background rounded-lg border border-slate-600 focus:border-slate-400 focus:outline-none placeholder-slate-400 resize-none"
                ></textarea>
                
                <Button 
                  type="submit"
                  className="w-full py-4 text-lg font-light bg-background text-foreground hover:bg-background/90 rounded-lg transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("Contact form submitted");
                  }}
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

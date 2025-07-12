import { Button } from "@/components/ui/button";

const Index = () => {
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
    </div>
  );
};

export default Index;

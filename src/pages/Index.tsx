import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with three buttons */}
      <header className="w-full py-6">
        <div className="flex justify-center gap-8">
          <Button variant="outline" className="px-6">
            Button 1
          </Button>
          <Button variant="outline" className="px-6">
            Button 2
          </Button>
          <Button variant="outline" className="px-6">
            Button 3
          </Button>
        </div>
      </header>

      {/* Main hero section */}
      <main className="flex flex-col items-center justify-center px-4 py-12">
        {/* Central rectangle div - responsive size with aspect ratio */}
        <div className="w-[75vw] max-w-6xl bg-muted/50 rounded-3xl p-8 md:p-12 mb-8 aspect-[16/9] max-h-[60vh] flex items-center justify-center border border-border/50">
          <div className="text-center text-muted-foreground">
            {/* Placeholder content for the rectangle */}
            <div className="w-16 h-16 md:w-24 md:h-24 bg-muted rounded-full mx-auto mb-4"></div>
            <p className="text-sm md:text-base">Your content goes here</p>
          </div>
        </div>

        {/* Headline and subtext */}
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Your Dream Cabs Wedding Starts Here
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Contact a local wedding planner & subtext
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;

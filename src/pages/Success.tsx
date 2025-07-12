import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Thank You - Cabo Destination Weddings";
  }, []);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-normal mb-4 text-foreground">
            Thank You!
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your message has been sent successfully. We'll get back to you within 24 hours to discuss your dream Cabo wedding.
          </p>
        </div>
        
        <Button 
          onClick={handleGoHome}
          className="px-8 py-3 text-lg font-light"
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default Success; 
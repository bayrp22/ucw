import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowLeft, MessageCircle, Rocket, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FAQ = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(0); // Start with first question expanded
  const navigate = useNavigate();

  const faqData = [
    {
      id: 0,
      question: "What exactly does Unique Cabo Weddings offer?",
      answer: `Unique Cabo Weddings delivers a seamless, full-service wedding planning experience, ensuring every detail is crafted to perfection. Their comprehensive offerings include:

**Unlimited Professional Guidance:** Dedicated, one-on-one support from your very first inquiry right through your big day.

**Venue Matchmaking:** Connects you with Cabo's most breathtaking venues, tailored to your style and vision.

**Vendor Contracts & Selection:** Expertly drafts and negotiates contracts with top-tier local vendors—from DJs and florists to photographers, makeup artists, transportation, and furniture rentals—ensuring quality and transparency every step of the way.

**Rehearsals & Side Events:** Organizes and coordinates every aspect of your rehearsal, welcome dinners, farewell brunches, and any additional celebrations.

**Onsite Coordination:** A dedicated team orchestrates your wedding and satellite events on-site, resolving any hiccups instantly and keeping everything on track.

**Order & Payment Management:** Oversees all vendor orders and payments for clarity and peace of mind.

**Timeline Perfection:** Crafts a detailed, minute-by-minute itinerary, supervising every phase from setup through teardown.

**End-to-End Support:** Provides comprehensive oversight throughout the entire process, ensuring a stress-free experience from initial planning to the final farewell.

Unique Cabo Weddings is your all-in-one partner for a dream destination celebration in Cabo—handling every detail with care, creativity, and professionalism, so you can relax and cherish every moment of your unforgettable journey together.`
    },
    {
      id: 1,
      question: "What are Unique Cabo Weddings' credentials, experience, and professional support?",
      answer: `Unique Cabo Weddings backs its expertise with a clear commitment: to leverage their 18 years of experience in Los Cabos and extensive professional resources to ensure your event is a resounding success. Their team provides unwavering, personalized support—offering constant guidance via phone and email throughout the entire planning process. On your wedding day, they are there in person, supervising every detail from start to finish. This hands-on, end-to-end approach delivers not just professional backing, but also continuous, attentive care, making sure you feel fully supported and confident at every stage of your celebration.`
    },
    {
      id: 2,
      question: "How do they handle vendor selection and coordination?",
      answer: `Unique Cabo Weddings takes a proactive, meticulous approach to vendor selection and coordination, ensuring your vision and budget are always prioritized. Their experienced team handpicks with top-tier local vendors—whose offerings align perfectly with your preferences and financial plan. They expertly manage contracts, confirm all orders and quantities, and oversee every logistical detail, from day-of coordination to final payments.

Beyond logistics, they go the extra mile: organizing and attending site inspections, tastings, and menu trials so you're confident in every choice. Their hands-on involvement doesn't stop at the planning stage—they maintain clear, ongoing communication with all vendors, handling both preparatory details and operational follow-up. This end-to-end oversight ensures seamless collaboration, timely execution, and a truly stress-free experience for you, from the first consultation through the final farewell.`
    },
    {
      id: 3,
      question: "What is the pricing structure, and how are payments managed?",
      answer: `Unique Cabo Weddings provides full support in organizing your wedding budget. From the beginning, our team helps you track costs, prioritize spending, and keep everything organized through a shared document called the Budget Tracker. All payments are made directly to each vendor, ensuring transparency and full control over your investment. We act as your guide—coordinating timelines and reminders—so that every transaction is handled smoothly and on schedule.`
    },
    {
      id: 4,
      question: "What level of involvement do couples have?",
      answer: `Throughout your journey, you'll enjoy unlimited communication by phone and email, ensuring you're always in the loop and able to provide input at every stage. As the couple, you play a direct, active role in making key decisions—approving timelines, selecting vendors, and personalizing every detail of your event. Unique Cabo Weddings empowers your creative vision with clear, explicit agreements for each service, giving you confidence in every choice. We take on only one wedding per day, allowing our full attention to be devoted exclusively to your event. Above all, our continuous, hands-on supervision lets you relax and truly savor your wedding day, knowing every detail is in trusted, experienced hands.`
    },
    {
      id: 5,
      question: "What protocols do they have for unforeseen circumstances, contingencies, or cancellations?",
      answer: `Unique Cabo Weddings is committed to being prepared. In every event, we establish a contingency plan to ensure seamless execution, even in the face of unexpected challenges. Whether it's a weather concern or a logistical complication, our team follows established protocols and adapts swiftly to maintain the integrity of your celebration. The contract specifies that any deposits or payments made are non-refundable in the event of a cancellation. However, if you need to reschedule your wedding at least 15 days prior to the original date, all payments already made will be credited toward your new event date—subject to availability and possible pricing adjustments. Unique Cabo Weddings cannot be held liable for circumstances beyond their control, such as extreme weather, natural disasters, wars, or other force majeure events.`
    },
    {
      id: 6,
      question: "Do you have experience with destination, themed, or multicultural weddings?",
      answer: `Unique Cabo Weddings brings extensive experience working across a wide range of venues in Baja California Sur and other regions of Mexico—adapting each event to its specific setting with precision and creativity. Over the years, we've successfully planned and executed multicultural weddings of all kinds, including Turkish, Catholic, Jewish, Hindu, and more. Our team embraces the diversity of each couple's background and is always open to learning, incorporating, and honoring meaningful traditions. From welcome dinners to farewell brunches and every moment in between, we ensure that each celebration is not only seamless, but also deeply personal and culturally respectful.`
    },
    {
      id: 7,
      question: "Is it safe to book, schedule, and pay through the website?",
      answer: `All payment operations are supported by clear, step-by-step instructions for both domestic and international bank transfers, as well as trusted digital payment methods such as Zelle and leading international banks. Every procedure and account detail is transparently outlined in your contract, ensuring each transaction is secure, traceable, and fully documented. This structured, professional approach provides peace of mind, allowing you to reserve and confirm your special day with confidence and convenience.`
    }
  ];

  const toggleQuestion = (id: number) => {
    setExpandedQuestion(expandedQuestion === id ? -1 : id);
  };

  const scrollToContact = () => {
    // This would scroll to contact section on home page
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact-form');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="w-full py-6 px-6 border-b border-border/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-foreground/70 hover:text-foreground hover:bg-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground">Ask a Local Expert</h1>
            <p className="text-sm text-muted-foreground">Your Cabo Wedding Planning Questions Answered</p>
          </div>
          
          <Button 
            onClick={scrollToContact}
            className="px-6 py-2 font-bold bg-foreground text-background hover:bg-purple-600 hover:text-white shadow-md hover:shadow-lg transition-all duration-200 rounded-full"
          >
            Get Started
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Sidebar - Quick Index */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 sticky top-6">
              <div className="flex items-center gap-2 mb-6">
                <Rocket className="h-5 w-5 text-red-500" />
                <h2 className="text-xl font-semibold text-foreground">Quick Index</h2>
              </div>
              
              <div className="space-y-3">
                {faqData.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => toggleQuestion(item.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 hover:bg-accent/50 ${
                      expandedQuestion === item.id ? 'bg-accent/70 text-accent-foreground' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 text-white text-sm font-semibold flex items-center justify-center">
                        {index + 1}
                      </div>
                      <span className="text-sm leading-tight">{item.question}</span>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-border/30">
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg py-3 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  Ready to get started?
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right Main Section - Master FAQ */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-purple-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  ?
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-4">Master FAQ</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Answer real buyer questions and rank for long-tail queries while funnelling visitors to our quote form. 
                  Find answers to common questions about our wedding planning and coordination services in Cabo.
                </p>
              </div>
              
              <div className="min-h-[400px]">
                {expandedQuestion >= 0 && faqData[expandedQuestion] && (
                  <div className="border border-border/30 rounded-xl overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 text-white text-xl font-semibold flex items-center justify-center">
                          {expandedQuestion + 1}
                        </div>
                        <h3 className="text-2xl font-semibold text-foreground flex-1">
                          {faqData[expandedQuestion].question}
                        </h3>
                      </div>
                      
                      <div className="prose prose-lg max-w-none">
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-base">
                          {faqData[expandedQuestion].answer}
                        </div>
                      </div>
                      
                      <div className="mt-8 flex items-center gap-4 pt-6 border-t border-border/20">
                        <Button 
                          variant="outline" 
                          className="text-sm"
                          onClick={() => window.open('https://caboweddingplanner.love', '_blank')}
                        >
                          View detailed page →
                        </Button>
                        <Button 
                          onClick={scrollToContact}
                          className="bg-blue-600 hover:bg-blue-700 text-white text-sm"
                        >
                          Schedule a discovery call
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
                
                {expandedQuestion === -1 && (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 mx-auto mb-4 flex items-center justify-center">
                      <HelpCircle className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Select a Question</h3>
                    <p className="text-muted-foreground">Choose a question from the Quick Index to see the detailed answer.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ; 
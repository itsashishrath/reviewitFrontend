import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, ChevronUp, Smartphone, Monitor, Camera, Battery, Cpu, Youtube } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const YouTubeCitation = ({ videoId, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span 
            className="inline-flex items-center cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')}
          >
            {children}
            <Youtube 
              className={`w-4 h-4 ml-1 text-red-500 transition-transform duration-200 ${isHovered ? 'scale-125' : 'scale-100'}`}
            />
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>Click to watch video</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const MobileReview = ({ review }) => {
  const [showMore, setShowMore] = useState(false);

  const subtopicIcons = {
    "Design & Build Quality": <Smartphone className="w-5 h-5" />,
    "Display": <Monitor className="w-5 h-5" />,
    "Camera": <Camera className="w-5 h-5" />,
    "Performance & Battery Life": <Battery className="w-5 h-5" />,
    "Software & AI Features": <Cpu className="w-5 h-5" />
  };

  const renderWithCitations = (text, citations) => {
    const parts = text.split(/(\(\d+(?:,\s*\d+)*\))/);
    return parts.map((part, index) => {
      const citationMatch = part.match(/\((\d+(?:,\s*\d+)*)\)/);
      if (citationMatch) {
        const videoIds = citationMatch[1].split(',').map(id => citations[id.trim() - 1]);
        return (
          <YouTubeCitation key={index} videoId={videoIds[0]}>
            {part}
          </YouTubeCitation>
        );
      }
      return part;
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4 font-sans">
      <Card className="overflow-hidden shadow-lg bg-gradient-to-br from-purple-600 to-pink-500 text-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-3xl font-bold">{review.title}</CardTitle>
          <CardDescription className="text-lg text-gray-200">
            {renderWithCitations(review.shortDescription, review.citations)}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="subtopics" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/20">
              <TabsTrigger value="subtopics" className="text-white data-[state=active]:bg-white/30">Subtopics</TabsTrigger>
              <TabsTrigger value="overall" className="text-white data-[state=active]:bg-white/30">Overall</TabsTrigger>
              <TabsTrigger value="proscons" className="text-white data-[state=active]:bg-white/30">Pros & Cons</TabsTrigger>
            </TabsList>
            <TabsContent value="subtopics" className="mt-4">
              <ScrollArea className="h-[400px] pr-4">
                {Object.entries(review.subtopics).map(([topic, points], index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xl font-semibold mb-2 flex items-center">
                      {subtopicIcons[topic]}
                      <span className="ml-2">{topic}</span>
                    </h3>
                    <ul className="list-disc list-inside">
                      {points.map((point, idx) => (
                        <li key={idx} className="mb-1">
                          {renderWithCitations(point, review.citations)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </ScrollArea>
            </TabsContent>
            <TabsContent value="overall" className="mt-4">
              <p className="text-lg">
                {renderWithCitations(review.overall, review.citations)}
              </p>
            </TabsContent>
            <TabsContent value="proscons" className="mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pros</h3>
                  <ul className="list-disc list-inside">
                    {review.pros.map((pro, index) => (
                      <li key={index} className="mb-1">
                        {renderWithCitations(pro, review.citations)}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cons</h3>
                  <ul className="list-disc list-inside">
                    {review.cons.map((con, index) => (
                      <li key={index} className="mb-1">
                        {renderWithCitations(con, review.citations)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center text-white hover:text-gray-200 transition-colors duration-200"
          >
            {showMore ? (
              <>
                <span className="mr-1">Show Less</span>
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                <span className="mr-1">Show More</span>
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};

const review = {
  title: "Samsung Galaxy S24 Ultra Review",
  shortDescription: "The Samsung Galaxy S24 Ultra has been met with widespread praise, lauded as a potential \"peak slab phone\" (1) and a strong competitor to the iPhone 15 Pro Max (1).",
  subtopics: {
    "Design & Build Quality": [
      "The S24 Ultra sports a titanium frame (2), similar to the iPhone 15 Pro Max (1).",
      "The phone has a flat display, with thinner bezels and a larger screen compared to its predecessor (1, 5).",
      "The overall design remains similar to the S23 Ultra, but the phone is slightly thinner (2, 5).",
      "Reviewers note that the phone is heavier than some competitors (4)."
    ],
    "Display": [
      "The display is a 6.8-inch, 1440p, 120Hz LTPO AMOLED with a maximum brightness of 2,600 nits (1, 5).",
      "Samsung has implemented a new Gorilla Glass Armor which boasts a significant reduction in glare (2, 3).",
      "Some reviewers feel the new glass may affect the display's color saturation (3)."
    ],
    "Camera": [
      "The S24 Ultra boasts a 200MP main camera, a 12MP ultrawide camera, a 50MP 5x telephoto, and a 10MP 3x telephoto (2).",
      "The 5x telephoto lens is a new addition, replacing the 10x lens found on the S23 Ultra (5).",
      "The camera system produces sharp and detailed images (3, 4), but some reviewers find the software processing to be overly aggressive (3).",
      "The camera system is praised for its low-light performance (1, 4)."
    ],
    "Performance & Battery Life": [
      "The S24 Ultra maintains a 5,000mAh battery (5), offering excellent battery life, lasting well over a day with moderate use (3).",
      "The phone is powered by the Snapdragon 8 Gen 3 chip, which delivers exceptional performance (1, 2, 4).",
      "Some reviewers mention occasional stutters when switching between apps quickly (3)."
    ],
    "Software & AI Features": [
      "The S24 Ultra boasts a significant emphasis on AI features, with Samsung's new Galaxy AI suite (4).",
      "The standout feature is Circle to Search, which allows users to instantly Google search any object or text on their screen (5).",
      "Other AI features include Live Translate for real-time call translation (4, 5) and improved speaker labels in the Voice Recorder app (5).",
      "Samsung is offering seven years of security and software updates, extending the phone's lifespan (1)."
    ]
  },
  overall: "The Samsung Galaxy S24 Ultra impresses with its cutting-edge technology, stunning display, and versatile camera system. While it comes with a premium price tag, it offers a compelling package for tech enthusiasts and power users alike, with its AI features and long-term software support setting it apart in the competitive smartphone market.",
  pros: [
    "Excellent build quality with titanium frame (1, 2)",
    "Stunning display with high refresh rate and brightness (1, 5)",
    "Versatile and powerful camera system (2, 3, 4)",
    "Strong performance with Snapdragon 8 Gen 3 chip (1, 2, 4)",
    "Impressive AI features and long-term software support (1, 4, 5)"
  ],
  cons: [
    "Premium pricing (1)",
    "Heavier than some competitors (4)",
    "Aggressive camera processing in some situations (3)",
    "Occasional performance stutters reported (3)"
  ],
  citations: [
    "dQw4w9WgXcQ",
    "jNQXAC9IVRw",
    "kJQP7kiw5Fk",
    "fJ9rUzIMcZQ",
    "y6120QOlsfU"
  ]
};

export default function MobileReviewDisplay() {
  return <MobileReview review={review} />;
}
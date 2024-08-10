import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, ChevronUp, Smartphone, Monitor, Camera, Battery, Cpu } from 'lucide-react';


const review = {
    title: "Latest Smartphone X Review",
    shortDescription: "A powerful device with impressive features and sleek design.",
    subtopics: {
      "Design & Build Quality": [
        "Premium glass and metal construction",
        "Slim profile at just 7.6mm thick",
        "IP68 water and dust resistance"
      ],
      "Display": [
        "6.7-inch AMOLED display with 120Hz refresh rate",
        "HDR10+ support for vibrant colors",
        "1500 nits peak brightness for excellent outdoor visibility"
      ],
      "Camera": [
        "Versatile triple-lens system with 108MP main sensor",
        "8K video recording capability",
        "Advanced AI-powered night mode"
      ],
      "Performance & Battery Life": [
        "Latest flagship processor for smooth multitasking",
        "5000mAh battery with 65W fast charging",
        "Efficient power management for all-day use"
      ],
      "Software & AI Features": [
        "Clean and intuitive user interface",
        "AI-enhanced voice assistant",
        "Regular software updates promised for 3 years"
      ]
    },
    overall: "The Smartphone X impresses with its cutting-edge technology, stunning display, and versatile camera system. While it comes with a premium price tag, it offers a compelling package for tech enthusiasts and power users alike.",
    pros: [
      "Excellent build quality and design",
      "Stunning display with high refresh rate",
      "Versatile and powerful camera system",
      "Strong performance and long battery life"
    ],
    cons: [
      "Premium pricing",
      "No headphone jack",
      "Some may find the size too large for comfortable one-handed use"
    ]
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

  return (
    <div className="max-w-4xl mx-auto p-4 font-sans">
      <Card className="overflow-hidden shadow-lg bg-gradient-to-br from-purple-600 to-pink-500 text-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-3xl font-bold">{review.title}</CardTitle>
          <CardDescription className="text-lg text-gray-200">{review.shortDescription}</CardDescription>
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
                        <li key={idx} className="mb-1">{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </ScrollArea>
            </TabsContent>
            <TabsContent value="overall" className="mt-4">
              <p className="text-lg">{review.overall}</p>
            </TabsContent>
            <TabsContent value="proscons" className="mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pros</h3>
                  <ul className="list-disc list-inside">
                    {review.pros.map((pro, index) => (
                      <li key={index} className="mb-1">{pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cons</h3>
                  <ul className="list-disc list-inside">
                    {review.cons.map((con, index) => (
                      <li key={index} className="mb-1">{con}</li>
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

export default function MobileReviewDisplay() {
  return <MobileReview review={review} />;
}
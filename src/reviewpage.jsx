import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Smartphone, Monitor, Camera, Battery, Cpu } from 'lucide-react';

const Citation = ({ index, source, children }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <sup className="cursor-pointer text-black hover:text-blue-700">[{index}]</sup>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-2 bg-gradient-to-br from-purple-500 to-pink-500">
        <p className="text-sm">{source.title}</p>
        <p className="text-xs text-white">{source.author}</p>
        <a href={`https://www.youtube.com/watch?v=${source.videoId}`} target="_blank" rel="noopener noreferrer" className="text-xs underline text-black hover:underline">
          Click to Watch on YouTube
        </a>
      </PopoverContent>
    </Popover>
  );
};

const SourceList = ({ sources }) => (
  <div className="bg-transparent p-4 rounded-lg">
    <h3 className="text-lg font-semibold mb-2">Sources</h3>
    {sources.map((source, index) => (
      <div key={index} className="mb-2 p-2 bg-gradient-to-br from-pink-500 to-black text-white rounded shadow-sm">
        <p className="text-sm font-medium">{source.title}</p>
        <p className="text-xs text-gray-500">{source.author}</p>
        <a href={`https://www.youtube.com/watch?v=${source.videoId}`} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline">
          Watch on YouTube
        </a>
      </div>
    ))}
  </div>
);

const MobileReview = ({ review }) => {
  const subtopicIcons = {
    "Design & Build Quality": <Smartphone className="w-5 h-5" />,
    "Display": <Monitor className="w-5 h-5" />,
    "Camera": <Camera className="w-5 h-5" />,
    "Performance & Battery Life": <Battery className="w-5 h-5" />,
    "Software & AI Features": <Cpu className="w-5 h-5" />
  };

  const renderWithCitations = (text) => {
    const parts = text.split(/(\[[\d,\s]+\])/);
    return parts.map((part, index) => {
      const citationMatch = part.match(/\[([\d,\s]+)\]/);
      if (citationMatch) {
        const citations = citationMatch[1].split(',').map(num => num.trim());
        return (
          <span key={index}>
            {citations.map((citation, i) => (
              <Citation key={i} index={citation} source={review.sources[parseInt(citation) - 1]}>
                [{citation}]
              </Citation>
            ))}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-4 font-sans flex">
      <div className="flex-grow mr-4">
        <Card className="overflow-hidden shadow-lg bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-3xl font-bold">{review.title}</CardTitle>
            <CardDescription className="text-lg text-gray-200">
              {renderWithCitations(review.shortDescription)}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="subtopics" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-white/20">
                <TabsTrigger value="subtopics" className="text-white data-[state=active]:bg-white/30">Subtopics</TabsTrigger>
                <TabsTrigger value="overall" className="text-white data-[state=active]:bg-white/30">Overall</TabsTrigger>
                <TabsTrigger value="proscons" className="text-white data-[state=active]:bg-white/30">Pros & Cons</TabsTrigger>
              </TabsList>
              <TabsContent value="subtopics" className="mt-4 w-full max-w-[900px]">
                <ScrollArea className="h-[500px] pr-4 ">
                  {Object.entries(review.subtopics).map(([topic, points], index) => (
                    <div key={index} className="mb-6">
                      <h3 className="text-xl font-semibold mb-2 flex items-center">
                        {subtopicIcons[topic]}
                        <span className="ml-2">{topic}</span>
                      </h3>
                      <ul className="list-disc list-inside">
                        {points.map((point, idx) => (
                          <li key={idx} className="mb-1">
                            {renderWithCitations(point)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </ScrollArea>
              </TabsContent>
              <TabsContent value="overall" className="mt-4 w-full max-w-[900px]">
                <p className="text-lg">
                  {renderWithCitations(review.overall)}
                </p>
              </TabsContent>
              <TabsContent value="proscons" className="mt-4 w-full max-w-[900px]">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Pros</h3>
                    <ul className="list-disc list-inside">
                      {review.pros.map((pro, index) => (
                        <li key={index} className="mb-1">
                          {renderWithCitations(pro)}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cons</h3>
                    <ul className="list-disc list-inside">
                      {review.cons.map((con, index) => (
                        <li key={index} className="mb-1">
                          {renderWithCitations(con)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      <div className="w-64">
        <SourceList sources={review.sources} />
      </div>
    </div>
  );
};

const review = {
  title: "Samsung Galaxy S24 Ultra Review",
  shortDescription: "The Samsung Galaxy S24 Ultra has been met with widespread praise, lauded as a potential \"peak slab phone\" [1] and a strong competitor to the iPhone 15 Pro Max [1].",
  subtopics: {
    "Design & Build Quality": [
      "The S24 Ultra sports a titanium frame [2], similar to the iPhone 15 Pro Max [1].",
      "The phone has a flat display, with thinner bezels and a larger screen compared to its predecessor [1, 5].",
      "The overall design remains similar to the S23 Ultra, but the phone is slightly thinner [2, 5].",
      "Reviewers note that the phone is heavier than some competitors [4]."
    ],
    "Display": [
      "The display is a 6.8-inch, 1440p, 120Hz LTPO AMOLED with a maximum brightness of 2,600 nits [1, 5].",
      "Samsung has implemented a new Gorilla Glass Armor which boasts a significant reduction in glare [2, 3].",
      "Some reviewers feel the new glass may affect the display's color saturation [3]."
    ],
    "Camera": [
      "The S24 Ultra boasts a 200MP main camera, a 12MP ultrawide camera, a 50MP 5x telephoto, and a 10MP 3x telephoto [2].",
      "The 5x telephoto lens is a new addition, replacing the 10x lens found on the S23 Ultra [5].",
      "The camera system produces sharp and detailed images [3, 4], but some reviewers find the software processing to be overly aggressive [3].",
      "The camera system is praised for its low-light performance [1, 4]."
    ],
    "Performance & Battery Life": [
      "The S24 Ultra maintains a 5,000mAh battery [5], offering excellent battery life, lasting well over a day with moderate use [3].",
      "The phone is powered by the Snapdragon 8 Gen 3 chip, which delivers exceptional performance [1, 2, 4].",
      "Some reviewers mention occasional stutters when switching between apps quickly [3]."
    ],
    "Software & AI Features": [
      "The S24 Ultra boasts a significant emphasis on AI features, with Samsung's new Galaxy AI suite [4].",
      "The standout feature is Circle to Search, which allows users to instantly Google search any object or text on their screen [5].",
      "Other AI features include Live Translate for real-time call translation [4, 5] and improved speaker labels in the Voice Recorder app [5].",
      "Samsung is offering seven years of security and software updates, extending the phone's lifespan [1]."
    ]
  },
  overall: "The Samsung Galaxy S24 Ultra impresses with its cutting-edge technology, stunning display, and versatile camera system. While it comes with a premium price tag, it offers a compelling package for tech enthusiasts and power users alike, with its AI features and long-term software support setting it apart in the competitive smartphone market.",
  pros: [
    "Excellent build quality with titanium frame [1, 2]",
    "Stunning display with high refresh rate and brightness [1, 5]",
    "Versatile and powerful camera system [2, 3, 4]",
    "Strong performance with Snapdragon 8 Gen 3 chip [1, 2, 4]",
    "Impressive AI features and long-term software support [1, 4, 5]"
  ],
  cons: [
    "Premium pricing [1]",
    "Heavier than some competitors [4]",
    "Aggressive camera processing in some situations [3]",
    "Occasional performance stutters reported [3]"
  ],
  sources: [
    {
      title: "Samsung Galaxy S24 Ultra Review: Peak Slab Phone",
      author: "MKBHD",
      videoId: "dQw4w9WgXcQ"
    },
    {
      title: "Galaxy S24 Ultra - Hands On with Samsung's AI Phone!",
      author: "Unbox Therapy",
      videoId: "jNQXAC9IVRw"
    },
    {
      title: "Samsung Galaxy S24 Ultra Review: The Best Gets Better",
      author: "The Tech Chap",
      videoId: "kJQP7kiw5Fk"
    },
    {
      title: "Galaxy S24 Ultra Review: 72 Hours Later",
      author: "SuperSaf",
      videoId: "fJ9rUzIMcZQ"
    },
    {
      title: "Samsung Galaxy S24 Ultra: Top 10 Features!",
      author: "MrMobile",
      videoId: "y6120QOlsfU"
    }
  ]
};

export default function MobileReviewDisplay() {
  return <MobileReview review={review} />;
}
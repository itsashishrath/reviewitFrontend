import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Smartphone, Monitor, Camera, Battery, Cpu } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Citation = ({ index, source, children }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <sup className="cursor-pointer text-black hover:text-blue-700">[{index}]</sup>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-2 bg-gradient-to-br from-purple-500 to-pink-500">
        <p className="text-sm">{source.title}</p>
        <p className="text-xs text-white">{source.author}</p>
        <a href={`https://www.youtube.com/watch?v=${source.videoId}`} target="_blank" rel="noopener noreferrer" className="text-xs text-black hover:underline hover:text-sky-400">
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
  const [isSourcesVisible, setIsSourcesVisible] = useState(false);
  const subtopicIcons = {
    "Design & Build Quality": <Smartphone className="w-5 h-5" />,
    "Display": <Monitor className="w-5 h-5" />,
    "Camera": <Camera className="w-5 h-5" />,
    "Performance & Battery Life": <Battery className="w-5 h-5" />,
    "Software & AI Features": <Cpu className="w-5 h-5" />
  };

  const renderWithCitations = (text) => {
    const parts = text.split(/(\(\d+(?:,\s*\d+)*\))/);
    return parts.map((part, index) => {
      const citationMatch = part.match(/\((\d+(?:,\s*\d+)*)\)/);
      if (citationMatch) {
        const citations = citationMatch[1].split(',').map(num => num.trim());
        return (
          <span key={index}>
            {citations.map((citation, i) => (
              <Citation key={i} index={citation} source={review.sources[parseInt(citation) - 1]}>
                ({citation})
              </Citation>
            ))}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-4 font-sans flex flex-col md:flex-row border border-blue-800 ">
      <div className="flex-grow mr-0 md:mr-4 border border-black w-full md:w-3/4 mb-4 md:mb-0">
        <Card className="overflow-hidden shadow-lg bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 text-white w-full border border-black">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl md:text-3xl font-bold">{review.title}</CardTitle>
            <CardDescription className="text-base md:text-lg text-gray-200">
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
              <TabsContent value="subtopics" className="mt-4 w-full">
                <ScrollArea className="h-[300px] md:h-[500px] pr-4">
                  {Object.entries(review.subtopics).map(([topic, content], index) => (
                    <div key={index} className="mb-6">
                      <h3 className="text-lg md:text-xl font-semibold mb-2 flex items-center">
                        {subtopicIcons[topic]}
                        <span className="ml-2">{topic}</span>
                      </h3>
                      {Array.isArray(content) ? (
                        <ul className="list-disc list-inside">
                          {content.map((point, idx) => (
                            <li key={idx} className="mb-1 text-sm md:text-base">
                              {renderWithCitations(point)}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mb-1 text-sm md:text-base">{renderWithCitations(content)}</p>
                      )}
                    </div>
                  ))}
                </ScrollArea>
              </TabsContent>
              {/* <TabsContent value="overall" className="mt-4 w-full">
                <p className="text-base md:text-lg">
                  {renderWithCitations(review.overall)}
                </p>
              </TabsContent> */}
              {/* <TabsContent value="proscons" className="mt-4 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Pros</h3>
                    <ul className="list-disc list-inside">
                      {review.pros.map((pro, index) => (
                        <li key={index} className="mb-1 text-sm md:text-base">
                          {renderWithCitations(pro)}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Cons</h3>
                    <ul className="list-disc list-inside">
                      {review.cons.map((con, index) => (
                        <li key={index} className="mb-1 text-sm md:text-base">
                          {renderWithCitations(con)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent> */}
            </Tabs>
          </CardContent>
        </Card>
      </div>
      <div className="border border-black w-full md:w-1/4">
        <button 
          className="md:hidden w-full bg-blue-500 text-white py-2 px-4 rounded mb-4"
          onClick={() => setIsSourcesVisible(!isSourcesVisible)}
        >
          {isSourcesVisible ? 'Hide Sources' : 'Show Sources'}
        </button>
        <div className={`${isSourcesVisible ? 'block' : 'hidden'} md:block`}>
          <SourceList sources={review.sources} />
        </div>
      </div>
    </div>
  );
};

const MobileReviewDisplay = () => {
  const location = useLocation();
  const review = location.state?.review;

  if (!review) {
    return <div>No review data available. Please perform a search first.</div>;
  }

  return <MobileReview review={review} />;
};

export default MobileReviewDisplay;
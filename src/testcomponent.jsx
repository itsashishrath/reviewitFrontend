import React, { useState } from 'react';
import { PlusCircle, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Temporary data
const initialTopics = [
  {
    id: 1,
    name: '0/1 Knapsack Problems',
    questions: [
      '2 Types of Knapsack',
      '0/1 Knapsack Recursive',
      '0/1 Knapsack Memoization',
      '0/1 Knapsack Top Down DP',
      'Subset Sum Problem',
      'Equal Sum Partition Problem',
      'Count of Subsets Sum with a Given Sum',
      'Minimum Subset Sum Difference',
      'Count the Number of Subsets with a Given Difference',
      'Target Sum'
    ]
  },
  {
    id: 2,
    name: 'Unbounded Knapsack Problems',
    questions: [
      'Unbounded Knapsack',
      'Rod Cutting Problem',
      'Coin Change Problem: Maximum Number of Ways',
      'Coin Change Problem: Minimum Number of Coins',
      'Coin Change Problem Continued'
    ]
  },
  {
    id: 3,
    name: 'Longest Common Subsequence (LCS) Problems',
    questions: [
      'Longest Common Subsequence Introduction',
      'Longest Common Subsequence Recursive',
      'Longest Common Subsequence Memoization',
      'Longest Common Subsequence Top Down DP',
      'Longest Common Substring',
      'Printing Longest Common Subsequence',
      'Shortest Common Supersequence',
      'Minimum Number of Insertions and Deletions to Convert String A to String B',
      'Longest Palindromic Subsequence',
      'Minimum Number of Deletions in a String to Make It a Palindrome',
      'Print Shortest Common Supersequence',
      'Longest Repeating Subsequence',
      'Sequence Pattern Matching',
      'Minimum Number of Insertions in a String to Make It a Palindrome'
    ]
  },
  {
    id: 4,
    name: 'Matrix Chain Multiplication Problems',
    questions: [
      'Matrix Chain Multiplication Introduction, Identification, and General Format',
      'Matrix Chain Multiplication Recursive',
      'Matrix Chain Multiplication Memoization',
      'Palindrome Partitioning Recursive',
      'Palindrome Partitioning Memoization',
      'Palindrome Partitioning Memoized Optimization',
      'Evaluate Expression to True Boolean Parenthesization Recursive',
      'Evaluate Expression to True Boolean Parenthesization Memoization',
      'Scrambled String Recursive',
      'Scrambled String Memoization',
      'Egg Dropping Problem Recursive',
      'Egg Dropping Problem Memoization',
      'Egg Dropping Problem Memoization Optimization'
    ]
  },
  {
    id: 5,
    name: 'Dynamic Programming on Trees',
    questions: [
      'Dynamic Programming on Trees Introduction and Identification',
      'Dynamic Programming on Trees General Syntax',
      'Diameter of a Binary Tree',
      'Maximum Path Sum: From Any Node to Any Node',
      'Maximum Path Sum: From Leaf Node to Leaf Node'
    ]
  }
];

const StudyTopicsOrganizer = () => {
  const [topics, setTopics] = useState(initialTopics);
  const [newTopic, setNewTopic] = useState('');
  const [newQuestion, setNewQuestion] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(null);

  const addTopic = () => {
    if (newTopic.trim() !== '') {
      setTopics([...topics, { id: Date.now(), name: newTopic, questions: [] }]);
      setNewTopic('');
    }
  };

  const addQuestion = () => {
    if (selectedTopic && newQuestion.trim() !== '') {
      const updatedTopics = topics.map(topic => 
        topic.id === selectedTopic 
          ? { ...topic, questions: [...topic.questions, newQuestion] }
          : topic
      );
      setTopics(updatedTopics);
      setNewQuestion('');
    }
  };

  const deleteTopic = (topicId) => {
    setTopics(topics.filter(topic => topic.id !== topicId));
  };

  const deleteQuestion = (topicId, questionIndex) => {
    const updatedTopics = topics.map(topic => 
      topic.id === topicId 
        ? { ...topic, questions: topic.questions.filter((_, index) => index !== questionIndex) }
        : topic
    );
    setTopics(updatedTopics);
  };

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Study Topics Organizer</h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Add New Topic</h2>
        <div className="flex gap-2">
          <Input
            type="text"
            value={newTopic}
            onChange={(e) => setNewTopic(e.target.value)}
            placeholder="Enter new topic"
            className="flex-grow"
          />
          <Button onClick={addTopic}>
            <PlusCircle className="mr-2 h-4 w-4" /> Add Topic
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Add New Question</h2>
        <div className="flex gap-2">
          <select
            value={selectedTopic || ''}
            onChange={(e) => setSelectedTopic(Number(e.target.value))}
            className="flex-grow p-2 border rounded"
          >
            <option value="">Select a topic</option>
            {topics.map(topic => (
              <option key={topic.id} value={topic.id}>{topic.name}</option>
            ))}
          </select>
          <Input
            type="text"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Enter new question"
            className="flex-grow"
          />
          <Button onClick={addQuestion}>
            <PlusCircle className="mr-2 h-4 w-4" /> Add Question
          </Button>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {topics.map(topic => (
          <AccordionItem key={topic.id} value={`topic-${topic.id}`}>
            <AccordionTrigger className="text-lg font-semibold">
              {topic.name}
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTopic(topic.id);
                }}
              >
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>
            </AccordionTrigger>
            <AccordionContent>
              <Card>
                <CardHeader>
                  <CardTitle>Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  {topic.questions.length > 0 ? (
                    <ul className="list-disc pl-5">
                      {topic.questions.map((question, index) => (
                        <li key={index} className="mb-2 flex justify-between items-center">
                          {question}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deleteQuestion(topic.id, index)}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No questions added yet.</p>
                  )}
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default StudyTopicsOrganizer;
import React, { useState } from 'react';
import { PlusCircle, ChevronRight, X } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

// Sidebar component
const Sidebar = ({ subjects, onSubjectSelect, onAddSubject }) => {
    const [newSubject, setNewSubject] = useState('');
  
    const handleAddSubject = () => {
      if (newSubject.trim()) {
        onAddSubject(newSubject.trim());
        setNewSubject('');
      }
    };
  
    return (
      <div className="w-64 h-screen bg-gray-100 p-4 flex flex-col">
        <h2 className="text-xl font-bold mb-4">Subjects</h2>
        <div className="flex mb-4">
          <Input
            type="text"
            value={newSubject}
            onChange={(e) => setNewSubject(e.target.value)}
            placeholder="New subject"
            className="mr-2"
          />
          <Button onClick={handleAddSubject} size="icon">
            <PlusCircle className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex-grow overflow-y-auto">
          {subjects.map((subject) => (
            <Button
              key={subject.id}
              onClick={() => onSubjectSelect(subject.id)}
              variant="ghost"
              className="w-full justify-start mb-2"
            >
              <ChevronRight className="mr-2 h-4 w-4" /> {subject.name}
            </Button>
          ))}
        </div>
      </div>
    );
  };
  

// New TabCard component
const TabCard = ({ card, isSelected, onCardClick, onClose }) => {
  return (
    <Button
      variant={isSelected ? "default" : "ghost"}
      className={`flex items-center justify-between px-4 py-2 text-sm ${
        isSelected ? 'bg-primary text-primary-foreground' : ''
      }`}
      onClick={() => onCardClick(card.id)}
    >
      <span className="truncate mr-2">{card.title}</span>
      <Button
        variant="ghost"
        size="icon"
        className="h-4 w-4 rounded-full"
        onClick={(e) => {
          e.stopPropagation();
          onClose(card.id);
        }}
      >
        <X className="h-3 w-3" />
      </Button>
    </Button>
  );
};

// New TabContainer component
const TabContainer = ({ cards, selectedCardId, onCardClick, onCardClose }) => {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex">
        {cards.map((card) => (
          <TabCard
            key={card.id}
            card={card}
            isSelected={card.id === selectedCardId}
            onCardClick={onCardClick}
            onClose={onCardClose}
          />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

// Modified TopicCard component
const TopicCard = ({ card }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{card.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{card.description}</CardDescription>
        <Textarea
          className="mt-4"
          placeholder="Add notes here..."
          rows={5}
        />
      </CardContent>
    </Card>
  );
};

// Modified ContentArea component
const ContentArea = ({ selectedSubject, onCardSelect, onCardClose }) => {
  const selectedCard = selectedSubject?.cards.find(card => card.id === selectedSubject.selectedCardId);

  return (
    <div className="flex-grow flex flex-col">
      <div className="p-4 bg-background border-b">
        <h2 className="text-2xl font-bold mb-4">{selectedSubject?.name || 'Select a subject'}</h2>
        {selectedSubject && (
          <TabContainer
            cards={selectedSubject.cards}
            selectedCardId={selectedSubject.selectedCardId}
            onCardClick={onCardSelect}
            onCardClose={onCardClose}
          />
        )}
      </div>
      <div className="flex-grow p-8 overflow-y-auto">
        {selectedCard && <TopicCard card={selectedCard} />}
      </div>
    </div>
  );
};

// Modified App component
const App = () => {
  const [subjects, setSubjects] = useState([
    { id: 1, name: 'Data Structures', cards: [
      { id: 1, title: 'Arrays', description: 'Linear data structure to store elements of the same type.' },
      { id: 2, title: 'Linked Lists', description: 'Linear data structure where elements are stored in nodes.' },
    ]},
    { id: 2, name: 'Algorithms', cards: [
      { id: 3, title: 'Sorting', description: 'Algorithms to arrange elements in a specific order.' },
      { id: 4, title: 'Searching', description: 'Algorithms to find a specific element in a data structure.' },
    ]},
  ]);
  const [selectedSubjectId, setSelectedSubjectId] = useState(null);

  const handleSubjectSelect = (subjectId) => {
    setSelectedSubjectId(subjectId);
  };

  const handleAddSubject = (subjectName) => {
    const newSubject = {
      id: subjects.length + 1,
      name: subjectName,
      cards: [],
    };
    setSubjects([...subjects, newSubject]);
  };

  const handleCardSelect = (cardId) => {
    const updatedSubjects = subjects.map(subject => {
      if (subject.id === selectedSubjectId) {
        return { ...subject, selectedCardId: cardId };
      }
      return subject;
    });
    setSubjects(updatedSubjects);
  };

  const handleCardClose = (cardId) => {
    const updatedSubjects = subjects.map(subject => {
      if (subject.id === selectedSubjectId) {
        const updatedCards = subject.cards.filter(card => card.id !== cardId);
        const newSelectedCardId = updatedCards.length > 0 ? updatedCards[0].id : null;
        return { 
          ...subject, 
          cards: updatedCards,
          selectedCardId: newSelectedCardId
        };
      }
      return subject;
    });
    setSubjects(updatedSubjects);
  };

  const selectedSubject = subjects.find(subject => subject.id === selectedSubjectId);

  return (
    <div className="flex h-screen">
      <Sidebar
        subjects={subjects}
        onSubjectSelect={handleSubjectSelect}
        onAddSubject={handleAddSubject}
      />
      <ContentArea
        selectedSubject={selectedSubject}
        onCardSelect={handleCardSelect}
        onCardClose={handleCardClose}
      />
    </div>
  );
};

export default App;
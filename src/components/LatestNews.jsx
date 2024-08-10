import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const LatestNews = ({ newsItems }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {newsItems.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{new Date(item.date).toLocaleDateString()}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{item.summary}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default LatestNews;
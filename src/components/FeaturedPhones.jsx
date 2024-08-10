import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const FeaturedPhones = ({ phones }) => {
  return (
    <div className="flex overflow-x-auto space-x-4 p-4">
      {phones.map((phone) => (
        <Card key={phone.id} className="w-64 flex-shrink-0">
          <CardHeader>
            <CardTitle>{phone.name}</CardTitle>
            <CardDescription>{phone.brand}</CardDescription>
          </CardHeader>
          <CardContent>
            <img src={phone.image} alt={phone.name} className="w-full h-40 object-cover" />
          </CardContent>
          <CardFooter>
            <Button>View Details</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default FeaturedPhones;
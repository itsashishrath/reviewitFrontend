import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const ComparisonTool = ({ phones }) => {
  const [selectedPhones, setSelectedPhones] = useState([]);

  const addPhone = (phoneId) => {
    if (selectedPhones.length < 3) {
      setSelectedPhones([...selectedPhones, phones.find(p => p.id === phoneId)]);
    }
  };

  return (
    <div className="p-4">
      <Select onValueChange={(value) => addPhone(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Add phone to compare" />
        </SelectTrigger>
        <SelectContent>
          {phones.map((phone) => (
            <SelectItem key={phone.id} value={phone.id}>{phone.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead>Feature</TableHead>
            {selectedPhones.map(phone => (
              <TableHead key={phone.id}>{phone.name}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {['brand', 'price', 'screen', 'camera'].map(feature => (
            <TableRow key={feature}>
              <TableCell className="font-medium">{feature.charAt(0).toUpperCase() + feature.slice(1)}</TableCell>
              {selectedPhones.map(phone => (
                <TableCell key={phone.id}>{phone[feature]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ComparisonTool;
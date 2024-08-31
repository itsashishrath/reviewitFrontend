import React, { useState } from 'react';
import { Upload, FileText, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const OCRResultDisplay = () => {
  const [activeTab, setActiveTab] = useState('result1');

  // Dummy data for demonstration
  const dummyResults = {
    result1: {
      filename: 'invoice.jpg',
      text: `Invoice #: 12345
Date: August 22, 2024
Total Amount: $1,234.56

Item 1: Widget A - $50.00
Item 2: Gadget B - $75.00
Item 3: Tool C - $100.00

Thank you for your business!`
    },
    result2: {
      filename: 'receipt.png',
      text: `GROCERY STORE
123 Main St, Anytown, USA

Date: 08/22/2024
Time: 14:30

1x Milk     $3.99
2x Bread    $5.98
3x Apples   $4.50

Total:     $14.47
Tax:        $1.16
Grand Total: $15.63

Thank you for shopping with us!`
    }
  };

  const handleReupload = () => {
    // Logic for reuploading would go here
    console.log('Reupload triggered');
  };

  const handleMultipleUpload = () => {
    // Logic for multiple file upload would go here
    console.log('Multiple upload triggered');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-purple-800">OCR Results</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="result1" className="text-purple-700">Result 1</TabsTrigger>
              <TabsTrigger value="result2" className="text-purple-700">Result 2</TabsTrigger>
            </TabsList>
            {Object.entries(dummyResults).map(([key, result]) => (
              <TabsContent key={key} value={key}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-purple-700 flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      {result.filename}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px] w-full rounded-md border border-purple-200 p-4">
                      <pre className="text-sm text-purple-800 whitespace-pre-wrap">{result.text}</pre>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
          <div className="flex justify-between mt-6">
            <Button
              onClick={handleReupload}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Reupload
            </Button>
            <Button
              onClick={handleMultipleUpload}
              className="bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload Multiple
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OCRResultDisplay;
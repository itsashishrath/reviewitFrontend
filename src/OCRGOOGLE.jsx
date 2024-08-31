import React, { useState } from 'react';
import axios from 'axios';
import { Upload, FileText, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import OCRResultDisplay from './OCRRESULT'; // Import the result display component

const OCRWebsite = () => {
  const [file, setFile] = useState(null);
  const [model, setModel] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError('');
    setResults(null);
  };

  const handleModelChange = (value) => {
    setModel(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file');
      return;
    }
    if (!model) {
      setError('Please select a model');
      return;
    }

    setLoading(true);
    setError('');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('model', model);

    try {
      const response = await axios.post('http://localhost:8000/wel', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Assuming the API returns the OCR results in the expected format
      setResults({
        result1: {
          filename: file.name,
          text: response.data.text,
        },
      });
    } catch (err) {
      console.error('Error calling OCR API:', err);
      setError('Error processing image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-purple-800">OCR Image Analyzer</CardTitle>
          <CardDescription className="text-center text-purple-600">
            Upload an image and select a model to extract text
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-purple-300 border-dashed rounded-lg cursor-pointer bg-purple-50 hover:bg-purple-100"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-10 h-10 mb-3 text-purple-500" />
                  <p className="mb-2 text-sm text-purple-500">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-purple-500">PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <Input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept="image/*"
                />
              </label>
            </div>
            {file && (
              <Alert variant="default" className="bg-purple-100 text-purple-800 border-purple-300">
                <FileText className="h-4 w-4" />
                <AlertTitle>File selected</AlertTitle>
                <AlertDescription>{file.name}</AlertDescription>
              </Alert>
            )}
            <Select onValueChange={handleModelChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select OCR model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard OCR</SelectItem>
                <SelectItem value="advanced">Advanced OCR</SelectItem>
                <SelectItem value="handwriting">Handwriting OCR</SelectItem>
              </SelectContent>
            </Select>
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                'Analyze Image'
              )}
            </Button>
          </form>
          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
      {results && <OCRResultDisplay results={results} />}
    </div>
  );
};

export default OCRWebsite;
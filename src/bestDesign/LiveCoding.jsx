import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

const LiveCoding = () => {
  const [code, setCode] = useState('// Start coding...');

  return (
    <div className="live-coding bg-gray-100 py-20 dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Live Coding</h2>
        <CodeMirror
          value={code}
          height="400px"
          extensions={[javascript()]}
          theme={oneDark}
          onChange={(value, viewUpdate) => {
            setCode(value);
          }}
        />
      </div>
    </div>
  );
};

export default LiveCoding;

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Tailwind CSS Test</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Card 1</h2>
            <p className="text-gray-600">Testing basic Tailwind styles</p>
          </div>
          
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Card 2</h2>
            <p>Testing color utilities</p>
          </div>
          
          <div className="bg-accent p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Card 3</h2>
            <p>Testing custom accent color</p>
          </div>
        </div>
        
        <div className="mt-8 space-y-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Blue Button
          </button>
          
          <button className="bg-accent hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded ml-4">
            Accent Button
          </button>
        </div>
        
        <div className="mt-8 p-4 border-2 border-red-500">
          <p className="text-red-500">If you can see this red border and text, Tailwind is working!</p>
        </div>
      </div>
    </div>
  );
} 
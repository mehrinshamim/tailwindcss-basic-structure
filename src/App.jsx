import React from 'react';

// Button component defined outside App
const Button = ({ text, color = 'blue' }) => {
  return (
    <button className={`bg-${color}-500 text-white px-4 py-2 rounded hover:bg-${color}-600`}>
      {text}
    </button>
  );
};

// Card component
const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8">
      <img 
        className="w-full h-32 md:h-48 object-cover rounded-t-lg" 
        src={imageUrl} 
        alt={title}
      />
      <div className="mt-4">
        <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <Button text="Read More" color="blue" />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card 
          title="First Card" 
          description="This is a responsive card that looks good on all devices." 
          imageUrl="https://i.pinimg.com/736x/c2/b8/4c/c2b84c5efcd83e5f72ff92f6a6c626eb.jpg"
        />
        <Card 
          title="Second Card" 
          description="Another example of a responsive card component." 
          imageUrl="https://i.pinimg.com/474x/e5/7e/3d/e57e3d7474ad492cae94484acd4ab150.jpg"
        />
        <Card 
          title="Third Card" 
          description="Yet another beautiful card in our grid layout." 
          imageUrl="https://i.pinimg.com/474x/e9/ff/73/e9ff7301d3409a0cac7952b159e4f08f.jpg"
        />
      </div>
      
      <div className="mt-8 space-x-4">
        <Button text="Primary Button" color="blue" />
        <Button text="Success Button" color="green" />
        <Button text="Danger Button" color="red" />
      </div>
    </div>
  );
}

export default App;

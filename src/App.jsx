import React from 'react';

// Reusable Button component
// This component demonstrates the concept of extracting reusable components.
// Instead of repeating the same button styles across the app, we define a Button component
// that accepts props like `text`, `color`, and `onClick` to make it flexible and reusable.
const Button = ({ text, color = 'bg-blue-500', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${color} 
        text-white  
        font-semibold 
        px-6 py-2 
        rounded-lg  
        transition-colors duration-300  
        shadow-md hover:shadow-lg 
      `}
    >
      {text}
    </button>
  );
};

// Feature Card component
// This component is another example of reusability.
// It accepts `icon`, `title`, and `description` props to dynamically render feature cards.
// Tailwind's utility classes are used to style the card with hover effects and responsive design.
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-3xl text-blue-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Navbar component
// Demonstrates how to use the reusable Button component within another component.
// The Navbar includes a brand name and two buttons (Login and Sign Up) styled with Tailwind.
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">TailwindDemo</h1>
        <div className="space-x-4">
          {/* Reusing the Button component with different props */}
          <Button text="Login" color="bg-blue-500" />
          <Button text="Sign Up" color="bg-green-500" />
        </div>
      </div>
    </nav>
  );
};

// Hero section component
// This section showcases Tailwind's utility classes for gradients, responsive text sizes, and spacing.
// It also uses the reusable Button component for the call-to-action button.
const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Tailwind CSS
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Learn how to build modern websites with utility-first CSS
        </p>
        {/* Reusing the Button component with a custom onClick handler */}
        <Button 
          text="Get Started" 
          color="bg-white-500" 
          onClick={() => alert('Welcome to Tailwind CSS!')} 
        />
      </div>
    </div>
  );
};

// Main App component
// Combines all the components and demonstrates the use of reusable components and Tailwind's grid system.
function App() {
  // Feature data for the FeatureCard components
  // This array contains the data for each feature, making the code dynamic and scalable.
  const features = [
    {
      icon: "🎨",
      title: "Utility-First",
      description: "Write CSS directly in your HTML with predefined utility classes"
    },
    {
      icon: "📱",
      title: "Responsive",
      description: "Build responsive designs easily with intuitive breakpoint prefixes"
    },
    {
      icon: "⚡",
      title: "Performance",
      description: "Ship only the CSS you need, resulting in smaller file sizes"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose Tailwind CSS?
          </h2>
          {/* Using Tailwind's grid system for responsive layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mapping over the features array to dynamically render FeatureCard components */}
            {features.map((feature, index) => (
              <FeatureCard
                key={index}  // Unique key for each card (React requirement for lists)
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      {/* Demonstrates the use of reusable Button components in the footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">Built with React and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

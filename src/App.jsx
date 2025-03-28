import React from 'react';

// Reusable Button component with hover effects
const Button = ({ text, color = 'blue', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-${color}-500 
        hover:bg-${color}-600 
        text-white 
        font-semibold 
        px-6 
        py-2 
        rounded-lg 
        transition-colors 
        duration-300
        shadow-md 
        hover:shadow-lg
      `}
    >
      {text}
    </button>
  );
};

// Card component with responsive design
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-3xl text-blue-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Navbar component
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">TailwindDemo</h1>
        <div className="space-x-4">
          <Button text="Login" color="blue" />
          <Button text="Sign Up" color="green" />
        </div>
      </div>
    </nav>
  );
};

// Hero section component
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
        <Button 
          text="Get Started" 
          color="white" 
          onClick={() => alert('Welcome to Tailwind CSS!')} 
        />
      </div>
    </div>
  );
};

// Main App component
function App() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">Built with React and Tailwind CSS</p>
          <div className="space-x-4">
            <Button text="Documentation" color="blue" />
            <Button text="GitHub" color="gray" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

import strumentoLogo from '@/assets/stumento-logo.png';

const Hero = () => {
  return (
    <header className="bg-gradient-hero text-white text-center py-16 px-5">
      <div className="container mx-auto max-w-6xl px-5">
        <img 
          src={strumentoLogo} 
          alt="Stumento Logo" 
          className="w-20 h-20 mx-auto mb-6 object-contain"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-inter">
          Welcome to Stumento
        </h1>
        <p className="text-xl md:text-2xl font-inter opacity-90 max-w-3xl mx-auto">
          Your partner in enhancing student mental wellness through AI-driven insights and support.
        </p>
      </div>
    </header>
  );
};

export default Hero;
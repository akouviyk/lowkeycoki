export default function NotFound() {
  return (
    <div className="min-h-screen bg-midnight flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-sand mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-sand/80 mb-6">
          Page Not Found
        </h2>
        <p className="text-sand/60 mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block bg-coral hover:bg-coral/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

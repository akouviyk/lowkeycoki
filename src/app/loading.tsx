'use client'

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-midnight via-teal/30 to-midnight flex items-center justify-center">
      <div className="text-center space-y-6">
        {/* Logo/Brand */}
        <div className="text-4xl font-bold text-sand mb-8 animate-pulse">
          LOWKEY COKI
        </div>

        {/* Hookah Loader Animation */}
        <div className="relative w-32 h-32 mx-auto">
          {/* Base */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-teal rounded-full" />
          
          {/* Stem */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-2 h-16 bg-sand" />
          
          {/* Bowl */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-coral rounded-full animate-pulse" />
          
          {/* Smoke effect */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <div className="smoke-effect w-8 h-8 bg-sand/20 rounded-full blur-xl" />
          </div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <div className="smoke-effect w-8 h-8 bg-sand/20 rounded-full blur-xl" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Loading text */}
        <p className="text-sand/70 text-sm tracking-widest animate-pulse">
          LOADING VIBES...
        </p>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-coral rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-teal rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  )
}

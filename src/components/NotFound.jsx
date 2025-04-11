
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold text-gray-800 animate-bounce">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-gray-700">
          Oops! Page not found
        </h2>
        <p className="text-gray-600 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  )
}

export default NotFound
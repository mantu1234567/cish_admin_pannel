export default function QueriesPage() {
  return  (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-2xl font-semibold mt-4">Oops! Page not found</p>
      <p className="text-gray-600 mt-2">
        The page you are looking for might have been removed, renamed, or is temporarily unavailable.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go Back Home
      </a>
    </div>
  );
}

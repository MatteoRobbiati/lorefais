// pages/index.js
import { AcademicCapIcon, PresentationChartLineIcon } from '@heroicons/react/outline'; // Import the Heroicons

export default function Home() {
  return (
      <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/bg.svg')" }}>
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
        <h2 className="text-3xl font-bold mb-6">Hi, Matteo here!</h2>
        <p className="mb-8">This is a brief introduction about me. Feel free to explore my work and contributions.</p>

        {/* Publications Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 flex items-center space-x-4">
          <AcademicCapIcon className="h-12 w-12 text-blue-500" />
          <div className="flex-1">
            <h3 className="text-2xl font-semibold">Publications</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Here are some of my publications. You can find more details and download links to my papers.
            </p>
          </div>
        </div>

        {/* Conferences & Workshops Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 flex items-center space-x-4">
          <PresentationChartLineIcon className="h-12 w-12 text-green-500" />
          <div className="flex-1">
            <h3 className="text-2xl font-semibold">Conferences & Workshops</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              I have contributed to several conferences and workshops. Check out my presentations and other contributions.
            </p>
          </div>
        </div>

        {/* Add more sections here as needed */}
      </div>
    </div>
  );
}

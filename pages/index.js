import {
  AcademicCapIcon,
  PresentationChartLineIcon,
  DocumentTextIcon,
  BookOpenIcon,
  ArchiveIcon,
  CodeIcon,
  CubeIcon,
  PuzzleIcon,
  LightningBoltIcon,
} from '@heroicons/react/outline';
import ProjectsSection from '../components/ProjectsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat dark:bg-gray-900" style={{ backgroundImage: "url('/bg.svg')" }}>
      {/* Main content box */}
      <div className="max-w-5xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        {/* Introduction */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-1 text-gray-900 dark:text-white">Hi, Matteo here 👋🏻</h1>
        </div>

        {/* Profile and Text */}
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          {/* Profile Picture */}
          <img
            src="/me.jpg" // Replace with the actual path to your picture
            alt="Your Name"
            className="w-64 h-64 rounded-full border-4 border-gray-300 dark:border-gray-600"
          />
          {/* Text Content */}
          <div className="text-center md:text-left">
            <p className="text-2xl text-gray-700 dark:text-gray-300">
              I am a PhD student in Quantum Computing and Machine Learning at the European Organization for Nuclear Research (CERN).
            </p>
          </div>
        </div>


        {/* Research Interests */}
        <h2 className="text-4xl font-semibold mb-4 text-gray-900 dark:text-white text-center">Research Interests</h2>
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-xl p-6 mb-8 border-2 border-gray-400 dark:border-gray-600">
          <p className="text-center text-2xl text-gray-600 dark:text-gray-300">
            Quantum Computing 🔹 Quantum Machine Learning 🔹 Machine Learning 🔹 Optimization 🔹 Numerical Physics 🔹
            Full-stack computation 🔹 Middleware development
          </p>
        </div>

        {/* Publications */}
        <h2 className="text-4xl font-semibold mb-8 text-gray-900 dark:text-white text-center">Publications</h2>
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-xl p-6 mb-8 border-2 border-gray-400 dark:border-gray-600">
          <div className="mt-4">
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Peer-Reviewed Articles</h3>

            <ul className="text-[1.225rem] list-none pl-0 space-y-1 text-gray-700 dark:text-gray-300">
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 text-2xl text-[#4e7ccc]">🗞</div>
                <div>
                  <span className="italic">"Qibolab: an open-source hybrid quantum operating system"</span>, 
                  S. Efthymiou et al., <span className="italic">2024</span>, 
                  <a href="https://quantum-journal.org/papers/q-2024-02-12-1247/" className="text-[#4e7ccc] hover:underline ml-2">Quantum 8, 1247</a>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 text-2xl text-[#4e7ccc]">🗞</div>
                <div>
                  <span className="italic">"Multi-variable integration with a variational quantum circuit"</span>, 
                  J. M. Cruz-Martinez, M. Robbiati, S. Carrazza, <span className="italic">2024</span>, 
                  <a href="https://iopscience.iop.org/article/10.1088/2058-9565/ad5866" className="text-[#4e7ccc] hover:underline ml-2">Quantum Sci. Technol. 9 035053</a>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 text-2xl text-[#4e7ccc]">🗞</div>
                <div>
                  <span className="italic">"Characterization of a Transmon Qubit in a 3D Cavity for Quantum Machine Learning and Photon Counting"</span>, 
                  A. D'Elia et al., <span className="italic">2024</span>, 
                  <a href="https://www.mdpi.com/2076-3417/14/4/1478" className="text-[#4e7ccc] hover:underline ml-2">Appl. Sci. 14(4), 1478</a>
                </div>
              </li>
            </ul>

            <div className="border-t-2 border-gray-400 dark:border-gray-600 my-6"></div>

            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Preprints</h3>
            <ul className="text-[1.225rem] list-none pl-0 space-y-1 text-gray-700 dark:text-gray-300">
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 text-2xl text-[#4e7ccc]">📝</div>
                <div>
                  <span className="italic">"Determining probability density functions with adiabatic quantum computing"</span>, 
                  M. Robbiati et al.
                  <a href="https://arxiv.org/abs/2303.11346" className="text-[#4e7ccc] hover:underline ml-2">arXiv:2303.11346</a>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 text-2xl text-[#4e7ccc]">📝</div>
                <div>
                  <span className="italic">"Real-time error mitigation for variational optimization on quantum hardware"</span>, 
                  M. Robbiati et al.
                  <a href="https://arxiv.org/abs/2311.05680" className="text-[#4e7ccc] hover:underline ml-2">arXiv:2311.05680</a>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 text-2xl text-[#4e7ccc]">📝</div>
                <div>
                  <span className="italic">"Double-bracket quantum algorithms for high-fidelity ground state preparation"</span>, 
                  M. Robbiati et al.
                  <a href="https://arxiv.org/abs/2408.03987" className="text-[#4e7ccc] hover:underline ml-2">arXiv:2408.03987</a>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 text-2xl text-[#4e7ccc]">📝</div>
                <div>
                  <span className="italic">"Qibocal: an open-source framework for calibration of self-hosted quantum devices"</span>, 
                  A. Pasquale et al.
                  <a href="https://arxiv.org/abs/2410.00101" className="text-[#4e7ccc] hover:underline ml-2">arXiv:2410.00101</a>
                </div>
              </li>
            </ul>
            <div className="border-t-2 border-gray-400 dark:border-gray-600 my-6"></div>
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Proceedings of science</h3>

            <ul className="text-lg list-none pl-0 space-y-1 text-gray-700 dark:text-gray-300">
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 text-2xl text-[#4e7ccc]">🗞</div>
                <div>
                  <span className="italic">"A quantum analytical Adam descent through parameter shift rule using Qibo"</span>, 
                  M. Robbiati et al., <span className="italic">2022</span>, 
                  <a href="https://arxiv.org/abs/2210.10787" className="text-[#4e7ccc] hover:underline ml-2">arXiv:2210.10787</a>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 text-2xl text-[#4e7ccc]">🗞</div>
                <div>
                  <span className="italic">"An open-source framework for quantum hardware control"</span>, 
                  E. Pedicillo et. al., <span className="italic">2024</span>, 
                  <a href="https://arxiv.org/abs/2407.21737" className="text-[#4e7ccc] hover:underline ml-2">arXiv:2407.21737</a>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 text-2xl text-[#4e7ccc]">🗞</div>
                <div>
                  <span className="italic">"Beyond full statevector simulation with Qibo"</span>, 
                  A. Pasquale et al., <span className="italic">2024</span>, 
                  <a href="https://arxiv.org/abs/2408.00384" className="text-[#4e7ccc] hover:underline ml-2">arXiv:2408.00384</a>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 text-2xl text-[#4e7ccc]">🗞</div>
                <div>
                  <span className="italic">"Strategies for optimizing double-bracket quantum algorithms"</span>, 
                  A. Pasquale et al., <span className="italic">2024</span>, 
                  <a href="https://arxiv.org/abs/2408.07431" className="text-[#4e7ccc] hover:underline ml-2">arXiv:2408.07431</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Conferences & Proceedings */}
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white text-center">Conferences & Workshops</h2>
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-xl p-6 mb-8 border-2 border-gray-400 dark:border-gray-600">
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li>2024 APS March Meeting, Minneapolis, USA</li>
            <li>2023 QTML, CERN, Geneva</li>
            <li>2023 Quantum Technologies Workshop, INFN, Turin</li>
          </ul>
        </div>

        {/* Courses Section */}
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white text-center">Public lectures - YouTube playlists</h2>
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-xl p-6 mb-8 border-2 border-gray-400 dark:border-gray-600">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Left Box - Course 1 */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Singapore, 2024</h3>
              <p className="text-[1.3rem] text-gray-700 dark:text-gray-300 mb-4">Quantum computing with Qibo (basics)</p>
              {/* Embed the video for Course 1 */}
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  width="350"
                  height="220"
                  src="https://www.youtube.com/embed/tOXnRWNpjns"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            {/* Right Box - Course 2 */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">São Paulo, 2024</h3>
              <p className="text-[1.3rem] text-gray-700 dark:text-gray-300 mb-4">Practical minicourse on quantum computing</p>
              {/* Embed the video for Course 2 */}
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  width="350"
                  height="220"
                  src="https://www.youtube.com/embed/fPtyVs6uXPM?list=PLg0_ydgtbHGFmY8oxvHZdluUFFt874_yv"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Right Box - Course 2 */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">PyHEP, 2024</h3>
              <p className="text-[1.3rem] text-gray-700 dark:text-gray-300 mb-4">Quantum Machine Learning in High Energy Physics with Qibo</p>
              {/* Embed the video for Course 2 */}
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  width="350"
                  height="220"
                  src="https://www.youtube.com/embed/AprLJjXI_PI"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Right Box - Course 2 */}
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">CERN, 2023</h3>
              <p className="text-[1.3rem] text-gray-700 dark:text-gray-300 mb-4">Qibo: an open-source hybrid quantum operating system</p>
              {/* Embed the video for Course 2 */}
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  width="350"
                  height="220"
                  src="https://www.youtube.com/embed/vlos9LvM80Q?"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

          </div>
        </div>


        {/* Code Projects */}
        <h2 className="text-center text-4xl font-semibold mb-4 text-gray-900 dark:text-white">Code projects</h2>
        <ProjectsSection />
      </div>
    </div>
  );
}

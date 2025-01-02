  import ProjectsSection from '../components/ProjectsSection';

  export default function Home() {
    return (
      <div className="min-h-screen bg-cover bg-center bg-no-repeat dark:bg-gray-00">
        {/* Main content box */}
        <div className="max-w-5xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          {/* Introduction */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-1 text-gray-900 dark:text-white">Hi, Matteo here 👋🏻</h1>
          </div>

          {/* Profile and Text */}
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
            {/* Profile Picture */}
            <img
              src="/me.jpg" // Replace with the actual path to your picture
              alt="Your Name"
              className="w-36 h-40 rounded-full border-4 border-gray-300 dark:border-gray-600"
            />
            {/* Text Content */}
            <div className="text-center md:text-left">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                I am a PhD student in Quantum Computing and Machine Learning at the European Organization for Nuclear Research (CERN).
              </p>
            </div>
          </div>


          {/* Research Interests */}
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white text-center">Research Interests</h2>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-xl p-6 mb-8 border-2 border-gray-400 dark:border-gray-600">
            <p className="text-center text-lg text-gray-600 dark:text-gray-300">
              Quantum Computing 🔹 Quantum Machine Learning 🔹 Machine Learning 🔹 Optimization 🔹 Numerical Physics 🔹
              Full-stack computation 🔹 Middleware development
            </p>
          </div>

          {/* Publications */}
          <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white text-center">Publications</h2>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-xl p-6 mb-8 border-2 border-gray-400 dark:border-gray-600">
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Peer-Reviewed Articles</h3>

              <ul className="text-md list-none pl-0 space-y-1 text-gray-700 dark:text-gray-300">
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

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Preprints</h3>
              <ul className="text-md list-none pl-0 space-y-1 text-gray-700 dark:text-gray-300">
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Proceedings of science</h3>

              <ul className="text-md list-none pl-0 space-y-1 text-gray-700 dark:text-gray-300">
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

          {/* Courses Section */}
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white text-center">Public lectures - YouTube playlists</h2>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-xl p-6 mb-8 border-2 border-gray-400 dark:border-gray-600">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Right Box - Course 1 */}
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Singapore, 2024</h3>
                <p className="text-md text-gray-700 dark:text-gray-300 mb-4">Quantum computing with Qibo (basics)</p>
                {/* Embed the video for Course 2 */}
                <div className="flex justify-center w-full">
                  <div className="relative w-11/12 pb-[56.25%]"> {/* 56.25% is the aspect ratio for 16:9 */}
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/tOXnRWNpjns"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
              
              {/* Right Box - Course 2 */}
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">São Paulo, 2024</h3>
                <p className="text-md text-gray-700 dark:text-gray-300 mb-4">Practical minicourse on quantum computing</p>
                {/* Embed the video for Course 2 */}
                <div className="flex justify-center w-full">
                  <div className="relative w-11/12 pb-[56.25%]"> {/* 56.25% is the aspect ratio for 16:9 */}
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/fPtyVs6uXPM?list=PLg0_ydgtbHGFmY8oxvHZdluUFFt874_yv"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Right Box - Course 3 */}
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">PyHEP, 2024</h3>
                <p className="text-md text-gray-700 dark:text-gray-300 mb-4">Quantum Machine Learning in High Energy Physics with Qibo</p>
                {/* Embed the video for Course 2 */}
                <div className="flex justify-center w-full">
                  <div className="relative w-11/12 pb-[56.25%]"> {/* 56.25% is the aspect ratio for 16:9 */}
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/AprLJjXI_PI"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Right Box - Course 3 */}
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">CERN, 2023</h3>
                <p className="text-md text-gray-700 dark:text-gray-300 mb-4">Qibo: an open-source hybrid quantum operating system</p>
                {/* Embed the video for Course 2 */}
                <div className="flex justify-center w-full">
                  <div className="relative w-11/12 pb-[56.25%]"> {/* 56.25% is the aspect ratio for 16:9 */}
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
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
          </div>


          {/* Code Projects */}
          <h2 className="text-center text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Code projects</h2>
          <ProjectsSection />


          {/* Contacts Section */}
          <section id="contacts" className="mt-16 p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
            <div className="flex justify-center space-x-8 mt-4">
              <a href="matteo.robbiati@cern.ch" className="text-gray-500 hover:text-blue-500">
                <i className="fas fa-envelope fa-2x"></i>
              </a>
              <a href="https://www.linkedin.com/in/matteo-robbiati-43ab05209/" className="text-gray-500 hover:text-blue-500">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="https://github.com/MatteoRobbiati" className="text-gray-500 hover:text-blue-500">
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a href="https://scholar.google.com/citations?user=DYyhruMAAAAJ&hl=it" className="text-gray-500 hover:text-blue-500">
                <i className="fas fa-graduation-cap fa-2x"></i>
              </a>
            </div>
          </section>

        </div>
      </div>
    );
  }

import './App.css';
import { FaGithub, FaInstagram, FaLinkedin,FaMapMarkerAlt , FaEnvelope, FaTwitter, FaPhone, FaExternalLinkAlt } from 'react-icons/fa';
import photo from './assets/photo.jpg';

function App() {

  const projects = [
    {
      title: 'Terminal-Chat-App',
      desc: 'A real-time CLI based group chat application with socket.io and Node.js supporting multiple chat rooms.',
      link: 'https://github.com/deepakpradhan10242/Terminal-Chat-App'
    },
    {
      title: 'Finstreet 2025',
      desc: "Developed a full-stack website for Finance club's annual fest using React, Node.js, and MongoDB.",
      link: 'https://finstreet-2025.vercel.app/'
    },
    {
      title: 'Finance Club',
      desc: 'Developed a website for Finace club BIT Mesra using React, Node.js, and MongoDB.',
      link: 'https://financeclubbitm.in/'
    },
    {
      title: "Bitotsav'25",
      desc: "Contributed to the development of Our college's annual fest website using React, Node.js, and MongoDB.",
      link: 'https://www.bitotsav.com/'
    },
  ];

  const links = [
    { href: 'https://drive.google.com/file/d/13YQRTyvOo6ucMxn569xoTUMGVFIuG7eG/view', label: 'Resume' },
    { href: 'mailto:deepak.pradhan4364@gmail.com', label: 'Email' },
    { href: 'https://leetcode.com/u/d_pradhan/', label: 'LeetCode' },
    { href: 'https://www.codechef.com/users/d_pradhan', label: 'CodeChef' },
    { href: 'https://github.com/deepakpradhan10242', label: 'GitHub' },
    
  ];

  return (
    <div className="bg-[#000942] min-h-screen w-full text-white pt-10 flex flex-col items-center px-4 sm:px-8 md:px-20">

      <img 
        src={photo} 
        alt="Deepak" 
        className="rounded-full w-36 h-36 sm:w-40 sm:h-40 object-cover shadow-[0_0_25px_#ffffff]"
      />


      <p className="text-2xl sm:text-3xl font-semibold text-center mt-6 sm:mt-8">DEEPAK PRADHAN</p>
      <p className="text-xl sm:text-2xl font-light text-center mt-3 sm:mt-4">Electrical & Electronics Engineering</p>
      <p className="text-lg sm:text-xl font-light text-center mt-1 sm:mt-2">Birla Institute of Technology, Mesra (2022-2026)</p>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center space-x-6 sm:space-x-8 mt-8 text-2xl sm:text-3xl text-white cursor-pointer">
        <a href="mailto:deepak.pradhan4364@gmail.com" className='hover:text-pink-500 mb-4 sm:mb-0' target="_blank" rel="noreferrer" aria-label="Email">
          <FaEnvelope />
        </a>
        
        <a href="https://www.linkedin.com/in/deepakpradhan10242/" className='hover:text-pink-500 mb-4 sm:mb-0' target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="/" className='hover:text-pink-500 mb-4 sm:mb-0' target="_blank" rel="noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://instagram.com/i_d_pradhan" className='hover:text-pink-500 mb-4 sm:mb-0' target="_blank" rel="noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>

      {/* Links above projects */}
      <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-12 text-base sm:text-lg font-medium text-pink-400">
        {links.map(({href, label}, i) => (
          <a 
            key={i} 
            href={href} 
            target="_blank" 
            rel="noreferrer" 
            className="hover:underline hover:text-pink-600 whitespace-nowrap"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Projects Section */}
  
<section className="w-full max-w-4xl mt-8">
  <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 border-b-2 border-pink-500 pb-2 text-center">
    My Projects
  </h2>

  <div className="flex flex-col space-y-4">
    {projects.map((project, i) => (
      <div
        key={i}
        className="bg-[#111a3d] rounded-lg p-4 sm:p-6 shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center"
      >
        <div className="flex flex-col sm:flex-row sm:items-center w-full gap-2 sm:gap-4">
  <h3 className="text-base sm:text-lg font-semibold whitespace-nowrap">{project.title}</h3>
  <p className="text-xs sm:text-sm text-gray-400">{project.desc}</p>
</div>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noreferrer" 
          className="mt-3 sm:mt-0 text-pink-500 hover:text-pink-700 self-start sm:self-auto"
          aria-label={`Visit ${project.title}`}
        >
          <FaExternalLinkAlt size={18} />
        </a>
      </div>
    ))}
  </div>
</section>


      {/* Contact Section */}
      <section className="w-full max-w-4xl mt-16 mb-16 px-4 sm:px-0">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 border-b-2 border-pink-500 pb-2 text-center">
          Contact Me
        </h2>

        <div className="flex flex-col space-y-4 text-center text-base sm:text-lg text-gray-300">

        {/* Phone and Email on the same line */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
          <div className="flex items-center space-x-2">
            <FaPhone className="text-pink-500" />
            <span>+91 6204502571</span>
          </div>
          <div className="flex items-center space-x-2 break-words">
            <FaEnvelope className="text-pink-500" />
            <a href="mailto:deepak.pradhan4364@gmail.com" className="hover:underline">
              deepak.pradhan4364@gmail.com
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center space-x-3">
          <FaMapMarkerAlt className="text-pink-500" />
          <span>Hostel - 10, BIT Mesra, Ranchi, Jharkhand - 835215</span>
        </div>
  
        </div>

      </section>

    </div>
  );
}

export default App;

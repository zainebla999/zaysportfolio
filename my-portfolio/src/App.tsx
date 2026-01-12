import "./App.css";
import Footer from "./Footer.tsx";
import About from "./About.tsx";
import Projects from "./Projects.tsx";
import mainDoodle from "./assets/DoodleMain (1).png";
import journeyDoodle from "./assets/3rdDoodle.png";

function App() {
  // const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className="wPageContainer w-screen px-10 bg-[#CCDCDB]">
      <div className="mainContainer w-full h-screen flex flex-col">
        <div className="navSection w-full sticky top-0 right-0 left-0 p-3 bg-[#CCDCDB]">
          <nav className="text-right  ">
            <a href="#heroContainer">
              <button className=" rounded-full bg-transparent text-[#849594]">
                Home
              </button>
            </a>
            <a href="#aboutSection">
              <button className=" rounded-full bg-transparent text-[#849594]">
                About
              </button>
            </a>
            <a href="#projectsSection">
              <button className=" rounded-full bg-transparent text-[#849594]">
                Projects
              </button>
            </a>
          </nav>
        </div>
        <div
          id="heroContainer"
          className="heroSection flex flex-1 items-center justify-center bg-[#CCDCDB]"
        >
          <div className="heroContainer text-center text-black leading-8">
            <div className=" w-auto overflow-hidden center">
              <img className="h-52 mx-auto" src={mainDoodle} alt="" />
            </div>
            <h1 className="p-1">Zaineb Latif</h1>
            <p className="p-1">
              front-end developer, photographer, visual story teller
            </p>

            <button>View Resume</button>
          </div>
        </div>
      </div>

      <About />
      <h2>JOURNEY</h2>
      <div className="journey flex flex-row h-full items-center  py-9">
        <div className="jDoodle flex-1">
          <img src={journeyDoodle} alt="" className="h-3/4 mx-auto" />
        </div>
        <div className="journeyContent flex-2 p-2 ">
          <div className="experienceHolder flex flex-col gap-6 py-6 ">
            <div className="experience1 expBox flex flex-row gap-6">
              <div className="duration1">
                <p>Jul 2025 – Sep 2025</p>
              </div>
              <div className="exDesc">
                <h3>Operations Intern — Ibtechar</h3>
                <p>Systems & Documentation Design</p>
              </div>
            </div>

            <div className="experience2 expBox flex flex-row gap-6">
              <div className="duration2">
                <p>Feb 2025 – Jun 2025</p>
              </div>
              <div className="exDesc">
                <h3>
                  Information Systems Intern — Ministry of Communications and
                  Information Technology
                </h3>
                <p>Business Automation & Power Platform Development</p>
              </div>
            </div>

            <div className="experience3 expBox flex flex-row gap-6">
              <div className="duration3">
                <p>May 2024 – Jul 2024</p>
              </div>
              <div className="exDesc">
                <h3>Information Security Intern — CWallet</h3>
                <p>Security Testing & Risk Analysis</p>
              </div>
            </div>

            <div className="experience4 expBox flex flex-row gap-6">
              <div className="duration4">
                <p>Jul 2023 – Aug 2023</p>
              </div>
              <div className="exDesc">
                <h3>Web Developer Intern — Bin Yousef</h3>
                <p>Web Development & UI Styling</p>
              </div>
            </div>

            <div className="experience5 expBox flex flex-row gap-6">
              <div className="duration5">
                <p>Jun 2023 – Feb 2024</p>
              </div>
              <div className="exDesc">
                <h3>
                  Marketing Assistant — University of Doha for Science &
                  Technology
                </h3>
                <p>Video & Photography Production</p>
              </div>
            </div>

            <div className="experience6 expBox flex flex-row gap-6">
              <div className="duration6">
                <p>Nov 2022 – Dec 2022</p>
              </div>
              <div className="exDesc">
                <h3>Commentary Assistant — Host Broadcast Services</h3>
                <p>FIFA World Cup | Technical Support & Event Operations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

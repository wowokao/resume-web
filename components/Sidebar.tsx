import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div>
      <img
        src="https://mangathrill.com/wp-content/uploads/2020/12/pjimage-1.jpg"
        alt="user avatar"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className='text-green' >Jinshuai</span> Fu
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" />
        <p>Download Resume</p>
      </a>

      <div className="flex justify-around my-5 text-green md:w-full">
        <a href="https://www.linkedin.com/in/jinshuai-fu">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/wowokao">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      <div
        className="py-5 my-5 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2" >
          <GoLocation />
          <span >China</span>
        </div>
        <p className='my-2' >jinshuaifu@gmail.com</p>
        <p className='my-2' >+8618649620275</p>
      </div>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400 " 
      onClick={() => window.open('mailto:jinshuaifu@gmail.com')}
      >
        Email Me</button>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400 " >Light UI</button>
    </div>
  );
};

export default Sidebar;

import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const CTA = () => {
  return (
    <div className="grid grid-rows-4 lg:grid-rows-1 lg:grid-cols-4 gap-4">
        <a 
          href="https://wa.me/6281211137770" 
          target="_blank" 
          className="p-4 md:p-6 lg:p-8 flex flex-row lg:flex-col items-center justify-start gap-6 bg-gradient-to-br from-gray-100/70 to-gray-200/70 dark:from-slate-800/80 dark:to-slate-900/80 border-3 border border-green-400/50 hover:border-green-400/80 hover:shadow-lg hover:shadow-green-500/10 backdrop-blur-xl rounded-xl  transition-color duration-300 ease-in-out">
            <div className="bg-[#c3f7c9] p-2 rounded-lg">
              <FaWhatsapp className="text-4xl lg:text-8xl text-green-400" />
            </div>
            <div className="flex flex-col gap-1 items-start lg:items-center max-w-3xl">
              <h2 className="font-bold text-base lg:text-xl">WhatsApp</h2>
              <p className="text-sm lg:text-base text-gray-700 dark:text-gray-400 text-center break-all">+62 81211137770</p>
            </div>
        </a>
        <a 
          href="https://www.linkedin.com/in/kevin-petersen-9174a1251/" 
          target="_blank" 
          className="p-4 md:p-6 lg:p-8 flex flex-row lg:flex-col items-center justify-start gap-6 bg-gradient-to-br from-gray-100/70 to-gray-200/70 dark:from-slate-800/80 dark:to-slate-900/80 border-3 border border-[#0266c8]/50 hover:border-[#0266c8]/80 hover:shadow-lg hover:shadow-[#0266c8]/10 backdrop-blur-xl rounded-xl transition-color duration-300 ease-in-out">
            <div className="bg-[#a2cffa] p-2 rounded-lg">
              <FaLinkedin className="text-4xl lg:text-8xl text-[#0266c8]" />
            </div>
            <div className="flex flex-col gap-1 items-start lg:items-center max-w-3xl">
              <h2 className="font-bold text-base lg:text-xl">Linkedin</h2>
              <p className="text-sm lg:text-base text-gray-700 dark:text-gray-400 text-center break-all">Kevin Petersen</p>
            </div>
        </a>
        <a 
          href="mailto:petersenkevin123@gmail.com" 
          target="_blank" 
          className="p-4 md:p-6 lg:p-8 flex flex-row lg:flex-col items-center justify-start gap-6 bg-gradient-to-br from-gray-100/70 to-gray-200/70 dark:from-slate-800/80 dark:to-slate-900/80 border-3 border border-[#be4337]/50 hover:border-[#be4337]/80 hover:shadow-lg hover:shadow-[#be4337]/10 backdrop-blur-xl rounded-xl transition-color duration-300 ease-in-out">
            <div className="bg-[#f7b6b0] p-2 rounded-lg">
              <MdOutlineMailOutline className="text-4xl lg:text-8xl text-[#be4337]" />
            </div>
            <div className="flex flex-col gap-1 items-start lg:items-center max-w-3xl min-w-0">
              <h2 className="font-bold text-base lg:text-xl">Email</h2>
              <p className="text-sm lg:text-base text-gray-700 dark:text-gray-400 text-left lg:text-center break-all">petersenkevin123@gmail.com</p>
            </div>
        </a>
        <a 
          href="https://github.com/ZeroNxD" 
          target="_blank" 
          className="p-4 md:p-6 lg:p-8 flex flex-row lg:flex-col items-center justify-start gap-6 bg-gradient-to-br from-gray-100/70 to-gray-200/70 dark:from-slate-800/80 dark:to-slate-900/80 border-3 border-gray-500 dark:border-white/50 hover:border-gray-800 dark:hover:border-white/80 hover:shadow-lg hover:shadow-white/10 backdrop-blur-xl rounded-xl transition-color duration-300 ease-in-out">
            <div className="bg-white p-2 rounded-lg">
              <FaGithub className="text-4xl lg:text-8xl text-black" />
            </div>
            <div className="flex flex-col gap-1 items-start lg:items-center max-w-3xl">
              <h2 className="font-bold text-base lg:text-xl">GitHub</h2>
              <p className="text-sm lg:text-base text-gray-700 dark:text-gray-400 text-center break-all">ZeroNxD</p>
            </div>
        </a>
    </div>
  )
}

export default CTA
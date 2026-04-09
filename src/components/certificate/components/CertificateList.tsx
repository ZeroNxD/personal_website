import type { Certificate } from "@/types/Certificate"
import { FaBuilding } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

const openPDF = (pdfLink?: string) => {
  return window.open(pdfLink, "_blank");
}

const CertificateList = () => {

  const certificates: Certificate[] = [
    {
      image: "/images/certificates/java-bncc-certificate.jpeg",
      skills: "Java Programming",
      institute: "Bina Nusantara Computer Club",
      date: "NOV 2023",
      pdf: "/pdf/java-bncc-certificate.pdf",
    },
    {
      image: "/images/certificates/python-basic-certificate.jpeg",
      skills: "Python (Basic)",
      institute: "HackerRank",
      date: "MAR 2026",
      pdf: "/pdf/python-basic-certificate.pdf",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, i) => (
          <div key={i} onClick={() => openPDF(cert.pdf)} data-aos="fade-right" data-aos-duration="2000" className="cursor-pointer p-4 rounded-xl overflow-hidden bg-gradient-to-br from-gray-200/70 to-gray-300/70 dark:from-gray-900 dark:to-gray-800 border border-black dark:border-gray-700 shadow-md shadow-[0_0_20px_rgba(0,255,255,0.08)] hover:shadow-xl transition hover:translate-y-1 hover:border-2 hover:border-black dark:hover:border-white">
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img src={cert.image} alt={cert.skills} className="w-full h-full object-cover rounded-xl transition duration-300 group-hover:scale-105" loading="lazy" />
              </div>

              <div className="p-4 flex flex-col gap-4">
                  <p className="text-xl font-bold text-center tracking-wide text-black dark:text-white">
                    {cert.skills}
                  </p>

                  <div className="w-full h-[3px] bg-black dark:bg-white/10" />

                  <div className="flex flex-col gap-2 items-center text-gray-800 dark:text-gray-400">
                      <div className="flex flex-row items-center text-center gap-2">
                        <FaBuilding className="text-lg opacity-70" />
                        <span className="text-base font-semibold">{cert.institute}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <IoMdTime className="text-xs opacity-70" />
                        <span className="text-xs">{cert.date}</span>
                      </div>

                  </div>
              </div>
          </div>
        ))}
    </div>
  )
}

export default CertificateList
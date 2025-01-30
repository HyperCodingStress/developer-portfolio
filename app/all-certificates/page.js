import { sertifs } from "@/utils/data/sertif";
import GlowCard from "@/app/components/helper/glow-card"
import { BsPersonWorkspace } from "react-icons/bs";
import Link from "next/link";

export default function AllCertificates() {
  return (
    <div className="min-h-screen py-12 px-6 lg:px-16 bg-[#0b0a1f] text-white">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            All Certificates
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {sertifs.map((sertif) => (
            <div key={sertif.id} className="w-full">
              <a
                href={sertif.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <GlowCard identifier={`sertif-${sertif.id}`}>
                  <div className="p-4 border border-[#25213b] rounded-xl bg-[#15142b] hover:shadow-lg transition duration-300">
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#64857b]">{sertif.duration}</p>
                    </div>
                    <div className="flex items-center gap-x-6 px-3 py-5">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {sertif.title}
                        </p>
                        <p className="text-sm sm:text-base">{sertif.company}</p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <div className="flex justify-center mt-12">
        <Link
          href="/#sertif"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-600 text-white text-sm md:text-base font-medium uppercase rounded-full shadow-md hover:shadow-lg transition-all duration-200"
        >
          🔙 Back to Home
        </Link>
      </div>
    </div>
  );
}

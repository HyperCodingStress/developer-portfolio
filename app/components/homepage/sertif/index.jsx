// @flow strict

import { sertifs } from "@/utils/data/sertif";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import GlowCard from "../../helper/glow-card";

function Sertif() {
  // Menampilkan hanya 4 data pertama
  const displayedSertifs = sertifs.slice(0, 4);
  const hasMore = sertifs.length > 4;

  return (
    <div id="sertif" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certificate
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 grid-flow-dense">
          {displayedSertifs.map((sertif, index) => (
            <div 
              key={sertif.id} 
              className={`w-full ${index % 2 === 0 ? "lg:col-start-2" : "lg:col-start-1"}`}
            >
              <a 
                href={sertif.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <GlowCard identifier={`sertif-${sertif.id}`}>
                  <div className="p-3 relative">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">
                        {sertif.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {sertif.title}
                        </p>
                        <p className="text-sm sm:text-base">
                          {sertif.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </a>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-8">
            <Link
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              href="/all-certificates"
            >
              <span>View More</span>
              <FaArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sertif;
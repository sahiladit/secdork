import Navbar from "./navbar";
import FeatureCard from "./FeatureCard";
import {motion} from "motion/react";
import ScrambleText from "./ScrambleText";
import secureData from "../assets/homepageimage.webp";



export default function Home() {
  return (
    <div className="overflow-x-hidden bg-gradient-to-b from-black via-slate-900 to-black text-white">
      <Navbar />
      
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center md:left-10 px-6 pt-40">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-16">
          
          {/* LEFT: TEXT */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <ScrambleText
              text="Secdork"
              className="text-5xl md:text-6xl font-bold tracking-tight"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-gray-300 max-w-xl"
            >
              Monitor the dark web and public breach data to see if your
              credentials have been exposed.
            </motion.p>
            

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm text-gray-400"
            >
              Privacy-first 
            </motion.div>
          </div>

          {/* RIGHT: IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex-1 flex justify-center"
          >
            <img
              src={secureData}
              alt="Secure monitoring"
              className="w-full scale-100 md:scale-125 max-w-md rounded-2xl border border-white/10 shadow-xl"
            />
          </motion.div>
        </div>
        
      </section>

      <motion.hr
          drag="y"
          dragConstraints={{ top: -20, bottom: 20 }}
          dragElastic={0.15}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          className="
            w-2/3
            relative
            md:left-1/6
            border-white/30
            cursor-grab
            active:cursor-grabbing
            h-2
            my-8
          "
        />
      <div className="relative text-center px-6 mt-8 mb-6">
  <p className="text-2xl md:text-3xl font-semibold tracking-tight">
    Monitor where your data has been exposed.
  </p>


  <p className="mt-3 text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
    We monitor breach sources and help you understand what happened and how to
    respond to potential exposures.
  </p>
</div>

     
      <motion.hr
          drag="y"
          dragConstraints={{ top: -20, bottom: 20 }}
          dragElastic={0.15}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          className="
            w-2/3
            relative
            md:left-1/6
            border-white/30
            cursor-grab
            active:cursor-grabbing
            h-2
            my-8
          "
        />

      {/* DIVIDER TEXT */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 ,duration:1}}
        viewport={{ once: false}}
        className="text-5xl font-bold text-center mt-32 mb-16 tracking-wide"
      >
        Why Choose Us?
      </motion.p>

      {/* FEATURES */}
      <section className="relative max-w-7xl mx-auto px-6 pb-32 flex flex-col md:flex-row gap-8">
  <FeatureCard
    title="Leak Source Visibility"
    description={
      <>
        • Identify where your data was exposed<br />
        • Breach databases, forums, and public dumps<br />
        • View source name and discovery timeline
      </>
    }
  />

  <FeatureCard
    title="Exposure Statistics"
    description={
      <>
        • Number of times your data appeared<br />
        • Type of leaks involved (breach, paste, combo)<br />
        • Distinguish recent vs historical exposure
      </>
    }
  />

  <FeatureCard
    title="Security Guidance"
    description={
      <>
        • Clear steps to secure affected accounts<br />
        • Password and MFA recommendations<br />
        • Best practices tailored to your exposure level
      </>
    }
  />
</section>


    </div>
  );
}

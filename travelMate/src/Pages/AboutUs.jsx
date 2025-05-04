import { Link } from "react-router-dom";
import { Briefcase, GraduationCap, Heart } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
    },
  },
};

const fadeZoom = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function AboutUs() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <motion.header
        className="bg-gradient-to-r from-slate-50 to-slate-100 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeSlideUp}
      >
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4">About Us</h1>
          <motion.div className="w-20 h-1 bg-slate-800 mx-auto mb-8" variants={fadeZoom} />
          <p className="text-lg md:text-xl text-slate-700 text-center max-w-3xl mx-auto">
            We're passionate professionals dedicated to delivering exceptional results. Get to know the people behind
            our success.
          </p>
        </div>
      </motion.header>

      {/* Introduction Section */}
      <motion.section
        className="py-12 md:py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 className="text-3xl font-bold text-slate-900 mb-6" variants={fadeSlideUp}>Our Story</motion.h2>
            <motion.p className="text-lg text-slate-700 mb-6" variants={fadeSlideUp}>
              Founded on a shared vision of excellence and innovation, our journey began when two passionate
              professionals decided to combine their unique skills and expertise.
            </motion.p>
            <motion.p className="text-lg text-slate-700" variants={fadeSlideUp}>
              We believe in the power of collaboration and bringing diverse perspectives to every project. Our
              complementary skills allow us to approach challenges from multiple angles, resulting in comprehensive
              solutions that exceed expectations.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Team Members Section */}
      <motion.section
        className="py-12 md:py-16 bg-slate-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 className="text-3xl font-bold text-center text-slate-900 mb-16" variants={fadeSlideUp}>
            Meet Our Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {["Rameez Qureshi", "John Smith"].map((name, index) => (
              <motion.div
                key={name}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                variants={fadeSlideUp}
              >
                <div className="p-6">
                  <div className="flex flex-col items-center mb-6">
                    <motion.div
                      className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-slate-100"
                      variants={fadeZoom}
                    >
                      <img
                        src="/placeholder.svg"
                        // alt={name}
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-slate-900">{name}</h3>
                    <p className="text-slate-600 font-medium">
                      {index === 0 ? "MERN Stack Developer" : "Co-founder & Technical Lead"}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <GraduationCap className="w-5 h-5 text-slate-700 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-slate-700">
                        <span className="font-medium">Education:</span> {index === 0 ? "Bachelors in Computer Science" : "Ph.D. in Computer Science, MIT"}
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Briefcase className="w-5 h-5 text-slate-700 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-slate-700">
                        <span className="font-medium">Background:</span> {index === 0 ? "Recently graduated with hands-on experience in impactful projects and a commitment to continuous learning." : "12+ years in software architecture and emerging tech."}
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Heart className="w-5 h-5 text-slate-700 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-slate-700">
                        <span className="font-medium">Interests:</span> {index === 0 ? "Web Development, App Development, Artificial Inteligence" : "Rock climbing, mentoring, tech for social good."}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Shared Vision Section */}
      <motion.section
        className="py-12 md:py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeSlideUp}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Shared Vision</h2>
            <p className="text-lg text-slate-700 mb-8">
              Together, we're committed to creating meaningful work that makes a difference. We believe in combining
              technical excellence with creative innovation to deliver solutions that not only meet but exceed our
              clients' expectations.
            </p>
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 rounded-md text-slate-700 hover:bg-slate-50 transition-colors duration-300 cursor-pointer"
              >
                <span className="text-lg font-medium">Get in Touch</span>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

// // import { useEffect, useRef } from 'react'
// // import { Link } from 'react-router-dom'
// // // import bgImage from '../assets/bg-image.jpg'
// // // import krishnaArjuna from '../assets/krishna-arjuna.png'

// // export default function HomePage() {
// //   const titleRef = useRef(null)
// //   const subtitleRef = useRef(null)
// //   const imageRef = useRef(null)
// //   const buttonRef = useRef(null)

// //   useEffect(() => {
// //     // Animation on mount
// //     if (titleRef.current) {
// //       titleRef.current.style.opacity = '1'
// //       titleRef.current.style.transform = 'translateY(0)'
// //     }
// //     if (subtitleRef.current) {
// //       subtitleRef.current.style.opacity = '1'
// //       subtitleRef.current.style.transform = 'translateY(0)'
// //     }
// //     if (imageRef.current) {
// //       imageRef.current.style.opacity = '1'
// //       imageRef.current.style.transform = 'translateY(0) rotate(0deg)'
// //     }
// //     if (buttonRef.current) {
// //       buttonRef.current.style.opacity = '1'
// //       buttonRef.current.style.transform = 'translateY(0)'
// //     }
// //   }, [])

// //   return (
// //     <div className="relative overflow-hidden min-h-screen">
// //       {/* Background image with overlay */}
// //       <div className="absolute inset-0 z-0">
// //         <img
// //           src={'https://mcdn.wallpapersafari.com/medium/11/6/4IW8tf.jpg'}
// //           alt="Background"
// //           className="w-full h-full object-cover opacity-20"
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50"></div>
// //       </div>

// //       {/* Content */}
// //       <div className="relative z-10 container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
// //         {/* Text content */}
// //         <div className="md:w-1/2 mb-12 md:mb-0 md:pr-8">
// //           <h1
// //             ref={titleRef}
// //             className="text-5xl md:text-6xl lg:text-7xl font-bold text-indigo-900 mb-6 opacity-0 transform -translate-y-10 transition-all duration-700"
// //             style={{ transitionDelay: '0.2s' }}
// //           >
// //             Bhagavad Gita
// //           </h1>
// //           <h2
// //             ref={subtitleRef}
// //             className="text-2xl md:text-3xl text-indigo-700 mb-8 opacity-0 transform -translate-y-10 transition-all duration-700"
// //             style={{ transitionDelay: '0.4s' }}
// //           >
// //             The Song of the Divine
// //           </h2>
// //           <p className="text-lg text-gray-700 mb-8 max-w-lg">
// //             Discover the eternal wisdom of Lord Krishna that transcends time and
// //             space. The Bhagavad Gita offers profound insights for life, purpose,
// //             and spirituality.
// //           </p>
// //           <Link
// //             ref={buttonRef}
// //             to="/chapters"
// //             className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 opacity-0 -translate-y-5"
// //             style={{ transitionDelay: '0.8s' }}
// //           >
// //             Get Started
// //           </Link>
// //         </div>

// //         {/* Image */}
// //         <div className="md:w-1/2 flex justify-center">
// //           <div
// //             ref={imageRef}
// //             className="relative w-full max-w-md opacity-0 transform -translate-y-10 rotate(-5deg) transition-all duration-1000"
// //             style={{ transitionDelay: '0.6s' }}
// //           >
// //             <img
// //             //   src={krishnaArjuna}
// //               alt="Krishna and Arjuna"
// //               className="w-full h-auto rounded-lg shadow-2xl"
// //             />
// //             <div className="absolute -inset-4 border-2 border-indigo-300 rounded-lg opacity-70"></div>
// //             <div className="absolute -inset-6 border-2 border-indigo-200 rounded-lg opacity-50"></div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Floating elements */}
// //       <div className="absolute top-20 left-10 w-16 h-16 bg-indigo-100 rounded-full opacity-30 animate-float1"></div>
// //       <div className="absolute top-1/3 right-20 w-24 h-24 bg-blue-100 rounded-full opacity-40 animate-float2"></div>
// //       <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-purple-100 rounded-full opacity-30 animate-float3"></div>
// //     </div>
// //   )
// // }

// import { Link } from 'react-router-dom'
// // import krishnaArjuna from '../assets/krishna-arjuna.png'

// export default function HomePage() {
//   return (
//     <div className="relative min-h-screen overflow-hidden bg-linear-to-r/longer from-indigo-500 to-teal-400 flex items-center justify-center">
//       {/* Floating decorative elements */}
//       <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-indigo-200 opacity-20 blur-xl animate-float1"></div>
//       <div className="absolute bottom-40 right-32 w-40 h-40 rounded-full bg-blue-200 opacity-20 blur-xl animate-float2"></div>
      
//       {/* Main content */}
//       <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12">
//         {/* Text content */}
//         <div className="md:w-1/2 text-center md:text-left">
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fadeInUp">
//             Bhagavad Gita
//           </h1>
//           <h2 className="text-2xl md:text-3xl text-indigo-100 mb-8 animate-fadeInUp animation-delay-100">
//             Wisdom for the Modern Age
//           </h2>
//           <p className="text-lg text-indigo-50 mb-8 max-w-lg mx-auto md:mx-0 animate-fadeInUp animation-delay-200">
//             Discover the eternal wisdom of Lord Krishna that transcends time and space. The Bhagavad Gita offers profound insights for life, purpose, and spirituality.
//           </p>
//           <div className="animate-fadeInUp animation-delay-300">
//             <Link
//               to="/chapters"
//               className="inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-opacity-90 border-2 border-white border-opacity-30"
//             >
//               Explore Teachings →
//             </Link>
//           </div>
//         </div>

//         {/* Image */}
//         <div className="md:w-1/2 flex justify-center animate-fadeInUp animation-delay-150">
//           <div className="relative w-full max-w-md group">
//             <img
//               src={"https://wallpapers.com/images/high/krishna-arjun-hindu-god-of-protection-wg6ld9ynlaqohwnr.webp"}
//               alt="Krishna and Arjuna"
//               className="w-full h-auto rounded-lg shadow-2xl transform transition-all duration-700 group-hover:rotate-1 group-hover:scale-105"
//             />
//             <div className="absolute -inset-4 border-2 border-indigo-300 rounded-lg opacity-70 animate-pulse-slow -z-10"></div>
//           </div>
//         </div>
//       </div>

//       {/* Animated bottom border */}
//       <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-30 animate-borderFlow"></div>
//     </div>
//   )
// }

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FAF3E0]">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div 
          className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#FF9933]/10 blur-xl"
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-40 right-32 w-72 h-72 rounded-full bg-[#3F51B5]/10 blur-xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Text content */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#800000] mb-6">
            Bhagavad Gita
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#FF9933] mb-8">
            Wisdom for the Modern Age
          </h2>
          <p className="text-lg text-[#333333] mb-8 max-w-lg mx-auto md:mx-0">
            Discover the eternal wisdom of Lord Krishna that transcends time and space. 
            The Bhagavad Gita offers profound insights for life, purpose, and spirituality.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/chapters"
              className="inline-block px-8 py-3 bg-[#FF9933] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-2 border-[#FF9933] hover:bg-[#FF9933]/90"
            >
              Explore Teachings →
            </Link>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md group">
            <motion.img
              src="https://wallpapers.com/images/high/krishna-arjun-hindu-god-of-protection-wg6ld9ynlaqohwnr.webp"
              alt="Krishna and Arjuna"
              className="w-full h-auto rounded-lg shadow-2xl border-4 border-[#FFD700]"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
            />
            <motion.div 
              className="absolute -inset-4 border-2 border-[#00897B] rounded-lg opacity-70 -z-10"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Floating Gita verse */}
      <motion.div 
        className="absolute bottom-8 left-0 right-0 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-[#3F51B5] italic">"Yoga is the journey of the self, through the self, to the self."</p>
        <p className="text-[#333333] text-sm">- Bhagavad Gita</p>
      </motion.div>
    </div>
  );
}
// // import { useState, useEffect } from 'react';
// // import { useParams, Link } from 'react-router-dom';
// // import LoadingSpinner from '../components/LoadingSpinner';

// // const COMMENTARIES = {
// //   tej: 'Swami Tejomayananda',
// //   siva: 'Swami Sivananda',
// //   purohit: 'Shri Purohit Swami',
// //   chinmay: 'Swami Chinmayananda',
// //   rams: 'Swami Ramsukhdas',
// //   raman: 'Sri Ramanuja',
// //   sankar: 'Sri Shankaracharya'
// // };

// // export default function SlokPage() {
// //   const { chapter, verse } = useParams();
// //   const [slok, setSlok] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [activeCommentary, setActiveCommentary] = useState('tej');

// //   useEffect(() => {
// //     const fetchSlok = async () => {
// //       try {
// //         const response = await fetch(`https://vedicscriptures.github.io/slok/${chapter}/${verse}`);
// //         if (!response.ok) {
// //           throw new Error('Verse not found');
// //         }
// //         const data = await response.json();
// //         setSlok(data);
// //       } catch (err) {
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchSlok();
// //   }, [chapter, verse]);

// //   if (loading) return <LoadingSpinner />;
// //   if (error) return <div className="error-message">Error: {error}</div>;

// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       <div className="bg-white rounded-lg shadow-md overflow-hidden">
// //         <div className="p-6">
// //           <div className="flex items-center justify-between mb-6">
// //             <h1 className="text-2xl font-bold text-indigo-800">
// //               Bhagavad Gita {slok.chapter}.{slok.verse}
// //             </h1>
// //             <div className="flex space-x-2">
// //               {parseInt(verse) > 1 && (
// //                 <Link
// //                   to={`/slok/${chapter}/${parseInt(verse) - 1}`}
// //                   className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 px-3 py-1 rounded transition-colors"
// //                 >
// //                   ←
// //                 </Link>
// //               )}
// //               {parseInt(verse) < slok.verses_count && (
// //                 <Link
// //                   to={`/slok/${chapter}/${parseInt(verse) + 1}`}
// //                   className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 px-3 py-1 rounded transition-colors"
// //                 >
// //                   →
// //                 </Link>
// //               )}
// //             </div>
// //           </div>

// //           <div className="mb-8 p-4 bg-gray-50 rounded-lg">
// //             <div className="text-2xl font-medium text-gray-900 mb-2 text-center">
// //               {slok.slok}
// //             </div>
// //             <div className="text-gray-600 text-center italic">
// //               {slok.transliteration}
// //             </div>
// //           </div>

// //           <div className="mb-6">
// //             <h2 className="text-xl font-semibold text-gray-800 mb-4">Commentaries</h2>
            
// //             <div className="flex overflow-x-auto pb-2 mb-4 space-x-2">
// //               {Object.keys(COMMENTARIES).map((key) => (
// //                 slok[key] && (
// //                   <button
// //                     key={key}
// //                     onClick={() => setActiveCommentary(key)}
// //                     className={`px-4 py-2 rounded-full whitespace-nowrap ${
// //                       activeCommentary === key
// //                         ? 'bg-indigo-600 text-white'
// //                         : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
// //                     }`}
// //                   >
// //                     {COMMENTARIES[key]}
// //                   </button>
// //                 )
// //               ))}
// //             </div>

// //             {slok[activeCommentary] && (
// //               <div className="p-4 bg-gray-50 rounded-lg">
// //                 <h3 className="text-lg font-semibold text-indigo-700 mb-2">
// //                   {slok[activeCommentary].author}'s Commentary
// //                 </h3>
// //                 {slok[activeCommentary].ht ? (
// //                   <div className="text-gray-700">
// //                     {slok[activeCommentary].ht}
// //                   </div>
// //                 ) : (
// //                   <p className="text-gray-700">{slok[activeCommentary].et}</p>
// //                 )}
// //               </div>
// //             )}
// //           </div>

// //           <div className="flex justify-between mt-8">
// //             <Link
// //               to={`/chapter/${chapter}`}
// //               className="text-indigo-600 hover:text-indigo-800 font-medium"
// //             >
// //               ← Back to Chapter {chapter}
// //             </Link>
// //             <div className="text-sm text-gray-500">
// //               Verse {verse} of {slok.verses_count}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // import { useState, useEffect } from 'react';
// // import { useParams, Link } from 'react-router-dom';
// // import LoadingSpinner from '../components/LoadingSpinner';

// // const COMMENTARIES = {
// //   tej: 'Swami Tejomayananda',
// //   siva: 'Swami Sivananda',
// //   purohit: 'Shri Purohit Swami',
// //   chinmay: 'Swami Chinmayananda',
// //   rams: 'Swami Ramsukhdas',
// //   raman: 'Sri Ramanuja',
// //   sankar: 'Sri Shankaracharya'
// // };

// // export default function SlokPage() {
// //   const { chapter, verse } = useParams();
// //   const [slok, setSlok] = useState(null);
// //   const [chapterInfo, setChapterInfo] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [activeCommentary, setActiveCommentary] = useState('tej');

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         // Fetch the verse data
// //         const slokResponse = await fetch(`https://vedicscriptures.github.io/slok/${chapter}/${verse}`);
// //         if (!slokResponse.ok) throw new Error('Verse not found');
// //         const slokData = await slokResponse.json();
        
// //         // Fetch chapter info to get verses_count
// //         const chapterResponse = await fetch(`https://vedicscriptures.github.io/chapter/${chapter}`);
// //         if (!chapterResponse.ok) throw new Error('Chapter info not found');
// //         const chapterData = await chapterResponse.json();
        
// //         setSlok(slokData);
// //         setChapterInfo(chapterData);
// //       } catch (err) {
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, [chapter, verse]);

// //   if (loading) return <LoadingSpinner />;
// //   if (error) return <div className="error-message">Error: {error}</div>;

// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       <div className="bg-white rounded-lg shadow-md overflow-hidden">
// //         <div className="p-6">
// //           <div className="flex items-center justify-between mb-6">
// //             <h1 className="text-2xl font-bold text-indigo-800">
// //               Bhagavad Gita {slok.chapter}.{slok.verse}
// //             </h1>
// //             <div className="flex space-x-2">
// //               {parseInt(verse) > 1 && (
// //                 <Link
// //                   to={`/slok/${chapter}/${parseInt(verse) - 1}`}
// //                   className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 px-3 py-1 rounded transition-colors"
// //                 >
// //                   ←
// //                 </Link>
// //               )}
// //               {chapterInfo && parseInt(verse) < chapterInfo.verses_count && (
// //                 <Link
// //                   to={`/slok/${chapter}/${parseInt(verse) + 1}`}
// //                   className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 px-3 py-1 rounded transition-colors"
// //                 >
// //                   →
// //                 </Link>
// //               )}
// //             </div>
// //           </div>

// //           <div className="mb-8 p-4 bg-gray-50 rounded-lg">
// //             <div className="text-2xl font-medium text-gray-900 mb-2 text-center">
// //               {slok.slok}
// //             </div>
// //             <div className="text-gray-600 text-center italic">
// //               {slok.transliteration}
// //             </div>
// //           </div>

// //           <div className="mb-6">
// //             <h2 className="text-xl font-semibold text-gray-800 mb-4">Commentaries</h2>
            
// //             <div className="flex overflow-x-auto pb-2 mb-4 space-x-2">
// //               {Object.keys(COMMENTARIES).map((key) => (
// //                 slok[key] && (
// //                   <button
// //                     key={key}
// //                     onClick={() => setActiveCommentary(key)}
// //                     className={`px-4 py-2 rounded-full whitespace-nowrap ${
// //                       activeCommentary === key
// //                         ? 'bg-indigo-600 text-white'
// //                         : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
// //                     }`}
// //                   >
// //                     {COMMENTARIES[key]}
// //                   </button>
// //                 )
// //               ))}
// //             </div>

// //             {slok[activeCommentary] && (
// //               <div className="p-4 bg-gray-50 rounded-lg">
// //                 <h3 className="text-lg font-semibold text-indigo-700 mb-2">
// //                   {slok[activeCommentary].author}'s Commentary
// //                 </h3>
// //                 {slok[activeCommentary].ht ? (
// //                   <div className="text-gray-700">
// //                     {slok[activeCommentary].ht}
// //                   </div>
// //                 ) : (
// //                   <p className="text-gray-700">{slok[activeCommentary].et}</p>
// //                 )}
// //               </div>
// //             )}
// //           </div>

// //           <div className="flex justify-between mt-8">
// //             <Link
// //               to={`/chapter/${chapter}`}
// //               className="text-indigo-600 hover:text-indigo-800 font-medium"
// //             >
// //               ← Back to Chapter {chapter}
// //             </Link>
// //             {chapterInfo && (
// //               <div className="text-sm text-gray-500">
// //                 Verse {verse} of {chapterInfo.verses_count}
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import { useState, useEffect } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import LoadingSpinner from '../components/LoadingSpinner';
// import { motion, AnimatePresence } from 'framer-motion';

// const COMMENTARIES = {
//   tej: 'Swami Tejomayananda',
//   siva: 'Swami Sivananda',
//   purohit: 'Shri Purohit Swami',
//   chinmay: 'Swami Chinmayananda',
//   rams: 'Swami Ramsukhdas',
//   raman: 'Sri Ramanuja',
//   sankar: 'Sri Shankaracharya'
// };

// const pageVariants = {
//   initial: { opacity: 0, x: 100 },
//   in: { opacity: 1, x: 0 },
//   out: { opacity: 0, x: -100 }
// };

// const pageTransition = {
//   type: 'tween',
//   ease: 'anticipate',
//   duration: 0.5
// };

// export default function SlokPage() {
//   const { chapter, verse } = useParams();
//   const navigate = useNavigate();
//   const [slok, setSlok] = useState(null);
//   const [chapterInfo, setChapterInfo] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeCommentary, setActiveCommentary] = useState('tej');
//   const [direction, setDirection] = useState(1);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const [slokResponse, chapterResponse] = await Promise.all([
//           fetch(`https://vedicscriptures.github.io/slok/${chapter}/${verse}`),
//           fetch(`https://vedicscriptures.github.io/chapter/${chapter}`)
//         ]);
        
//         if (!slokResponse.ok) throw new Error('Verse not found');
//         if (!chapterResponse.ok) throw new Error('Chapter info not found');
        
//         const [slokData, chapterData] = await Promise.all([
//           slokResponse.json(),
//           chapterResponse.json()
//         ]);
        
//         setSlok(slokData);
//         setChapterInfo(chapterData);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [chapter, verse]);

//   const handleNavigation = (newVerse) => {
//     setDirection(newVerse > parseInt(verse) ? 1 : -1);
//     navigate(`/slok/${chapter}/${newVerse}`);
//   };

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div className="error-message">Error: {error}</div>;

//   return (
//     <div className="min-h-screen bg-gray-100 py-8">
//       <div className="max-w-4xl mx-auto">
//         {/* Book Cover Effect */}
//         <div className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white p-6 rounded-t-lg shadow-lg">
//           <h1 className="text-3xl font-bold">Bhagavad Gita</h1>
//           <p className="text-indigo-200">Chapter {chapter} - {chapterInfo?.name}</p>
//         </div>
        
//         {/* Book Pages */}
//         <div className="relative bg-white shadow-xl min-h-[70vh]">
//           {/* Page Corner Fold */}
//           <div className="absolute top-0 right-0 w-16 h-16 bg-gray-200 clip-page-corner"></div>
          
//           {/* Page Content */}
//           <div className="p-8">
//             <AnimatePresence custom={direction}>
//               <motion.div
//                 key={`${chapter}-${verse}`}
//                 custom={direction}
//                 initial="initial"
//                 animate="in"
//                 exit="out"
//                 variants={pageVariants}
//                 transition={pageTransition}
//               >
//                 <div className="flex justify-between items-center mb-8">
//                   <h2 className="text-2xl font-bold text-indigo-800">
//                     Verse {slok.verse}
//                   </h2>
//                   {chapterInfo && (
//                     <div className="text-sm text-gray-500">
//                       Verse {verse} of {chapterInfo.verses_count}
//                     </div>
//                   )}
//                 </div>

//                 <div className="mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-indigo-500">
//                   <div className="text-2xl font-medium text-gray-900 mb-4 text-center leading-relaxed">
//                     {slok.slok}
//                   </div>
//                   <div className="text-gray-600 text-center italic">
//                     {slok.transliteration}
//                   </div>
//                 </div>

//                 <div className="mb-8">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
//                     Commentaries
//                   </h3>
                  
//                   <div className="flex overflow-x-auto pb-4 mb-6 space-x-2 scrollbar-hide">
//                     {Object.keys(COMMENTARIES).map((key) => (
//                       slok[key] && (
//                         <button
//                           key={key}
//                           onClick={() => setActiveCommentary(key)}
//                           className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
//                             activeCommentary === key
//                               ? 'bg-indigo-600 text-white shadow-md'
//                               : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                           }`}
//                         >
//                           {COMMENTARIES[key]}
//                         </button>
//                       )
//                     ))}
//                   </div>

//                   {slok[activeCommentary] && (
//                     <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
//                       <h4 className="text-lg font-semibold text-indigo-700 mb-3">
//                         {slok[activeCommentary].author}'s Commentary
//                       </h4>
//                       {slok[activeCommentary].ht ? (
//                         <div className="text-gray-700 leading-relaxed">
//                           {slok[activeCommentary].ht}
//                         </div>
//                       ) : (
//                         <p className="text-gray-700 leading-relaxed">
//                           {slok[activeCommentary].et}
//                         </p>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Navigation - Book Style */}
//         <div className="flex justify-between mt-6">
//           <div className="flex-1">
//             {parseInt(verse) > 1 && (
//               <button
//                 onClick={() => handleNavigation(parseInt(verse) - 1)}
//                 className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md transition-all"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
//                 </svg>
//                 <span>Previous Verse</span>
//               </button>
//             )}
//           </div>
          
//           <div className="flex-1 text-center">
//             <Link
//               to={`/chapter/${chapter}`}
//               className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg transition-colors"
//             >
//               Back to Chapter
//             </Link>
//           </div>
          
//           <div className="flex-1 text-right">
//             {chapterInfo && parseInt(verse) < chapterInfo.verses_count && (
//               <button
//                 onClick={() => handleNavigation(parseInt(verse) + 1)}
//                 className="flex items-center space-x-2 ml-auto bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md transition-all"
//               >
//                 <span>Next Verse</span>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
//                 </svg>
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .clip-page-corner {
//           clip-path: polygon(100% 0, 0% 100%, 100% 100%);
//         }
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// }

import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { motion, AnimatePresence } from 'framer-motion';

const COMMENTARIES = {
  tej: 'Swami Tejomayananda',
  siva: 'Swami Sivananda',
  purohit: 'Shri Purohit Swami',
  chinmay: 'Swami Chinmayananda',
  rams: 'Swami Ramsukhdas',
  raman: 'Sri Ramanuja',
  sankar: 'Sri Shankaracharya'
};

const verseVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0
  })
};

export default function SlokPage() {
  const { chapter, verse } = useParams();
  const navigate = useNavigate();
  const [slok, setSlok] = useState(null);
  const [chapterInfo, setChapterInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCommentary, setActiveCommentary] = useState('tej');
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [slokResponse, chapterResponse] = await Promise.all([
          fetch(`https://vedicscriptures.github.io/slok/${chapter}/${verse}`),
          fetch(`https://vedicscriptures.github.io/chapter/${chapter}`)
        ]);
        
        if (!slokResponse.ok) throw new Error('Verse not found');
        if (!chapterResponse.ok) throw new Error('Chapter info not found');
        
        const [slokData, chapterData] = await Promise.all([
          slokResponse.json(),
          chapterResponse.json()
        ]);
        
        setSlok(slokData);
        setChapterInfo(chapterData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [chapter, verse]);

  const handleNavigation = (newVerse) => {
    setDirection(newVerse > parseInt(verse) ? 1 : -1);
    navigate(`/slok/${chapter}/${newVerse}`);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-[#FAF3E0] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="bg-gradient-to-r from-[#FF9933] to-[#800000] text-white p-6 rounded-t-xl shadow-lg"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h1 className="text-3xl font-bold">Bhagavad Gita</h1>
          <p className="text-white/90">
            Chapter {chapter} - {chapterInfo?.name} • Verse {verse}
          </p>
        </motion.div>
        
        {/* Verse Content */}
        <div className="relative bg-white shadow-xl rounded-b-xl overflow-hidden">
          <AnimatePresence custom={direction}>
            <motion.div
              key={`${chapter}-${verse}`}
              custom={direction}
              variants={verseVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="p-6 md:p-8"
            >
              {/* Verse Text */}
              <div className="mb-8 p-6 bg-[#FFF8E1] rounded-lg border-l-4 border-[#FFD700]">
                <div className="text-2xl md:text-3xl font-medium text-[#800000] mb-4 text-center leading-relaxed">
                  {slok.slok}
                </div>
                <div className="text-[#3F51B5] text-center italic">
                  {slok.transliteration}
                </div>
              </div>

              {/* Translation */}
              {slok.translation && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-[#800000] mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#FF9933]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    Translation
                  </h3>
                  <p className="text-[#333333] leading-relaxed">
                    {slok.translation}
                  </p>
                </div>
              )}

              {/* Commentaries */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#800000] mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#FF9933]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  Commentaries
                </h3>
                
                <div className="flex overflow-x-auto pb-4 mb-6 space-x-2 scrollbar-hide">
                  {Object.keys(COMMENTARIES).map((key) => (
                    slok[key] && (
                      <motion.button
                        key={key}
                        onClick={() => setActiveCommentary(key)}
                        className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                          activeCommentary === key
                            ? 'bg-[#00897B] text-white shadow-md'
                            : 'bg-[#3F51B5]/10 text-[#3F51B5] hover:bg-[#3F51B5]/20'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {COMMENTARIES[key]}
                      </motion.button>
                    )
                  ))}
                </div>

                {slok[activeCommentary] && (
                  <div className="p-6 bg-[#FFF8E1] rounded-lg border border-[#FFD700]/30">
                    <h4 className="text-lg font-semibold text-[#00897B] mb-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {slok[activeCommentary].author}'s Commentary
                    </h4>
                    {slok[activeCommentary].ht ? (
                      <div className="text-[#333333] leading-relaxed">
                        {slok[activeCommentary].ht}
                      </div>
                    ) : (
                      <p className="text-[#333333] leading-relaxed">
                        {slok[activeCommentary].et}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:flex-row justify-between mt-6 gap-4">
          <div className="flex-1">
            {parseInt(verse) > 1 && (
              <motion.button
                onClick={() => handleNavigation(parseInt(verse) - 1)}
                className="w-full flex items-center justify-center space-x-2 bg-[#3F51B5] hover:bg-[#3F51B5]/90 text-white px-6 py-3 rounded-lg shadow-md transition-all"
                whileHover={{ x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Previous Verse</span>
              </motion.button>
            )}
          </div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 md:mx-4"
          >
            <Link
              to={`/chapter/${chapter}`}
              className="block w-full text-center bg-[#FF9933]/10 hover:bg-[#FF9933]/20 text-[#FF9933] px-6 py-3 rounded-lg transition-colors"
            >
              Back to Chapter
            </Link>
          </motion.div>
          
          <div className="flex-1">
            {chapterInfo && parseInt(verse) < chapterInfo.verses_count && (
              <motion.button
                onClick={() => handleNavigation(parseInt(verse) + 1)}
                className="w-full flex items-center justify-center space-x-2 bg-[#00897B] hover:bg-[#00897B]/90 text-white px-6 py-3 rounded-lg shadow-md transition-all"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Next Verse</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import LoadingSpinner from '../components/LoadingSpinner';

// export default function ChaptersPage() {
//   const [chapters, setChapters] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchChapters = async () => {
//       try {
//         const response = await fetch('https://vedicscriptures.github.io/chapters');
//         if (!response.ok) {
//           throw new Error('Failed to fetch chapters');
//         }
//         const data = await response.json();
//         setChapters(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchChapters();
//   }, []);

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div className="error-message">Error: {error}</div>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-indigo-800 mb-6 text-center">Bhagavad Gita Chapters</h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {chapters.map((chapter) => (
//           <div key={chapter.chapter_number} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//             <Link to={`/chapter/${chapter.chapter_number}`} className="block">
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <span className="text-2xl font-bold text-indigo-600">Chapter {chapter.chapter_number}</span>
//                   <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
//                     {chapter.verses_count} verses
//                   </span>
//                 </div>
//                 <h2 className="text-xl font-semibold text-gray-800 mb-2">{chapter.name}</h2>
                
//                 {chapter.translation && (
//                   <p className="text-gray-600 mb-2">{chapter.translation}</p>
//                 )}
                
//                 {chapter.meaning?.en && (
//                   <p className="text-gray-700 italic">"{chapter.meaning.en}"</p>
//                 )}
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { motion } from 'framer-motion';

export default function ChaptersPage() {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await fetch('https://vedicscriptures.github.io/chapters');
        if (!response.ok) {
          throw new Error('Failed to fetch chapters');
        }
        const data = await response.json();
        setChapters(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChapters();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-[#FAF3E0] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-[#800000] mb-2 text-center">Bhagavad Gita Chapters</h1>
          <div className="w-24 h-1 bg-[#FF9933] mx-auto mb-8"></div>
          <p className="text-center text-[#333333] max-w-2xl mx-auto mb-12">
            Explore the 18 chapters of the Bhagavad Gita, each offering unique spiritual wisdom and guidance.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.chapter_number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Link to={`/chapter/${chapter.chapter_number}`} className="block h-full">
                <div className="bg-white rounded-xl shadow-md overflow-hidden h-full border-l-4 border-[#00897B] hover:shadow-lg transition-all duration-300">
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-[#3F51B5]">Chapter {chapter.chapter_number}</span>
                      <span className="bg-[#FF9933]/10 text-[#FF9933] text-sm font-medium px-3 py-1 rounded-full">
                        {chapter.verses_count} verses
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-[#800000] mb-3">{chapter.name}</h2>
                    
                    {chapter.translation && (
                      <p className="text-[#333333] mb-3 flex-grow">{chapter.translation}</p>
                    )}
                    
                    {chapter.meaning?.en && (
                      <p className="text-[#3F51B5] italic">"{chapter.meaning.en}"</p>
                    )}

                    <motion.div 
                      className="mt-4 text-[#FF9933] font-medium flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      Explore chapter
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
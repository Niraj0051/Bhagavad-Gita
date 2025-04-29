// import { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import LoadingSpinner from '../components/LoadingSpinner';

// export default function ChapterDetailPage() {
//   const { id } = useParams();
//   const [chapter, setChapter] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchChapter = async () => {
//       try {
//         const response = await fetch(`https://vedicscriptures.github.io/chapter/${id}`);
//         if (!response.ok) {
//           throw new Error('Chapter not found');
//         }
//         const data = await response.json();
//         setChapter(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchChapter();
//   }, [id]);

//   if (loading) return <LoadingSpinner />;
//   if (error) return <div className="error-message">Error: {error}</div>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="bg-white rounded-lg shadow-md overflow-hidden">
//         <div className="p-6">
//           <div className="flex items-center justify-between mb-6">
//             <h1 className="text-3xl font-bold text-indigo-800">
//               Chapter {chapter.chapter_number}: {chapter.name}
//             </h1>
//             <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
//               {chapter.verses_count} verses
//             </span>
//           </div>

//           {chapter.translation && (
//             <div className="mb-6">
//               <h2 className="text-xl font-semibold text-gray-800 mb-2">Translation</h2>
//               <p className="text-gray-700">{chapter.translation}</p>
//             </div>
//           )}

//           {chapter.meaning && (
//             <div className="mb-6">
//               <h2 className="text-xl font-semibold text-gray-800 mb-2">Meaning</h2>
//               <p className="text-gray-700">{chapter.meaning.en}</p>
//               {chapter.meaning.hi && (
//                 <p className="text-gray-700 mt-2">{chapter.meaning.hi}</p>
//               )}
//             </div>
//           )}

//           {chapter.summary && (
//             <div className="mb-6">
//               <h2 className="text-xl font-semibold text-gray-800 mb-2">Summary</h2>
//               <p className="text-gray-700 mb-2">{chapter.summary.en}</p>
//               {chapter.summary.hi && (
//                 <p className="text-gray-700">{chapter.summary.hi}</p>
//               )}
//             </div>
//           )}

//           <div className="mt-8">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">Verses</h2>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
//               {Array.from({ length: chapter.verses_count }, (_, i) => (
//                 <Link
//                   key={i + 1}
//                   to={`/slok/${chapter.chapter_number}/${i + 1}`}
//                   className="bg-indigo-50 hover:bg-indigo-100 text-indigo-800 font-medium text-center py-2 px-3 rounded transition-colors"
//                 >
//                   {i + 1}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { motion } from 'framer-motion';

export default function ChapterDetailPage() {
  const { id } = useParams();
  const [chapter, setChapter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('meaning');

  useEffect(() => {
    const fetchChapter = async () => {
      try {
        const response = await fetch(`https://vedicscriptures.github.io/chapter/${id}`);
        if (!response.ok) {
          throw new Error('Chapter not found');
        }
        const data = await response.json();
        setChapter(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChapter();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-[#FAF3E0] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          {/* Chapter Header */}
          <div className="bg-gradient-to-r from-[#FF9933] to-[#FFD700] p-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.h1 
                className="text-3xl font-bold text-white"
                initial={{ x: -20 }}
                animate={{ x: 0 }}
              >
                Chapter {chapter.chapter_number}: {chapter.name}
              </motion.h1>
              <motion.span 
                className="bg-white/30 text-white text-sm font-medium px-4 py-2 rounded-full mt-4 md:mt-0"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
              >
                {chapter.verses_count} verses
              </motion.span>
            </div>
          </div>

          {/* Chapter Content */}
          <div className="p-6">
            {/* Tabs */}
            <div className="flex border-b border-[#FAF3E0] mb-6">
              {['meaning', 'summary', 'translation'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 font-medium text-sm capitalize ${activeTab === tab ? 'text-[#FF9933] border-b-2 border-[#FF9933]' : 'text-[#333333] hover:text-[#3F51B5]'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'translation' && chapter.translation && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-[#800000] mb-3">Translation</h2>
                  <p className="text-[#333333] leading-relaxed">{chapter.translation}</p>
                </div>
              )}

              {activeTab === 'meaning' && chapter.meaning && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-[#800000] mb-3">Meaning</h2>
                  <p className="text-[#333333] leading-relaxed mb-4">{chapter.meaning.en}</p>
                  {chapter.meaning.hi && (
                    <div className="bg-[#FAF3E0] p-4 rounded-lg">
                      <p className="text-[#3F51B5] leading-relaxed">{chapter.meaning.hi}</p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'summary' && chapter.summary && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-[#800000] mb-3">Summary</h2>
                  <p className="text-[#333333] leading-relaxed mb-4">{chapter.summary.en}</p>
                  {chapter.summary.hi && (
                    <div className="bg-[#FAF3E0] p-4 rounded-lg">
                      <p className="text-[#3F51B5] leading-relaxed">{chapter.summary.hi}</p>
                    </div>
                  )}
                </div>
              )}
            </motion.div>

            {/* Verses Grid */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-[#800000] mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#FF9933]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Explore Verses
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {Array.from({ length: chapter.verses_count }, (_, i) => (
                  <motion.div
                    key={i + 1}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={`/slok/${chapter.chapter_number}/${i + 1}`}
                      className="block bg-[#3F51B5]/10 hover:bg-[#3F51B5]/20 text-[#3F51B5] font-medium text-center py-2 px-3 rounded-lg transition-colors"
                    >
                      {i + 1}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [chapters, setChapters] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredChapter, setHoveredChapter] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await fetch('https://vedicscriptures.github.io/chapters');
        const data = await response.json();
        setChapters(data);
      } catch (error) {
        console.error('Error fetching chapters:', error);
      }
    };
    fetchChapters();
  }, []);

  const handleChapterClick = (chapterNumber) => {
    navigate(`/chapter/${chapterNumber}`);
    setIsHovering(false);
    setHoveredChapter(null);
  };

  return (
    <nav className="bg-[#FFF8E1] border-b-2 border-[#FFD700] shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#800000] italic font-serif">
          श्रीमद्भगवद्गीता
        </Link>

        {/* Chapters Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => {
            setIsHovering(false);
            setHoveredChapter(null);
          }}
        >
          <button className="flex items-center space-x-2 px-4 py-2 bg-[#FF9933] hover:bg-[#FF9933]/90 text-white rounded-lg transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
            <span className="font-medium">Chapters</span>
          </button>

          {isHovering && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-[#FAF3E0] border-2 border-[#FFD700] rounded-xl shadow-xl z-50 p-4 flex">
              {/* Chapter List */}
              <div className="grid grid-cols-2 gap-2 min-w-[20rem]">
                {chapters.map((chapter) => (
                  <div
                    key={chapter.chapter_number}
                    onMouseEnter={() => setHoveredChapter(chapter)}
                    className="relative group"
                  >
                    <div 
                      onClick={() => handleChapterClick(chapter.chapter_number)}
                      className="px-3 py-1 rounded-lg hover:bg-[#FF9933]/10 cursor-pointer"
                    >
                      <span className="text-[#3F51B5] font-medium">
                        Chapter {chapter.chapter_number}
                      </span>
                      <p className="text-xs text-[#800000] truncate">{chapter.name}</p>
                    </div>

                    {/* Verse Panel - Only on Hover */}
                    {hoveredChapter?.chapter_number === chapter.chapter_number && (
                      <div 
                        className="absolute top-0 left-full ml-2 bg-[#FFF8E1] border border-[#FFD700] shadow-lg rounded-lg p-3 w-64 z-50"
                        onClick={(e) => e.stopPropagation()} // Prevent event bubbling
                      >
                        <h3 className="text-[#800000] font-semibold mb-2">
                          {chapter.name}
                          <span className="block text-sm text-[#3F51B5]">
                            ({chapter.verses_count} Verses)
                          </span>
                        </h3>
                        <div className="grid grid-cols-6 gap-1 max-h-48 overflow-y-auto">
                          {Array.from({ length: chapter.verses_count }, (_, i) => (
                            <Link
                              key={i + 1}
                              to={`/slok/${chapter.chapter_number}/${i + 1}`}
                              className="text-center text-xs bg-[#3F51B5]/10 hover:bg-[#3F51B5]/20 text-[#3F51B5] px-2 py-1 rounded"
                              onClick={() => {
                                setIsHovering(false);
                                setHoveredChapter(null);
                              }}
                            >
                              {i + 1}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right side placeholder */}
        <div className="w-24"></div>
      </div>
    </nav>
  );
}
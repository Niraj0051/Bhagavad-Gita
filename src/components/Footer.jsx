import { Link } from "react-router-dom";

// Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-[#800000] border-t-4 border-[#FFD700] mt-12">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-[#FAF3E0]">
          <div className="text-center mb-4 md:mb-0">
            <h3 className="text-2xl font-serif italic mb-2">श्रीमद्भगवद्गीता</h3>
            <p className="text-sm">Wisdom for Eternal Peace</p>
          </div>
          
          <Link to={'/about'} className="hover:text-[#FF9933] transition-colors">
            About
          </Link>
        </div>
        
        <div className="mt-4 pt-4 border-t border-[#FF9933]/30 text-center text-sm">
          <p className="text-white">© {new Date().getFullYear()} Bhagavad Gita App. All rights reserved.</p>
          <p className="mt-1 text-[#FFD700]/80">Made with devotion in Bharat</p>
        </div>
      </div>
    </footer>
  );
}
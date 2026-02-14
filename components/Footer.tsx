import React from 'react';
import { Twitter, Instagram, Facebook, Dribbble } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05050A] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">TrendingMotion</h3>
            <p className="text-slate-500 text-sm mb-6">
              Workspace that remembers everything for you.
            </p>
            <div className="flex gap-2">
                <button className="bg-white/5 hover:bg-white/10 text-white text-xs px-4 py-2 rounded border border-white/10 transition-colors">Get Started</button>
                <button className="text-slate-400 hover:text-white text-xs px-4 py-2 transition-colors">Sign Up</button>
            </div>
          </div>

          <div className="col-span-1">
             <h4 className="text-slate-300 font-medium text-sm mb-4">Navigation</h4>
             <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Testimonials</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Pricing</a></li>
             </ul>
          </div>

          <div className="col-span-1">
             <h4 className="text-slate-300 font-medium text-sm mb-4">Resources</h4>
             <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Use</a></li>
             </ul>
          </div>

           <div className="col-span-2 md:col-span-1 flex md:justify-end items-start gap-4">
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={18} /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Dribbble size={18} /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Instagram size={18} /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Facebook size={18} /></a>
           </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-xs">© 2025 TrendingMotion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
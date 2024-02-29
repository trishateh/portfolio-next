import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
      <div className="container p-12 flex justify-between">
        <span>
          Built with <b>Next.js</b> & <b>Tailwind CSS</b> and deployed with{" "}
          <b> Netlify</b> by yours truly.
        </span>
        <p className="text-slate-600 whitespace-nowrap">
          &copy; {new Date().getFullYear()} trishateh.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;

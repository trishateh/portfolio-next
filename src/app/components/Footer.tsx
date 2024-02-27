import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
      <div className="container p-12 flex justify-between">
        <span>Handcrafted with love by Trisha</span>
        <p className="text-slate-600 whitespace-nowrap">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

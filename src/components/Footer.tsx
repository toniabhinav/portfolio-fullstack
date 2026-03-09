const Footer = () => {
  return (
    <div className="w-full text-center py-6 text-gray-400 text-sm">
      <p>
        Design & Developed by{" "}
        <span className="text-white font-semibold">Abhinav Kumar</span>
      </p>

      <p className="mt-1 text-gray-500">
        © {new Date().getFullYear()} All rights reserved
      </p>
    </div>
  );
};

export default Footer;
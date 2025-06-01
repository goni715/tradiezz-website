import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Contact */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="Tradieez Logo" className="h-10 w-16" width={600} height={600}/>
            {/* <span className="text-xl font-bold">Tradieez</span> */}
          </div>
          <p>Call now: <a href="tel:3195550115" className="text-blue-400 font-medium">(319) 555-0115</a></p>
          <p>6391 Elgin St. Celina, Delaware 10299, New York</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            <li><a href="/blog" className="hover:text-blue-400">Blog</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Support</h4>
          <ul className="space-y-2">
            <li><a href="/privacy" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-blue-400">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        {/* <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4 text-gray-400">
            <a href="#"><i className="fab fa-facebook-f hover:text-white"></i></a>
            <FaFacebook className="hover:text-white"/>
            <a href="#"><i className="fab fa-youtube hover:text-white"></i></a>
            <a href="#"><i className="fab fa-instagram hover:text-white"></i></a>
            <a href="#"><i className="fab fa-twitter hover:text-white"></i></a>
          </div>
        </div> */}
      </div>

      <div className="border-t border-gray-700 mt-8">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-400">
          &copy; 2024 Tradieez - Job Portal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

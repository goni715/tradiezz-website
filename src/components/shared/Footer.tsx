import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Contact */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Image src="/images/logo_footer.png" alt="Tradieez Logo" className="h-10 w-16" width={600} height={600}/>
            {/* <span className="text-xl font-bold">Tradieez</span> */}
          </div>
          <p>Email: <span className="text-blue-400 font-medium">hello@tradieez.com</span></p>
          <p>24-26 Regent Place Regent Place, Birmingham, England, B1 3NJ </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="contact" className="hover:text-brand-color">Contact</a></li>
            <li><a href="blogs" className="hover:text-brand-color">Blogs</a> </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Help & Support</h4>
          <ul className="space-y-2">
            <li><a href="/about-us" className="hover:text-brand-color">About Us</a></li>
            <li><a href="/privacy" className="hover:text-brand-color">Privacy Policy</a></li>
            <li><a href="/terms-condition" className="hover:text-brand-color">Terms & Conditions</a></li>
          </ul>
        </div>
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

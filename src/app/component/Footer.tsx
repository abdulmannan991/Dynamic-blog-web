import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Welcome to our blog! We share insightful articles, tips, and stories on various topics. Stay tuned for more exciting content!
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link href="/" className="text-gray-300 hover:text-white text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-300 hover:text-white text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-300 hover:text-white text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-300 hover:text-white text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul>
              <li className="text-sm">
                Email:{" "}
                <a
                  href=""
                  className="text-teal-400 hover:underline"
                >
                  mannan@blog.com
                </a>
              </li>
              <li className="text-sm">
                Phone: <span className="text-gray-300">+123 456 7890</span>
              </li>
              <li className="text-sm">
                Address:{" "}
                <span className="text-gray-300">123 Blog Street, Blog City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 font-satoshi pt-4 text-center">
          <p className="text-sm">© 2025 Mannan&apos;s Blog . All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

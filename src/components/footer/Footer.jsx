import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            {/* footer */}
            <footer className="text-gray-600 body-font bg-purple-400">
                {/* main */}
                <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    {/* About Us */}
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                            <span className="text-xl font-bold">ShopMaster</span>
                        </a>
                        <p className="mt-2 text-sm text-gray-100">
                            Welcome to ShopMaster, your go-to destination for all things shopping! We bring you the best products at unbeatable prices, with a focus on quality and customer satisfaction.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center justify-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Quick Links</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link to="/" className="text-gray-100 hover:text-gray-300">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-gray-100 hover:text-gray-300">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/allproduct" className="text-gray-100 hover:text-gray-300">
                                        Shop
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-gray-100 hover:text-gray-300">
                                        Contact
                                    </Link>
                                </li>
                            </nav>
                        </div>

                        {/* Contact Us */}
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Contact Us</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <p className="text-gray-100">Email: support@shopmaster.com</p>
                                </li>
                                <li>
                                    <p className="text-gray-100">Phone: +1 (800) 123-4567</p>
                                </li>
                                <li>
                                    <p className="text-gray-100">Address: 123 Main St, Fictionland, FL 12345</p>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="bg-purple-500">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center">
                        <p className="text-gray-100 text-sm text-center sm:text-left">
                            © 2024 ShopMaster —
                            <Link
                                to="/"
                                className="text-gray-100 ml-1"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                ® Aldrovandi Romina 2024
                            </Link>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            {/* facebook */}
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-100 cursor-pointer">
                                <svg
                                    fill="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                            {/* twitter */}
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-100 cursor-pointer">
                                <svg
                                    fill="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                            {/* instagram */}
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-100 cursor-pointer">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;


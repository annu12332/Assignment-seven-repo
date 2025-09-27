import React from 'react';

const Footer = () => {
    return (
       
            <footer className="bg-black text-gray-300">
                <div className="max-w-7xl mx-auto px-3 py-5 grid grid-cols-1 md:grid-cols-5 gap-10">

                    {/* About */}
                    <div>
                        <h3 className="text-white font-semi-bold text-sm mb-4">CS-Ticket System</h3>
                        <p className="text-xs">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm">Company</h3>
                        <ul className="space-y-2 text-xs">
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Our Mission</a></li>
                            <li><a href="#" className="hover:text-white">Contact Sales</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm">Services</h3>
                        <ul className="space-y-2 text-xs">
                            <li><a href="#" className="hover:text-white">Products & Services</a></li>
                            <li><a href="#" className="hover:text-white">Customer Stories</a></li>
                            <li><a href="#" className="hover:text-white">Download Apps</a></li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm">Information</h3>
                        <ul className="space-y-2 text-xs">
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-white">Join Us</a></li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm">Social Links</h3>
                        <ul className="space-y-2 text-xs">
                            <li><a href="#" className="hover:text-white flex items-center gap-2"> CS-Ticket System</a></li>
                            <li><a href="#" className="hover:text-white flex items-center gap-2"> CS-Ticket System</a></li>
                            <li><a href="#" className="hover:text-white flex items-center gap-2"> CS-Ticket System</a></li>
                            <li><a href="mailto:support@cst.com" className="hover:text-white flex items-center gap-2">support@cst.com</a></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 py-2 text-center text-xs text-gray-500">
                    © 2025 CS — Ticket System. All rights reserved.
                </div>
            </footer>
            )


};

export default Footer;
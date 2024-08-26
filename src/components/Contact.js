import { FaGithub, FaMobile, FaInstagram, FaEnvelope } from "react-icons/fa";
import emailjs from 'emailjs-com'
import React , { useRef, useState} from "react";

export default function Contact() {
    return (
        <section
            id="contact"
            className="my-40 max-w-5xl mx-auto p-3"
        >
            <h2 className="text-5xl font-bold text-orange-600 text-center mb-10">
                Contact
            </h2>
            
            <div className="flex flex-col md:flex-row gap-5 justify-center my-10">
                {/* Email */}
                <div className="flex items-center gap-2">
                    <FaEnvelope className="text-2xl text-orange-600" />
                    <a href="mailto:arvindhdevlps17@gmail.com" className="text-blue-500 hover:underline">
                        arvindhdevlps17@gmail.com
                    </a>
                </div>
                
                {/* Mobile */}
                <div className="flex items-center gap-2">
                    <FaMobile className="text-2xl text-orange-600" />
                    <a href="tel:+918248725104" className="text-blue-500 hover:underline">
                        +91 8248725104
                    </a>
                </div>
                
                {/* Instagram */}
                <div className="flex items-center gap-2">
                    <FaInstagram className="text-2xl text-orange-600" />
                    <a href="https://www.instagram.com/arvindh._177/" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                        @arvindh._177
                    </a>
                </div>
                
                {/* Github */}
                <div className="flex items-center gap-2">
                    <FaGithub className="text-2xl text-orange-600" />
                    <a href="https://github.com/Arvindh177" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                        Arvindh177
                    </a>
                </div>
            </div>
        </section>
    );
}
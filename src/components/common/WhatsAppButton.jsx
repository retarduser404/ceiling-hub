import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917678654408?text=Hello%20Ceiling%20Hub%2C%20I%20want%20a%20quotation%20for%20your%20products."












      className="fixed bottom-20 right-5 sm:bottom-6 sm:right-6 z-[999] group"
    >


      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300">
        <FaWhatsapp className="text-white text-2xl sm:text-4xl" />
      </div>
    </a>
  );
}
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

// PLACEHOLDER: replace phone number with client's real WhatsApp Business number.
export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919999999999?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20for%20my%20pet"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift sm:bottom-8 sm:right-8"
    >
      <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full" />
      <MessageCircle className="h-6.5 w-6.5" fill="white" strokeWidth={0} />
    </motion.a>
  );
}

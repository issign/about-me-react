import { motion } from "framer-motion";

const Header = ({ children }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-4xl sm:text-6xl absolute top-0 mt-8"
    >
      {children}
    </motion.h1>
  );
};

export default Header;

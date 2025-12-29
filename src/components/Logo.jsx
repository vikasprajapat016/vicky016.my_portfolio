import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.svg
    whileHover={{scale:1.28}}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 120"
      className="w-64 h-auto"
    >
      {/* Vikas */}
      <motion.text
        x="0"
        y="90"
        fontSize="72"
        fontWeight="800"
        fill="transparent"
        stroke="#3B82F6"
        strokeWidth="2"
        initial={{ strokeDasharray: 400, strokeDashoffset: 400 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      >
        Vikas
      </motion.text>

      {/* Prajapat */}
      <motion.text
        x="190"
        y="90"
        fontSize="72"
        fontWeight="800"
        fill="transparent"
        stroke="#ffffff"
        strokeWidth="2"
        initial={{ strokeDasharray: 600, strokeDashoffset: 600 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 3, delay: 0.19, ease: "easeInOut" }}
      >
        Prajapat
      </motion.text>
    </motion.svg>
  );
};

export default Logo;

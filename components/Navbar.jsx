'use client';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import styles from '../styles';
const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative `}
  >
    navbar
  </motion.nav>
);

export default Navbar;

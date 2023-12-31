"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "../components";
import styles from "../styles";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <BolderText texture="Metaverse" />
        is a new thing in the future, where you can enjoy the virtual world by
        feeling like it's really real, you can feel what you feel in this
        metaverse world, because this is really the
        <BolderText texture="madness of the metaverse" />
        of today, using only
        <BolderText texture="VR" />
        madness of the metaverse devices you can easily
        <BolderText texture="explore" />
        the metaverse world you want, turn your dreams into reality. Let's
        explore the madness of the metaverse by scrolling down
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        className="w-[18px] h-[18px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;

const BolderText = ({ texture }) => {
  return <span className="font-extrabold text-white">{texture} </span>;
};

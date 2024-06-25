import { motion } from 'framer-motion';
import { RiFlutterFill, RiReactjsLine, RiSvelteLine, RiVuejsLine } from "react-icons/ri";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
})

const Technologies = () => {
    return <div className="border-b border-neutral-800 pb-24">
        <motion.h2 whileInView={{ y: 0, opacity: 1 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.5 }} className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1.5 }} className="flex justify-center items-center flex-wrap gap-4">
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-200 p-4">
                <RiReactjsLine className="text-6xl text-cyan-400" />
            </motion.div >
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-200 p-4">
                <RiSvelteLine className="text-6xl text-orange-600" />
            </motion.div >
            <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-200 p-4">
                <RiFlutterFill className="text-6xl text-blue-400" />
            </motion.div >
            <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-200 p-4">
                <RiVuejsLine className="text-6xl text-green-500" />
            </motion.div >
        </motion.div>
    </div>;
};

export default Technologies;

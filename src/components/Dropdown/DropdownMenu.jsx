import { motion } from "framer-motion";
import { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { FaHouse } from "react-icons/fa6";
import { IoIosContacts } from "react-icons/io";
import { PiPathBold } from "react-icons/pi";
import { RiPageSeparator } from "react-icons/ri";
import { SiBlockchaindotcom } from "react-icons/si";
import { VscThreeBars } from "react-icons/vsc";

const pages = [
    { text: "Home", icon: FaHouse }, { text: "NFT", icon: SiBlockchaindotcom }, { text: "Roadmap", icon: PiPathBold }, { text: "About Us", icon: CiCircleInfo }, { text: "Contact Us", icon: IoIosContacts }, { text: "Pages", icon: RiPageSeparator }
];

const DropDownMenu = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="z-50">
            <motion.div animate={open ? "open" : "closed"} className="relative">
                <button
                    onClick={() => setOpen((pv) => !pv)}
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-5 transition-colors"
                >
                    <span className="font-medium text-3xl"><VscThreeBars /></span>
                </button>

                <motion.ul
                    initial={wrapperVariants.closed}
                    variants={wrapperVariants}
                    style={{ originY: "top", translateX: "-50%" }}
                    className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
                >
                    {pages.map((page, index) => {
                        return (
                            <Option key={index} setOpen={setOpen} Icon={page.icon} text={page.text} />

                        )
                    })}
                </motion.ul>
            </motion.div>
        </div>
    );
};

const Option = ({ text, Icon, setOpen }) => {
    return (
        <motion.li
            variants={itemVariants}
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
        >
            <motion.span variants={actionIconVariants}>
                <Icon />
            </motion.span>
            <span>{text}</span>
        </motion.li>
    );
};

export default DropDownMenu;

const wrapperVariants = {
    open: {
        scaleY: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    closed: {
        scaleY: 0,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.1,
        },
    },
};

const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
};

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
        },
    },
    closed: {
        opacity: 0,
        y: -15,
        transition: {
            when: "afterChildren",
        },
    },
};

const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
};
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
  m,
} from "framer-motion";
import { MenuContext } from "../layout/menuContext";
import { useContext, useState } from "react";
import Link from "next/link";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Process", href: "/process" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Contact", href: "/contact" },
];
export default function Menu() {
  const { open, setOpen } = useContext(MenuContext);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const { finished, setFinished } = useContext(MenuContext);

  const menuVars = {
    initial: {
      x: "100%",
    },
    animate: {
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      x: "100%",
      transition: {
        delay: 0.5,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.06,
        staggerDirection: 1,
      },
    },
    close: {
      transition: {
        delayChildren: 0,
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={menuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed font-manrope top-0 left-0 w-full h-screen p-6 text-neutral-200 origin-top bg-neutral-900 z-[98]"
        >
          <div className="flex flex-col h-full">
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col h-full gap-4 mt-[8rem] "
            >
              {navLinks.map((link, index) => {
                return (
                  <div className="overflow-hidden" onClick={() => setOpen(!open)}>
                    <MobileNavLink
                      key={index}
                      title={link.title}
                      href={link.href}
                    />
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileNavLink = ({ title, href }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-neutral-200"
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};

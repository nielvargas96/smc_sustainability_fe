import React, { useState } from 'react'
import styles from './style.module.scss';
import { motion, AnimatePresence, useAnimate, stagger } from "framer-motion";
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import Link from 'next/link';
import Curve from './Curve';

const navItems = [
  {
    title: "Our Approach",
    href: "#",
    subNav: [
      {
        title: "Sustainability Governance Structure",
        href: "/our-approach/sustainability-governance-structure"
      },
      {
        title: "Board Sustainability Committee",
        href: "/our-approach/board-sustainability-comittee"
      },
      {
        title: "Sustainability Policies",
        href: "#"
      },
      {
        title: "Material Topics",
        href: "/our-approach/materials-topics"
      },
      {
        title: "Contributions to the UN SDGs",
        href: "/our-approach/contributions-to-the-UN-SDGS"
      },
      {
        title: "Awards and Citations",
        href: "/our-approach/awards-and-citations"
      },
      {
        title: "Partnerships",
        href: "/our-approach/partnerships"
      },
    ]
  },
  {
    title: "Kalikasan",
    href: "#",
    subNav: [
      {
        title: "Climate Change Action",
        href: "/kalikasan/climate-change-action"
      },
      {
        title: "Resource Manangement",
        href: "/kalikasan/resource-manangement"
      },
      {
        title: "Circular Economy",
        href: "/kalikasan/circular-economy"
      },
      {
        title: "Biodiversity & Ecosystems",
        href: "/kalikasan/biodiversity-ecosystems"
      },
    ]
  },
  {
    title: "Kalinga",
    href: "#",
    subNav: [
      {
        title: "Human Rights and Labor Practices",
        href: "/kalinga/human-rights-and-labor-practices",
      },
      {
        title: "Employee Health and Safety",
        href: "/kalinga/employee-health-and-safety",
      },
      {
        title: "Employee Enagagement, Training & Development",
        href: "/kalinga/employee-enagagement-training-and-development",
      },
      {
        title: "Diversity and Inclusion",
        href: "/kalinga/diversity-and-inclusion",
      },
      {
        title: "Customer Welfare and Responsibility",
        href: "/kalinga/customer-welfare-and-responsibility",
      },
      {
        title: "Community Engagement",
        href: "/kalinga/community-engagement",
      }
    ]
  },
  {
    title: "Kasaganahan",
    href: "#",
    subNav: [
      {
        title: "Sustainable Supply",
        href: "/kasaganahan/sustainable-supply",
      },
      {
        title: "Business Ethics and Compiance",
        href: "/kasaganahan/business-ethics-and-compliance",
      },
      {
        title: "Risk Management",
        href: "/kasaganahan/risk-manangement",
      },
      {
        title: "Digital Transformation",
        href: "/kasaganahan/digital-transformation",
      },
      {
        title: "Data Privacy and Security",
        href: "/kasaganahan/data-privacy-and-security",
      }
    ]
  },
  {
    title: "News & Update",
    href: "/news-and-update",
  },
]


export default function Index() {
  const pathname = usePathname();
  const [openAccordion, setOpenAccordion] = useState(false);

  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(false);
    } else {
      setOpenAccordion(index);
    }
  };

  return (
    <motion.aside data-lenis-prevent variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
      <div className={styles.body}>

        <div className={styles.nav}>
          {/* <div className={styles.header}>
            <p>Navigation</p>
          </div> */}

          {navItems.map((data, index) => (
            <div key={index} className={styles.itemWrapper}>
              <div onClick={() => toggleAccordion(index)} className={styles.menuWrapper}>
                {data.title === "News & Update" ? (
                  // Display nothing for this specific title
                  <>
                    <span><Link href={data.href} title={data.title}>{data.title}</Link></span>
                  </>
                ) : (
                  // Display the SVG for other titles
                  <>
                    <span >{data.title} <svg className={`${openAccordion === index ? styles.arrowActive : styles.arrow}`} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24.375 11.25L15 20.625L5.625 11.25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg></span>
                  </>
                )}

                {/* SUB NAVIGATION */}
                <AnimatePresence mode="wait">
                  {openAccordion === index && (
                    <motion.div
                      initial={{ opacity: 0, height: "0" }}
                      animate={{ opacity: 1, height: "100%", overflow: "hidden" }}
                      exit={{ opacity: 0, height: "0" }}
                      className={`${openAccordion === index ? styles.active : ''}`}
                    >

                      {data.subNav?.map((subNavItem, subIndex) => (
                        <motion.div
                          key={subIndex}
                          className={styles.subItem}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          transition={{ delay: subIndex * 0.1 }}
                        >
                          <Link href={subNavItem.href} className={subNavItem.href === pathname ? styles.activePage : ''}>{subNavItem.title}</Link>
                        </motion.div>
                      ))}

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>


          ))}

        </div>
        {/* <Footer /> */}
      </div>
      <Curve />
    </motion.aside>
  )
}
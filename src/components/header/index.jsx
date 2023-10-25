'use client'
import styles from './style.module.scss'
import { useEffect, useState, useRef } from 'react';
import Nav from './nav';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Rounded from '@/components/common/RoundedButton';
import imageKitLoader from '@/utils/imageKitLoader';

export default function Index() {
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef();

  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isActive && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    const handleClickInside = (event) => {
      if (isActive && event.target.tagName === 'A' && event.target.getAttribute('href')) {
        setIsActive(false);
      }
    }

    if (isActive) {
      // Add event listeners when the burger menu is active
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('click', handleClickInside);
      document.body.classList.add('active');
    }

    return () => {
      // Remove the event listeners when the component unmounts or the menu is no longer active
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('click', handleClickInside);
      document.body.classList.remove('active');
    };
  }, [isActive]);

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


  return (
    <>
      {/* HEADER */}
      <header className={styles.headerContainer}>
        <div className={styles.logo}>
          <Link href="/" title='San Miguel Corporation'>
            <Image loader={imageKitLoader} data-src='smc_logo.svg' width={75} height={75} alt='SMC Logo' />
            <Image loader={imageKitLoader} data-src='smc_logo.svg' width={65} height={65} alt='SMC Logo' />
          </Link>
        </div>

        <div className={styles.desktopNav}>
          <div className={styles.menuWrapper}>
            {/* e is for Element and i is for index */}
            {navItems.map((e, i) => (
              <div key={i} className={styles.menu}>
                <Link className={styles.menuItem} href={e.href}>{e.title}</Link>

                {e.subNav && e.subNav.length > 0 && (
                  <div className={styles.subMenu}>
                    {e.subNav.map((e, i) => (
                      <div className={styles.menu2} key={i}>
                        <Link className={styles.menuItem2} href={e.href}>{e.title}</Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.header}>
          <Rounded backgroundColor='#56a147' onClick={() => {
            setIsActive(!isActive);
            // Add a class to the body element when the button is clicked
            if (!isActive) {
              document.body.classList.add('active');
            } else {
              document.body.classList.remove('active');
            }
          }}>

            <div className={styles.button}>
              <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </div>
          </Rounded>
        </div>
      </header >
      {/* SIDE NAVIGATION */}
      < aside ref={menuRef} >
        <AnimatePresence mode="wait">
          {isActive && <Nav />}
        </AnimatePresence>
      </aside >
    </>
  )
}

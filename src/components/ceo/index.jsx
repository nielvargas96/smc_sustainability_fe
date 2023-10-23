'use client'

import { useRef } from 'react';
import './style.scss';
import Image from 'next/image';
import Description from '../common/Description/index';
import Rounded from '../common/RoundedButton/index'
import Link from 'next/link'
import { motion, useInView, useScroll, useTransform } from "framer-motion";



export default function Index() {



  const refContainer = useRef();
  const { scrollYProgress } = useScroll({
    target: refContainer,
    offset: ['start end', 'end start']
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section ref={refContainer} className='card' >
      <div className='bg-gradient'>
        <Image fill={true} src="/images/bg_gradient.png" alt='Background Gradient' />
      </div>
      <div className='card-wrapper'>
        <div className='description'>
          <motion.h1 className='heading-1' >
            <Description phrase={`Message from our `} />
            <Description phrase={`president and CEO`} />
          </motion.h1>
          <div className='message'>
            <Description phrase={`Our four goals and sustainability roadmap will define for San Miguel a way forward in a world where supplies of basic needs like water and energy are limited and where far too many Filipinos live below the poverty line.`} /></div>
          <div className=''>
            <p className='name'>Ramon S. Ang</p>
            <p className='role'>President and Chief Operating Officer</p>
          </div>
        </div>

        <div className='img-wrapper'  >
          <div>
            <Image src="/images/ceo.png" width={756} height={708} alt='Ramon S. Ang | President and Chief Operating Officer' />
          </div>
        </div>
      </div>

      <motion.div className='action-button' style={{ x }}>
        <Link href="/our-approach/sustainability-governance-structure" title='Read More'>
          <Rounded backgroundColor='#f6c87f'>
            <span>Read more</span>
          </Rounded>
        </Link>
      </motion.div>

    </section>
  )
}

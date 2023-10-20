'use client'

import React from 'react';
import './style.scss';
import Image from 'next/image';
import Description from '../common/Description'


export default function index() {
  return (
    <section className='card'>
      <div className='description'>
        <h2>
          <Description phrase={`Message from our president and CEO Message from our president and CEOMessage from our president and CEOMessage from our president and CEO`} />.
        </h2>
        <Description phrase={`Our four goals and sustainability roadmap will define for San Miguel a way forward in a world where supplies of basic needs like water and energy are limited and where far too many Filipinos live below the poverty line.`} />
        <p>Ramon S. Ang</p>
        <p>President and Chief Operating Officer</p>
        <Description phrase={`Our four goals and sustainability roadmap will define for San Miguel a way forward in a world where supplies of basic needs like water and energy are limited and where far too many Filipinos live below the poverty line.`} />
      </div>
      <div className='img'>
        <Image src="/images/ceo.png" width={700} height={700} alt='CEO' />
      </div>
    </section>
  )
}

'use client'

import './globals.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import FooterSVG from '../components/footerCircleSvg'
import { useState, useEffect } from 'react';
import Loader from './loading';
import Lenis from '@studio-freight/lenis'


export default function RootLayout({ children }) {
  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)


  // const [loading, setLoading] = useState(false);
  // const router = useRouter();

  // // Listen for page navigation events (e.g., router changes) and show the preloader
  // useEffect(() => {
  //   const startLoading = () => setLoading(true);
  //   const stopLoading = () => setLoading(false);

  //   // Add event listeners for route changes
  //   router.events.on('routeChangeStart', startLoading);
  //   router.events.on('routeChangeComplete', stopLoading);
  //   router.events.on('routeChangeError', stopLoading);

  //   return () => {
  //     router.events.off('routeChangeStart', startLoading);
  //     router.events.off('routeChangeComplete', stopLoading);
  //     router.events.off('routeChangeError', stopLoading);
  //   };
  // }, []);

  return (
    <html lang="en">
      <body>
        <div className='app'>
          {/* {loading && <Loader />} */}
          <Header />
          <main className='main'>{children}</main>
          {/* <FooterSVG /> */}
          <Footer />
        </div>
      </body>
    </html>
  )
}

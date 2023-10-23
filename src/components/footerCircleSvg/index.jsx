// import React from 'react'
// import { useScroll, useTransform, motion } from 'framer-motion';
// import { useRef } from 'react';

// const index = () => {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start end", "end start"]
//   })
//   const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
//   // console.log(height)
//   return (
//     <div ref={container}>
//       <motion.div style={{ height }} className="circleContainer">
//         <div className="circle"></div>
//       </motion.div>
//     </div>
//   )
// }

// export default index
import React from 'react'
import {motion} from 'framer-motion'

const M = () => {
  return (
    <div>
      <motion.div
       animate={{
       x:1000,
       y:1000
      }}
  
    
       className="circle">

       </motion.div>
    </div>
  )
}

export default M

import React from 'react'
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion/dist/framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');

  return (
    <div className='img-grid'>
      { docs && docs.map(doc => (
        <motion.div
          layout
          className='img-wrap'
          key={doc.id}
          onClick={() => setSelectedImg(doc.url)}
          whileHover={{ opacity: 1 }}
        >
          <motion.img
            src={doc.url}
            alt={doc.id}
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ opacity:1 }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default ImageGrid
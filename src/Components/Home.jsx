import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import img from '../Assets/btc.png'
import { motion } from 'framer-motion';

const Home = () => {
    return <Box bgColor={'gray.500'} width='full' height={'85vh'}>
        <motion.div
            style={{
                height: '80vh'
            }}
            animate={{
                translateY: '20px'
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse'
            }}
        >
            <Image w={'full'} height='full' objectFit={'contain'} src={img} filter={'grayscale(1)'} />
        </motion.div>
        <Text fontSize={'6xl'} textAlign='center' fontWeight={'bold'} color='black.900' mt={'-20'} textTransform='uppercase' >Know Crypto...</Text>
    </Box>
}

export default Home

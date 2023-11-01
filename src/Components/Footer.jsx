import { Avatar, Box, Stack, Text, VStack, Button, HStack, Heading } from '@chakra-ui/react'
import React from 'react'
import img from '../Assets/abhay3.png'

const Footer = () => {
    return <Box
        bgColor={'black'}
        color='whiteAlpha.700'
        minH={'48'}
        px='16'
        py={['16', '8']}
        mt='2'
    >
        <Stack
            direction={['column', 'row']}
            h='full'
            alignItems={'center'}
        >
            <VStack w={'full'} alignItems={["center", "flex-start"]} >
                <Text fontWeight={'bold'}>About us</Text>
                <Text
                    fontSize={'sm'}
                    letterSpacing='widest'
                    textAlign={['center', 'left']}
                >We are the best crypto information app in India, we serve you with the latest information from all over the world.</Text>

                <VStack w={'full'} alignItems={["center", "flex-start"]} >
                    <Heading size={'md'} textTransform="uppercase">
                        Social Media
                    </Heading>
                    <HStack>
                        <Button pr={['0', '5']} variant={'link'} colorScheme="white">
                            <a target={'blank'} href="https://www.instagram.com/abhay_4481/">Instagram</a>
                        </Button>

                        <Button variant={'link'} colorScheme="white">
                            <a target={'blank'} href="https://github.com/abhay4481">Github</a>
                        </Button>

                        <Button pl={['0', '5']} variant={'link'} colorScheme="white">
                            <a target={'blank'} href="https://www.linkedin.com/in/abhay-pratap-singh-1b3549237/">Linked in</a>
                        </Button>
                    </HStack>
                </VStack>
            </VStack>

            <VStack>
                <Avatar boxSize={'28'} mt={['4', '0']} src={img} />
                <Text>Founder</Text>
            </VStack>
        </Stack>
    </Box>
}

export default Footer

import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return <HStack
        p={'4'}
        m='2'
        shadow='base'
        bgColor={'black'}
    >
        <Button p={2} variant={'unstyled'} color='white'>
            <Link to='/'>Home</Link>
        </Button>
        <Button p={2} variant={'unstyled'} color='white'>
            <Link to='/exchanges'>Exchanges</Link>
        </Button>
        <Button p={2} variant={'unstyled'} color='white'>
            <Link to='/coins'>Coins</Link>
        </Button>
    </HStack>
}

export default Header

import { Spinner, Stack } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import SingleUser from './SingleUser'

function User() {
    const user = useSelector(state => state.user)
    return (
        <Stack justifyContent='center' alignItems='center' direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 4, lg: 10 }} wrap={{ base: 'nowrap', md: 'wrap' }} height='100vh' backgroundColor='aliceblue'>
            {user.loading ? (<Spinner size='xl' />) : (<SingleUser details={user.data.data} />)}
        </Stack>
    )
}

export default User
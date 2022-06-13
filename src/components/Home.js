import React from 'react'
import {
  Stack, Spinner
} from '@chakra-ui/react';
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '../redux/reducers/usersSlice'

function Home() {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
    //eslint-disable-next-line
  }, [])
  return (
    <Stack justifyContent='center' alignItems='center' direction={{ base: 'column', md: 'row' }}
      spacing={{ base: 4, lg: 10 }} wrap={{ base: 'nowrap', md: 'wrap' }} height='100vh' backgroundColor='aliceblue'>
      {users.loading ? <Spinner size='xl' /> : users?.data?.data?.map((user, i) => {
        return (
          <Card details={user} key={i} />
        )
      })}
    </Stack>
  )
}

export default Home
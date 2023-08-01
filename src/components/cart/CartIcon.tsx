import React, { FC, useContext } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import { Box } from '@mui/material';
// import { ThemeContext } from '../../Context/Main';
// import { Person } from '../../../pages/about';
import { Mutation, useQuery, useQueryClient } from '@tanstack/react-query';
import fetchPosts from '../../fetchData/FetchData';

export interface Person {
    userId: number | number,
    id: number,
    title: string,
    body: string
}

type message = string

function CartIcon() {

    // const handle = useContext(ThemeContext);



    // const queryClient = useQueryClient();
    const { data, isError, isLoading, error, isFetching, refetch } = useQuery<Person[], any>(['user'], fetchPosts, {
        enabled: false
    });

    console.log({ isLoading, isFetching });


    if (isLoading || isFetching) {
        return <div>Loading...</div>
    }
    if (isError) {

        return <div>Error! {error.message}</div>
    }

    return (
        <Box>
            <ul>
                {
                    data.map((user) => {
                        return <li className='container' key={user.id}>{user.id}</li>
                    })
                }
            </ul>
            <button onClick={refetch}>ccc</button>
            {/* <Badge badgeContent={4} color="success">
                <AddShoppingCartIcon />
            </Badge> */}
        </Box>
    )
}

export default CartIcon


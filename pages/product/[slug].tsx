import * as React from 'react';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router'
import { Typography } from '@mui/material';

export default function BasicRating() {


    const router = useRouter();

    const id = router.query.slug;

    console.log(id);

    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Typography>{id}</Typography>
        </Box>
    );
}
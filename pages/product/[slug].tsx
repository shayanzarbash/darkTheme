import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating() {
    const [value, setValue] = React.useState<number | null>(0);

    const handleChange = (_e: React.ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue);
    }

    console.log({ value })


    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Typography component="legend">Controlled</Typography>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={handleChange}
                precision={0.5}
                size="large"
            />
        </Box>
    );
}
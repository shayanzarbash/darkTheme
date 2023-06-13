import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import { Box } from '@mui/material';

export default function CartIcon() {
    return (
        <Box>
            <Badge badgeContent={4} color="success">
                <AddShoppingCartIcon />
            </Badge>
        </Box>
    )
}


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '../../../utils/mui/Link';
import SearchFrom from '../search/SearchForm';
import CartIcon from '../cart/CartIcon';
import UserLogin from '../user/Account';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import TabsNav from './TabsNav';

const Nav = () => {

    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: 'space-between', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Link href='/' color='inherit' sx={{ textDecoration: 'none' }}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Home
                            </Typography>
                        </Link>
                        <Box sx={{
                            display: { xs: 'none', sm: 'block' }
                        }}>
                            <SearchFrom />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', }}>
                        <CartIcon />
                        <UserLogin />
                    </Box>
                </Toolbar>
                <TabsNav />
            </AppBar>
            <Dialog open={searchOpen} onClose={() => setSearchOpen(false)}
                PaperProps={{
                    sx: {
                        position: 'fixed',
                        top: '10px'
                    }
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' }
                }}
            >
                <SearchFrom />
            </Dialog>
        </Box>
    );
}


export default Nav;
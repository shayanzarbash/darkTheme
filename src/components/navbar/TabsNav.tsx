import { AppBar, Container, Tab, Tabs } from '@mui/material';
import Link from '../../../utils/mui/Link';
import React, { useState, forwardRef } from 'react'

type LinkTabProps = {
    href: string,
    label: string
}

const LinkTabs = forwardRef<HTMLElement, LinkTabProps>(({ href, ...rest }, ref) => (
    <Link href={href} color='inherit' sx={{ textDecoration: 'none' }}>
        <Tab {...rest} component='li' />
    </Link>
))

const TabsNav = () => {

    const [value, setValue] = useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    }

    return (
        <AppBar position='sticky'>
            <Container>
                <Tabs
                    variant='scrollable'
                    scrollButtons='auto'
                    value={value}
                    onChange={handleChange}
                    textColor="inherit"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <LinkTabs label="Home" href='./' />
                    <LinkTabs label="Pro" href='./product' />
                    <LinkTabs label="About" href='./about' />
                </Tabs>
            </Container>
        </AppBar>
    )
}

export default TabsNav;


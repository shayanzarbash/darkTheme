import { Grid, Box } from '@mui/material'
import { Product } from '../../../types/info'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from '../../../utils/mui/Link';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const ProductsGrid = ({ products }: Product) => {
    const [sort, setSort] = useState(' ');
    const [sortProduct, setSortProduct] = useState(products);

    const handleChange = (e: SelectChangeEvent) => {
        const selectValue = e.target.value;
        setSort(selectValue);
        const tempArray = products;
        if (selectValue === 'low') {
            tempArray.sort((product1, product2) => product1.price - product2.price)
        } else {
            tempArray.sort((product1, product2) => product2.price - product1.price)
        }
        setSortProduct(tempArray);
    }
    console.log("products", products[1].price)
    return (
        <>
            <Box>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sort}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value=' ' disabled>Select...</MenuItem>
                        <MenuItem value='low'>Low</MenuItem>
                        <MenuItem value='high'>High</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Grid container spacing={2}>
                {sortProduct.map(product => {
                    return (
                        <Grid item xs={6} sm={4}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <Link href={`/product/${product.id}`}>

                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={product.imageUrl}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {product.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {product.content}
                                            </Typography>
                                            <Typography variant="body2" color="text.primary">
                                                {`${product.price} $`}
                                            </Typography>
                                        </CardContent>
                                    </Link>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}

export default ProductsGrid;
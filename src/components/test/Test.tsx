import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';


export default function TextareaValidator() {

    const [count, setCount] = useState<string[]>([]);
    console.log({ count });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setCount(typeof newValue === 'string' ? newValue.split(',') : newValue);
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={count}
                    label="Age"
                    onChange={handleChange}
                    multiple={true}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    <MenuItem value={40}>Fourty</MenuItem>
                    <MenuItem value={50}>Fifty</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
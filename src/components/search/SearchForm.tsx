import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import { Dispatch, SetStateAction, useRef, useState } from 'react';

// type Props = {
//   open: boolean,
//   setOpen: Dispatch<SetStateAction<boolean>>
// }

const SearchFrom = () => {

  const [state, setState] = useState(null);

  // const serchRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('first');
  }

  return (
    <Box sx={{
      display: 'flex',
      backgroundColor: '#eee',
      borderRadius: '5px',
      marginLeft: '30px',
    }}>
      <Box sx={{
        display: 'flex',
        color: '#000',
        alignItems: 'center',
        padding: '0px 10px'
      }}>
        <SearchIcon />
      </Box>
      <Box>
        <InputBase placeholder='seach...' onChange={handleChange} />
      </Box>
    </Box >
  )
}

export default SearchFrom;


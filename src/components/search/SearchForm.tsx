import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import { Dispatch, SetStateAction, useRef, useState } from 'react';


const SearchFrom = () => {

  const [state, setState] = useState(null);


  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
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
    </Box>
  )
}

export default SearchFrom;


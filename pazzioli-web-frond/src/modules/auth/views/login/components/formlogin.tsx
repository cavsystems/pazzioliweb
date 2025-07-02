import FormControl from "@mui/material/FormControl";
import Inputtext from '../../../../../components/inputs';
import PersonIcon from '@mui/icons-material/Person';
export function Formlogin() {
  
    return (  
        <>
        <div className="flex flex-col ">
           <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <Inputtext   type="text" label='documento'  Icon={PersonIcon} />

           </FormControl>
           <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <Inputtext   type="text" label='usuario'  Icon={PersonIcon} />

           </FormControl>

           </div>
        </>
    );
}


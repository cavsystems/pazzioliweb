import FormControl from "@mui/material/FormControl";
import Inputtext from '../../../../../components/inputs';
import PersonIcon from '@mui/icons-material/Person';
import React from "react";
//formulario de inicio de sesion
export function Formlogin() {
    const [showPassword, setShowPassword] = React.useState(true);
    const [tipo, settipo] = React.useState('password');

    const handleClickShowPassword = () => {setShowPassword((show) => !show)
        settipo((tipo) => tipo === 'password' ? 'text' : 'password');
    };
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      };
    
      const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      };
  
    return (  
        <>
        <div className="flex flex-col ">
           <FormControl sx={{ m: 1, width: '300px' }} variant="outlined">
              <Inputtext   type="text" label='documento'  Icon={PersonIcon} />

           </FormControl>
           <FormControl sx={{ m: 1,  width: '300px' }} variant="outlined">
              <Inputtext   type="text" label='usuario'  Icon={PersonIcon} />

           </FormControl>

           <FormControl sx={{ m: 1,  width: '300px' }} variant="outlined">
              <Inputtext   type={tipo} label='Contraseña' showPassword={showPassword}  handleClickShowPassword={handleClickShowPassword}  handleMouseDownPassword={handleMouseDownPassword}  handleMouseUpPassword={handleMouseUpPassword} tipoicon='password'/>

           </FormControl>

           <FormControl sx={{ m: 1,  width: '300px' }} variant="outlined">
           

           </FormControl>

           </div>
        </>
    );
}


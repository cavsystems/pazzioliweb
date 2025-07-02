import type { ComponentProps } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
//componente para poder crear inputs personalizados
// establesemos una interfaces paradefinir los tipos de datos y varibales que se le pasaran al input
//utilizarmos el patron poliformico para poder utilizar diferentes tipos de inputs

//React.ComponentPropsWithoutRef<C> asegura que props como id, onChange o variant estén tipados correctamente para ese C específic
export type InputProps<C extends React.ElementType = typeof OutlinedInput> =
  Omit<React.ComponentPropsWithoutRef<C>, 'as' | 'type'> & {
    as?: C | undefined; //permite pasar un componente personalizado como as, si no se pasa, se usara OutlinedInput por defecto
    label: string;
    type?: 'text' | 'password' | 'email' | 'number';
    showPassword?: boolean | undefined; //para mostrar u ocultar la contraseña
    Icon: React.ComponentType<any>;
    
};
//Al usar generics <C extends React.ElementType>, as puede ser cualquier componente.
function Input<C extends React.ElementType = typeof OutlinedInput>({label,type, Icon,as, showPassword,...rest}: InputProps<C>) {
    const Component = as || OutlinedInput; //elige el componente real a renderizar.


    return <>
     <InputLabel htmlFor="custom-input">{label}</InputLabel>
      <Component
        id="outlined-adornment-password"
        type={type}
        endAdornment={
          <InputAdornment position="end">
          {type==='password' ? <IconButton
              aria-label={
            showPassword  ? 'hide the password' : 'display the password'
              }
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>:<IconButton >{ Icon && <Icon/>}</IconButton> }
          </InputAdornment>
        }
        label={label}
      />

    
      </>

    
}


export  default Input ;

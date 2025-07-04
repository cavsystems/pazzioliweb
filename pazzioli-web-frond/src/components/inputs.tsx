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
    type?: string |'text' | 'password' | 'email' | 'number';
    showPassword?: boolean | undefined; //para mostrar u ocultar la contraseña
   handleClickShowPassword :()=> void;
   handleMouseDownPassword:(event: React.MouseEvent<HTMLButtonElement>)=> void;
   handleMouseUpPassword:(event: React.MouseEvent<HTMLButtonElement>)=> void
    Icon: React.ComponentType<any> | undefined;
    tipoicon?: 'password' | undefined; //para definir el tipo de icono que se mostrara
    
};
//Al usar generics <C extends React.ElementType>, as puede ser cualquier componente.
function Input<C extends React.ElementType = typeof OutlinedInput>({label,type, Icon,as, showPassword,tipoicon,...rest}: InputProps<C>) {
    const Component = as || OutlinedInput; //elige el componente real a renderizar.
const hasError = rest.error;
 console.log(Icon)
    return <>
     <InputLabel htmlFor="custom-input"  sx={{
      color: hasError ? 'red' : 'black',
      '&.Mui-focused': {
        color: hasError ? 'red' : 'black',
      },
      '&.MuiInputLabel-shrink': {
        color: hasError ? 'red' : 'black',
      },
    }}>{label}</InputLabel>
      <Component
        id="outlined-adornment-password"
        type={type}
        endAdornment={
          <InputAdornment position="end">
          {tipoicon ? <IconButton
              aria-label={
            showPassword  ? 'hide the password' : 'display the password'
              }
              onClick={rest.handleClickShowPassword}    
              onMouseDown={rest.handleMouseDownPassword}
            onMouseUp={rest.handleMouseUpPassword}
              edge="end"
            
              
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>:<IconButton >{ Icon && <Icon/>}</IconButton> }
          </InputAdornment>
        }
        label={label}
         {...rest} 
      />

    
      </>

    
}


export  default Input ;

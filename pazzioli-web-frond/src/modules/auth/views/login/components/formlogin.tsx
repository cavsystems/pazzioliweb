import FormControl from "@mui/material/FormControl";
import Inputtext from '../../../../../components/inputs';
import PersonIcon from '@mui/icons-material/Person';
import React, { useEffect } from "react";
//import { Selecteditable } from "../../../../../components/selecte";
import { Botonpersonalizada } from "../../../../../components/botonperson";
import { Selecteditable } from "../../../../../components/selecte";
import type { SelectChangeEvent } from "@mui/material/Select";
;
import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
//formulario de inicio de sesion
type Inputs = {
  documento: string;
   usuario: string;
   password: string;
   empresa: string;
};
export function Formlogin() {
  //react-hook-form para manejar el formulario
  //con useForm se crea un hook que maneja el estado del formulario
  //destructuramos el hook para obtener las funciones y variables que necesitamos
  //control: para controlar el formulario
   const { control, handleSubmit, register,  watch, formState: { errors } } = useForm({
       mode: 'onBlur',
  defaultValues: {
    documento: '',
    usuario: '',
    password: '',
    empresa: '',
  }
});
    const [showPassword, setShowPassword] = React.useState(true);
    const [tipo, settipo] = React.useState('password');

const element= ()=>{
      return(
         <img src="/imgs/documento.svg" style={{width:33,height:33}} />
      )
     }
  //metodo que utilizamos para manejar el evento de click en el boton de mostrar/ocultar contraseña
    const handleClickShowPassword = () => {setShowPassword((show) => !show)
        settipo((tipo) => tipo === 'password' ? 'text' : 'password');
    };
    //evita que se propague el evento de click en el boton de mostrar/ocultar contraseña
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      };
    
      const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      };
  //funcion que se ejecuta al enviar el formulario
  //handleSubmit es una funcion de react-hook-form que se encarga de manejar el envio del formulario
      const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (  
        <>
        <form className="flex flex-col gap-y-8" onSubmit={handleSubmit(onSubmit)}>
           <FormControl sx={{ m: 1, width: '300px' }} variant="outlined">
              <Inputtext   type="text" label='documento'  Icon={element}  {...register('documento', { required: true })}  error={!!errors.documento} />
             
           </FormControl>
           <FormControl sx={{ m: 1,  width: '300px' }} variant="outlined">
              <Inputtext   type="text" label='usuario'  Icon={PersonIcon} {...register('usuario', { required: true })} error={!!errors.usuario}/>

           </FormControl>

           <FormControl sx={{ m: 1,  width: '300px' }} variant="outlined">
              <Inputtext   type={tipo} label='Contraseña' showPassword={showPassword}  handleClickShowPassword={handleClickShowPassword}  handleMouseDownPassword={handleMouseDownPassword}  handleMouseUpPassword={handleMouseUpPassword} tipoicon='password' {...register('password', { required: true })} error={!!errors.password}/>

           </FormControl>
            

             <FormControl>
             <Controller
    name="empresa"
    control={control}
    rules={{ required: true }}
    render={({ field }) => (
      <Selecteditable
        {...field}
        personName={field.value}
        dbs={['Administrador','Usuario']}
        label="empresa"
      />
    )}
  />
               </FormControl>
           <Botonpersonalizada className="bg-green-500 text-white font-bold py-2 px-4 rounded" label="Iniciar Sesion"/>
          

           </form>
        </>
    );
}



import { CFormFloating, CFormLabel, CFormSelect, CInputGroup, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { useEffect, useState } from "react";
import api from "../../../apicofig";
import { usuariocontex } from "../contextusuario";
import { Controller, useFormContext } from "react-hook-form";
import Nuevorol from "./modalnuevorol";
interface listabodegas{
    celular
: String
codigo
: 
number
codigodepartamento
: 
{codigo: number, codigopais: number, codigoDepartamento: number, departamento:string}
codigomunicipio
: 
{codigo: number, codigoDepartamento:number, codigoMunicipio: number, municipio: string}
codigopais
: 
{codigo: number, codigoPais: number, pais: string}
codigopostal
: 
string
codigosucursal
: string | null
correo
:  string | null
direccion
: string
nombre
: string
telefono
: string
}
interface roles{
    codigo:number,
    nombre:string,
}

interface Permisos{
    codigo:number,
    nombre:string,
   
}
function Addroles({style}: any) {
    const {rolactual}=usuariocontex();
const [indexcheck,setindexcheck]=useState<number>(0)
const [codigocheck,setcodigocheck]=useState<number>(0)
const [codigoroldelete,setcodigoroldelete]=useState<number>(0)
const [checkedItems, setCheckedItems] = useState<number[]>([]);
   const [roles,setRoles]=useState<roles[]>([])

   const [permisos,setPermisos]=useState<Permisos[]>([])
const {setrolactual,setTituloactual,rolesusua,setRolesusua,traerroles} = usuariocontex();
   const { modalrol,setmodalrol} = usuariocontex();
   const { register,control,setValue, formState: { errors } } = useFormContext();
useEffect(()=>{
    const traerpermiso=async()=>{
   
const permisos=await api.get("usuario/permisos",{
        headers: {
          'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
        }})
   console.log(permisos)
   setPermisos(permisos.data.permisos)
   
    }

    
         
    
            traerroles()
traerpermiso()

    
   },[])


   
    return ( 
        <>

             <div className="row  justify-content-center positionactu" style={style}> 
                 
                    <div className="col-12 col-md-8 col-lg-8 col-xl-8 d-flex" style={{gap:'12px'}}>
                        <CInputGroup  style={{width:'400px'}}>
                                                {/* CoreUI soporta etiquetas flotantes (floating labels) en selects. Estas etiquetas se mantienen por encima y en posición flotante incluso cuando se selecciona un valor 
                                                CFormFloating envuelve el <CFormSelect> y etiqueta para aplicar el estilo flotante.
                                                Debe incluir placeholder en el select para que funcione correctamente.
                                                La etiqueta (label), se queda flotando arriba incluso después de elegir una opción*/}
                                
                                
                                {/**el control nos servira para panipular los select a nuestro
                                 * antojo, ya que react-hook-form no permite manipular los select
                                 * directamente, por eso usamos el controller
                                 
                                
                                */}                <CFormFloating className="margeniputempresa">
                            <Controller
                          control={control}
                          name="rol"
                          defaultValue=''
                           rules={{ required: "Este campo es obligatorio" }}
                          render={({ field,fieldState }) => (
                            <>
                          <CFormSelect
                          {...field}
                            size="lg"
                            placeholder="Tipo de persona"
                            className="inputselect fontletre "
                           
                        
                             onChange={(e:any) => {
                                // importante para que RHF sepa del cambio
                                  // lógica adicional...
                            const value = e.target.value;
                           
                                field.onChange(value);
                                setcodigoroldelete(Number(value))
                                   if(value!=='' && value!=='0'){
                                     const permisorol=async()=>{
                                      permisos.forEach((item)=>{
                                        const checkboxes = document.getElementById(`checkpermiso${item.codigo}`) as HTMLInputElement;
                                        checkboxes.checked=false;
                                      })

                                    const permisoss=await api.get(`usuario/permisosroles?codigoroles=${value}`,{
                                            headers: {
                                              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                                            }})
                                       console.log("permisos roles",permisoss)
                                            
                                       const permisosrol: number[] = permisoss.data.permisos.map((p: { codigopermiso: number }) => p.codigopermiso);
                                      console.log("permisosrol",permisosrol)

                                      if(permisosrol.length>0){    
                                         permisosrol.forEach((item)=>{
                                         const checkboxes = document.getElementById(`checkpermiso${item}`) as HTMLInputElement;
                                           checkboxes.checked=true;
                                         })
                                      
                                      }

                                   }
                                   permisorol();
                                  }
                                    const selected =rolesusua.find((r) => r.codigo === Number(value));
                                  if (selected) {
                                    console.log(selected.nombre);
                                    setrolactual(selected.nombre);
                                  }
                          }}
                          >
                            <option value='' >Seleccione una opción</option>
                            
                             {
                         rolesusua.map((item:any)=>{
                              return <option value={item.codigo}  onClick={()=>{
                                console.log(item.nombre)
                                setrolactual(item.nombre)
                              }}>{item.nombre}</option>    
                              })
                             }
                        
                             
                          </CFormSelect>
                          {fieldState.error ? (
                            <CFormLabel style={{ color: "red" }}>Rol usuario</CFormLabel>):(<CFormLabel>Rol usuario</CFormLabel>)}
                          </>
                          
                          )}
                        />
                        
                        </CFormFloating>
                         </CInputGroup>



                          <button type="button" className="botoncontinuar"  key="continuar" style={{height: '57px' ,letterSpacing: 'var(--unnamed-character-spacing-0)',
color: '#fff',
textAlign: 'center',
font: 'normal normal normal 14px/17px Open Sans',


opacity: '1',
 whiteSpace: 'nowrap' // ✅ evita el quiebre del texto
}} onClick={()=>{
  setmodalrol(true)
  
}}><span>Nuevo rol</span></button>
                    </div>

<div className="col-12 col-md-8 col-lg-8 col-xl-8"  style={{marginTop:"15px"}}>
     <CTable className="tabla tableusuario">
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">

    
  <input type="checkbox" id="checkTérminos0" className="checkbox h6" />

  
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" >Nombre</CTableHeaderCell>
           
  
            </CTableRow>
          </CTableHead>
          <CTableBody>
         
        
          
              {permisos.map((item:Permisos,index:number)=>{
                return <CTableRow>
                     <CTableDataCell scope="col">
             <input type="checkbox" className="checkbox h6  "  id={`checkpermiso${item.codigo}`} onChange={async(e)=>{
              if(e.target.checked){}else{
                const mensaje=await api.delete(`usuario/eliminar/${codigoroldelete}/${item.codigo} `,{
        headers: {
          'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
        }})
                console.log(mensaje)
              }
             }}/>
        
              </CTableDataCell>

              <CTableDataCell>{item.nombre}</CTableDataCell>
             
               </CTableRow>
              })}
                    

            
           
             
                
         
             
            
           
          </CTableBody>
        </CTable>

        
 
</div>
                
                </div>
        </>
     );
}

export default Addroles;
import { CFormFloating, CFormInput, CFormLabel, CFormSelect, CInputGroup, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { Controller, useFormContext } from "react-hook-form";
import Iconagregar from "../../../icons/iconagregar";
import { useEffect, useState } from "react";


interface variante{
  color:string[],
  talla:string[],
  talla2:string[],
    color2:string[]

  

}

interface varianteotro{
  color:string[],
 
  talla:string[],

  

}

interface combinacionesproducto{

  imagen:string ,
  color:string,
  talla:string ,

  

}



interface combinacionesproductos{
tipo:string,
valor:string
  tallas: string[]


}




function Variantes() {
  const [selects,setselects]=useState<boolean>(false)
  const [tiposcaracteristicas,settiposcaracteristicas]=useState<string[]>(["Color","talla"])
  const [rotate4,setRotate4]=useState<boolean>(false)
  const [agrupadoPorcolor, setAgrupadoPorcolor] = useState<combinacionesproductos[]>([]);
  const [caracteristicasselect,setcaracteristicasselect]=useState<string[]>([])
  const [productoscombinaciones,setproductoscombinaciones]=useState<combinacionesproductos[]>([])
  const [caracteristicas,setcaracteristicas]=useState<variante>({
    color:[],
    talla2:[],
    color2:[],
    talla:[],
  })
   const [otrascaracteristicas,setotrascaracteristicas]=useState< varianteotro>({
    color:[],
    talla:[],
  })


 

const convertirarrayAString=(arr:string[]):string=>{
  let resultado="";
  arr.forEach((item,index)=>{
    if(index===arr.length-1){
      resultado+=item
    }else{
      resultado+=item+", "
    }
  })
  return resultado;
}

function eliminarTallaDeColor(
  combos: combinacionesproductos[],
  colorObjetivo: string,
  tallaAEliminar: string
): combinacionesproductos[] {

  return combos
    .map(combo => {
      if (combo.valor === colorObjetivo) {
        // quitar la talla
        const nuevasTallas = combo.tallas.filter(t => t !== tallaAEliminar);
        return { ...combo, tallas: nuevasTallas };
      }
      return combo;
    })
    .filter(combo => combo.tallas.length > 0); // eliminar combos vacíos
}

function generarCombinacionesPlanoColor(
  color: string[],
  tallas: string[]
): combinacionesproductos[] {
  //generar subconjunttos tallas recursivo
  //La recursión sigue el patrón "incluir o no incluir" para cada elemento.

  /* Si tienes:

["S", "L", "XL"]


Para cada talla hace:

               []
        /              \
     [S]               []
   /      \         /      \
[S,L]   [S]      [L]       []
...


Hasta recorrer todas las posibilidades. */
function generarSubconjuntosRecursivo(arr: string[]): string[][] {
  const resultado: string[][] = [];
/* Explicado paso a paso

Supongamos:

arr = ["S", "L", "XL"]


Llamada inicial 👇

backtrack(0, [])

Paso 1: index = 0 → "S"

incluir → ["S"]

NO incluir → []

Paso 2: index = 1 → "L"

Para la rama ["S"]:

incluir → ["S","L"]

NO incluir → ["S"]

Para la rama []:

incluir → ["L"]

NO incluir → []

Paso 3: index = 2 → "XL"

Mismo proceso: */
  function backtrack(index: number, actual: string[]) {
    // Cuando llegamos al final
    if (index === arr.length) {
      if (actual.length > 0) resultado.push([...actual]); // evitar conjunto vacío
      return;
    }
/* ¿Es un grafo? Sí, pero más específicamente es un ÁRBOL de decisiones

La recursividad en este algoritmo genera una estructura así:

                 (nodo raíz)
                  /       \
         incluir arr[0]   no incluir arr[0]
              /   \            /    \
    incluir arr[1] ...   incluir arr[1] ...


Esto es un grafo acíclico, pero con reglas especiales:

✔ No hay ciclos

Cada llamada avanza index + 1, nunca vuelve a un índice anterior.

✔ Cada nodo tiene 2 hijos

Uno por "incluir" y uno por "no incluir".

✔ Todos los caminos terminan en un nodo hoja

Cuando index === arr.length.

Eso en computación se llama:

👉 Árbol binario de decisiones

(un tipo de grafo donde cada nodo tiene exactamente 2 ramas posibles). */
    // 1) Incluir arr[index]
    actual.push(arr[index]);
    backtrack(index + 1, actual);

    // 2) NO incluir arr[index]
    actual.pop();
    backtrack(index + 1, actual);
  }

  backtrack(0, []);
  return resultado;
}
 //generar subconjunttos tallas binario
  /* function generarSubconjuntos(arr: string[]): string[][] {
    const resultado: string[][] = [];
//El operador << desplaza los bits hacia la izquierda. Desplazar 1 a la izquierda n posiciones equivale a multiplicar por 
//2𝑛2

    const total = 1 << arr.length; // 2^n
//Usar una máscara binaria
//Cada número entero representa un subconjunto usando sus bits.
//ejemplo 2=010 representa el subconjunto que incluye solo el segundo elemento del conjunto original.
//Cada bit indica si ese índice se incluye.
    for (let mascara = 1; mascara < total; mascara++) {
      const subset: string[] = [];

      for (let i = 0; i < arr.length; i++) {
        //1 << i revisa el bit en la posición i.
        //mascara & (1 << i) dice si ese bit está encendido.
        | i | 1 << i | máscara & (1<<i) | ¿Incluye arr[i]? |
| - | ------ | ---------------- | ---------------- |
| 0 | 001    | 101 & 001 = 1    | sí → "S"         |
| 1 | 010    | 101 & 010 = 0    | no               |
| 2 | 100    | 101 & 100 = 4    | sí → "L"         |
 
        if (mascara & (1 << i)) {

          subset.push(arr[i]);
        }
      }

      resultado.push(subset);
    }

    return resultado;
  }*/

  const subconjuntosTalla =  generarSubconjuntosRecursivo(tallas);
  const combos: combinacionesproductos[] = [];
let contadorsub=0
  color.forEach(c => {
  contadorsub++
  
    subconjuntosTalla.forEach((sc,index) => {

      combos.push({
        tipo: "color",
        valor: c,
        tallas: sc
      });
    

    });
   
  });

  color.forEach(c => {
 combos.push({
        tipo: "color",
        valor: c,
        tallas: []
      });
     });



  // ordenar por valor (color)
  combos.sort((a, b) => a.valor.localeCompare(b.valor));
  return combos;
} 

 function agruparVisualmentePorColor(
  combos:combinacionesproductos[]
): combinacionesproductos[] {

  const mapa = new Map<string, Set<string>>();

  combos.forEach(c => {
    if (!mapa.has(c.valor)) {
      mapa.set(c.valor, new Set());
    }

    c.tallas.forEach(t => mapa.get(c.valor)!.add(t));
  });

  return Array.from(mapa.entries()).map(([color, tallasSet]) => ({
    tipo: "color",
    valor: color,
    tallas: Array.from(tallasSet).sort()
  }));
}


  useEffect(()=>{
   
      
    if(caracteristicas.color.length>0 ){
      if(otrascaracteristicas.color.length>0){
      console.log("elemento",otrascaracteristicas)
     otrascaracteristicas.color.forEach((item)=>{
         
         const caractristicasse=document.getElementById(`idcaracteristica${item}`) as HTMLInputElement | null; 
         console.log("elemento",caractristicasse)
         if(caractristicasse){
          caractristicasse.checked=true;
         }  
     } )
        
      }
        
    }
  },[caracteristicas])
  
  /*function generarCombinaciones(color: string[], talla: string[]):agrupadoporcolor[] {
  const combinaciones: { imagen:string,color: string; talla: string }[] = [];

  // Determinar cuál array usar para el bucle principal
  const principal = color.length >= talla.length ? color : talla;
  const secundario = color.length >= talla.length ? talla : color;

  // Etiquetas para saber qué propiedad asignar
  const principalKey = color.length >= talla.length ? "color" : "talla";
  const secundarioKey = principalKey === "color" ? "talla" : "color";

  // Generar combinaciones
  principal.forEach((v1) => {
    // Si el otro array está vacío, igual generamos una combinación
    if (secundario.length === 0) {
      combinaciones.push({
        imagen:"",
        color: principalKey === "color" ? v1 : "",
        talla: principalKey === "talla" ? v1 : ""
      });
    } else {
      secundario.forEach((v2) => {
        combinaciones.push({
          imagen:"",
          [principalKey]: v1,
          [secundarioKey]: v2
        } as any);
      });
    }
  });
if(color.length>talla.length){
  return agruparSinFusionarcolor(combinaciones);
}
  return [];
}*/
        const { register,control,setValue, formState: { errors } } = useFormContext();
    return ( <>

    <div className="row">

           <div className="col-12" >
             <div className="card cardvariantes">
                <div className="card-body" style={{padding:0}}>
                 
                      <div className="row variantescontainer">
                        <div className="col-12">
                          
                            <span className="titulovariantes w-100" style={{marginLeft:"5px"}}>Variantes</span>
                            
                        </div>

                       {
                        agrupadoPorcolor.length>0 &&   <div className="col-12">
                          <div>
                           <CTable className="tabla">
                            <CTableHead>
                              <CTableRow>
                                <CTableHeaderCell scope="col">
                               <input type="checkbox" id="checkTérminos0" className="checkbox h6"  />
                          
                                </CTableHeaderCell>
                                <CTableHeaderCell scope="col" >Colores</CTableHeaderCell>
                                    <CTableHeaderCell scope="col" >Tallas</CTableHeaderCell>
                                
                              </CTableRow>
                            </CTableHead>
                            <CTableBody>
                              {agrupadoPorcolor.map((item:any,index:number)=>{
                               return <CTableRow>
                          
                             
                                <CTableDataCell scope="col">
                               <input type="checkbox" id={`checkTérminos${index+1}`}className="checkbox" />
                          
                                </CTableDataCell>
                                <CTableDataCell><div className="d-flex">
                                   <span className="subtitulovariantes">{item.valor}</span>
                                  </div></CTableDataCell>
                                    <CTableDataCell><div className="d-flex">
                                   <span className="subtitulovariantes">{convertirarrayAString(item.tallas)}</span>
                                  </div></CTableDataCell>
                                
                              </CTableRow>
                                })}
                              
                             
                            </CTableBody>
                          </CTable>
                          </div>
                        </div>
                       }
                        <div className="col-4 colsinpadding position-relative">
  <button className="botonagregarvariante w-100" onClick={()=>{
    setselects(true)
  }}>
     <Iconagregar width={20} height={20}/>
     <span>Crear variantes</span>
  </button>

</div>

                      </div>

                 
                </div>
             </div>
           </div>

          {selects && <div className="col-6">
               <div className="inputprocttex" style={{paddingTop:"12px"}}>
                             {/* <label form="slectform1" className="titulospro"></label>*/}
                               <select className="selctproduct" onChange={(e)=>{
                                console.log(e.target.value)
                                     setcaracteristicasselect([])
                               setRotate4(false)
                                if(e.target.value==="Color"){

                         setcaracteristicas(prev => ({
  ...prev,
   color: ["rojo","azul","verde"],
   color2: ["rojo","azul","verde"],
  talla: [],
   talla2: []
}));
                                }else if(e.target.value==="talla"){
                                                console.log("estallaa")
                                  setcaracteristicas(prev => ({
                                    ...prev,
                                     talla: ["S","M","L","XL"],
                                      talla2: ["S","M","L","XL"],
                                    color2: [],
                                    color: []
                                  }));
                                }
                               }}>
                                <option value={""} id="slectform1">Elige una opcion</option>
                                {tiposcaracteristicas.map((item,index)=>(
                                  <option key={index} value={item} id="slectform1">{item}</option>
                                ))}
                               </select>



                               
                             </div> 
           </div>}

           { selects &&   <div className="col-12  col-md-6 col-sm-6  paddingleftformpro" >
                          <div className="d-flex  flex-wrap flex-column " style={{position:"relative",height: "100%" ,paddingTop:"12px"}}   >
                             <ul  className="d-flex container1  flex-wrap" style={{padding:"5px 10px 0px 10px"}}>
                              
                                 {
                      caracteristicas.color.length > 0 && 
                    otrascaracteristicas.color.map((item)=>{
                        return <>
                        <li className="classitemitemproduct"><span className="spanitemrete">{item}</span> <button className="botoncerrar" type="button" onClick={()=>{
                            if (rotate4) {
  
    
    
  }
                       setotrascaracteristicas(prev=> ({...prev,color:otrascaracteristicas.color.filter(item2=> item2!==item)}))
                            
                            
                      
                        }}></button></li>
                        </>
                    })
                   }

                 


                  {
                      caracteristicas.talla.length > 0 && 
                    otrascaracteristicas.talla.map((item)=>{
                        return <>
                        <li className="classitemitemproduct"><span className="spanitemrete">{item}</span> <button className="botoncerrar" type="button" onClick={()=>{
                            if (rotate4) {
  
     
    
  }
                       setotrascaracteristicas(prev=> ({...prev,talla:otrascaracteristicas.talla.filter(item2=> item2!==item)}))
                            
                            
                      
                        }}></button></li>
                        </>
                    })
                   }
                           <li  style={{flex:"1",display:"flex",justifyContent:"center",gap:"12px"}}  className="classiteminput"><input style={{width:"100%"}} className="inputestilotercero " placeholder="Caracteristica" onChange={(e)=>{
                            if(caracteristicas.color2.length>0){
                              setcaracteristicas(prev=>({...prev,color:caracteristicas.color2.filter(item=>item.startsWith(e.target.value.toLowerCase()) || item.toLowerCase().endsWith(e.target.value.toLowerCase()) )}))

                            }
                             else if(caracteristicas.talla2.length>0){
                              setcaracteristicas(prev=>({...prev,talla:caracteristicas.talla2.filter(item=>item.startsWith(e.target.value.toLowerCase()) || item.toLowerCase().endsWith(e.target.value.toLowerCase()) )}))

                            }
                           }} /> <div ><img  src="imgs/togle.svg" onClick={()=>{
                               
           
                               
                               setRotate4(!rotate4)
                           }} className={`${rotate4 ? 'rotate':''} `}/></div> <div style={{alignSelf:'1'}}  className="botoncerrarall"><button className="botoncerrar botoncerrarall" type="button" onClick={()=>{
                             if(rotate4){
                              if(caracteristicas.color.length>0){
                                  caracteristicas.color.forEach((item2)=>{
                                    const element = document.getElementById(`idcaracteristica${item2}`) as HTMLInputElement | null;
                 if (element) element.checked = false;
                               })
                               setcaracteristicasselect([])
                               setRotate4(false)
                              }else if(caracteristicas.talla.length>0){
                                caracteristicas.talla.forEach((item2)=>{
                                  const element = document.getElementById(`idcaracteristica${item2}`) as HTMLInputElement | null;
               if (element) element.checked = false;
                              })
                            }

                             
           
                            
                             }
                    
                           }}></button></div>  </li >
                             </ul>
                           { rotate4 && (<div className="containeritemli">
                             <ul className="itemcontli">
                                {
                                 caracteristicas.color.length > 0 &&  caracteristicas.color.map((item)=>{
                                       return <>
                                       <li className="licheckterceros" > <input type="checkbox" id={`idcaracteristica${item}`}     checked={otrascaracteristicas.color.includes(item)}
 onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                                                                         if (e.target.checked) {
                                             // el checkbox está seleccionado
                                              
                                             setotrascaracteristicas(prev=> ({...prev,color:[...prev.color, item]}))
                                           } else {
                                              setotrascaracteristicas(prev=> ({...prev,color:otrascaracteristicas.color.filter(item2=> item2!==item)}))
                                             // el checkbox no está seleccionado
                                           }
                                                                   }}  /> <span>{item}</span></li>
                                       </>
                                   })
                                }

                                 {
                                 caracteristicas.talla.length > 0 &&  caracteristicas.talla.map((item)=>{
                                       return <>
                                       <li className="licheckterceros" > <input type="checkbox" id={`idcaracteristica${item}`}  checked={otrascaracteristicas.talla.includes(item)}   onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                                                                         if (e.target.checked) {
                                             // el checkbox está seleccionado
                                              
                                                  setotrascaracteristicas(prev=> ({...prev,talla:[...prev.talla, item]}))
                                           } else {
                                               setotrascaracteristicas(prev=> ({...prev,talla:otrascaracteristicas.talla.filter(item2=> item2!==item)}))
                                             // el checkbox no está seleccionado
                                           }
                                                                   }}  /> <span>{item}</span></li>
                                       </>
                                   })
                                }
                               
                          
                             </ul>
                             </div>)}
                          </div>
                       </div>}

                         { selects && <div className="col-12 " style={{marginTop:"12px"}}>
                          <div className="w-100 d-flex justify-content-end">
                               <button className="botonagregarvariante w-100" onClick={()=>{
    const combinaciones=  generarCombinacionesPlanoColor(otrascaracteristicas.color, otrascaracteristicas.talla);
    // 2) Grupo visual

     if(otrascaracteristicas.color.length> otrascaracteristicas.talla.length ){
     setproductoscombinaciones(combinaciones);
   
      const combosAgrupadosUI = agruparVisualmentePorColor(combinaciones);

// Estas se muestran en pantalla
setAgrupadoPorcolor(combosAgrupadosUI);
     }else if(otrascaracteristicas.color.length===otrascaracteristicas.talla.length){
 setproductoscombinaciones(combinaciones);
       const combosAgrupadosUI = agruparVisualmentePorColor(combinaciones);

// Estas se muestran en pantalla
setAgrupadoPorcolor(combosAgrupadosUI);
     }
 
    setselects(false)
    setRotate4(false)
  }}>
     <Iconagregar width={20} height={20}/>
     <span>Agrega variantes</span>
  </button>
                          </div>
                           
                          </div>}

          </div>
   

    </> );
}

export default Variantes;
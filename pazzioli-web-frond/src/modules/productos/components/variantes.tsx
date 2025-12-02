import { useEffect, useState } from "react";
import { CTable, CTableHead, CTableBody, CTableRow, CTableHeaderCell, CTableDataCell, CFormSelect, CFormInput, CButton } from "@coreui/react";
import Iconupdate from "../../../icons/iconupdate";
import Iconbodega from "../../../icons/Iconbodega";
import Usuariosicon from "../../../icons/Isuarios";
import Bodegasvariantes from "./bodegasvariantes";
import Iconcodigobarras from "../../../icons/iconcodigobarras";
import { codigosbarrascontex } from "../contextcodigobarras";

const bodegas = ["Bodega 1", "Bodega 2", "Bodega 3"];

interface bodegas{
  nombre:string;
  stockMaximo:number;
stockMinimo:number;
ubicacion?:string;
existencias?:number;
}



interface Variante {
  codigovariante: number;
  atributos: { [key: string]: string }; // <--- dinámico
  bodega: bodegas[];
}
function Variantes() {
  const [variantes, setVariantes] = useState<Variante[]>([]);
  const [atributos, setAtributos] = useState<string[]>(["Talla","Color","Material"]);
  const [rotate4,setrotate4]=useState<boolean>(false);
  const [atributoscelda, setAtributoscelda] = useState<string[]>([]);
 const [bodegaSeleccionada, setBodegaSeleccionada] = useState<{nombre:string;
  stockMaximo:number;
stockMinimo:number;}[]>([]);
 const [modalbo,setmodalbo]=useState<boolean>(false);
 const [indexvariante,setindexvariante]=useState<number>(0);
 const {codigomodal,setcodigomodal,  Codigobarra,
       setcodigobarra ,  actulizarbarra,
       setactulizarbarras,
       guardar,
       setguardar}=codigosbarrascontex()
       useEffect(()=>{
        if(actulizarbarra){
          console.log(Codigobarra)
        }
       },[guardar])

 useEffect(()=>{
      
       if(atributoscelda.length>0){
        if (rotate4) {
    atributoscelda.forEach((item) => {
      const element = document.getElementById(`idretencion${item}`) as HTMLInputElement | null;
      if (element) element.checked = true;
    });
  }
       }
      
       },[rotate4])
       
       const agregarAtributoceldas = (nombre: string) => {
  setAtributoscelda(prev => [...prev, nombre]); 
};

const agregarVariante = () => {
  const nuevosAtributos:{ [key: string]: string } = {};
  atributoscelda.forEach(a => {
    nuevosAtributos[a] = "";  // cada atributo tendrá un input
  });

  setVariantes(prev => [
    ...prev,
    {
      codigovariante: 0,
      atributos: nuevosAtributos,
      bodega: []
    }
  ]);
};

  // Agregar nueva variante vacía
 
 const agregarbodega=(nombrebodega:{nombre: string, stockMaximo: number, stockMinimo: number,ubicacion:string,existencias:number},index:number)=>{
    let existebodega=variantes[index].bodega.find(b=>b.nombre===nombrebodega.nombre);
    if(!existebodega){
      const nuevaBodega: bodegas = { nombre: nombrebodega.nombre, stockMaximo: nombrebodega.stockMaximo, stockMinimo: nombrebodega.stockMinimo, ubicacion:nombrebodega.ubicacion,existencias:0 };
      const nuevasVariantes = [...variantes];
      nuevasVariantes[index].bodega = [...nuevasVariantes[index].bodega, nuevaBodega];
      setVariantes(nuevasVariantes);
    }
 }
  // Actualizar variante
  const actualizarVariante = (index: number, campo: keyof Variante, valor: any) => {
    
       const nuevasVariantes = [...variantes];
    nuevasVariantes[index][campo] = valor;
    setVariantes(nuevasVariantes);
   
   
  };

  // Eliminar variante
  const eliminarVariante = (index: number) => {
    setVariantes(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="row" style={{padding:"12px 20px 12px 20px"}}>
          <h3 className="h5 col-12 "  style={{marginBottom:"0px"}}>Variantes</h3>
        <div className="col-12  col-md-8 col-sm-6 inputterceroleft inputretencion padingtopcol" >
                       <div className="d-flex  flex-wrap flex-column " style={{position:"relative",height: "100%"}}   >
                          <ul  className="d-flex container1  flex-wrap" >
                         
                        <li  style={{flex:"1",display:"flex",justifyContent:"center",gap:"12px"}}  className="classiteminput"><input style={{width:"100%"}} className="inputestilotercero " placeholder="Retenciones" /> <div ><img  src="imgs/togle.svg"  className={`${'rotate'} `} onClick={()=>{
                          setrotate4(!rotate4)
                        }}/></div> <div style={{alignSelf:'1'}}  className="botoncerrarall"><button className="botoncerrar botoncerrarall" type="button" ></button></div>  </li >
                          </ul>

                          { rotate4 && <div className="containeritemlivariante">
                                            <ul className="itemcontli">
                                             {
                          atributos.map((item)=>{
                        return <>
                               <li className="licheckterceros" > <input type="checkbox" id={`idretencion${item}`} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                                                                 if (e.target.checked) {
                                     // el checkbox está seleccionado

                                     setAtributoscelda((prev)=> [...prev,item])
                                   } else {
                                       setAtributoscelda(atributoscelda.filter(item2=> item2!==item))
                                     // el checkbox no está seleccionado
                                   }
                                                           }} /> <span>{item}</span></li>
                        </>
                          })
                         } 
                                               
                                                     
                                                  
                                              
                                              
                                         
                                            </ul>
                                            </div>}
                       
                       </div>
                    </div>
                    <div className="col-12  col-md-4 col-sm-6  d-flex justify-content-md-end justify-content-center padingtopcol" style={{height:"fit-content"}}>
                       <button className="botoncontinuarguardar botonagregarvariante" onClick={agregarVariante} style={{ marginBottom: "0px" }}>
        Agregar
      </button>
                    </div>
        
      </div>
     
    
   {
    variantes.length>0 && ( <CTable>
        <CTableHead>
          <CTableRow>
            {atributoscelda.map(attr => (
      <CTableHeaderCell key={attr}>{attr}</CTableHeaderCell>
    ))}
 
       
            <CTableHeaderCell>Acciones</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
            {variantes.map((v, i) => (
    <CTableRow key={i}>
      {atributoscelda.map(attr => (
        <CTableDataCell key={attr}>
          <CFormInput
            value={v.atributos[attr] || ""}
            onChange={e => {
              const nuevas = [...variantes];
              nuevas[i].atributos[attr] = e.target.value;
              setVariantes(nuevas);
            }}
          />
        </CTableDataCell>
      ))}

     
  <CTableDataCell >
                                                       <div className="d-flex flex-nowrap" style={{gap:"12px"  }} >
                                                              <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                               <CButton  className="buttoniconnormal" onClick={()=>{
                                                              setcodigomodal(true)
                                                               }} >    <  Iconcodigobarras  width={22} height={22.5} /></CButton>
                                                           </div>
                                                           <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                               <CButton  className="buttoniconnormal" onClick={()=>{
                                                                setmodalbo(true)
                                                               setBodegaSeleccionada(v.bodega);
                                                               setindexvariante(i);
                                                               }} >    <Iconbodega  width={19} height={19.5} color={"#555"}  /></CButton>
                                                           </div>

                                                         
                                                         
               
                                                          
               
                                                          
               
               
                                                        
                                                       </div>
                                                     </CTableDataCell>
    </CTableRow>
  ))}
        </CTableBody>
      </CTable>)
   }
     
      <Bodegasvariantes modalbo={modalbo} setmodalbo={setmodalbo} agregarbodega={agregarbodega} BodegaSeleccionada={bodegaSeleccionada}  setBodegaSeleccionada={setBodegaSeleccionada} indexvariante={indexvariante} variantes={variantes} setvariantes={setVariantes} setindexvariante={setindexvariante}  />
    </div>
  );
}

export default Variantes;

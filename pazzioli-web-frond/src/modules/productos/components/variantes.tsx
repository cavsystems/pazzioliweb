import { useState } from "react";
import { CTable, CTableHead, CTableBody, CTableRow, CTableHeaderCell, CTableDataCell, CFormSelect, CFormInput, CButton } from "@coreui/react";
import Iconupdate from "../../../icons/iconupdate";
import Iconbodega from "../../../icons/Iconbodega";
import Usuariosicon from "../../../icons/Isuarios";
import Bodegasvariantes from "./bodegasvariantes";

const bodegas = ["Bodega 1", "Bodega 2", "Bodega 3"];

interface bodegas{
  nombre:string;
  stockMaximo:number;
stockMinimo:number;
ubicacion?:string;
existencias?:number;
}
interface Variante {
  color: string;
  talla: string;
  material: string;
  bodega: bodegas[];

}
function Variantes() {
  const [variantes, setVariantes] = useState<Variante[]>([]);
 const [bodegaSeleccionada, setBodegaSeleccionada] = useState<{nombre:string;
  stockMaximo:number;
stockMinimo:number;}[]>([]);
 const [modalbo,setmodalbo]=useState<boolean>(false);
 const [indexvariante,setindexvariante]=useState<number>(0);
  // Agregar nueva variante vacía
  const agregarVariante = () => {
    setVariantes(prev => [...prev, { color: "", talla: "", material: "", bodega: [], stockMin: 0, stockMax: 0 }]);
  };
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
      <h3>Variantes del producto</h3>
      <CButton color="primary" onClick={agregarVariante} style={{ marginBottom: "10px" }}>
        Agregar Variante
      </CButton>

      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell>Color</CTableHeaderCell>
            <CTableHeaderCell>Talla</CTableHeaderCell>
            <CTableHeaderCell>Material</CTableHeaderCell>
       
            <CTableHeaderCell>Acciones</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {variantes.map((v, i) => (
            <CTableRow key={i}>
              <CTableDataCell>
                <CFormInput
                  value={v.color || ""}
                  onChange={e => actualizarVariante(i, "color", e.target.value)}
                  placeholder="Color"
                />
              </CTableDataCell>
              <CTableDataCell>
                <CFormInput
                  value={v.talla || ""}
                  onChange={e => actualizarVariante(i, "talla", e.target.value)}
                  placeholder="Talla"
                />
              </CTableDataCell>
              <CTableDataCell>
                <CFormInput
                  value={v.material || ""}
                  onChange={e => actualizarVariante(i, "material", e.target.value)}
                  placeholder="Material"
                />
              </CTableDataCell>
             
                <CTableDataCell >
                                                       <div className="d-flex flex-nowrap" style={{gap:"12px"  }} >
                                                        
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
      </CTable>
      <Bodegasvariantes modalbo={modalbo} setmodalbo={setmodalbo} agregarbodega={agregarbodega} BodegaSeleccionada={bodegaSeleccionada}  setBodegaSeleccionada={setBodegaSeleccionada} indexvariante={indexvariante} variantes={variantes} setvariantes={setVariantes} setindexvariante={setindexvariante}  />
    </div>
  );
}

export default Variantes;

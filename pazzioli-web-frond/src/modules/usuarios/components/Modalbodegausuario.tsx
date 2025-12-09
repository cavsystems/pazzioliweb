import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
interface bodegasusuario{
  departamento
: 
string
direccion
: 
string
municipio
: 
string
nombre
: 
string
}
function Bodegausuario({modalbodegas,setModalbodegas ,bodegasusuario,setbodegausuario}:{modalbodegas:boolean,setModalbodegas:React.Dispatch<React.SetStateAction<boolean>>,bodegasusuario:bodegasusuario[],setbodegausuario:React.Dispatch<React.SetStateAction<bodegasusuario[]>>}) {
    return ( 
         
                <CModal
                alignment="center"
                scrollable
                visible={modalbodegas}
               onClose={()=>{
                setModalbodegas(false)
               }}
                aria-labelledby="VerticallyCenteredScrollableExample2"
               className="col-12 modalusuper"
                backdrop="static"
               
                  
              >
                <CModalHeader  style={{background:'SELECT * FROM cavsystems.tipoidentificacion;'}}>
                    
                  <CModalTitle id="VerticallyCenteredScrollableExample2">Bodegas</CModalTitle>
                </CModalHeader>


                <CModalBody>
                 <div className="col-12"  >
                    <div style={{maxHeight:"300px",overflowY:"auto",overflowX:"hidden"}} className="continnerper">
     <CTable   small className="tabla tableusuariobodega">
          <CTableHead>
           
            <CTableRow>
            
              <CTableHeaderCell scope="col" >Bodega</CTableHeaderCell>
                <CTableHeaderCell scope="col" >Dirección</CTableHeaderCell>
                 <CTableHeaderCell scope="col" >Departamento</CTableHeaderCell>
                 <CTableHeaderCell scope="col" >Ciudad</CTableHeaderCell>
                  
               
  
            </CTableRow>
          </CTableHead>
          <CTableBody>
         {
               bodegasusuario.map((item)=>{
                
                return <CTableRow>
   <CTableDataCell>{item.nombre}</CTableDataCell>
                <CTableDataCell>{item.direccion} </CTableDataCell>
                    <CTableDataCell>{item.departamento}</CTableDataCell>
                <CTableDataCell>{item.municipio} </CTableDataCell>
                 
                      
             
               </CTableRow>
            })
            }
        
         
          
                    

            
           
             
                
         
             
            
           
          </CTableBody>
        </CTable>
        </div>
      
        
 
</div>
                            
                </CModalBody>
            

              
                 </CModal>
     );
}

export default Bodegausuario;
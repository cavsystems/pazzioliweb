import { CAlert, CButton, CCard, CCardHeader, CDropdown, CDropdownDivider, CDropdownItem, CDropdownMenu, CDropdownToggle, CFormFloating, CFormInput, CFormLabel, CFormSelect, CInputGroup, CInputGroupText, CListGroup, CListGroupItem, CPagination, CPaginationItem, CTable, CTableBody, CTableCaption, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import Sectionaccesogeneral from "../../components/Sectionacceso";
import "./compras.scss"
import Iconinsignia from "../../icons/iconinsignia";
import Iconimpresora from "../../icons/Icinimpresora";
import Iconlupa from "../../icons/Iconlupa";
import Iconusuario from "../../icons/Iconusuario";
import Iconproductosventa from "../../icons/Iconproductosventacompra";
import Iconupdate from "../../icons/iconupdate";
import Iconbodega from "../../icons/Iconbodega";
import Iconprecio from "../../icons/iconprecio";
import Iconeliminar from "../../icons/iconeliminar";
import ventascomprasProvider, { compraventascontex } from "../../components/contextcompraventes";
import Iconojocompra from "../../icons/Iconojocompra";
import Iconlimpiar from "../../icons/Iconlimpiar";
import Iconmensaje from "../../icons/Iconmensaje";
import Descuentoretenciones from "./components/Descuentosrentenciones";
import { useState } from "react";
import Sectioninfocompra from "./components/sectioninfocompra";
import Formproduct from "../productos/components/formproducto";
interface comprastotal{
  vendedor:string,
  cliente:string,
  productos:productolista[]
  fechavencimiento:string,
  fechainicial:string
  
}
interface metodopago{
  nombre:string,
  valor:number,
  nota:string
}
interface productolista{

  codigobarras:string | null,
  cantidadGlobal
: 
number
codigoContable
: 
string
costo
: 
number
descripcion
: 
string
fechaUltimaCompra
: string
fechaUltimaVenta
:string 

grupo
:string 

linea
: string

productoId
: number

referencia
: string

unidadMedida
: number | null


grupoid
: number,
lineaid
: number,
impuestoid
:number, 
tipoproductid
:number,

productoVarianteId:number
descuento:number,
precion:number,
notas:string[]

}
function Compras() {
     const [buscar,setbuscar]=useState<string>("")
     const [modalregistroguardado,setmodalregistroguardado]=useState<boolean>(false)
     const [fechavencimiento,setfechavencimiento]=useState<string>("")
      const [fechainicial,setfechainicial]=useState<string>("")
     const [modalformproducto,setmodalformproducto]=useState<boolean>(false)
    const {ventascompras}=compraventascontex()
    return ( <>
    <div className="paddingcompras">
        <div className="row mx-0  ">
            <div className="col-12">
                <div className="row mx-0  flex-md-row flex-column-reverse">
                   <Sectionaccesogeneral/>
                </div>
            </div>
            <div className="col-12">
                <div className="card">
                    <div className="card-body classsinpading">
                     <Sectioninfocompra buscar={buscar} setbuscar={setbuscar} setmodalregistroguardado={setmodalregistroguardado}  fechavencimiento={fechavencimiento} setfechavencimiento={setfechavencimiento} fechainicial={fechainicial} setfechainicial={setfechainicial}/>
                     
                        <div className="row mx-0  d-none d-lg-none d-xl-flex d-md-none ">
                            <div className="col-6 sinpaddinglefrigth ">
                               <Descuentoretenciones/>
                               
                            </div>
                              <div className="col-6 sinpaddinglefrigth ">
                               <div className="row mx-0 h-100">
                                
                                    <div className="col-12">
                                      <div className="row mx-0">
                                        <div className="col-5 paddinglefttoolsbootom">
                                          
                                        </div>
                                        <div className="col-7 paddinglefttoolsbootom">
                                            <CCard className="w-100  ">
      <CCardHeader className="paddinencabezadocompra titulotrasnsacioncomprades">Descuentos y retenciones</CCardHeader>
      <CListGroup flush>
        <CListGroupItem className="titulodesyreten">Descuentos</CListGroupItem>
        <CListGroupItem className="titulodesyreten">Retefuente</CListGroupItem>
        <CListGroupItem className="titulodesyreten">Reteica</CListGroupItem>
         <CListGroupItem className="titulodesyreten">Reteiva</CListGroupItem>
      </CListGroup>
    </CCard>                                 

                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-12 ">
                                       
                                       <div className="row mx-0">
                                        <div className="col-5 paddinglefttools">
                                             <div className="d-flex gaptools ">
                                                <div className="iconoptionestool">
                                                  <Iconojocompra width={16} heigth={16}/>
                                                </div>
                                                     <div className="iconoptionestool">
                                                    <Iconlimpiar width={16} heigth={16}/>
                                                </div>
                                                     <div className="iconoptionestool">
                                                    <Iconmensaje  width={16} heigth={16}/>
                                                </div>
                                                     <div className="iconoptionestool">
                                                        <Iconproductosventa width={20} height={20} / >
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-7 sinpadding paddinglefttools">
                                                                                   <div className="d-flex  paddingtools flex-grow-1 h-100 ">
                                         
                                            <div className="d-flex flex-grow-1 ">
                                               <CDropdown variant="btn-group" direction="dropend" className="w-100 classbotondrow">
        <CButton color="secondary">Facturar</CButton>
        <CDropdownToggle color="secondary" split splitLabel="Toggle Dropend" />
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
          <CDropdownDivider />
          <CDropdownItem href="#">Separated link</CDropdownItem>
        </CDropdownMenu>
      </CDropdown> 
                                            </div>
                                        </div>
                                        </div>
                                       </div>

                                </div>
                               </div>
                              </div>
                                 <div className="col-6 paddingleftrigalert">
              <CAlert color="danger"
                 className="alertafont"
                dismissible
      onClose={() => {
        alert('👋 Well, hi there! Thanks for dismissing me.')
      }}>
       Cupo de credito insuficiente
      </CAlert>
          </div>
                        </div>

                        <div className="row mx-0 d-flex d-lg-flex d-xl-none d-md-flex">
                             <div className="col-12 paddingleftrigthresposive">
                                            <CCard className="w-100  ">
      <CCardHeader className="paddinencabezadocompra titulotrasnsacioncomprades">Descuentos y retenciones</CCardHeader>
      <CListGroup flush>
        <CListGroupItem className="titulodesyreten">Descuento</CListGroupItem>
        <CListGroupItem className="titulodesyreten">Retefuente</CListGroupItem>
        <CListGroupItem className="titulodesyreten">Reteica</CListGroupItem>
      </CListGroup>
    </CCard>                                 

                                        </div>

                                         <div className="col-12 paddingleftrigthresposive">
                               <Descuentoretenciones/>
                               
                            </div>

                               <div className="col-12 paddingleftrigthresposive">
              <CAlert color="danger"
                 className="alertafont"
                dismissible
      onClose={() => {
        alert('👋 Well, hi there! Thanks for dismissing me.')
      }}>
       Cupo de credito insuficiente
      </CAlert>
          </div>

          <div className="col-12 ">
                                       
                                       <div className="row mx-0 paddingleftrigthresposive">
                                        <div className="col-6  sinpadding">
                                             <div className="d-flex gaptools ">
                                                <div className="iconoptionestool">
                                                  <Iconojocompra width={16} heigth={16}/>
                                                </div>
                                                     <div className="iconoptionestool">
                                                    <Iconlimpiar width={16} heigth={16}/>
                                                </div>
                                                     <div className="iconoptionestool">
                                                    <Iconmensaje  width={16} heigth={16}/>
                                                </div>
                                                     <div className="iconoptionestool">
                                                        <Iconproductosventa width={20} height={20} / >
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 sinpadding paddinglefttools">
                                                                                   <div className="d-flex  paddingtools flex-grow-1 h-100 ">
                                         
                                            <div className="d-flex flex-grow-1 ">
                                               <CDropdown variant="btn-group" direction="dropend" className="w-100 classbotondrow">
        <CButton color="secondary">Facturar</CButton>
        <CDropdownToggle color="secondary" split splitLabel="Toggle Dropend" />
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
          <CDropdownDivider />
          <CDropdownItem href="#">Separated link</CDropdownItem>
        </CDropdownMenu>
      </CDropdown> 
                                            </div>
                                        </div>
                                        </div>
                                       </div>

                                </div>

                            
                        </div>

                        { modalregistroguardado && <div className="divcontainerregistrocompras d-flex flex-column ">
                             <div className="tituloalmacenadocompra d-flex justify-content-between align-items-center">
                              
                              <span className="comprasproceso">Compras en proceso</span>

                               <span className="comprasprocesox" onClick={()=>setmodalregistroguardado(false)}></span>
                             </div>

                             <div className="registroscomprascontainer">
                               <ul className="row m-0 sinpadding ">
                              <li className="col-12 liregistropersona ">
                                <div className="d-flex m-0 h-100">
                                  <div className="fechasregistros h-100 sinpaddinglefrigthtotales paddingbottomtop flex-shrink-1">
                                    <span className="flex-1 h-100" >19/09/2025</span>
                                   
                                    <span className="flex-1 h-100" >20:05:05</span>

                                  </div>
                                   <div className="containerclientecompra d-flex m-0 flex-column flex-grow-1 sinpaddinglefrigthtotales paddingbottomtop ">
                                    <span className="spanpersonacompra">Carlos perez</span>
                                    <span className="spantotalcompra">$2.255.146</span>
                                   </div>

                                   <div className="flex-grow-1 paddingbottomtopeliminar eliminargaurdadocompra" >
                                    <div className="containereliminarguardadocompra">
                                       <Iconeliminar width={19} height={19.5} color={"#555" }/>
                                    </div>
                                   
                                   </div>
                                 
                                </div>
                              </li>
                               </ul>
                             </div>
                        </div>}
                         <Formproduct modalformproducto={modalformproducto} setmodalformproducto={setmodalformproducto}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>);
}

export default Compras;
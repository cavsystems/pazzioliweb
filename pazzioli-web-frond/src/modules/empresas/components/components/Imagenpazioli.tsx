function Imagenpazzioli(
    { register, CInputGroup,
  CFormInput,
  CFormSelect,
  CFormFloating,
  CFormLabel,
...rest}: any
) {
    return ( 
          <>
           <div className="col-12">
            <div>
                <div className="row inputarchivo">

                <h6  className="titlecamposempresa h6" style={{padding:'10px 10px 0px 10px ' ,marginBottom:0}}>Logo empresa</h6>
                    <div className="mb-3 coninputarchivo">
        <CFormInput  className=" fontletre placeholderarchivo"  type="file" id="formFile" label="JPG, PNG, BMP, 1080x1080 px Max."  />
      </div>
         </div>
           </div>      
            </div>

        </>
     );
}

export default Imagenpazzioli;
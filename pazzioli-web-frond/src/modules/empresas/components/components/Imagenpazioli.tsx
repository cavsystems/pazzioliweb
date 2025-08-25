function Imagenpazzioli(
    { register, CInputGroup,setValue,
  CFormInput,
  CFormSelect,
  CFormFloating,
  CFormLabel,

...rest}: any


) {

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e)
    const file = e.target.files?.[0];
    if (!file) return;

    // Validar formato
    if (!["image/png", "image/jpeg", "image/bmp"].includes(file.type)) {
      alert("Solo se permiten imágenes JPG, PNG o BMP");
      return;
    }

    // Validar tamaño (ejemplo: máx 300 KB)
    if (file.size > 300 * 1024) {
      alert("El archivo no puede superar los 300 KB");
      return;
    }

    // Guardar archivo en el form
    setValue("archivoLogo", file);
  };

    return ( 
          <>
           <div className="col-12">
            <div>
                <div className="row inputarchivo">

                <h6  className="titlecamposempresa h6 paddingtitleempresalogo" style={{padding:'12px 10px 0px 10px ',marginBottom:0}}>Logo empresa</h6>
                    <div className="mb-3 coninputarchivo paddingempresa">
        <CFormInput  className=" fontletre placeholderarchivo"  type="file" id="formFile" label="JPG, PNG, BMP, 1080x1080 px Max."  {...register("archivologo")} onChange={handleFileChange}/>
      </div>
         </div>
           </div>      
            </div>

        </>
     );
}

export default Imagenpazzioli;
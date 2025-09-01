import { useState } from "react";

function Imagenpazzioli(
    { register, CInputGroup,setValue,
  CFormInput,
  CFormSelect,
  CFormFloating,
  CFormLabel,

...rest}: any


) {
  const [preview, setPreview] = useState<string | null>(null);

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

    // 3. Validar dimensiones
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        if (img.width > 600 || img.height > 380) {
          alert("El logo no puede superar 600x380 px");
          return;
        }

        // Si todo está OK, guardar en el formulario y mostrar vista previa
        setValue("archivoLogo", file);
        setPreview(event.target?.result as string);
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
    // Guardar archivo en el form
    //setValue("archivoLogo", file);
  };

    return ( 
          <>
           <div className="col-12">
            <div>
                <div className="row inputarchivo">

                <h6  className="titlecamposempresa h6 paddingtitleempresalogo" style={{padding:'12px 10px 5px 10px  ',marginBottom:0}}>Logo empresa</h6>
                    <div className="mb-3 coninputarchivo paddingempresa">
        <CFormInput  className=" fontletre placeholderarchivo"  type="file" id="formFile" label="JPG, PNG, BMP, 600x380 px Max."  {...register("archivologo")} onChange={handleFileChange}/>
      </div>

      {preview && (
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            marginTop: "10px" }}>
            <img
              src={preview}
              alt="Vista previa logo"
              style={{
                maxWidth: "400px",//150px
                maxHeight: "250px",//95
                border: "1px solid #ddd",
                borderRadius: "4px",
                padding: "5px",
                background: "#f9f9f9",
              }}
            />
          </div>
        )}
         </div>
           </div>      
            </div>

        </>
     );
}

export default Imagenpazzioli;
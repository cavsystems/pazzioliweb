import React from "react"

type ProductoRowProps = {
  item: any
  index: number
  setproductosagregados: React.Dispatch<React.SetStateAction<any[]>>
  productosagregados:any
    actualizar:boolean
  codigoactulizar:number
  setcostoact:React.Dispatch<React.SetStateAction<string>>
   inputrefcosto:React.RefObject<Record<number, HTMLInputElement | null>>
}

function ProductoRowcosto({ item, index, setproductosagregados ,productosagregados,actualizar , codigoactulizar,setcostoact, inputrefcosto}: ProductoRowProps) {
    //funcion para parciar de miles a formato normal
const parseNumberCO = (value: string): number => {
  if (!value) return 0

  return Number(
    value
      .replace(/\./g, '') // quita miles
      .replace(',', '.')  // cambia decimal
  )
}

  // Estado SOLO para el input visual
  const [displayValue, setDisplayValue] = React.useState(
    item.costo === 0
      ? "0"
      : item.costo.toLocaleString("es-CO", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })
  )
  
  React.useEffect(() => {
  
    if(displayValue===""){
            if(actualizar){
         }
         setcostoact("0")
    }else{
        if(actualizar){
         }
       
        setcostoact(displayValue)
    }
   
  
  }, [displayValue])

  function formatIntManual(intPart: string) {
  if (intPart === "") return ""

  // conserva ceros iniciales
  const reversed = intPart.split("").reverse()
  const grouped = []

  for (let i = 0; i < reversed.length; i++) {
    grouped.push(reversed[i])
    if ((i + 1) % 3 === 0 && i + 1 !== reversed.length) {
      grouped.push(".")
    }
  }

  return grouped.reverse().join("")
}

function formatCO(value: string) {
    // borra todo exepto numeros del 0-9 y como desimal
    
    console.log("value antes celean",value)
  const clean = value.replace(/[^\d,]/g, "")
   

  const [intPart, decPart] = clean.split(",")
  

   const formattedInt = formatIntManual(intPart)
  /*const formattedInt = intPart!==""
    ? Number(intPart).toLocaleString("es-CO")
    : ""*/
      console.log("formatint formateado",formattedInt)
   const parcde= decPart !== undefined
    ? `${formattedInt},${decPart.slice(0, 2)}`
    : formattedInt
    console.log("value despues clean",clean,parcde)
        setproductosagregados(prev =>
          prev.map((p, i) =>
            i === index
              ? { ...p, total:p.cantidadGlobal*Number(parcde.replace(/\./g, "").replace(",", "."))}
              : p
          )
        )
  return decPart !== undefined
    ? `${formattedInt},${decPart.slice(0, 2)}`
    : formattedInt
}

function formatCOinicio(value: string) {
    // borra todo exepto numeros del 0-9 y como desimal
  const clean = value.replace(/[^\d,]/g, "")

  const [intPart, decPart] = clean.split(",")

  const formattedInt = intPart
    ? Number(intPart).toLocaleString("es-CO")
    : ""
   const parcde= decPart !== undefined
    ? `${formattedInt},${decPart.slice(0, 2)}`
    : formattedInt

     
  return decPart !== undefined
    ? `${formattedInt},${decPart.slice(0, 2)}`
    : formattedInt
}
  // Si el valor cambia desde afuera (ej: cargar datos)
  

  React.useEffect(() => {
    // SOLO esta fila puede modificar su display
    if (actualizar && codigoactulizar !== index) return
      if (item.costo === 0) {
  if(actualizar){
     setcostoact("0")
       }
      setDisplayValue("")
    } else {
       if(actualizar){
     setcostoact(  item.costo.toLocaleString("es-CO", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }))
       }
     
      setDisplayValue(
        item.costo.toLocaleString("es-CO", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })
      )
    }
  }, [item.costo, actualizar, codigoactulizar, index])

  return (
    <input
          ref={(el) => {

    //guardamos la referncia del input en el ref
    inputrefcosto.current[index] = el
  }}
      className="inputentradaitem inputentradaitemc"
      id={`inputcosto${index}`}
      placeholder="0"
      value={displayValue==="0" ? "":displayValue}
      disabled={ actualizar
  ? (codigoactulizar === index ? false : true)
  : (productosagregados.length - 1 !== index) }
      onChange={(e) => {
        // deja escribir libre
        //const numericValue = parseNumberCO(displayValue)
        const input = e.target
    const rawValue = input.value
console.log("input value costo",rawValue)
          if (rawValue === "") {

    setDisplayValue("")
    return
  }
    //Guarda la posición actual del cursor
    /*input.selectionStart devuelve:

un número 👉 posición del cursor

o null 👉 cuando el input no tiene foco*/
//si es nulo la poscion del cursor es la longitud del texto
    const caret = input.selectionStart ?? rawValue.length
//Longitud ANTES de formatear
    const beforeLength = rawValue.length
    //Aplica el formato colombiano
    const formatted = formatCO(rawValue)
    //Longitud DESPUÉS del formato
    const afterLength = formatted.length
//actuliza el estado
//Aquí React vuelve a renderizar SIN control del cursor, saltaría al final
    setDisplayValue(formatted)
//Restauras el cursor (LO MÁS IMPORTANTE)
//requestAnimationFrame espera a que React pinte

//Ajusta el cursor según cuánto creció o disminuyó el texto
    requestAnimationFrame(() => {
    
      const newCaret = caret + (afterLength - beforeLength)
     /* start

 posición inicial del cursor o selección
(es un índice del string, empieza en 0)

 end

 posición final del cursor o selección*/
      input.setSelectionRange(newCaret, newCaret)
    })
  }}
      onBlur={() => {
        // convierte al número real
        const numericValue = parseNumberCO(displayValue)
         if(!actualizar){
                     setproductosagregados(prev =>
          prev.map((p, i) =>
            i === index
              ? { ...p, costo: numericValue ,total:p.cantidadGlobal* numericValue}
              : p
          )
        )

        // vuelve a mostrar formateado
        setDisplayValue(
          numericValue.toLocaleString("es-CO", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })
        )
    }
          
        // guarda número limpio
        
   
      }}
    />
  )
}

export default ProductoRowcosto
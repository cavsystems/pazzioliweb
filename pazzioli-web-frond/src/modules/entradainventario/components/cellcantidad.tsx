import React from "react"

type ProductoRowProps = {
  item: any
  index: number
  setproductosagregados: React.Dispatch<React.SetStateAction<any[]>>
}

function ProductoRowcantidad({ item, index, setproductosagregados }: ProductoRowProps) {
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
    item.cantidadGlobal === 0
      ? ""
      : item.cantidadGlobal.toLocaleString("es-CO", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })
  )

  // Si el valor cambia desde afuera (ej: cargar datos)
  React.useEffect(() => {
    setDisplayValue(
      item.cantidadGlobal === 0
        ? "0"
        : item.cantidadGlobal.toLocaleString("es-CO", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })
    )
  }, [item.cantidadGlobal])

  return (
    <input
      className="inputentradaitem inputentradaitemc"
      value={displayValue}
      onChange={(e) => {
        // deja escribir libre
        setDisplayValue(e.target.value)
      }}
      onBlur={() => {
        // convierte al número real
        const numericValue = parseNumberCO(displayValue)

        // guarda número limpio
        setproductosagregados(prev =>
          prev.map((p, i) =>
            i === index
              ? { ...p, cantidadGlobal: numericValue ,total:numericValue*p.costo}
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
      }}
    />
  )
}

export default ProductoRowcantidad

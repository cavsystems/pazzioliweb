package com.pazzioliweb.productosmodule.dtos;

import lombok.Data;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.math.BigDecimal;
import java.util.List;

@Data
public class ProductoActualizarCrearDTO {
    private String codigo;
    @JsonProperty("tipo_producto")
    private String tipoProducto;
    private String descripcion;
    private String referencia;
    @JsonProperty("unidad_medida")
    private String unidadMedida;
    private Integer impuesto;
    private BigDecimal costo;
    private String linea;
    private String grupo;
    @JsonProperty("codigobarras")
    private String codigoBarras;
    private String ubicacion;
    private List<PrecioDTO> precios;
    private List<VarianteDTO> variantes;

    @Data
    public static class VarianteDTO {
        @JsonProperty("codigobarravariante")
        private String codigoBarraVariante;
        private Integer cantidad;
        private List<AtributoDTO> atributos;
        private List<String> notas;
        private List<ExistenciaDTO> existencias;
        private Integer descuento;
    }

    @Data
    public static class ExistenciaDTO {
        private Long existenciaId;
        private String bodega;
        private Integer cantidad;
    }

    @Data
    public static class AtributoDTO {
        private String nombre;
        private String valor;
    }

    @Data
    public static class PrecioDTO {
        // Define fields based on what precios contain, e.g., private String tipo; private BigDecimal precio;
        // Since JSON has "precios": [], assume it's empty or add fields later
    }
}

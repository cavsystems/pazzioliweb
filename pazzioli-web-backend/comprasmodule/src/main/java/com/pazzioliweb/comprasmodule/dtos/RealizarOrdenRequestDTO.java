package com.pazzioliweb.comprasmodule.dtos;

import lombok.Data;
import java.math.BigDecimal;
import java.util.List;

@Data
public class RealizarOrdenRequestDTO {
    private ProveedorRequestDTO provedor;
    private Integer plazo;
    private String fechafinal;
    private String fechainicial;
    private String horacompra;
    private OrdenCompraDataDTO orden_compra;
    private DescuentosDTO inputsdescuentos;
    private Long proveedorId;
    private Long bodegaId;

    @Data
    public static class ProveedorRequestDTO {
        private String nombre;
        private String identificacion;
        private String correo;
        private String telefono;
        private Integer terceroId;
        private List<RetencionDTO> retenciones;
    }

    @Data
    public static class RetencionDTO {
        private Integer retencionId;
        private Integer codigo;
        private String nombre;
        private BigDecimal base;
        private BigDecimal porcentaje;
    }

    @Data
    public static class OrdenCompraDataDTO {
        private List<ProductoRequestPayloadDTO> products;
        private BigDecimal gravada;
        private BigDecimal iva;
        private BigDecimal exento;
        private BigDecimal excluido;
        private Integer productos;
        private Integer items;
        private Integer cantidad;
        private BigDecimal totalproduct;
        private BigDecimal descuentos;
        private String retefuente;
        private String reteica;
        private String reteiva;
        private BigDecimal descuento;
    }

    @Data
    public static class ProductoRequestPayloadDTO {
        private String codigo;
        private String codigobarras;
        private BigDecimal costo;
        private String descripcion;
        private String grupo;
        private String linea;
        private Integer impuesto;
        private String referencia;
        private String tipo_producto;
        private String ubicacion;
        private String unidad_medida;
        private List<Object> precios; // Assuming empty or not used
        private List<VariantePayloadDTO> variantes;
    }

    @Data
    public static class VariantePayloadDTO {
        private String codigobarravariante;
        private Integer cantidad;
        private List<AtributoPayloadDTO> atributos;
        private List<ExistenciaDTO> existencias;
        private BigDecimal descuento;
        private List<String> notas;
    }

    @Data
    public static class AtributoPayloadDTO {
        private String nombre;
        private String valor;
    }

    @Data
    public static class ExistenciaDTO {
        private Integer existenciaId;
        private String bodega;
        private Integer cantidad;
    }

    @Data
    public static class DescuentosDTO {
        private String descuento;
        private String reteiva;
        private String reteica;
        private String retefuente;
    }
}

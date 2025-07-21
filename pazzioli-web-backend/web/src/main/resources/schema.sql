CREATE TABLE IF NOT EXISTS usuario (
    codigo BIGINT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    login VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    nivel BIGINT DEFAULT 0,
    estado VARCHAR(20),
    PRIMARY KEY (codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS sesiones (
    codigo BIGINT NOT NULL AUTO_INCREMENT,
    codigoUsuario BIGINT NULL,
    estado VARCHAR(20),
    fechaInicio DATETIME DEFAULT '1990-01-01',
    fechaFin DATETIME DEFAULT '1990-01-01',
    PRIMARY KEY (codigo),
    FOREIGN KEY (codigoUsuario) REFERENCES usuario(codigo)
        ON DELETE SET NULL
        ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
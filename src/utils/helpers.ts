// ==========================================
// SISMEDICO - FUNCIONES AUXILIARES
// ==========================================

/**
 * Formatea una fecha en formato mexicano.
 */
export const formatearFecha = (
    fecha?: string | Date | null
): string => {
    if (!fecha) {
        return "-";
    }

    const date = new Date(fecha);

    if (isNaN(date.getTime())) {
        return "-";
    }

    return date.toLocaleDateString("es-MX", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
};


/**
 * Formatea una fecha y hora.
 */
export const formatearFechaHora = (
    fecha?: string | Date | null
): string => {
    if (!fecha) {
        return "-";
    }

    const date = new Date(fecha);

    if (isNaN(date.getTime())) {
        return "-";
    }

    return date.toLocaleString("es-MX", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
};


/**
 * Formatea una hora.
 */
export const formatearHora = (
    hora?: string | null
): string => {
    if (!hora) {
        return "-";
    }

    return hora.substring(0, 5);
};


/**
 * Convierte un texto a formato de búsqueda.
 */
export const normalizarTexto = (
    texto?: string | null
): string => {
    return String(texto ?? "")
        .toLowerCase()
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        .trim();
};


/**
 * Busca un texto dentro de otro.
 */
export const contieneTexto = (
    valor: unknown,
    texto: string
): boolean => {
    return normalizarTexto(
        String(valor ?? "")
    ).includes(
        normalizarTexto(texto)
    );
};


/**
 * Capitaliza la primera letra.
 */
export const capitalizar = (
    texto?: string | null
): string => {
    if (!texto) {
        return "";
    }

    return (
        texto.charAt(0).toUpperCase() +
        texto.slice(1).toLowerCase()
    );
};


/**
 * Capitaliza cada palabra.
 */
export const capitalizarPalabras = (
    texto?: string | null
): string => {
    if (!texto) {
        return "";
    }

    return texto
        .toLowerCase()
        .split(" ")
        .map((palabra) =>
            capitalizar(palabra)
        )
        .join(" ");
};


/**
 * Obtiene el nombre completo de una persona.
 */
export const obtenerNombreCompleto = (
    nombre?: string | null,
    apellido?: string | null
): string => {
    return [
        nombre,
        apellido,
    ]
        .filter(Boolean)
        .join(" ")
        .trim();
};


/**
 * Formatea un número como moneda mexicana.
 */
export const formatearMoneda = (
    cantidad?: number | null
): string => {
    if (
        cantidad === null ||
        cantidad === undefined ||
        isNaN(cantidad)
    ) {
        return "$0.00";
    }

    return cantidad.toLocaleString(
        "es-MX",
        {
            style: "currency",
            currency: "MXN",
        }
    );
};


/**
 * Convierte un valor a número seguro.
 */
export const convertirNumero = (
    valor: unknown,
    valorDefault = 0
): number => {
    const numero = Number(valor);

    return isNaN(numero)
        ? valorDefault
        : numero;
};


/**
 * Verifica si un valor está vacío.
 */
export const estaVacio = (
    valor: unknown
): boolean => {
    return (
        valor === null ||
        valor === undefined ||
        String(valor).trim() === ""
    );
};


/**
 * Devuelve un valor alternativo
 * cuando el valor original está vacío.
 */
export const valorOdefault = <T>(
    valor: T | null | undefined,
    valorDefault: T
): T => {
    return valor === null ||
        valor === undefined
        ? valorDefault
        : valor;
};


/**
 * Genera un identificador simple.
 */
export const generarId = (): string => {
    return `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 9)}`;
};


/**
 * Obtiene las iniciales de un nombre.
 */
export const obtenerIniciales = (
    nombre?: string | null
): string => {
    if (!nombre) {
        return "";
    }

    return nombre
        .trim()
        .split(/\s+/)
        .map(
            (palabra) =>
                palabra.charAt(0)
        )
        .join("")
        .substring(0, 2)
        .toUpperCase();
};


/**
 * Valida un correo electrónico.
 */
export const validarCorreo = (
    correo: string
): boolean => {
    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(correo);
};


/**
 * Valida una CURP.
 */
export const validarCURP = (
    curp: string
): boolean => {
    const regex =
        /^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z\d]\d$/i;

    return regex.test(
        curp.trim()
    );
};


/**
 * Valida un número telefónico mexicano.
 */
export const validarTelefono = (
    telefono: string
): boolean => {
    const limpio =
        telefono.replace(/\D/g, "");

    return limpio.length === 10;
};


/**
 * Elimina caracteres no numéricos.
 */
export const soloNumeros = (
    valor: string
): string => {
    return valor.replace(
        /\D/g,
        ""
    );
};


/**
 * Espera una cantidad determinada
 * de milisegundos.
 */
export const esperar = (
    milisegundos: number
): Promise<void> => {
    return new Promise(
        (resolve) =>
            setTimeout(
                resolve,
                milisegundos
            )
    );
};
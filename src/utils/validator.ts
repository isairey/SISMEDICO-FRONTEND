// ==========================================
// SISMEDICO - VALIDADORES
// ==========================================

// ==========================================
// TIPOS
// ==========================================

export interface ValidationResult {
    valid: boolean;
    message?: string;
}


// ==========================================
// VALIDACIONES BÁSICAS
// ==========================================

/**
 * Verifica que un campo tenga contenido.
 */
export const required = (
    value: unknown,
    campo = "Este campo"
): ValidationResult => {
    if (
        value === null ||
        value === undefined ||
        String(value).trim() === ""
    ) {
        return {
            valid: false,
            message: `${campo} es obligatorio.`,
        };
    }

    return {
        valid: true,
    };
};


/**
 * Valida la longitud mínima.
 */
export const minLength = (
    value: string,
    minimo: number,
    campo = "El campo"
): ValidationResult => {
    if (value.length < minimo) {
        return {
            valid: false,
            message: `${campo} debe tener al menos ${minimo} caracteres.`,
        };
    }

    return {
        valid: true,
    };
};


/**
 * Valida la longitud máxima.
 */
export const maxLength = (
    value: string,
    maximo: number,
    campo = "El campo"
): ValidationResult => {
    if (value.length > maximo) {
        return {
            valid: false,
            message: `${campo} no puede superar los ${maximo} caracteres.`,
        };
    }

    return {
        valid: true,
    };
};


// ==========================================
// CORREO
// ==========================================

export const validarCorreo = (
    correo: string
): ValidationResult => {
    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!correo.trim()) {
        return {
            valid: false,
            message: "El correo es obligatorio.",
        };
    }

    if (!regex.test(correo.trim())) {
        return {
            valid: false,
            message: "El correo electrónico no es válido.",
        };
    }

    return {
        valid: true,
    };
};


// ==========================================
// CONTRASEÑA
// ==========================================

export const validarPassword = (
    password: string
): ValidationResult => {
    if (!password) {
        return {
            valid: false,
            message: "La contraseña es obligatoria.",
        };
    }

    if (password.length < 8) {
        return {
            valid: false,
            message:
                "La contraseña debe tener al menos 8 caracteres.",
        };
    }

    return {
        valid: true,
    };
};


/**
 * Valida una contraseña con mayor seguridad.
 */
export const validarPasswordSegura = (
    password: string
): ValidationResult => {
    if (!password) {
        return {
            valid: false,
            message: "La contraseña es obligatoria.",
        };
    }

    if (password.length < 8) {
        return {
            valid: false,
            message:
                "La contraseña debe tener al menos 8 caracteres.",
        };
    }

    if (!/[A-Z]/.test(password)) {
        return {
            valid: false,
            message:
                "La contraseña debe contener al menos una letra mayúscula.",
        };
    }

    if (!/[a-z]/.test(password)) {
        return {
            valid: false,
            message:
                "La contraseña debe contener al menos una letra minúscula.",
        };
    }

    if (!/[0-9]/.test(password)) {
        return {
            valid: false,
            message:
                "La contraseña debe contener al menos un número.",
        };
    }

    return {
        valid: true,
    };
};


// ==========================================
// CONFIRMACIÓN DE CONTRASEÑA
// ==========================================

export const confirmarPassword = (
    password: string,
    confirmacion: string
): ValidationResult => {
    if (password !== confirmacion) {
        return {
            valid: false,
            message:
                "Las contraseñas no coinciden.",
        };
    }

    return {
        valid: true,
    };
};


// ==========================================
// TELÉFONO
// ==========================================

export const validarTelefono = (
    telefono: string
): ValidationResult => {
    const limpio =
        telefono.replace(/\D/g, "");

    if (!limpio) {
        return {
            valid: false,
            message:
                "El teléfono es obligatorio.",
        };
    }

    if (limpio.length !== 10) {
        return {
            valid: false,
            message:
                "El teléfono debe contener 10 dígitos.",
        };
    }

    return {
        valid: true,
    };
};


// ==========================================
// CURP
// ==========================================

export const validarCURP = (
    curp: string
): ValidationResult => {
    const regex =
        /^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z\d]\d$/i;

    if (!curp.trim()) {
        return {
            valid: false,
            message: "La CURP es obligatoria.",
        };
    }

    if (!regex.test(curp.trim())) {
        return {
            valid: false,
            message: "La CURP no tiene un formato válido.",
        };
    }

    return {
        valid: true,
    };
};


// ==========================================
// NOMBRE
// ==========================================

export const validarNombre = (
    nombre: string,
    campo = "El nombre"
): ValidationResult => {
    const regex =
        /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (!nombre.trim()) {
        return {
            valid: false,
            message: `${campo} es obligatorio.`,
        };
    }

    if (!regex.test(nombre.trim())) {
        return {
            valid: false,
            message: `${campo} solo puede contener letras.`,
        };
    }

    return {
        valid: true,
    };
};


// ==========================================
// NÚMEROS
// ==========================================

export const validarNumero = (
    valor: unknown,
    campo = "El valor"
): ValidationResult => {
    if (
        valor === null ||
        valor === undefined ||
        valor === ""
    ) {
        return {
            valid: false,
            message: `${campo} es obligatorio.`,
        };
    }

    if (isNaN(Number(valor))) {
        return {
            valid: false,
            message: `${campo} debe ser un número.`,
        };
    }

    return {
        valid: true,
    };
};


export const validarNumeroPositivo = (
    valor: unknown,
    campo = "El valor"
): ValidationResult => {
    const resultado =
        validarNumero(valor, campo);

    if (!resultado.valid) {
        return resultado;
    }

    if (Number(valor) <= 0) {
        return {
            valid: false,
            message: `${campo} debe ser mayor que cero.`,
        };
    }

    return {
        valid: true,
    };
};


// ==========================================
// FECHAS
// ==========================================

export const validarFecha = (
    fecha: string
): ValidationResult => {
    if (!fecha) {
        return {
            valid: false,
            message: "La fecha es obligatoria.",
        };
    }

    const date = new Date(fecha);

    if (isNaN(date.getTime())) {
        return {
            valid: false,
            message: "La fecha no es válida.",
        };
    }

    return {
        valid: true,
    };
};


export const validarFechaFutura = (
    fecha: string
): ValidationResult => {
    const resultado =
        validarFecha(fecha);

    if (!resultado.valid) {
        return resultado;
    }

    const date = new Date(fecha);
    const ahora = new Date();

    if (date < ahora) {
        return {
            valid: false,
            message:
                "La fecha debe ser futura.",
        };
    }

    return {
        valid: true,
    };
};


// ==========================================
// HORA
// ==========================================

export const validarHora = (
    hora: string
): ValidationResult => {
    const regex =
        /^([01]\d|2[0-3]):([0-5]\d)$/;

    if (!hora) {
        return {
            valid: false,
            message: "La hora es obligatoria.",
        };
    }

    if (!regex.test(hora)) {
        return {
            valid: false,
            message:
                "La hora debe tener el formato HH:mm.",
        };
    }

    return {
        valid: true,
    };
};


// ==========================================
// RANGO
// ==========================================

export const validarRango = (
    valor: number,
    minimo: number,
    maximo: number,
    campo = "El valor"
): ValidationResult => {
    if (
        valor < minimo ||
        valor > maximo
    ) {
        return {
            valid: false,
            message: `${campo} debe estar entre ${minimo} y ${maximo}.`,
        };
    }

    return {
        valid: true,
    };
};


// ==========================================
// VALIDACIÓN DE OBJETO
// ==========================================

export const validarCampos = (
    errores: Record<
        string,
        string | undefined
    >
): boolean => {
    return Object.values(
        errores
    ).every(
        (error) => !error
    );
};


// ==========================================
// EXPORTACIÓN
// ==========================================

const validator = {
    required,
    minLength,
    maxLength,

    validarCorreo,

    validarPassword,
    validarPasswordSegura,
    confirmarPassword,

    validarTelefono,
    validarCURP,
    validarNombre,

    validarNumero,
    validarNumeroPositivo,

    validarFecha,
    validarFechaFutura,

    validarHora,

    validarRango,

    validarCampos,
};

export default validator;
// ==========================================
// SISMEDICO - STORAGE
// ==========================================

import {
    STORAGE_KEYS,
} from "./constants";

// ==========================================
// TOKEN
// ==========================================

/**
 * Guarda el token JWT.
 */
export const guardarToken = (
    token: string
): void => {
    localStorage.setItem(
        STORAGE_KEYS.TOKEN,
        token
    );
};


/**
 * Obtiene el token JWT.
 */
export const obtenerToken = (): string | null => {
    return localStorage.getItem(
        STORAGE_KEYS.TOKEN
    );
};


/**
 * Elimina el token JWT.
 */
export const eliminarToken = (): void => {
    localStorage.removeItem(
        STORAGE_KEYS.TOKEN
    );
};


// ==========================================
// USUARIO
// ==========================================

/**
 * Guarda los datos del usuario.
 */
export const guardarUsuario = <T>(
    usuario: T
): void => {
    localStorage.setItem(
        STORAGE_KEYS.USER,
        JSON.stringify(usuario)
    );
};


/**
 * Obtiene los datos del usuario.
 */
export const obtenerUsuario = <T>(): T | null => {
    const usuario =
        localStorage.getItem(
            STORAGE_KEYS.USER
        );

    if (!usuario) {
        return null;
    }

    try {
        return JSON.parse(usuario) as T;
    } catch {
        return null;
    }
};


/**
 * Elimina los datos del usuario.
 */
export const eliminarUsuario = (): void => {
    localStorage.removeItem(
        STORAGE_KEYS.USER
    );
};


// ==========================================
// SESIÓN
// ==========================================

/**
 * Verifica si existe una sesión.
 */
export const tieneSesion = (): boolean => {
    return Boolean(
        obtenerToken()
    );
};


/**
 * Guarda la sesión completa.
 */
export const guardarSesion = <T>(
    token: string,
    usuario: T
): void => {
    guardarToken(token);
    guardarUsuario(usuario);
};


/**
 * Obtiene la sesión completa.
 */
export const obtenerSesion = <T>(): {
    token: string;
    usuario: T | null;
} | null => {
    const token =
        obtenerToken();

    if (!token) {
        return null;
    }

    return {
        token,
        usuario:
            obtenerUsuario<T>(),
    };
};


/**
 * Cierra completamente la sesión.
 */
export const cerrarSesion = (): void => {
    eliminarToken();
    eliminarUsuario();
};


// ==========================================
// STORAGE GENÉRICO
// ==========================================

/**
 * Guarda cualquier valor en localStorage.
 */
export const guardarItem = <T>(
    clave: string,
    valor: T
): void => {
    localStorage.setItem(
        clave,
        JSON.stringify(valor)
    );
};


/**
 * Obtiene cualquier valor de localStorage.
 */
export const obtenerItem = <T>(
    clave: string
): T | null => {
    const valor =
        localStorage.getItem(clave);

    if (!valor) {
        return null;
    }

    try {
        return JSON.parse(valor) as T;
    } catch {
        return null;
    }
};


/**
 * Elimina un elemento.
 */
export const eliminarItem = (
    clave: string
): void => {
    localStorage.removeItem(
        clave
    );
};


/**
 * Verifica si existe una clave.
 */
export const existeItem = (
    clave: string
): boolean => {
    return (
        localStorage.getItem(
            clave
        ) !== null
    );
};


/**
 * Limpia todo el localStorage.
 */
export const limpiarStorage = (): void => {
    localStorage.clear();
};


// ==========================================
// EXPORTACIÓN
// ==========================================

const storage = {
    guardarToken,
    obtenerToken,
    eliminarToken,

    guardarUsuario,
    obtenerUsuario,
    eliminarUsuario,

    tieneSesion,
    guardarSesion,
    obtenerSesion,
    cerrarSesion,

    guardarItem,
    obtenerItem,
    eliminarItem,
    existeItem,
    limpiarStorage,
};

export default storage;
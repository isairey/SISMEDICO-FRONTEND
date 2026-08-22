// ==========================================
// SISMEDICO - CONSTANTES GLOBALES
// ==========================================

// ==========================================
// INFORMACIÓN DE LA APLICACIÓN
// ==========================================

export const APP_NAME = "SISMEDICO";

export const APP_DESCRIPTION =
    "Sistema de Gestión Médica";


// ==========================================
// STORAGE
// ==========================================

export const STORAGE_KEYS = {
    TOKEN: "sismedico_token",
    USER: "sismedico_user",
} as const;


// ==========================================
// RUTAS DE AUTENTICACIÓN
// ==========================================

export const AUTH_ROUTES = {
    LOGIN: "/login",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/forgot-password",
} as const;


// ==========================================
// RUTAS DEL SISTEMA
// ==========================================

export const APP_ROUTES = {
    DASHBOARD: "/dashboard",

    USUARIOS: "/usuarios",

    PACIENTES: "/pacientes",

    MEDICOS: "/medicos",

    CITAS: "/citas",

    DIAGNOSTICOS: "/diagnosticos",

    ESPECIALIDADES: "/especialidades",

    HORARIOS: "/horarios",

    NOTIFICACIONES: "/notificaciones",

    RECETAS: "/recetas",
} as const;


// ==========================================
// ESTADOS DE CITAS
// ==========================================

export const ESTADOS_CITA = {
    PENDIENTE: "PENDIENTE",
    CONFIRMADA: "CONFIRMADA",
    CANCELADA: "CANCELADA",
    COMPLETADA: "COMPLETADA",
} as const;


// ==========================================
// ETIQUETAS DE ESTADOS
// ==========================================

export const ESTADOS_CITA_LABEL = {
    PENDIENTE: "Pendiente",
    CONFIRMADA: "Confirmada",
    CANCELADA: "Cancelada",
    COMPLETADA: "Completada",
} as const;


// ==========================================
// CONFIGURACIÓN DE PAGINACIÓN
// ==========================================

export const PAGINATION = {
    DEFAULT_PAGE: 0,
    DEFAULT_PAGE_SIZE: 10,

    PAGE_SIZES: [
        5,
        10,
        25,
        50,
    ],
} as const;


// ==========================================
// CONFIGURACIÓN DE CITAS
// ==========================================

export const CITA_CONFIG = {
    DURACION_DEFAULT: 30,

    HORA_INICIO: "08:00",

    HORA_FIN: "20:00",
} as const;


// ==========================================
// DÍAS DE LA SEMANA
// ==========================================

export const DIAS_SEMANA = [
    "LUNES",
    "MARTES",
    "MIERCOLES",
    "JUEVES",
    "VIERNES",
    "SABADO",
    "DOMINGO",
] as const;


// ==========================================
// SEXO
// ==========================================

export const SEXOS = {
    MASCULINO: "MASCULINO",
    FEMENINO: "FEMENINO",
    OTRO: "OTRO",
} as const;


// ==========================================
// MENSAJES
// ==========================================

export const MESSAGES = {
    ERROR_GENERAL:
        "Ha ocurrido un error inesperado.",

    ERROR_CARGAR:
        "No se pudieron cargar los datos.",

    ERROR_GUARDAR:
        "No se pudieron guardar los datos.",

    ERROR_ACTUALIZAR:
        "No se pudieron actualizar los datos.",

    ERROR_ELIMINAR:
        "No se pudo eliminar el registro.",

    SUCCESS_GUARDAR:
        "Registro guardado correctamente.",

    SUCCESS_ACTUALIZAR:
        "Registro actualizado correctamente.",

    SUCCESS_ELIMINAR:
        "Registro eliminado correctamente.",

    LOGIN_REQUIRED:
        "Debes iniciar sesión para continuar.",

    SESION_EXPIRADA:
        "Tu sesión ha expirado. Inicia sesión nuevamente.",
} as const;


// ==========================================
// ROLES
// ==========================================

export const ROLES = {
    ADMIN: "ADMIN",
    MEDICO: "MEDICO",
    PACIENTE: "PACIENTE",
} as const;


// ==========================================
// CÓDIGOS HTTP
// ==========================================

export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,

    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,

    INTERNAL_SERVER_ERROR: 500,
} as const;


// ==========================================
// CONFIGURACIÓN DE API
// ==========================================

export const API_CONFIG = {
    TIMEOUT: 10000,

    VERSION: "v1",
} as const;


// ==========================================
// FORMATOS
// ==========================================

export const DATE_FORMATS = {
    DATE: "DD/MM/YYYY",

    TIME: "HH:mm",

    DATETIME: "DD/MM/YYYY HH:mm",
} as const;


// ==========================================
// TIPOS DE NOTIFICACIÓN
// ==========================================

export const NOTIFICATION_TYPES = {
    SUCCESS: "success",
    ERROR: "error",
    WARNING: "warning",
    INFO: "info",
} as const;
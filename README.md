# SISMEDICO — Frontend

<div align="center">

<img src="public/logo.png" alt="SISMEDICO Logo" width="180" />

# SISMEDICO

### Plataforma integral de gestión médica y administración clínica

**Una solución digital para optimizar la gestión de pacientes, profesionales de la salud, citas médicas y procesos administrativos.**

<br />

![React](https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-Typed-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Material UI](https://img.shields.io/badge/Material_UI-Components-007FFF?style=for-the-badge&logo=mui&logoColor=white)

<br />

[Características](#-características) · [Tecnologías](#-stack-tecnológico) · [Instalación](#-instalación) · [Arquitectura](#-arquitectura) · [Desarrollo](#-desarrollo)

</div>

---

## Descripción

**SISMEDICO** es una aplicación web orientada a la administración y gestión de servicios médicos. Su objetivo es centralizar las operaciones de una institución de salud mediante una interfaz intuitiva, modular y adaptable.

Este repositorio contiene el **frontend**, desarrollado con React y TypeScript, encargado de proporcionar la experiencia de usuario, gestionar el estado de la aplicación y comunicarse con el backend mediante servicios HTTP.

La arquitectura está organizada por módulos funcionales para facilitar el mantenimiento, la escalabilidad y la incorporación de nuevas funcionalidades.

## Características

| Módulo | Funcionalidad |
|---|---|
| Autenticación | Inicio de sesión, registro y recuperación de contraseña. |
| Dashboard | Panel principal con indicadores y resumen de actividad. |
| Usuarios | Administración de cuentas y perfiles. |
| Pacientes | Registro, consulta y gestión de expedientes básicos. |
| Médicos | Administración de profesionales de la salud. |
| Citas médicas | Programación, consulta y seguimiento de citas. |
| Diagnósticos | Gestión de información relacionada con diagnósticos. |
| Especialidades | Administración de especialidades médicas. |
| Horarios | Organización de horarios de atención. |
| Recetas | Consulta y gestión de recetas médicas. |
| Notificaciones | Visualización de avisos y actualizaciones. |

## Stack tecnológico

### Core

- **React:** construcción de interfaces mediante componentes reutilizables.
- **TypeScript:** tipado estático y mayor confiabilidad durante el desarrollo.
- **Vite:** entorno de desarrollo y herramienta de compilación.

### Estado y navegación

- **Redux Toolkit:** administración centralizada del estado.
- **React Redux:** integración de Redux con los componentes.
- **React Router DOM:** navegación entre páginas y módulos.

### Interfaz y comunicación

- **Material UI:** componentes de interfaz y sistema de diseño.
- **Axios:** comunicación HTTP con el backend.
- **CSS:** estilos globales, variables y personalización visual.

## Arquitectura

El frontend utiliza una arquitectura modular basada en responsabilidades. Cada módulo mantiene separadas sus páginas, componentes, tipos, servicios y lógica de estado.

```text
src/
├── api/
│   ├── auth.ts
│   ├── usuario.ts
│   ├── paciente.ts
│   ├── medico.ts
│   ├── cita.ts
│   ├── diagnostico.ts
│   ├── especialidad.ts
│   ├── horario.ts
│   ├── notificacion.ts
│   └── receta.ts
│
├── assets/
│   ├── images/
│   └── icons/
│
├── components/
│   ├── common/
│   ├── forms/
│   ├── layout/
│   └── tables/
│
├── hooks/
│
├── pages/
│   ├── auth/
│   ├── dashboard/
│   ├── usuarios/
│   ├── pacientes/
│   ├── medicos/
│   ├── citas/
│   ├── diagnosticos/
│   ├── especialidades/
│   ├── horarios/
│   ├── notificaciones/
│   └── recetas/
│
├── routes/
│
├── services/
│
├── store/
│   ├── auth/
│   ├── usuario/
│   ├── paciente/
│   ├── medico/
│   └── index.ts
│
├── styles/
│   ├── variables.css
│   └── global.css
│
├── theme/
│   └── theme.ts
│
├── types/
│
├── utils/
│   ├── constants.ts
│   ├── helpers.ts
│   ├── storage.ts
│   └── validator.ts
│
├── App.tsx
├── App.css
└── main.tsx
```

> La estructura representa la organización modular del frontend. Los archivos y módulos concretos pueden variar conforme avance la implementación.

## Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) — versión compatible con las dependencias del proyecto.
- npm — administrador de paquetes incluido con Node.js.
- [Git](https://git-scm.com/) — para clonar y gestionar el repositorio.
- Backend de SISMEDICO disponible para utilizar las funcionalidades que requieren conexión al servidor.

## Instalación

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
```

### 2. Acceder al proyecto

```bash
cd SISMEDICO-FRONTEND
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
VITE_API_URL=http://localhost:8080/api/v1
```

Ajusta la URL para que coincida con la dirección y el prefijo de rutas configurados en el backend.

### 5. Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en la dirección local que indique Vite, normalmente:

```text
http://localhost:5173
```

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera la compilación de producción. |
| `npm run preview` | Previsualiza la compilación generada. |
| `npm run lint` | Ejecuta el análisis estático, si está configurado. |

## Integración con el backend

El frontend se comunica con el backend de SISMEDICO mediante solicitudes HTTP.

La capa `api/` centraliza las operaciones de comunicación, mientras que `services/` permite organizar la lógica de acceso a los datos y su reutilización desde las páginas y componentes.

Flujo general de comunicación:

```text
┌─────────────────────────────┐
│          Usuario            │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│       React Interface       │
│       Pages / Components    │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│       Redux Toolkit         │
│       Global State          │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│       Services / API        │
│           Axios             │
└──────────────┬──────────────┘
               │ HTTP
               ▼
┌─────────────────────────────┐
│       SISMEDICO API         │
│        Spring Boot          │
└─────────────────────────────┘
```

## Gestión del estado

Redux Toolkit permite centralizar y organizar el estado de los módulos principales de la aplicación.

Entre sus responsabilidades se encuentran:

- Mantener información compartida entre componentes.
- Gestionar estados de carga y errores.
- Actualizar información después de operaciones CRUD.
- Compartir información de autenticación.
- Reducir la duplicación de lógica en las páginas.

## Interfaz y experiencia de usuario

La interfaz utiliza Material UI junto con estilos CSS personalizados.

Se busca mantener una experiencia consistente mediante:

- Componentes reutilizables.
- Diseño adaptable a diferentes tamaños de pantalla.
- Formularios con validaciones.
- Tablas para visualizar información.
- Indicadores de estado y notificaciones.
- Una estructura visual clara y orientada a la productividad.

## Compilación para producción

Para generar la versión optimizada:

```bash
npm run build
```

Los archivos compilados se generan en:

```text
dist/
```

Para comprobar la compilación localmente:

```bash
npm run preview
```

## Seguridad y buenas prácticas

El frontend contempla medidas de desarrollo orientadas a la protección de la aplicación:

- Separación de responsabilidades entre componentes, servicios y estado global.
- Uso de variables de entorno para la configuración de servicios.
- Manejo centralizado de credenciales y sesión.
- Validación de datos en formularios.
- Comunicación con endpoints protegidos mediante autenticación cuando corresponda.
- Uso de TypeScript para reducir errores relacionados con los tipos de datos.

**Importante:** las validaciones del frontend mejoran la experiencia de usuario, pero no sustituyen las validaciones ni los controles de seguridad que debe aplicar el backend.

## Estado del proyecto

<sub>El desarrollo se realiza de manera modular, incorporando funcionalidades y mejoras progresivamente.</sub>

- [x] Configuración inicial del frontend.
- [x] Organización de la arquitectura modular.
- [x] Configuración de estilos y tema visual.
- [x] Estructura de tipos y utilidades.
- [ ] Integración completa de módulos con el backend.
- [ ] Pruebas automatizadas.
- [ ] Optimización y despliegue.

*La lista debe actualizarse conforme se completen las funcionalidades.*

## Autor

<div align="center">

**Isai Reyes Peña**

Desarrollador Full Stack

[![GitHub](https://img.shields.io/badge/GitHub-isairey-181717?style=for-the-badge&logo=github)](https://github.com/isairey)

</div>

---

<div align="center">

**SISMEDICO — Tecnología al servicio de la gestión médica.**

<sub>Desarrollado con React, TypeScript y herramientas del ecosistema moderno de JavaScript.</sub>

</div>

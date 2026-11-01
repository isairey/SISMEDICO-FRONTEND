 
<div align="center">

# SISMEDICO – Frontend

### Sistema Integral de Gestión Médica

Plataforma web para la administración de servicios médicos, pacientes, citas, expedientes clínicos y personal de salud.

<br/>

<img src="public/logo.png" width="220" alt="SISMEDICO Logo" />

<br/>

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Frontend-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-State_Management-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Material UI](https://img.shields.io/badge/Material_UI-UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)

</div>

---

## Descripción

**SISMEDICO Frontend** es la interfaz web del Sistema Integral de Gestión Médica, desarrollada para facilitar la administración y el seguimiento de las actividades de una institución médica.

La aplicación ofrece una interfaz moderna, intuitiva y adaptable, permitiendo gestionar diferentes módulos del sistema desde un panel centralizado.

El frontend está desarrollado con React y TypeScript, utilizando Redux Toolkit para la administración del estado global y Material UI para la construcción de componentes visuales.

## Características principales

- Autenticación de usuarios.
- Inicio y cierre de sesión.
- Protección de rutas privadas.
- Dashboard administrativo.
- Gestión de usuarios.
- Gestión de pacientes.
- Gestión de médicos.
- Administración de especialidades.
- Programación y administración de citas.
- Gestión de horarios médicos.
- Registro y consulta de diagnósticos.
- Administración de recetas médicas.
- Sistema de notificaciones.
- Búsqueda y filtrado de información.
- Tablas dinámicas para visualizar registros.
- Validación de formularios.
- Diseño responsive.

## Tecnologías utilizadas

| Tecnología | Utilidad |
|---|---|
| React | Construcción de interfaces |
| TypeScript | Tipado estático |
| Vite | Entorno de desarrollo |
| Redux Toolkit | Estado global |
| React Redux | Integración de Redux |
| React Router DOM | Navegación |
| Material UI | Componentes visuales |
| Axios | Comunicación HTTP |
| CSS3 | Estilos personalizados |

## Arquitectura del proyecto

El proyecto utiliza una arquitectura modular organizada por responsabilidades, facilitando el mantenimiento, la escalabilidad y la reutilización del código.

```text
sismedico-frontend/
│
├── public/
│
├── src/
│   │
│   ├── api/
│   │   ├── auth.ts
│   │   ├── cita.ts
│   │   ├── diagnostico.ts
│   │   ├── especialidad.ts
│   │   ├── medico.ts
│   │   ├── paciente.ts
│   │   ├── receta.ts
│   │   └── usuario.ts
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── forms/
│   │   ├── tables/
│   │   └── ...
│   │
│   ├── hooks/
│   │   ├── useAppDispatch.ts
│   │   └── useAppSelector.ts
│   │
│   ├── layouts/
│   │   ├── AuthLayout.tsx
│   │   └── DashboardLayout.tsx
│   │
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   └── ForgotPassword.tsx
│   │   │
│   │   ├── citas/
│   │   ├── dashboard/
│   │   ├── diagnosticos/
│   │   ├── especialidades/
│   │   ├── horarios/
│   │   ├── medicos/
│   │   ├── notificaciones/
│   │   ├── pacientes/
│   │   ├── recetas/
│   │   └── usuarios/
│   │
│   ├── routes/
│   │   ├── AppRouter.tsx
│   │   └── PrivateRoute.tsx
│   │
│   ├── services/
│   │   ├── authService.ts
│   │   ├── citaService.ts
│   │   ├── medicoService.ts
│   │   ├── pacienteService.ts
│   │   └── usuarioService.ts
│   │
│   ├── store/
│   │   ├── auth/
│   │   ├── cita/
│   │   ├── diagnostico/
│   │   ├── especialidad/
│   │   ├── medico/
│   │   ├── notificacion/
│   │   ├── paciente/
│   │   ├── receta/
│   │   ├── usuario/
│   │   └── index.ts
│   │
│   ├── styles/
│   │   ├── global.css
│   │   └── variables.css
│   │
│   ├── theme/
│   │   └── theme.ts
│   │
│   ├── types/
│   │   ├── cita.ts
│   │   ├── diagnostico.ts
│   │   ├── especialidad.ts
│   │   ├── medico.ts
│   │   ├── paciente.ts
│   │   ├── receta.ts
│   │   └── usuario.ts
│   │
│   ├── utils/
│   │   ├── constants.ts
│   │   ├── helpers.ts
│   │   ├── storage.ts
│   │   └── validator.ts
│   │
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
│
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Instalación

### 1. Requisitos previos

Antes de comenzar, necesitas tener instalado:

- Node.js 20 o superior.
- npm.
- Git.

### 2. Clonar el repositorio

```bash
git clone https://github.com/isairey/SISMEDICO-FRONTEND.git

cd SISMEDICO-FRONTEND
```

Sustituye la URL por la dirección real de tu repositorio si utilizas otro nombre.

### 3. Instalar dependencias

```bash
npm install
```

### 4. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_API_URL=http://localhost:8080/api/v1
```

Ajusta la URL según el puerto y el prefijo configurados en tu backend Spring Boot.

### 5. Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible normalmente en:

```text
http://localhost:5173
```

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la versión de producción |
| `npm run preview` | Previsualiza la compilación |
| `npm run lint` | Ejecuta ESLint, si está configurado |

## Gestión del estado global

El proyecto utiliza Redux Toolkit para administrar los datos compartidos entre componentes.

Los principales módulos son:

- `auth`: autenticación y sesión.
- `usuario`: administración de usuarios.
- `paciente`: información de pacientes.
- `medico`: información de médicos.
- `cita`: administración de citas.
- `diagnostico`: diagnósticos médicos.
- `especialidad`: especialidades médicas.
- `horario`: horarios de atención.
- `notificacion`: notificaciones.
- `receta`: recetas médicas.

## Comunicación con el backend

La aplicación consume servicios REST desarrollados con Spring Boot.

La comunicación HTTP se organiza mediante módulos API y servicios, permitiendo separar las peticiones al servidor de la lógica de presentación.

```text
React Components
       |
       v
     Pages
       |
       v
    Services
       |
       v
      API
       |
       v
  Axios / HTTP
       |
       v
Spring Boot Backend
       |
       v
   PostgreSQL
```

## Seguridad

El frontend contempla:

- Autenticación mediante JWT.
- Protección de rutas privadas.
- Control de sesión.
- Almacenamiento de credenciales de sesión.
- Manejo de errores de autenticación.
- Validación de formularios.
- Separación de funcionalidades según roles.

**Nota:** la autorización real debe validarse también en el backend. El frontend no debe considerarse una barrera de seguridad independiente.

## Diseño de interfaz

La interfaz utiliza Material UI y estilos CSS personalizados.

Se centralizan los elementos visuales mediante:

- `theme/theme.ts`: configuración del tema de Material UI.
- `styles/variables.css`: variables de diseño.
- `styles/global.css`: estilos globales.
- `App.css`: estilos de la aplicación.

## Compilación para producción

Para generar los archivos optimizados:

```bash
npm run build
```

Los archivos generados estarán disponibles en:

```text
dist/
```

Para probar la compilación localmente:

```bash
npm run preview
```

## Backend relacionado

Este frontend está diseñado para trabajar con el backend de SISMEDICO, desarrollado con:

- Java.
- Spring Boot.
- Spring Security.
- Spring Data JPA.
- PostgreSQL.
- JWT.
- Maven.

## Objetivos del proyecto

- Desarrollar una plataforma integral de administración médica.
- Centralizar la información de pacientes y personal médico.
- Facilitar la programación y seguimiento de citas.
- Mejorar la organización de expedientes clínicos.
- Proporcionar una interfaz escalable y mantenible.
- Implementar una arquitectura frontend modular.

## Autor

**Isai Reyes Peña**

Desarrollador Full Stack | México

- GitHub: [@isairey](https://github.com/isairey)

---

<div align="center">

**SISMEDICO – Sistema Integral de Gestión Médica**

Desarrollado con React, TypeScript y Material UI.

</div>

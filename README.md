# Proyecto Final – Plataforma de Capacitaciones

Este proyecto integra **frontend (Angular)** y **backend (Node.js + Express + MongoDB)**. Permite registrar usuarios, iniciar sesión, listar y crear capacitaciones, y consultar un dashboard básico.

## Estructura
```
proyecto_final_fullstack/
├─ backend/        # API Node/Express
└─ frontend/       # Aplicación Angular
```

## Requisitos
- Node.js 18 o superior
- MongoDB en local o en la nube

## Cómo ejecutar

### 1) Backend
1. Entra a `backend/`
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Crea tu archivo de variables:
   ```bash
   cp .env.example .env
   ```
4. Ajusta `MONGODB_URI`, `JWT_SECRET` y el `PORT` si lo necesitas.
5. Inicia el servidor:
   ```bash
   npm run dev
   ```
   La API queda en: `http://localhost:4000` (por defecto).

**Endpoints principales**
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `GET /api/trainings`
- `POST /api/trainings`
- `PATCH /api/trainings/:id`
- `POST /api/attendance`

### 2) Frontend (Angular)
1. Entra a `frontend/`
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Si tu backend usa otra URL/puerto, edita `src/environments/environment.ts` (propiedad `apiBaseUrl`).
4. Inicia la aplicación:
   ```bash
   npm start
   ```
   Abre `http://localhost:4200` en el navegador.

## Notas
- El frontend incluye rutas: Inicio (`/`), Ingreso (`/login`) y Dashboard (`/dashboard`).
- El formulario de ingreso usa validaciones reactivas.
- Se guarda el token en `localStorage` y se usa un interceptor para adjuntarlo en las peticiones.
- El dashboard está protegido con un guard de autenticación.

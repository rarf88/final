# Backend – Plataforma de Capacitaciones

API sencilla en Node.js + Express + MongoDB. directo.

## Correr
1. `npm install`
2. Copiar `.env.example` a `.env` y ajusta valores (Mongo, puerto, secreto JWT).
3. `npm run dev` (por defecto en http://localhost:4000)

## Endpoints rápidos
- `POST /api/auth/register` – Crea usuario (nombre, email, password)
- `POST /api/auth/login` – Devuelve token JWT
- `GET /api/me` – Datos del usuario (con token)
- `GET /api/trainings` – Lista capacitaciones
- `POST /api/trainings` – Crea capacitación (requiere token)
- `PATCH /api/trainings/:id` – Actualiza
- `POST /api/attendance` – Registra asistencia/feedback

## Notas
- Separé lógica: rutas → controladores → servicios → modelos.
- Manejo de errores centralizado.
- Comentarios cortos y útiles.

## Pruebas
- `npm test` (incluye un par con supertest para auth).

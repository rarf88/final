# Backend – Plataforma de Capacitaciones

API sencilla en Node.js + Express + MongoDB. Español colombiano, directo.

## Correr
1. `npm install`
2. Copia `.env.example` a `.env` y ajusta valores (Mongo, puerto, secreto JWT).
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


## Prueba rápida con curl
```bash
curl http://localhost:4000/
```
```bash
curl -X POST http://localhost:4000/api/auth/register -H 'Content-Type: application/json' -d '{"name":"Ramón","email":"ramon@test.com","password":"123456"}'
```


## Datos de ejemplo (opcional)
```bash
npm run seed
```
Esto crea un par de capacitaciones futuras para probar la interfaz.

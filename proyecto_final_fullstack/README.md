# Proyecto Final – Plataforma de Capacitaciones (General)

> Entrega en español colombiano, tono cercano y sin tecnicismos innecesarios.

Este repo une **frontend (Angular)** y **backend (Node.js + Express + MongoDB)**. La idea: una plataforma sencilla para gestionar capacitaciones (crear sesiones, ver próximas, registrarse/iniciar sesión y ver un dashboard).

## Estructura
```
proyecto_final_fullstack/
├─ backend/        # API Node/Express lista para usar
└─ frontend/       # Fuente Angular (listo para montar con Angular CLI)
```

## Cómo correr rápido (local)
### 1) Backend
1. Entra a `backend/`
2. `npm install`
3. Copia `.env.example` a `.env` y pon tus valores (sobre todo `MONGODB_URI`)
4. `npm run dev` (la API queda en http://localhost:4000)

### 2) Frontend (Angular)
Para no llenarte de archivos de boilerplate, acá te dejo **todo el código fuente necesario** (componentes, servicios, rutas, guard, interceptor y environments).  
Solo necesitas crear el proyecto Angular con la CLI y pegar la carpeta `src` que te dejo aquí (o copiar archivo por archivo).

Pasos:
1. Requisitos: Node 18+, Angular CLI (`npm i -g @angular/cli`)
2. Crear proyecto base:
   ```bash
   ng new frontend --routing --style=scss
   ```
3. Reemplaza la carpeta `frontend/src` por la `frontend/src` de esta entrega (sobrescribe).
4. En `frontend/` ejecuta:
   ```bash
   npm install
   ng serve -o
   ```

> Si prefieres que te entregue el proyecto Angular **ya creado completo**, te genero una segunda versión con todos los archivos del CLI. Acá prioricé mantener el zip liviano.

## Demo / Video (opcional pero suma)
Graba 1–2 minutos: login → ver lista de capacitaciones → crear una → dashboard. Esto muestra que es tu trabajo real.

## Huella humana (cómo lo hice y por qué)
- Separé capas en el backend (rutas, controladores, servicios, modelos). Es más fácil de mantener.
- En el frontend usé formularios reactivos, guard y un interceptor de auth. Lo práctico para proyectos reales.
- README y comentarios en español, directo al grano, sin palabreo.
- Dejé un par de “TODOs” con ideas de mejora (claros y alcanzables).

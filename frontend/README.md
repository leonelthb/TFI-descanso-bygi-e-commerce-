# Frontend de Descanso by Gi

Aplicación React y TypeScript construida con Vite. Incluye catálogo público, registro e inicio de sesión, carrito, pedidos y un panel de administración para usuarios autorizados.

## Desarrollo local

Instalá Node.js 22.12 o compatible y pnpm. Desde esta carpeta, copiá el archivo de configuración de ejemplo e iniciá el servidor.

```powershell
Copy-Item .env.example .env
pnpm install --frozen-lockfile
pnpm dev
```

Abrí `http://localhost:5173`. El archivo `.env.example` apunta a `http://localhost:8080`. Iniciá el backend siguiendo el [README principal](../README.md) y mantené ese puerto o ajustá `VITE_API_URL`. Esta variable debe terminar en el dominio y puerto, sin agregar `/api`. Vite incorpora el valor al compilar, por lo que las variables `VITE_*` son públicas.

## Compilación y despliegue

```powershell
pnpm build
pnpm preview
```

El build genera `dist/`. Netlify construye desde esta carpeta con `pnpm build` y publica `dist`. El archivo [netlify.toml](../netlify.toml) redirige las rutas de la aplicación a `index.html` para que React Router pueda resolverlas al navegar directamente.

- [Tienda desplegada](https://tfi-descanso-bygi-e-commerce.netlify.app/)
- [API interactiva](https://descanso-by-gi-api.onrender.com/swagger-ui/index.html)

# Servicio seguro del editor

Este Worker recibe las publicaciones del panel `/admin` y crea los archivos Markdown en GitHub. Las credenciales nunca se incluyen en el sitio público.

## Configuración inicial

1. Instalar dependencias con `npm install` dentro de esta carpeta.
2. Iniciar sesión en Cloudflare con `npx wrangler login`.
3. Guardar los tres secretos:
   - `npx wrangler secret put ADMIN_PASSWORD`
   - `npx wrangler secret put SESSION_SECRET`
   - `npx wrangler secret put GITHUB_TOKEN`
4. Publicar con `npm run deploy`.
5. Copiar la URL obtenida en `public/admin/config.js`.

`GITHUB_TOKEN` debe ser un token de acceso específico para el repositorio `blog-cleyderman`, con permiso **Contents: Read and write**. `SESSION_SECRET` debe ser una cadena larga y aleatoria.

# Blog de Clayderman Ivan

Blog literario construido con Astro. Las historias viven en `src/content/stories` como archivos Markdown.

## Probarlo localmente

```sh
npm install
npm run dev
```

## Crear el repositorio y publicar

1. Crear un repositorio nuevo en GitHub y subir este proyecto a la rama `main`.
2. En GitHub, abrir **Settings → Pages** y elegir **GitHub Actions** como fuente.
3. Cada cambio en `main` construirá y publicará el sitio automáticamente.

## Activar el editor

El editor está disponible en `/admin`, pero antes hay que configurar la autenticación de Decap CMS:

1. Editar `public/admin/config.yml` y reemplazar `REEMPLAZAR_USUARIO/REEMPLAZAR_REPOSITORIO`.
2. Configurar un proveedor OAuth compatible con GitHub y colocar su URL en `base_url`, o usar un backend alojado de Decap.
3. Agregar a Clayderman como colaborador del repositorio.

Al publicar desde el editor se crea o actualiza un Markdown. Cuando ese cambio llega a `main`, GitHub Actions vuelve a desplegar el blog.

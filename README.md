# SocialTech

SocialTech es una aplicación web de noticias tecnológicas desarrollada como proyecto del módulo Front End.

La aplicación permite explorar noticias sobre tecnología, visualizar su información detallada, filtrar contenidos por categoría, guardar noticias favoritas, enviar mensajes mediante un formulario de contacto y administrar noticias creadas por el usuario.

## Tecnologías utilizadas

- Angular
- TypeScript
- HTML
- CSS
- JSON
- localStorage
- Angular Router
- Git y GitHub

## Funcionalidades principales

- Página de inicio con noticias destacadas.
- Listado dinámico de noticias cargadas desde un archivo JSON.
- Filtros de noticias por categoría.
- Vista de detalle de cada noticia.
- Gestión de favoritos mediante localStorage.
- Contador y ordenamiento de noticias favoritas.
- Formulario de contacto con campos obligatorios y mensaje de confirmación.
- Sección de administración para crear y eliminar noticias.
- Integración de noticias creadas desde Administrar con el listado general.
- Navegación entre las diferentes vistas mediante Angular Router.

## Estructura principal del proyecto

El proyecto está organizado mediante componentes Angular:

- `header`: encabezado y menú de navegación.
- `home`: página principal.
- `noticias`: listado y filtrado de noticias.
- `detalle`: información completa de cada noticia y gestión de favoritos.
- `favoritos`: listado, ordenamiento y eliminación de favoritos.
- `contacto`: formulario de contacto.
- `admin`: creación y eliminación de noticias.

Los datos principales de las noticias se encuentran en:

`public/data/noticias.json`

Los recursos gráficos se encuentran en:

`public/images`

## Ejecutar el proyecto localmente

Instalar las dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
ng serve
```

Luego abrir en el navegador:

`http://localhost:4200/`

También se puede utilizar otro puerto, por ejemplo:

```bash
ng serve --port 4201
```

## Compilar el proyecto

Para generar la versión de producción:

```bash
ng build
```

Los archivos compilados se generan dentro de la carpeta `dist`.

## Autor

Yeni Ramos

Proyecto académico – Ingeniería de Software  
Politécnico Grancolombiano  
2026

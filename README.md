<div align="center">

# 🛏️ Descanso by Gi — E-commerce

**Plataforma de e-commerce para una colchonería real, desarrollada como Proyecto Final Integrador.**

![Java](https://img.shields.io/badge/Java-21-orange?logo=openjdk)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-4-brightgreen?logo=springboot)
![React](https://img.shields.io/badge/React-TypeScript-blue?logo=react)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)


</div>

---

## 📋 Índice

- [Sobre el proyecto](#-sobre-el-proyecto)
- [Funcionalidades](#-funcionalidades)
- [Documentación](#-documentación)
- [Diagramas](#-diagramas)
- [Alcance](#-alcance)
- [Stack tecnológico](#-stack-tecnológico)
- [Estructura del repositorio](#-estructura-del-repositorio)
- [Módulos funcionales](#-módulos-funcionales)
- [Módulo backend](#-módulo-backend)
- [Módulo frontend](#-módulo-frontend)
- [Cómo empezar](#-cómo-empezar)
- [Variables de entorno](#-variables-de-entorno)
- [Roadmap](#-roadmap)
- [Equipo](#-equipo)

---

## 📖 Sobre el proyecto

**Descanso by Gi** es una colchonería real que opera hoy únicamente a través de redes sociales y WhatsApp, sin un canal digital propio. Esto limita su alcance: no hay catálogo disponible las 24 horas, no hay forma de comparar productos sin contacto directo, no hay indexación en buscadores y no se recopilan datos sobre el comportamiento de compra.

Este proyecto construye una plataforma web que resuelve esos problemas, permitiendo a los clientes explorar el catálogo, registrarse, armar pedidos y ver historial de compras, y a la administración gestionar productos, stock y pedidos desde un panel propio.

> Desarrollado como Proyecto Final Integrador — Tecnicatura Universitaria en Programación a Distancia (TUPaD), UTN Facultad Regional San Nicolás.

## ✨ Funcionalidades

- 🛒 Catálogo público con categorías, búsqueda y detalle de producto
- 👤 Registro, login y cuenta de cliente
- 🧺 Carrito de compras persistente
- ✅ Confirmación de pedido con coordinación de pago por WhatsApp/transferencia
- ⚙️ Panel administrativo para gestión de pedidos y stock

## 📚 Documentación

Toda la documentación técnica del proyecto se encuentra centralizada en la carpeta [`docs/`](./docs/).

### 📄 Documentos

- [Requisitos](./docs/requisitos.md)  
  Requisitos funcionales y no funcionales del sistema.

- [Reglas de negocio](./docs/reglas-negocio.md)  
  Reglas que definen el comportamiento y las restricciones del sistema.

- [Diccionario de datos](./docs/diccionario-datos.md)  
  Descripción de las entidades, atributos y datos utilizados por el sistema.

## 📐 Diagramas

La carpeta [`docs/Diagramas/`](./docs/Diagramas/) contiene los principales diagramas utilizados durante el análisis y diseño del proyecto:

- [Ver diagrama entidad-relación (ER)](./docs/Diagramas/ER_PostgreSQL_Descanso_by_Gi.png)
- [Ver diagrama UML](./docs/Diagramas/UML-Descanso-by.png)

Los diagramas permiten visualizar la estructura de la base de datos y el diseño de las principales entidades y relaciones del sistema.

## 📊 Alcance

### Alcance del Producto

**Características principales que se van a construir:**

- 🛒 Catálogo público con categorías, búsqueda y detalle de producto
- 👤 Registro, login y gestión de cuenta
- 🧺 Carrito de compras persistente
- ✅ Confirmación de pedido (coordinación de pago por WhatsApp/transferencia)
- ⚙️ Panel administrativo para gestión de productos, stock y órdenes
- 📱 Diseño responsivo (mobile, desktop)

### Alcance del Proyecto

**Trabajo que hay que realizar para entregar el producto:**

**1. Análisis** 
- Análisis de requisitos funcionales y no-funcionales
- Diseño de arquitectura del sistema
- Diseño de base de datos (modelo relacional, tablas, índices)
- Documentación de rutas y contratos HTTP generada con OpenAPI

**2. Desarrollo** 
- Backend: APIs REST en Java Spring Boot (productos, carrito, pedidos, usuarios)
- Frontend: Interfaz React + TypeScript (catálogo, carrito, checkout, admin, cliente)
- Base de datos: PostgreSQL, scripts DDL/DML, migraciones
- Integración frontend-backend

**3. Pruebas** 
- Testing unitario (backend)
- Testing de integración (APIs + DB)
- Testing funcional (casos de uso principales)
- Testing de seguridad (autenticación, validaciones)

**4. Documentación** 
- README completo con instrucciones de instalación
- Documentación técnica del modelo de datos, la API y el despliegue
- Diagramas (ER diagram)

**5. Deployment** 
- Deploy frontend en Netlify
- Deploy backend en Render
- Deploy DB en Supabase
- Testing en ambiente de producción

**6. Video explicativo** 
- Video demostrando el proyecto 

---

## 🧱 Stack tecnológico

| Capa | Tecnología |
|---|---|
| Frontend | React + TypeScript + Tailwind CSS 4 |
| Backend | Java + Spring Boot |
| Base de datos | PostgreSQL |

---

## 📁 Estructura del repositorio

```
descanso-by-gi/
├── backend/
│   ├── src/
│   ├── sql/
│   │   └── restricciones-integridad.sql
│   ├── scripts/
│   │   └── generar-dump.ps1
│   ├── Dockerfile
│   ├── build.gradle
│   ├── gradlew
│   └── gradlew.bat
├── docs/
│   ├── Diagramas/
│   ├── diccionario-datos.md
│   ├── reglas-negocio.md
│   └── requisitos.md
├── database/
│   └── README.md
├── frontend/
│   ├── src/
│   ├── public/
│   ├── .env.example
│   ├── package.json
│   └── README.md
├── netlify.toml
├── render.yaml
└── README.md
```

---

## 🧩 Módulos funcionales

El sistema se organiza en los siguientes módulos, definidos a partir de los [requisitos funcionales](./docs/requisitos.md):

| Módulo | Descripción | Requisitos |
|---|---|---|
| 👤 **Usuarios** | Registro, inicio de sesión y gestión de la cuenta (consulta y modificación de datos personales). | RF01 – RF03 |
| 🛒 **Catálogo** | Consulta de productos, agrupación por categorías, búsqueda, filtros y detalle de producto con imágenes. | RF04 – RF08 |
| 🧺 **Carrito** | Consulta del carrito, agregar productos con cantidad, modificar cantidades y eliminar productos. | RF09 – RF12 |
| 📦 **Pedidos** | Confirmación del carrito como pedido y consulta del historial y detalle de pedidos del cliente. | RF13 – RF15 |
| ⚙️ **Administración** | Gestión de productos, categorías, marcas, imágenes, stock, pedidos y usuarios. Acceso restringido por rol (RNF06). | RF16 – RF22 |

---

## Modulo backend

```
backend/
├── src/
│   ├── main/
│   │   ├── java/com/descansobygi/
│   │   │   ├── config/
│   │   │   ├── controllers/
│   │   │   ├── dto/
│   │   │   ├── enums/
│   │   │   ├── exception/
│   │   │   ├── model/
│   │   │   ├── repository/
│   │   │   ├── security/
│   │   │   └── service/
│   │   └── resources/
│   └── test/
├── sql/
│   └── restricciones-integridad.sql
├── Dockerfile
├── build.gradle
├── gradlew
├── gradlew.bat
└── settings.gradle

```

---

## Modulo frontend
El frontend está implementado con React y TypeScript. Usá su [guía de desarrollo](./frontend/README.md) para instalarlo y conectarlo al backend.

```
frontend/
├── src/
│   ├── assets/
│   ├── components/
│   ├── contexts/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── types/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── .env.example
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Cómo empezar

### Requisitos previos

- Java 21+
- Node.js 22.12+
- PostgreSQL

### Backend

```bash
cd backend
./gradlew bootRun
```

Antes de iniciarlo, configurá las variables de PostgreSQL y `JWT_SECRET` indicadas abajo. En desarrollo, Hibernate crea o actualiza las tablas al iniciar el backend (`spring.jpa.hibernate.ddl-auto=update`).

### Frontend

```bash
cd frontend
cp .env.example .env
pnpm install
pnpm dev
```

En Windows PowerShell, usá `Copy-Item .env.example .env` en lugar de `cp`.

### Base de datos

Para reconstruir la base sin acceso a Supabase, usá el [dump incluido](./database/dumps/descanso_by_gi.sql) y seguí las [instrucciones de restauración](./database/README.md#restaurar-el-dump-entregado). El archivo incluye el esquema y tres productos ficticios de demostración.

Creá una base PostgreSQL vacía llamada `descanso_by_gi` (o usá el nombre que definas en `DB_URL`). El backend crea las tablas de las entidades al iniciarse. El repositorio no incluye archivos `schema.sql` ni `data.sql`; para agregar los `CHECK` del diccionario a una base que ya tenía las tablas, ejecutá una vez `backend/sql/restricciones-integridad.sql`.

Para generar un dump PostgreSQL reproducible para la entrega, ejecutá `backend/scripts/generar-dump.ps1`. El script exporta el esquema y el catálogo, y deja vacías las tablas que podrían contener cuentas, datos personales o pedidos reales. Los pasos para generarlo y restaurarlo están en [`database/README.md`](./database/README.md).
## 🔐 Variables de entorno

> ⚠️ **Importante:** El backend no arranca sin estas cuatro variables.  
> **Nunca subas credenciales reales al repositorio.**

| Variable | Descripción | Ejemplo |
|:---|:---|:---|
| `DB_URL` | URL de conexión a PostgreSQL | `jdbc:postgresql://<host>:<puerto>/<base_de_datos>` |
| `DB_USERNAME` | Usuario de la base de datos | `<usuario>` |
| `DB_PASSWORD` | Contraseña de la base de datos | `<contraseña>` |
| `JWT_SECRET` | Clave para firmar los tokens JWT (mínimo 32 caracteres, distinta en cada entorno) | `<clave>` |
| `CORS_ALLOWED_ORIGINS` | Origen(es) del frontend permitidos, separados por coma; opcional en local | `http://localhost:5173` |

El frontend usa `VITE_API_URL`, definido en `frontend/.env.example` para desarrollo local.

### ☁️ Despliegue en la nube

| Componente | Ambiente desplegado |
|---|---|
| Frontend | [Tienda pública en Netlify](https://tfi-descanso-bygi-e-commerce.netlify.app/) |
| Backend | [API del catálogo en Render](https://descanso-by-gi-api.onrender.com/api/catalogo/producto) · [Swagger UI](https://descanso-by-gi-api.onrender.com/swagger-ui/index.html) · [OpenAPI JSON](https://descanso-by-gi-api.onrender.com/v3/api-docs) |
| Base de datos | [Proyecto PostgreSQL en Supabase](https://supabase.com/dashboard/project/mzebhsttmuyqzvhmqfcx) (requiere acceso al proyecto) |

Se verificó que la tienda abre públicamente y que la API del catálogo responde con HTTP 200 desde el dominio de Netlify. El catálogo incluye tres productos ficticios con precios ilustrativos. El inventario comercial queda pendiente de validación por el equipo.

Los resultados de la prueba en producción, la suite automatizada y la restauración están en [Verificación de la entrega](./docs/verificacion-entrega.md).

#### Configuración del despliegue

1. **Supabase.** Desde **Connect**, obtené los datos de **Session pooler**. En Render, configurá `DB_URL` con el formato `jdbc:postgresql://<host-del-pooler>:5432/<base>?sslmode=require`, y completá `DB_USERNAME` y `DB_PASSWORD` con las credenciales de PostgreSQL.
2. **Render.** El servicio `descanso-by-gi-api` usa la rama `main`, la carpeta `backend/` y su [Dockerfile](./backend/Dockerfile) con Java 21. Configurá `JWT_SECRET` con una clave aleatoria de al menos 32 caracteres y `CORS_ALLOWED_ORIGINS` con el origen HTTPS de Netlify, sin rutas ni barra final. El repositorio también incluye [render.yaml](./render.yaml) para configurar un despliegue mediante Blueprint.
3. **Netlify.** El sitio usa la rama `main`, `frontend/` como directorio base, `pnpm build` como comando y `dist` como directorio de publicación relativo a la base. Definí `VITE_API_URL` con la URL pública HTTPS de Render, sin agregar `/api`. [netlify.toml](./netlify.toml) también configura la redirección que permite abrir directamente las rutas de React Router.

No guardes credenciales en estos archivos ni en el repositorio; ingresalas en las variables de entorno de cada servicio. Para desarrollo local, `frontend/.env.example` conserva la URL local.

#### Crear el primer administrador

El registro público crea usuarios con rol `USUARIO`; no permite elegir ni asignarse el rol administrador. Para habilitar el panel en un entorno nuevo:

1. Registrá la cuenta que usará el administrador desde la página. Así la contraseña queda almacenada con el cifrado que usa la aplicación.
2. Desde el editor SQL de Supabase, con una cuenta autorizada para administrar la base, promovela indicando el correo registrado:

```sql
UPDATE public.usuarios
SET rol = 'ADMINISTRADOR'
WHERE mail = 'correo-del-administrador@ejemplo.com'
  AND eliminado = FALSE;
```

3. Confirmá que la operación afectó una fila. Cerrá sesión y volvé a ingresar para que el nuevo token incluya el rol actualizado.


### 🖥️ Configuración local

En **Windows PowerShell**, ejecutá:

```powershell
$env:DB_URL="jdbc:postgresql://<host>:<puerto>/<base_de_datos>"
$env:DB_USERNAME="<usuario>"
$env:DB_PASSWORD="<contraseña>"
$env:JWT_SECRET="<clave-de-al-menos-32-caracteres>"
$env:CORS_ALLOWED_ORIGINS="http://localhost:5173"

```
---

## 🗺️ Roadmap

- [x] Análisis y diseño (requisitos, DB, arquitectura)
- [x] Setup inicial del proyecto (repos, dependencias)
- [x] Backend base + APIs de productos y categorías
- [x] Autenticación (login/registro) + carrito
- [x] Checkout + panel administrativo
- [x] Integración, pruebas automatizadas y documentación
- [ ] Pruebas manuales de los flujos en el navegador
- [x] Despliegue en la nube
- [x] Carga del catálogo de demostración en producción
- [x] Restauración del dump en una base PostgreSQL vacía
- [ ] Video explicativo

---

## 👥 Equipo

| Nombre |
|---|
| Cain Cabrera Bertolazzi |
| Leonel Jesús Allabay |
| Alex Nahuel Austin |

**Tutor:** Sofia Raia.
**Materia:** Trabajo Final Integrador  
**Facultad:** UTN Facultad Regional San Nicolás

---







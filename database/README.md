# Dump PostgreSQL para la entrega

El dump se genera con `pg_dump` e incluye el esquema completo y los datos del catálogo. Las tablas `usuarios`, `carritos`, `items_carrito`, `pedidos` y `detalles_pedido` aparecen en el esquema pero se exportan sin filas para no compartir cuentas, información personal ni pedidos reales.

## Generarlo en Windows PowerShell

Desde la carpeta raíz del repositorio:

```powershell
.\backend\scripts\generar-dump.ps1 -Username TU_USUARIO
```

El script usa por defecto `localhost:5432` y la base `descanso_by_gi`. Se pueden cambiar esos valores:

```powershell
.\backend\scripts\generar-dump.ps1 -PgHost localhost -Port 5432 -Database descanso_by_gi -Username TU_USUARIO
```

`pg_dump` solicita la contraseña durante la ejecución. No la escribas en el archivo ni la compartas por chat. El resultado queda en `database/dumps/descanso_by_gi_<fecha>.sql`.

Antes de generar el dump, asegurate de que el servicio PostgreSQL esté iniciado y de que la base tenga el esquema actualizado. Si la base existente todavía no tiene las restricciones `CHECK`, aplicá primero `backend/sql/restricciones-integridad.sql`.

## Restaurar el dump entregado

El [dump entregado](./dumps/descanso_by_gi.sql) se puede restaurar en PostgreSQL sin acceso a Supabase. Creá una base vacía y ejecutá desde la raíz del repositorio:

```powershell
createdb -h localhost -p 5432 -U TU_USUARIO descanso_by_gi
psql -h localhost -p 5432 -U TU_USUARIO -d descanso_by_gi -v ON_ERROR_STOP=1 --single-transaction -f .\database\dumps\descanso_by_gi.sql
```

`psql` solicitará la contraseña. Después de restaurar el dump, iniciá el backend con sus variables de entorno y registrá las cuentas de prueba desde la aplicación; el dump no contiene usuarios ni pedidos.

El 24 de noviembre de 2026 verificamos la restauración con `psql` y PostgreSQL 18 en una base nueva. El resultado fue de nueve tablas en el esquema `public`, tres productos ficticios y ninguna fila en las cinco tablas de usuarios, carritos y pedidos. El dump conserva las relaciones, las secuencias y las restricciones exportadas del esquema.

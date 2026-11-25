import { Link } from 'react-router-dom'

// Se calcula una vez al cargar la aplicación; alcanza para mostrar el año del copyright.
const anioActual = new Date().getFullYear()

// Pie de página común a todas las páginas que muestran el encabezado.
function PiePagina() {
    return (
        <footer className="mt-auto bg-brand-950 px-6 py-10 text-brand-100">
            <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">

                <div>
                    <Link to="/" className="text-xl font-bold tracking-wide">
                        Descanso by Gi
                    </Link>
                    <p className="mt-3 text-sm text-brand-300">
                        Colchones, almohadas y todo para tu descanso.
                    </p>
                </div>

                <nav aria-label="Enlaces del pie de página">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-300">
                        Navegación
                    </h2>
                    <ul className="mt-3 space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-brand-300">Inicio</Link></li>
                        <li><Link to="/catalogo" className="hover:text-brand-300">Catálogo</Link></li>
                    </ul>
                </nav>

                <div>
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-300">
                        Compras
                    </h2>
                    <p className="mt-3 text-sm">
                        El pago y la entrega de cada pedido se coordinan por WhatsApp con Descanso by Gi.
                    </p>
                </div>

            </div>

            <div className="mx-auto mt-8 max-w-7xl border-t border-brand-800 pt-6 text-center text-xs text-brand-300">
                © {anioActual} Descanso by Gi · Proyecto Final Integrador — TUPaD, UTN Facultad Regional San Nicolás
            </div>
        </footer>
    )
}

export default PiePagina

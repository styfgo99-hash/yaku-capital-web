/*
  ICONOS DE EXCHANGES
  ---------------------
  SVGs vectoriales recreando la geometria e identidad visual de cada marca
  (formas y colores), usados unicamente para identificacion neutral en la
  secccion "Operamos en". No son archivos descargados de paginas de
  terceros -- son recreaciones vectoriales propias basadas en el aspecto
  publico de cada marca.

  IMPORTANTE: como se discutio, mostrar estos logos sin autorizacion de
  cada exchange conlleva un riesgo legal real (uso de marca registrada
  sin permiso). Esta es una decision de negocio que tomaste con ese
  riesgo entendido.
*/

export function IconoBinance({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4L19.6 7.6L16 11.2L12.4 7.6L16 4Z" fill="#F0B90B" />
      <path d="M8.8 11.2L12.4 14.8L8.8 18.4L5.2 14.8L8.8 11.2Z" fill="#F0B90B" />
      <path d="M23.2 11.2L26.8 14.8L23.2 18.4L19.6 14.8L23.2 11.2Z" fill="#F0B90B" />
      <path d="M16 18.4L19.6 22L16 25.6L12.4 22L16 18.4Z" fill="#F0B90B" />
      <path d="M16 11.2L19.6 14.8L16 18.4L12.4 14.8L16 11.2Z" fill="#F0B90B" />
    </svg>
  );
}

export function IconoOKX({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="7" height="7" fill="#FFFFFF" />
      <rect x="21" y="4" width="7" height="7" fill="#FFFFFF" />
      <rect x="12.5" y="12.5" width="7" height="7" fill="#FFFFFF" />
      <rect x="4" y="21" width="7" height="7" fill="#FFFFFF" />
      <rect x="21" y="21" width="7" height="7" fill="#FFFFFF" />
    </svg>
  );
}

export function IconoBybit({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="28" height="28" rx="6" fill="#F7A600" />
      <path
        d="M9 10H14.5C16.5 10 18 11.3 18 13.1C18 14.3 17.4 15.1 16.5 15.6C17.7 16 18.5 16.9 18.5 18.3C18.5 20.3 16.9 21.6 14.7 21.6H9V10ZM12 12.2V14.9H14.1C15 14.9 15.5 14.4 15.5 13.5C15.5 12.7 15 12.2 14.1 12.2H12ZM12 17V19.4H14.4C15.4 19.4 15.9 18.9 15.9 18.2C15.9 17.5 15.4 17 14.4 17H12Z"
        fill="#0A0A0A"
      />
      <path d="M19.5 10H22.3L24 13.2L25.7 10H28.5L25.3 15.6V21.6H22.7V15.6L19.5 10Z" fill="#0A0A0A" />
    </svg>
  );
}

export function IconoBitget({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 6L11 16.5H19L10 26L21 15.5H13L22 6Z"
        fill="#00E0C6"
        stroke="#00E0C6"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

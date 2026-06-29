import LegalLayout from "../../Components/LegalLayout";

export const metadata = {
  title: "Política de Cookies — YAKU CAPITAL",
  description: "Política de cookies de YAKU CAPITAL GROUP S.A.C.",
};

export default function Cookies() {
  return (
    <LegalLayout title="Política de Cookies" updated="junio 2026">
      <h2 className="font-display text-base font-semibold uppercase text-text">1. ¿Qué son las cookies?</h2>
      <p className="text-sm text-muted leading-relaxed">Son pequeños archivos que el sitio guarda en tu navegador para recordar preferencias y mejorar tu experiencia de navegación.</p>

      <h2 className="font-display text-base font-semibold uppercase text-text">2. Cookies que usamos</h2>
      <p className="text-sm text-muted leading-relaxed">Utilizamos cookies técnicas necesarias para el funcionamiento del sitio. Si en el futuro incorporamos cookies de analítica o publicidad, actualizaremos esta política e incluiremos un mecanismo de consentimiento.</p>

      <h2 className="font-display text-base font-semibold uppercase text-text">3. Cómo desactivarlas</h2>
      <p className="text-sm text-muted leading-relaxed">Puedes configurar tu navegador para rechazar cookies; algunas funciones del sitio podrían verse limitadas.</p>

      <h2 className="font-display text-base font-semibold uppercase text-text">4. Cambios a esta política</h2>
      <p className="text-sm text-muted leading-relaxed">Podemos actualizar esta política periódicamente. La fecha de la última actualización se indica al inicio de esta página.</p>
    </LegalLayout>
  );
}

import LegalLayout from "../../Components/LegalLayout";
import ComplaintForm from "../../Components/ComplaintForm";

export const metadata = {
  title: "Libro de Reclamaciones — YAKU CAPITAL",
  description: "Libro de Reclamaciones Virtual de YAKU CAPITAL GROUP S.A.C., conforme a la Ley N.° 29571.",
};

export default function LibroReclamaciones() {
  return (
    <LegalLayout title="Libro de Reclamaciones">
      <p className="text-sm text-muted leading-relaxed">Conforme a la Ley N.° 29571 (Código de Protección y Defensa del Consumidor), <strong className="text-text">YAKU CAPITAL GROUP S.A.C.</strong> pone a tu disposición este Libro de Reclamaciones Virtual. Completa el formulario y se abrirá tu correo con todo listo para enviarnos.</p>
      <ComplaintForm />
      <p className="text-sm text-muted leading-relaxed">Responderemos tu reclamo en un plazo no mayor a 30 días calendario, conforme a ley. Registrar un reclamo no impide acudir a otras vías de solución de controversias, como INDECOPI.</p>
    </LegalLayout>
  );
}
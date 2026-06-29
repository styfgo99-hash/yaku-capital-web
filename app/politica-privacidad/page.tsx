import LegalLayout from "../../Components/LegalLayout";

export const metadata = {
  title: "Política de Privacidad — YAKU CAPITAL",
  description: "Política de tratamiento de datos personales de YAKU CAPITAL GROUP S.A.C.",
};

export default function PoliticaPrivacidad() {
  return (
    <LegalLayout title="Política de Privacidad" updated="junio 2026">
      <h2 className="font-display text-base font-semibold uppercase text-text">1. Responsable del tratamiento</h2>
      <p className="text-sm text-muted leading-relaxed"><strong className="text-text">YAKU CAPITAL GROUP S.A.C.</strong> (RUC 20616011732), con domicilio en Av. Militar N.° 1727, Lince, Lima, es responsable del tratamiento de los datos personales recogidos a través de este sitio y de sus operaciones.</p>

      <h2 className="font-display text-base font-semibold uppercase text-text">2. Datos que recopilamos</h2>
      <p className="text-sm text-muted leading-relaxed">Recopilamos datos de identificación y contacto (nombre, documento de identidad, correo, teléfono) y, para la ejecución de operaciones, datos adicionales requeridos por nuestros procesos de verificación de identidad (KYC).</p>

      <h2 className="font-display text-base font-semibold uppercase text-text">3. Finalidad</h2>
      <p className="text-sm text-muted leading-relaxed">Los datos se utilizan para: atender consultas, ejecutar operaciones de cambio de activos virtuales, cumplir con obligaciones de prevención de lavado de activos y financiamiento del terrorismo, y comunicarnos contigo sobre tus operaciones.</p>

      <h2 className="font-display text-base font-semibold uppercase text-text">4. Base legal</h2>
      <p className="text-sm text-muted leading-relaxed">El tratamiento se realiza conforme a la Ley N.° 29733 (Ley de Protección de Datos Personales) y su reglamento, Decreto Supremo N.° 016-2024-JUS.</p>

      <h2 className="font-display text-base font-semibold uppercase text-text">5. Prevención de lavado de activos</h2>
      <p className="text-sm text-muted leading-relaxed">En cumplimiento del Decreto Legislativo N.° 1106 y la normativa de la Unidad de Inteligencia Financiera (UIF), YAKU CAPITAL aplica políticas de debida diligencia y reporta operaciones conforme a ley.</p>

      <h2 className="font-display text-base font-semibold uppercase text-text">6. Tus derechos (ARCO)</h2>
      <p className="text-sm text-muted leading-relaxed">Puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición sobre tus datos personales escribiendo a <strong className="text-text">contacto@yakugroup.com.pe</strong>.</p>
    </LegalLayout>
  );
}

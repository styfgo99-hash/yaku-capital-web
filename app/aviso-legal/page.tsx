import LegalLayout from "../../Components/LegalLayout";

export const metadata = {
  title: "Aviso Legal — YAKU CAPITAL",
  description: "Aviso legal de YAKU CAPITAL GROUP S.A.C.",
};

export default function AvisoLegal() {
  return (
    <LegalLayout title="Aviso Legal" updated="junio 2026">
      <h2 className="font-display text-base font-semibold uppercase text-text">1. Identificación del titular</h2>
      <p className="text-sm text-muted leading-relaxed">Este sitio web es operado por <strong className="text-text">YAKU CAPITAL GROUP S.A.C.</strong>, con RUC N.° 20616011732, domiciliada en Av. Militar N.° 1727, Lince, Lima, Perú. Para cualquier consulta puede escribir a <strong className="text-text">contacto@yakugroup.com.pe</strong>.</p>

      <h2 className="font-display text-base font-semibold uppercase text-text">2. Objeto del sitio</h2>
      <p className="text-sm text-muted leading-relaxed">Este sitio tiene como finalidad informar sobre los servicios de conversión de activos virtuales a moneda fiat (y viceversa) ofrecidos por YAKU CAPITAL, así como facilitar el contacto con potenciales clientes.</p>

      <h2 className="font-display text-base font-semibold uppercase text-text">3. Condición de Proveedor de Servicios de Activos Virtuales</h2>
      <p className="text-sm text-muted leading-relaxed">YAKU CAPITAL GROUP S.A.C. se encuentra inscrita en el Registro de Proveedores de Servicios de Activos Virtuales de la Superintendencia de Banca, Seguros y AFP (SBS) bajo el N.° 02914-2025, conforme a lo dispuesto por la Ley N.° 27693, su reglamento (Decreto Supremo N.° 006-2023-JUS) y la Resolución SBS N.° 02648-2024.</p>

      <h2 className="font-display text-base font-semibold uppercase text-text">4. Propiedad intelectual</h2>
      <p className="text-sm text-muted leading-relaxed">Los contenidos, marcas, logotipos y demás elementos de este sitio son propiedad de YAKU CAPITAL GROUP S.A.C. o de terceros que han autorizado su uso, y no podrán reproducirse sin autorización previa.</p>

      <h2 className="font-display text-base font-semibold uppercase text-text">5. Limitación de responsabilidad</h2>
      <p className="text-sm text-muted leading-relaxed">La información publicada en este sitio tiene carácter informativo. Los términos y condiciones específicos de cada operación se rigen por el contrato que se suscribe al momento de realizar una transacción.</p>

      <h2 className="font-display text-base font-semibold uppercase text-text">6. Legislación aplicable</h2>
      <p className="text-sm text-muted leading-relaxed">Este aviso se rige por las leyes de la República del Perú, incluyendo la Ley N.° 29571 (Código de Protección y Defensa del Consumidor).</p>
    </LegalLayout>
  );
}

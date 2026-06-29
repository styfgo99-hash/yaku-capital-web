export default function LegalLayout({ title, children }: { title: string; updated?: string; children: React.ReactNode }) {
  return (
    <main className="px-6 md:px-16 pt-32 pb-24 max-w-4xl mx-auto">
      <h1 className="font-display text-3xl md:text-4xl font-bold uppercase mb-10">{title}</h1>
      <div className="flex flex-col gap-6">{children}</div>
    </main>
  );
}
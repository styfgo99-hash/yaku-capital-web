import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <Image
        src="/logo-icon-glow.webp"
        alt="YAKU CAPITAL"
        width={200}
        height={200}
        priority
      />
      <h1 className="font-display text-5xl font-bold text-accent">
        YAKU CAPITAL
      </h1>
    </main>
  );
}
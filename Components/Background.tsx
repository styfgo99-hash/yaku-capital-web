export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="orb o1" />
      <div className="orb o2" />
      <div className="orb o3" />
      <div className="grain" />
    </div>
  );
}

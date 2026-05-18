export default function ServiceCard({ title, description }) {
  return (
    <div className="card p-6 border-t-4 border-(--primary) flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-(--on-surface) mb-4">
          {title}
        </h3>
        <p className="text-(--on-surface-variant) text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
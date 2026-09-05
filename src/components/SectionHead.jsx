export default function SectionHead({ label, count, id }) {
  return (
    <div className="section-head" id={id}>
      <span className="eyebrow">
        <span className="dot" />
        {label}
      </span>
      {count && <span className="section-index">{count}</span>}
    </div>
  )
}

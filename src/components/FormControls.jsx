export function Icon({ children }) {
  return (
    <span className="icon" aria-hidden="true">
      {children}
    </span>
  );
}

export function Field({ label, hint, children }) {
  return (
    <div className="field">
      <span className="field-label">{label}</span>
      {hint && <span className="field-hint">{hint}</span>}
      {children}
    </div>
  );
}

export function TextInput({ value, onChange, placeholder, ariaLabel }) {
  return (
    <input
      className="text-input"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      aria-label={ariaLabel}
    />
  );
}

export function ColorInput({ label, value, onChange }) {
  return (
    <label className="color-row">
      <span>{label}</span>
      <span className="color-control">
        <input
          type="color"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
        <span>{value.toUpperCase()}</span>
      </span>
    </label>
  );
}

export function Range({
  label,
  hint,
  value,
  suffix,
  min,
  max,
  step = 1,
  onChange,
}) {
  return (
    <>
      <div className="range-row">
        <div>
          <span className="field-label">{label}</span>
          <span className="field-hint">{hint}</span>
        </div>
        <output>
          {value}
          {suffix}
        </output>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </>
  );
}

import { ColorInput, Range } from "./FormControls";

export default function StylingPanel({ styles, setStyles }) {
  const update = (key, value) =>
    setStyles((current) => ({ ...current, [key]: value }));

  return (
    <div className="settings-stack">
      <section className="settings-section">
        <SectionHeading
          eyebrow="01 / Color palette"
          title="Set the mood"
          letter="A"
        />
        <ColorInput
          label="Background"
          value={styles.background}
          onChange={(value) => update("background", value)}
        />
        <ColorInput
          label="Title"
          value={styles.title}
          onChange={(value) => update("title", value)}
        />
        <ColorInput
          label="Subtitle"
          value={styles.subtitle}
          onChange={(value) => update("subtitle", value)}
        />
        <ColorInput
          label="Button"
          value={styles.button}
          onChange={(value) => update("button", value)}
        />
        <ColorInput
          label="Button text"
          value={styles.buttonText}
          onChange={(value) => update("buttonText", value)}
        />
      </section>

      <section className="settings-section">
        <SectionHeading
          eyebrow="02 / Type & shape"
          title="Make it feel yours"
          letter="B"
        />
        <Range
          label="Font size"
          hint="Comfortable reading scale"
          value={styles.fontSize}
          suffix="px"
          min="14"
          max="24"
          onChange={(value) => update("fontSize", value)}
        />
        <Range
          label="Font weight"
          hint="Title and question weight"
          value={styles.weight}
          suffix=""
          min="400"
          max="800"
          step="100"
          onChange={(value) => update("weight", value)}
        />
        <Range
          label="Border radius"
          hint="Roundness of the card"
          value={styles.radius}
          suffix="px"
          min="0"
          max="32"
          onChange={(value) => update("radius", value)}
        />
      </section>

      <section className="settings-section">
        <SectionHeading
          eyebrow="03 / Button & rating"
          title="Polish the details"
          letter="C"
        />
        <Range
          label="Button width"
          hint="Relative to the popup"
          value={styles.buttonWidth}
          suffix="%"
          min="60"
          max="100"
          onChange={(value) => update("buttonWidth", value)}
        />
        <Range
          label="Button height"
          hint="Tap target size"
          value={styles.buttonHeight}
          suffix="px"
          min="40"
          max="64"
          onChange={(value) => update("buttonHeight", value)}
        />
        <ColorInput
          label="Selected rating"
          value={styles.accent}
          onChange={(value) => update("accent", value)}
        />
        <ColorInput
          label="Unselected rating"
          value={styles.mutedAccent}
          onChange={(value) => update("mutedAccent", value)}
        />
      </section>
    </div>
  );
}

function SectionHeading({ eyebrow, title, letter }) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      <span className="section-number">{letter}</span>
    </div>
  );
}

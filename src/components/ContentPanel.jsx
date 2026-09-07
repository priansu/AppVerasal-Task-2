import { Field, Icon, TextInput } from "./FormControls";

export default function ContentPanel({ content, setContent }) {
  const update = (key, value) =>
    setContent((current) => ({ ...current, [key]: value }));

  const updateOption = (index, value) =>
    update(
      "options",
      content.options.map((option, optionIndex) =>
        optionIndex === index ? value : option,
      ),
    );

  const removeOption = (index) =>
    content.options.length > 1 &&
    update(
      "options",
      content.options.filter((_, optionIndex) => optionIndex !== index),
    );

  const addOption = () =>
    update("options", [
      ...content.options,
      `Option ${content.options.length + 1}`,
    ]);

  const handleMediaChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () =>
      update("media", { name: file.name, type: file.type, url: reader.result });
    reader.readAsDataURL(file);
  };

  return (
    <div className="settings-stack">
      <section className="settings-section">
        <SectionHeading
          eyebrow="01 / Welcome screen"
          title="First impression"
          letter="A"
        />
        <Field label="Title">
          <TextInput
            value={content.welcomeTitle}
            onChange={(value) => update("welcomeTitle", value)}
          />
        </Field>
        <Field label="Subtitle">
          <textarea
            className="text-input text-area"
            aria-label="Welcome subtitle"
            value={content.welcomeSubtitle}
            onChange={(event) => update("welcomeSubtitle", event.target.value)}
          />
        </Field>
      </section>

      <section className="settings-section">
        <SectionHeading
          eyebrow="02 / Feedback screen"
          title="Ask the question"
          letter="B"
        />
        <Field label="Question">
          <TextInput
            value={content.question}
            onChange={(value) => update("question", value)}
          />
        </Field>
        <div className="field">
          <div className="field-label-row">
            <span className="field-label">Answer options</span>
            <span className="field-hint">{content.options.length} options</span>
          </div>
          <div className="option-list">
            {content.options.map((option, index) => (
              <div className="option-row" key={`${index}-${option}`}>
                <span className="drag">⠿</span>
                <input
                  className="text-input"
                  aria-label={`Answer option ${index + 1}`}
                  value={option}
                  onChange={(event) => updateOption(index, event.target.value)}
                />
                <button
                  className="icon-button danger"
                  onClick={() => removeOption(index)}
                  aria-label={`Delete ${option}`}
                  disabled={content.options.length === 1}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          <button className="add-button" onClick={addOption}>
            <Icon>+</Icon> Add option
          </button>
        </div>
        <div className="toggle-row">
          <div>
            <span className="field-label">Additional comments</span>
            <span className="field-hint">
              Let people add context to their answer
            </span>
          </div>
          <button
            className={`toggle ${content.comments ? "active" : ""}`}
            onClick={() => update("comments", !content.comments)}
            aria-label="Toggle comments"
          >
            <span />
          </button>
        </div>
        <Field label="Submit button text">
          <TextInput
            value={content.submitText}
            onChange={(value) => update("submitText", value)}
          />
        </Field>
      </section>

      <section className="settings-section">
        <SectionHeading
          eyebrow="03 / Thank you screen"
          title="Close the loop"
          letter="C"
        />
        <Field label="Media" hint="PNG, JPG, GIF or Lottie">
          <label className="upload-box">
            <span className="upload-mark">↥</span>
            <span>
              <strong>Drop artwork here</strong>
              <small>or browse from your computer</small>
            </span>
            <input
              type="file"
              accept=".png,.jpg,.jpeg,.gif,.json"
              aria-label="Upload thank you screen media"
              onChange={handleMediaChange}
            />
            {content.media && (
              <small className="upload-name">{content.media.name}</small>
            )}
          </label>
        </Field>
        <Field label="Title">
          <TextInput
            value={content.thankTitle}
            onChange={(value) => update("thankTitle", value)}
          />
        </Field>
        <Field label="Subtitle">
          <textarea
            className="text-input text-area"
            aria-label="Thank you subtitle"
            value={content.thankSubtitle}
            onChange={(event) => update("thankSubtitle", event.target.value)}
          />
        </Field>
        <Field label="Button text">
          <TextInput
            value={content.thankButton}
            onChange={(value) => update("thankButton", value)}
          />
        </Field>
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

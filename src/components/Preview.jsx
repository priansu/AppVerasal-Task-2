import { useState } from "react";

export default function Preview({ content, styles, setContent }) {
  const [screen, setScreen] = useState("feedback");
  const [rating, setRating] = useState(4);
  const previewStyle = {
    "--preview-bg": styles.background,
    "--preview-title": styles.title,
    "--preview-subtitle": styles.subtitle,
    "--preview-button": styles.button,
    "--preview-button-text": styles.buttonText,
    "--preview-accent": styles.accent,
    "--preview-muted": styles.mutedAccent,
    "--preview-radius": `${styles.radius}px`,
    "--preview-weight": styles.weight,
    "--preview-button-width": `${styles.buttonWidth}%`,
    "--preview-button-height": `${styles.buttonHeight}px`,
  };

  return (
    <div className="preview-column">
      <div className="preview-topline">
        <div>
          <span className="eyebrow">Live preview</span>
          <h2>See it in context</h2>
        </div>
        <span className="live-pill">
          <i /> Live
        </span>
      </div>
      <div className="device-wrap">
        <div className="device">
          <div className="device-camera" />
          <div className="device-screen">
            <div className="status-bar">
              <span>9:41</span>
              <span>▮▮▮ ◉</span>
            </div>
            <div className="app-backdrop">
              <FakeAppBackground />
              <div className="popup-scrim" />
              <div className="popup" style={previewStyle}>
                {screen === "feedback" ? (
                  <FeedbackScreen
                    content={content}
                    rating={rating}
                    setRating={setRating}
                    setScreen={setScreen}
                    setContent={setContent}
                  />
                ) : (
                  <ThankYouScreen content={content} setScreen={setScreen} />
                )}
              </div>
            </div>
          </div>
          <div className="home-indicator" />
        </div>
      </div>
      <span className="preview-caption">
        Interactive preview · click a star or submit
      </span>
    </div>
  );
}

function FakeAppBackground() {
  return (
    <>
      <div className="fake-nav">
        <span className="fake-logo">P</span>
        <span className="fake-lines">
          <i />
          <i />
          <i />
        </span>
      </div>
      <div className="fake-content">
        <span />
        <span />
        <span />
        <span />
      </div>
    </>
  );
}

function FeedbackScreen({ content, rating, setRating, setScreen, setContent }) {
  return (
    <>
      <div className="popup-icon">✦</div>
      <h3>{content.welcomeTitle}</h3>
      <p>{content.welcomeSubtitle}</p>
      <div className="question-block">
        <strong>{content.question}</strong>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              className={star <= rating ? "selected" : ""}
              onClick={() => setRating(star)}
              aria-label={`Rate ${star} out of 5`}
            >
              ★
            </button>
          ))}
        </div>
        <div className="rating-labels">
          <span>Not great</span>
          <span>Loved it</span>
        </div>
      </div>
      {content.comments && (
        <textarea
          className="comment-input"
          value={content.comment}
          onChange={(event) =>
            setContent((current) => ({
              ...current,
              comment: event.target.value,
            }))
          }
          placeholder="Anything else you want to share?"
          aria-label="Additional feedback"
        />
      )}
      <button className="preview-button" onClick={() => setScreen("thankyou")}>
        {content.submitText}
        <span>→</span>
      </button>
      <button className="skip-button">Maybe later</button>
    </>
  );
}

function ThankYouScreen({ content, setScreen }) {
  return (
    <>
      {content.media ? (
        content.media.type.startsWith("image/") ? (
          <img
            className="thank-you-media"
            src={content.media.url}
            alt="Thank you artwork"
          />
        ) : (
          <div
            className="success-icon media-file"
            aria-label={`Uploaded ${content.media.name}`}
          >
            ✦
          </div>
        )
      ) : (
        <div className="success-icon">✓</div>
      )}
      <h3>{content.thankTitle}</h3>
      <p>{content.thankSubtitle}</p>
      <button className="preview-button" onClick={() => setScreen("feedback")}>
        {content.thankButton}
        <span>→</span>
      </button>
    </>
  );
}

import { useState } from "react";
import { initialContent, initialStyles } from "./campaignDefaults";
import ContentPanel from "./components/ContentPanel";
import Preview from "./components/Preview";
import StylingPanel from "./components/StylingPanel";
import { Icon } from "./components/FormControls";

export default function App() {
  const [tab, setTab] = useState("content");
  const [content, setContent] = useState(initialContent);
  const [styles, setStyles] = useState(initialStyles);
  const isContentTab = tab === "content";

  return (
    <div className="app-shell">
      <Header />
      <main className="workspace">
        <div className="workspace-intro">
          <div>
            <span className="eyebrow">Campaign builder / Draft</span>
            <p>
              Design a thoughtful CSAT moment your customers will actually want
              to answer.
            </p>
          </div>
          <button className="close-button" aria-label="Close builder">
            ×
          </button>
        </div>
        <div className="builder-grid">
          <div className="editor">
            <Tabs tab={tab} setTab={setTab} />
            <div className="tab-intro">
              <span className="tab-icon">{isContentTab ? "✦" : "◒"}</span>
              <div>
                <h2>
                  {isContentTab ? "Tell your story" : "Shape the experience"}
                </h2>
                <p>
                  {isContentTab
                    ? "Write the words that guide your customer through the moment."
                    : "Fine-tune colors, type, and proportions to match your brand."}
                </p>
              </div>
            </div>
            <div
              id={isContentTab ? "content-panel" : "styling-panel"}
              role="tabpanel"
              aria-labelledby={isContentTab ? "content-tab" : "styling-tab"}
            >
              {isContentTab ? (
                <ContentPanel content={content} setContent={setContent} />
              ) : (
                <StylingPanel styles={styles} setStyles={setStyles} />
              )}
            </div>
          </div>
          <Preview content={content} styles={styles} setContent={setContent} />
        </div>
      </main>
      <footer className="footer">
        <span>
          <strong>Pulseframe</strong> campaign builder
        </span>
        <span>
          Built for better conversations <b>✦</b>
        </span>
      </footer>
    </div>
  );
}

function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="/" aria-label="Pulseframe home">
        <span className="brand-mark">P</span>
        <span>pulseframe</span>
      </a>
      <div className="breadcrumbs">
        <span>Campaigns</span>
        <b>/</b>
        <strong>New CSAT campaign</strong>
      </div>
      <div className="top-actions">
        <span className="saved">
          <i /> All changes saved
        </span>
        <button className="avatar">AV</button>
      </div>
    </header>
  );
}

function Tabs({ tab, setTab }) {
  return (
    <div className="tabs" role="tablist">
      <button
        id="content-tab"
        role="tab"
        aria-selected={tab === "content"}
        aria-controls="content-panel"
        className={tab === "content" ? "active" : ""}
        onClick={() => setTab("content")}
      >
        <Icon>✦</Icon> Content <span>3</span>
      </button>
      <button
        id="styling-tab"
        role="tab"
        aria-selected={tab === "styling"}
        aria-controls="styling-panel"
        className={tab === "styling" ? "active" : ""}
        onClick={() => setTab("styling")}
      >
        <Icon>◒</Icon> Styling <span>3</span>
      </button>
    </div>
  );
}

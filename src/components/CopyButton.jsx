import React, { useState } from "react";
import "./CopyButton.css";

const CopyButton = ({ value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch {
      alert("failed to copy.");
    }
  };

  return (
    <span
      className="copy-wrapper"
      onClick={handleCopy}
      role="button"
      tabIndex={0}
    >
      <span className="copy-text">{copied ? "Copied!" : "Copy"}</span>
    </span>
  );
};

export default CopyButton;

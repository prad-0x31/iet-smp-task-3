"use client";
import { useState } from "react";

export default function Certificate() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container">
      {!submitted ? (
        <>
          <div className="tag green">Day 2 complete · All 5 stages</div>
          <h1>You <span>saved the launch</span>.<br />Enter your name.</h1>
          <p className="subtitle">
            5 bugs. 5 fixes. Two days. One successful deployment.
            You did what the senior dev couldn&apos;t — you shipped it.
            <br /><br />
            Enter your name to claim your certificate.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <input
              type="text"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                flex: 1,
                minWidth: "200px",
                padding: "10px 14px",
                background: "#111",
                border: "1px solid #374151",
                borderRadius: "6px",
                color: "#fff",
                fontFamily: "inherit",
                fontSize: "14px",
                outline: "none",
              }}
            />
            <button
              onClick={() => { if (name.trim()) setSubmitted(true); }}
              style={{
                padding: "10px 20px",
                background: "#14532d",
                border: "1px solid #4ade80",
                borderRadius: "6px",
                color: "#4ade80",
                fontFamily: "inherit",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Generate
            </button>
          </div>
        </>
      ) : (
        <div style={{
          border: "1px solid #374151",
          borderRadius: "12px",
          padding: "2.5rem",
          textAlign: "center",
          background: "#0d1117",
        }}>
          <div className="tag green" style={{ margin: "0 auto 1.5rem" }}>
            IET CIPHER · SMP 2026
          </div>

          <p style={{ fontSize: "12px", letterSpacing: "0.15em", color: "#6b7280", textTransform: "uppercase", marginBottom: "8px" }}>
            Certificate of Completion
          </p>

          <h1 style={{ fontSize: "32px", marginBottom: "6px" }}>
            <span>{name}</span>
          </h1>

          <p style={{ color: "#6b7280", fontSize: "13px", marginBottom: "2rem" }}>
            has successfully completed the
          </p>

          <p style={{ fontSize: "18px", color: "#fff", fontWeight: "700", marginBottom: "2rem", letterSpacing: "0.05em" }}>
            DEPLOY HUNT — SESSION 03
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "10px",
            marginBottom: "2rem",
          }}>
            {[
              { label: "Stage 1", desc: "Build command" },
              { label: "Stage 2", desc: "Bad import" },
              { label: "Stage 3", desc: "Missing dep" },
              { label: "Stage 4", desc: "Env variable" },
              { label: "Stage 5", desc: "Output config" },
            ].map((s) => (
              <div key={s.label} style={{
                background: "#0d2e1a",
                border: "1px solid #14532d",
                borderRadius: "6px",
                padding: "10px",
              }}>
                <p style={{ fontSize: "11px", color: "#4ade80", fontWeight: "700", marginBottom: "3px" }}>{s.label} ✓</p>
                <p style={{ fontSize: "11px", color: "#6b7280" }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "12px", color: "#374151" }}>
            IET CIPHER · NITK · Deployment Session · June 2026
          </p>
        </div>
      )}
    </div>
  );
}

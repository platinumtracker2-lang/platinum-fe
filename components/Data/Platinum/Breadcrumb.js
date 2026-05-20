import * as s from "./styles";

export default function Breadcrumb() {
  return (
    <div style={{
      background: s.vars.white,
      borderBottom: `1px solid ${s.vars.bdr}`,
      padding: "10px 24px",
      fontSize: "12px",
      color: s.vars.muted,
    }}>
      <div style={{ maxWidth: s.vars.max, margin: "0 auto" }}>
        <a href="/" style={{ color: s.vars.muted, textDecoration: "none" }}>Home</a>
        {" › "}
        <a href="/data" style={{ color: s.vars.muted, textDecoration: "none" }}>Data</a>
        {" › "}
        <span style={{ color: s.vars.ink3 }}>Platinum</span>
      </div>
    </div>
  );
}

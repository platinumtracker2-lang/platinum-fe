// Platinum Data Page Styles - Matching HTML Reference

export const vars = {
  // Platinum grey tones
  pt: "#9ca3af",
  ptL: "#d1d5db", 
  ptD: "#6b7280",
  ptBg: "#f9fafb",
  
  // Base colors
  ink: "#1a1a2e",
  ink2: "#2d2d44",
  ink3: "#4a4a6a",
  muted: "#777799",
  white: "#ffffff",
  page: "#f3f4f6",
  
  // Accent colors
  green: "#10b981",
  greenBg: "#ecfdf5",
  red: "#ef4444",
  redBg: "#fee2e2",
  amber: "#f59e0b",
  amberBg: "#fffbeb",
  blue: "#3b82f6",
  blueBg: "#eff6ff",
  
  // Border
  bdr: "rgba(26, 26, 46, 0.09)",
  
  // Layout
  max: "1600px",
  r: "8px",
};

// Scrolling ticker
export const ticker = {
  background: "#1f2937",
  borderBottom: "1px solid rgba(156,163,175,0.2)",
  overflow: "hidden",
  padding: "10px 0",
};

export const tickerInner = {
  display: "flex",
  gap: "24px",
  whiteSpace: "nowrap",
  fontSize: "11px",
  color: "rgba(255,255,255,0.65)",
  padding: "0 24px",
};

// Hero
export const hero = {
  background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 40%, #1a1a2e 100%)",
  padding: "44px 0 40px",
  position: "relative",
  overflow: "hidden",
};

export const heroInner = {
  maxWidth: vars.max,
  margin: "0 auto",
  padding: "0 24px",
  position: "relative",
};

export const heroEyebrow = {
  fontSize: "10px",
  fontWeight: 600,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.28)",
  marginBottom: "10px",
};

export const h1 = {
  fontSize: "clamp(26px, 3.8vw, 40px)",
  fontWeight: 800,
  color: "#fff",
  lineHeight: 1.1,
  marginBottom: "8px",
  letterSpacing: "-0.01em",
};

export const heroLede = {
  fontSize: "13px",
  color: "rgba(255,255,255,0.42)",
  lineHeight: 1.8,
  marginBottom: "24px",
  maxWidth: "900px",
};

export const heroStats = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "1px",
  background: "rgba(255,255,255,0.05)",
  borderRadius: "12px",
  overflow: "hidden",
  border: "1px solid rgba(255,255,255,0.07)",
};

export const statCard = {
  background: "rgba(255,255,255,0.03)",
  padding: "12px 16px",
  position: "relative",
};

export const statLabel = {
  fontSize: "9px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.22)",
  marginBottom: "4px",
};

export const statValue = {
  fontSize: "17px",
  fontWeight: 700,
  color: "#fff",
  marginBottom: "3px",
  fontFamily: "'DM Mono', monospace",
  lineHeight: 1,
};

export const statSub = {
  fontSize: "10px",
  color: "rgba(255,255,255,0.2)",
};

// Regular section stat cards (for use outside hero)
export const sectionStatCard = {
  background: vars.white,
  border: `1px solid ${vars.bdr}`,
  borderRadius: vars.r,
  padding: "16px",
};

export const sectionStatLabel = {
  fontSize: "10px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  color: vars.muted,
  marginBottom: "6px",
};

export const sectionStatValue = {
  fontSize: "22px",
  fontWeight: 700,
  color: vars.ink,
  marginBottom: "4px",
  fontFamily: "'DM Mono', monospace",
};

export const sectionStatSub = {
  fontSize: "11px",
  color: vars.muted,
};

// Section
export const section = {
  maxWidth: vars.max,
  margin: "48px auto",
  padding: "0 24px",
};

export const sectionLabel = {
  fontSize: "10px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  color: vars.pt,
  marginBottom: "8px",
};

export const h2 = {
  fontSize: "clamp(22px, 3vw, 28px)",
  fontWeight: 700,
  color: vars.ink,
  lineHeight: 1.3,
  marginBottom: "12px",
};

export const lede = {
  fontSize: "15px",
  color: vars.ink3,
  lineHeight: 1.7,
  marginBottom: "24px",
};

// Navigation
export const nav = {
  position: "sticky",
  top: 0,
  background: vars.white,
  borderBottom: `2px solid ${vars.bdr}`,
  zIndex: 100,
  overflowX: "auto",
};

export const navInner = {
  maxWidth: "1600px",
  margin: "0 auto",
  display: "flex",
  gap: "0",
  padding: "0 24px",
};

export const navBtn = {
  fontSize: "13px",
  fontWeight: 600,
  color: vars.muted,
  padding: "14px 16px",
  whiteSpace: "nowrap",
  cursor: "pointer",
  border: "none",
  background: "none",
  borderBottom: "3px solid transparent",
  transition: "all 0.2s",
};

export const navBtnActive = {
  ...navBtn,
  color: vars.pt,
  borderBottomColor: vars.pt,
};

// Callout boxes
export const callout = {
  background: vars.ptBg,
  border: `1px solid ${vars.bdr}`,
  borderRadius: vars.r,
  padding: "16px 20px",
  margin: "24px 0",
  display: "flex",
  gap: "14px",
  alignItems: "flex-start",
};

export const calloutWarning = {
  ...callout,
  background: vars.amberBg,
  borderColor: vars.amber,
};

export const calloutInfo = {
  ...callout,
  background: vars.blueBg,
  borderColor: vars.blue,
};

export const calloutSuccess = {
  ...callout,
  background: vars.greenBg,
  borderColor: vars.green,
};

export const calloutIcon = {
  fontSize: "20px",
  flexShrink: 0,
};

export const calloutContent = {
  flex: 1,
};

export const calloutTitle = {
  fontSize: "14px",
  fontWeight: 700,
  color: vars.ink,
  marginBottom: "6px",
};

export const calloutText = {
  fontSize: "14px",
  color: vars.ink3,
  lineHeight: 1.6,
  margin: 0,
};

// Tables
export const table = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "14px",
  margin: "24px 0",
};

export const th = {
  fontSize: "11px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  color: vars.muted,
  padding: "12px",
  textAlign: "left",
  borderBottom: `2px solid ${vars.bdr}`,
  background: vars.ptBg,
};

export const td = {
  padding: "12px",
  borderBottom: `1px solid ${vars.bdr}`,
  color: vars.ink3,
  lineHeight: 1.6,
};

// Chart container
export const chartContainer = {
  background: vars.white,
  border: `1px solid ${vars.bdr}`,
  borderRadius: vars.r,
  padding: "20px",
  margin: "24px 0",
};

export const chartHeader = {
  marginBottom: "20px",
};

export const chartTitle = {
  fontSize: "14px",
  fontWeight: 700,
  color: vars.ink,
  marginBottom: "4px",
};

export const chartSubtitle = {
  fontSize: "12px",
  color: vars.muted,
};

import React, { useState, useEffect } from "react";
import {
  Home, Stethoscope, Video, FileText, Phone, ArrowLeft, Mic, MicOff,
  PhoneOff, Languages, MapPin, Bell, ChevronRight, Check, Clock,
  Calendar, Users, Heart, AlertTriangle, Truck, User, Plus, X
} from "lucide-react";

const INK = "#1F2A24";
const PAPER = "#FBF7EE";
const CLAY = "#B65C38";
const MOSS = "#3F5A45";
const MOSS_D = "#2C4130";
const SAND = "#EFE6D3";
const RUST = "#9C3B2E";
const GOLD = "#C89A4B";

const screens = [
  { id: "home", label: "Home" },
  { id: "triage", label: "Risk check" },
  { id: "tele", label: "Consult" },
  { id: "sos", label: "SOS" },
  { id: "records", label: "Record" },
];

function StatusBar() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px 4px", fontSize: 12, fontWeight: 500, color: INK, fontFamily: "monospace" }}>
      <span>9:41</span>
      <span style={{ letterSpacing: 1 }}>●●●● 4G ▮▮▮</span>
    </div>
  );
}

function TopBar({ title, onBack, right }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 18px 14px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {onBack && (
          <button onClick={onBack} aria-label="Back" style={{ background: "none", border: "none", padding: 4, cursor: "pointer", color: INK }}>
            <ArrowLeft size={20} />
          </button>
        )}
        <span style={{ fontFamily: "'Fraunces', serif", fontSize: 19, fontWeight: 600, color: INK }}>{title}</span>
      </div>
      {right}
    </div>
  );
}

function Pill({ children, active, onClick, tone = "moss" }) {
  const bg = active ? (tone === "rust" ? RUST : MOSS_D) : "transparent";
  const color = active ? PAPER : INK;
  const border = active ? "transparent" : "rgba(31,42,36,0.25)";
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "'Fraunces', serif",
        fontSize: 13,
        padding: "8px 14px",
        borderRadius: 20,
        border: `1px solid ${border}`,
        background: bg,
        color,
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </button>
  );
}

function Card({ children, style }) {
  return (
    <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid rgba(31,42,36,0.10)", padding: 16, ...style }}>
      {children}
    </div>
  );
}

/* ---------------- HOME ---------------- */
function HomeScreen({ go }) {
  return (
    <div style={{ padding: "0 18px 18px" }}>
      <TopBar
        title=""
        right={<button aria-label="Notifications" style={{ background: "none", border: "none", cursor: "pointer", color: INK }}><Bell size={20} /></button>}
      />
      <div style={{ marginTop: -8, marginBottom: 18 }}>
        <p style={{ fontSize: 12, color: "rgba(31,42,36,0.6)", margin: 0, fontFamily: "'Fraunces', serif", fontStyle: "italic" }}>Namaste,</p>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 28, fontWeight: 600, margin: "2px 0 0", color: INK }}>Priya Devi</h1>
        <p style={{ fontSize: 13, color: "rgba(31,42,36,0.55)", margin: "4px 0 0" }}>Week 24 · Rampur PHC</p>
      </div>

      <button
        onClick={() => go("sos")}
        style={{
          width: "100%", background: RUST, border: "none", borderRadius: 18,
          padding: "18px 18px", display: "flex", alignItems: "center", gap: 14,
          cursor: "pointer", marginBottom: 14, textAlign: "left",
        }}
      >
        <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Phone size={22} color={PAPER} />
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ margin: 0, color: PAPER, fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 600 }}>Emergency SOS</p>
          <p style={{ margin: "2px 0 0", color: "rgba(251,247,238,0.85)", fontSize: 12 }}>One tap connects an ambulance and your ASHA worker</p>
        </div>
        <ChevronRight size={18} color={PAPER} />
      </button>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 18 }}>
        <ActionTile icon={<Stethoscope size={20} />} label="Risk check" sub="AI symptom triage" onClick={() => go("triage")} />
        <ActionTile icon={<Video size={20} />} label="Consult" sub="Talk to a doctor" onClick={() => go("tele")} />
        <ActionTile icon={<FileText size={20} />} label="Health record" sub="Your shared file" onClick={() => go("records")} />
        <ActionTile icon={<Calendar size={20} />} label="Checkups" sub="Next visit in 5 days" onClick={() => {}} />
      </div>

      <p style={{ fontFamily: "'Fraunces', serif", fontSize: 14, fontStyle: "italic", color: "rgba(31,42,36,0.65)", margin: "0 0 10px" }}>Your ASHA worker</p>
      <Card style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: SAND, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Fraunces', serif", fontWeight: 600, color: MOSS_D, fontSize: 14 }}>SK</div>
        <div style={{ flex: 1 }}>
          <p style={{ margin: 0, fontSize: 14, fontWeight: 500, color: INK }}>Sunita Kumari</p>
          <p style={{ margin: "2px 0 0", fontSize: 12, color: "rgba(31,42,36,0.55)", display: "flex", alignItems: "center", gap: 4 }}><MapPin size={11} /> 1.2 km away</p>
        </div>
        <button aria-label="Call ASHA worker" style={{ background: SAND, border: "none", borderRadius: "50%", width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: MOSS_D }}>
          <Phone size={15} />
        </button>
      </Card>
    </div>
  );
}

function ActionTile({ icon, label, sub, onClick }) {
  return (
    <button onClick={onClick} style={{ background: "#FFFFFF", border: "1px solid rgba(31,42,36,0.10)", borderRadius: 16, padding: "16px 14px", textAlign: "left", cursor: "pointer", display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ width: 34, height: 34, borderRadius: 10, background: SAND, display: "flex", alignItems: "center", justifyContent: "center", color: MOSS_D }}>{icon}</div>
      <div>
        <p style={{ margin: 0, fontFamily: "'Fraunces', serif", fontSize: 14, fontWeight: 600, color: INK }}>{label}</p>
        <p style={{ margin: "2px 0 0", fontSize: 11, color: "rgba(31,42,36,0.5)" }}>{sub}</p>
      </div>
    </button>
  );
}

/* ---------------- TRIAGE ---------------- */
function TriageScreen({ go }) {
  const symptoms = ["Swelling", "Bleeding", "Severe headache", "Blurred vision", "Fatigue", "Fever"];
  const [selected, setSelected] = useState(["Bleeding"]);
  const [note, setNote] = useState("");
  const [result, setResult] = useState(null);

  const toggle = (s) => setSelected((cur) => cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]);

  const runCheck = () => {
    const high = selected.some((s) => ["Bleeding", "Severe headache", "Blurred vision"].includes(s));
    setResult(high ? "high" : "low");
  };

  return (
    <div style={{ padding: "0 18px 18px" }}>
      <TopBar title="Risk check" onBack={() => go("home")} />
      <p style={{ fontSize: 13, color: "rgba(31,42,36,0.6)", margin: "0 0 14px" }}>Select what you're feeling. The AI flags whether you need urgent or routine care.</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
        {symptoms.map((s) => (
          <Pill key={s} active={selected.includes(s)} onClick={() => { toggle(s); setResult(null); }} tone={["Bleeding", "Severe headache", "Blurred vision"].includes(s) ? "rust" : "moss"}>
            {s}
          </Pill>
        ))}
      </div>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Describe anything else you're feeling…"
        style={{
          width: "100%", minHeight: 70, borderRadius: 14, border: "1px solid rgba(31,42,36,0.15)",
          padding: 12, fontSize: 13, fontFamily: "inherit", resize: "none", boxSizing: "border-box",
          background: "#FFFFFF", color: INK, marginBottom: 14,
        }}
      />

      <button
        onClick={runCheck}
        disabled={selected.length === 0}
        style={{
          width: "100%", padding: "13px", borderRadius: 14, border: "none",
          background: selected.length === 0 ? "rgba(31,42,36,0.15)" : MOSS_D, color: PAPER,
          fontFamily: "'Fraunces', serif", fontSize: 14, fontWeight: 600, cursor: selected.length === 0 ? "default" : "pointer",
          marginBottom: 14,
        }}
      >
        Check my risk
      </button>

      {result && (
        <Card style={{
          background: result === "high" ? "#F7E9E4" : "#EAF0E5",
          border: `1px solid ${result === "high" ? "rgba(156,59,46,0.25)" : "rgba(63,90,69,0.25)"}`,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <AlertTriangle size={16} color={result === "high" ? RUST : MOSS_D} />
            <p style={{ margin: 0, fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 14, color: result === "high" ? RUST : MOSS_D }}>
              {result === "high" ? "High risk detected" : "Low risk — routine care"}
            </p>
          </div>
          <p style={{ margin: "0 0 12px", fontSize: 12, color: INK }}>
            {result === "high" ? "Seek medical attention within 2 hours. Connecting you with a doctor is recommended now." : "No urgent signs found. Book a routine checkup with your ASHA worker or clinic."}
          </p>
          <button
            onClick={() => go("tele")}
            style={{ width: "100%", padding: "11px", borderRadius: 12, border: "none", background: result === "high" ? RUST : MOSS_D, color: PAPER, fontFamily: "'Fraunces', serif", fontSize: 13, fontWeight: 600, cursor: "pointer" }}
          >
            {result === "high" ? "Connect to doctor now" : "Book a checkup"}
          </button>
        </Card>
      )}
    </div>
  );
}

/* ---------------- TELECONSULT ---------------- */
function TeleScreen({ go }) {
  const [connecting, setConnecting] = useState(true);
  const [muted, setMuted] = useState(false);
  const [lang, setLang] = useState("Hindi");
  const langs = ["Hindi", "Bhojpuri", "English", "Marathi"];
  const [showLang, setShowLang] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setConnecting(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ padding: "0 18px 18px" }}>
      <TopBar title="Teleconsultation" onBack={() => go("home")} />

      <div style={{ background: MOSS_D, borderRadius: 18, height: 210, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12, position: "relative", overflow: "hidden" }}>
        {connecting ? (
          <p style={{ color: PAPER, fontFamily: "'Fraunces', serif", fontSize: 14 }}>Connecting on low bandwidth…</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(251,247,238,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <User size={30} color={PAPER} />
            </div>
            <p style={{ color: PAPER, fontFamily: "'Fraunces', serif", fontSize: 14, margin: 0 }}>Dr. Anil Kumar</p>
          </div>
        )}
        <span style={{ position: "absolute", top: 10, left: 10, fontSize: 10, color: PAPER, background: "rgba(0,0,0,0.25)", padding: "3px 8px", borderRadius: 20 }}>
          {connecting ? "connecting" : "00:42 · offline-mode call"}
        </span>
      </div>

      <p style={{ fontFamily: "'Fraunces', serif", fontSize: 15, fontWeight: 600, margin: 0, color: INK }}>Dr. Anil Kumar</p>
      <p style={{ fontSize: 12, color: "rgba(31,42,36,0.55)", margin: "2px 0 16px" }}>Gynecologist · District Hospital, Rampur</p>

      <div style={{ display: "flex", justifyContent: "center", gap: 14, marginBottom: 16 }}>
        <RoundBtn onClick={() => setMuted((m) => !m)} active={muted}>
          {muted ? <MicOff size={18} /> : <Mic size={18} />}
        </RoundBtn>
        <RoundBtn onClick={() => go("home")} tone="rust"><PhoneOff size={18} /></RoundBtn>
        <RoundBtn onClick={() => setShowLang((s) => !s)}><Languages size={18} /></RoundBtn>
      </div>

      {showLang && (
        <Card>
          <p style={{ margin: "0 0 10px", fontSize: 12, fontFamily: "'Fraunces', serif", fontWeight: 600, color: INK }}>Call language</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {langs.map((l) => (
              <Pill key={l} active={lang === l} onClick={() => setLang(l)}>{l}</Pill>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}

function RoundBtn({ children, onClick, active, tone }) {
  const bg = tone === "rust" ? RUST : active ? MOSS_D : "#FFFFFF";
  const color = tone === "rust" || active ? PAPER : INK;
  return (
    <button onClick={onClick} aria-label="control" style={{
      width: 48, height: 48, borderRadius: "50%", border: tone || active ? "none" : "1px solid rgba(31,42,36,0.2)",
      background: bg, color, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
    }}>
      {children}
    </button>
  );
}

/* ---------------- SOS ---------------- */
function SosScreen({ go }) {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const timers = [setTimeout(() => setStage(1), 1000), setTimeout(() => setStage(2), 2400)];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div style={{ padding: "0 18px 18px" }}>
      <TopBar title="SOS dispatch" onBack={() => go("home")} />

      <div style={{ background: SAND, borderRadius: 18, height: 160, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14, position: "relative" }}>
        <MapPin size={30} color={MOSS_D} />
        {stage >= 1 && (
          <span style={{ position: "absolute", bottom: 10, right: 10, fontSize: 10, background: "#FFFFFF", padding: "4px 9px", borderRadius: 20, color: INK, border: "1px solid rgba(31,42,36,0.15)" }}>
            Rampur PHC route
          </span>
        )}
      </div>

      <StepRow done={stage >= 0} label="Alert sent" active={stage === 0} />
      <StepRow done={stage >= 1} label="Nearest ambulance located" active={stage === 1} />
      <StepRow done={stage >= 2} label="ASHA worker notified" active={stage === 2} last />

      {stage >= 2 && (
        <Card style={{ marginTop: 14, background: "#EAF0E5", border: "1px solid rgba(63,90,69,0.25)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <Truck size={16} color={MOSS_D} />
            <p style={{ margin: 0, fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 14, color: MOSS_D }}>Ambulance dispatched</p>
          </div>
          <p style={{ margin: 0, fontSize: 12, color: INK }}>Arriving in approximately 9 minutes · Driver: Ramesh, KA-05-4471</p>
        </Card>
      )}

      <button
        onClick={() => {}}
        style={{ width: "100%", marginTop: 14, padding: "13px", borderRadius: 14, border: "1px solid rgba(31,42,36,0.2)", background: "#FFFFFF", color: INK, fontFamily: "'Fraunces', serif", fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
      >
        <Phone size={15} /> Call ambulance directly
      </button>
    </div>
  );
}

function StepRow({ done, active, label, last }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{
          width: 22, height: 22, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
          background: done ? MOSS_D : "rgba(31,42,36,0.1)", color: done ? PAPER : "rgba(31,42,36,0.4)", flexShrink: 0,
        }}>
          {done ? <Check size={12} /> : <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor" }} />}
        </div>
        {!last && <div style={{ width: 2, height: 26, background: done ? MOSS_D : "rgba(31,42,36,0.12)" }} />}
      </div>
      <p style={{ margin: "2px 0 0", fontSize: 13, color: done ? INK : "rgba(31,42,36,0.45)", fontWeight: active ? 600 : 400 }}>
        {label}{active && !done ? "…" : ""}
      </p>
    </div>
  );
}

/* ---------------- RECORDS ---------------- */
function RecordsScreen({ go }) {
  const entries = [
    { date: "12 Jul 2026", who: "Dr. Anil Kumar", what: "Teleconsultation · BP normal, iron supplement advised", icon: <Video size={14} /> },
    { date: "28 Jun 2026", who: "Sunita Kumari, ASHA", what: "Home visit · Weight and blood pressure logged", icon: <Users size={14} /> },
    { date: "14 Jun 2026", who: "Rampur PHC", what: "Prenatal checkup · Ultrasound, week 20", icon: <Stethoscope size={14} /> },
    { date: "02 Jun 2026", who: "AI risk triage", what: "Low risk · Fatigue, routine follow-up suggested", icon: <Heart size={14} /> },
  ];
  return (
    <div style={{ padding: "0 18px 18px" }}>
      <TopBar title="Health record" onBack={() => go("home")} />
      <Card style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: SAND, display: "flex", alignItems: "center", justifyContent: "center", color: MOSS_D, fontFamily: "'Fraunces', serif", fontWeight: 600 }}>PD</div>
        <div style={{ flex: 1 }}>
          <p style={{ margin: 0, fontSize: 14, fontWeight: 500, color: INK }}>Priya Devi</p>
          <p style={{ margin: "2px 0 0", fontSize: 11, color: "rgba(31,42,36,0.55)" }}>ABHA ID: 91-2214-XXXX · Shared with PHC and ASHA</p>
        </div>
      </Card>

      <p style={{ fontFamily: "'Fraunces', serif", fontSize: 14, fontStyle: "italic", color: "rgba(31,42,36,0.65)", margin: "0 0 10px" }}>Timeline</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {entries.map((e, i) => (
          <Card key={i} style={{ display: "flex", gap: 12 }}>
            <div style={{ width: 30, height: 30, borderRadius: 9, background: SAND, color: MOSS_D, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{e.icon}</div>
            <div>
              <p style={{ margin: 0, fontSize: 11, color: "rgba(31,42,36,0.5)" }}>{e.date} · {e.who}</p>
              <p style={{ margin: "3px 0 0", fontSize: 13, color: INK }}>{e.what}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ---------------- APP SHELL ---------------- */
export default function App() {
  const [screen, setScreen] = useState("home");

  const renderScreen = () => {
    switch (screen) {
      case "home": return <HomeScreen go={setScreen} />;
      case "triage": return <TriageScreen go={setScreen} />;
      case "tele": return <TeleScreen go={setScreen} />;
      case "sos": return <SosScreen go={setScreen} />;
      case "records": return <RecordsScreen go={setScreen} />;
      default: return <HomeScreen go={setScreen} />;
    }
  };

  const iconFor = (id) => {
    const props = { size: 19 };
    switch (id) {
      case "home": return <Home {...props} />;
      case "triage": return <Stethoscope {...props} />;
      case "tele": return <Video {...props} />;
      case "sos": return <Phone {...props} />;
      case "records": return <FileText {...props} />;
      default: return null;
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#E9E2D0", display: "flex", alignItems: "center", justifyContent: "center", padding: "32px 16px", fontFamily: "'Inter', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600&family=Inter:wght@400;500&display=swap" rel="stylesheet" />

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <div style={{
          width: 375, height: 780, background: PAPER, borderRadius: 42, border: "10px solid #17201A",
          boxShadow: "0 30px 60px rgba(0,0,0,0.25)", position: "relative", overflow: "hidden",
          display: "flex", flexDirection: "column",
        }}>
          <StatusBar />
          <div style={{ flex: 1, overflowY: "auto" }}>
            {renderScreen()}
          </div>

          <div style={{ display: "flex", borderTop: "1px solid rgba(31,42,36,0.10)", padding: "8px 6px 14px", background: PAPER }}>
            {screens.map((s) => (
              <button
                key={s.id}
                onClick={() => setScreen(s.id)}
                style={{
                  flex: 1, background: "none", border: "none", cursor: "pointer",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
                  color: screen === s.id ? MOSS_D : "rgba(31,42,36,0.4)",
                }}
              >
                {iconFor(s.id)}
                <span style={{ fontSize: 9.5, fontWeight: 500 }}>{s.label}</span>
              </button>
            ))}
          </div>
        </div>

        <p style={{ fontFamily: "'Fraunces', serif", fontSize: 12, fontStyle: "italic", color: "rgba(31,42,36,0.55)", margin: 0 }}>
          AROGYAPATH — tap around to explore
        </p>
      </div>
    </div>
  );
}

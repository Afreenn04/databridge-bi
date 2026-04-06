export default function DataBridgeBIWebsite() {
  const services = [
    {
      title: "Power BI Dashboards",
      description:
        "Interactive dashboards for sales, marketing, finance, and operations with a clear executive-friendly design.",
    },
    {
      title: "CRM & API Integrations",
      description:
        "HubSpot and third-party integrations that keep reporting accurate, automated, and connected.",
    },
    {
      title: "Data Cleaning & ETL",
      description:
        "Transform inconsistent spreadsheets and raw exports into structured, reporting-ready datasets.",
    },
    {
      title: "Reporting Automation",
      description:
        "Replace manual weekly reports with automated refreshes, pipelines, and reliable reporting workflows.",
    },
  ];

  const founderPoints = [
    "7+ years in data science and analytics",
    "Power BI specialist with PL-300 certification",
    "Master’s in Data Science from Robert Gordon University",
    "Experience in API integrations, ETL, and CRM reporting",
  ];

  const sectionTitle = {
    fontSize: "0.95rem",
    fontWeight: 700,
    color: "#ca8a04",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    marginBottom: "10px",
  };

  const cardStyle = {
    background: "#ffffff",
    border: "1px solid #f1f5f9",
    borderRadius: "20px",
    padding: "28px",
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
  };

  const buttonPrimary = {
    display: "inline-block",
    background: "#facc15",
    color: "#111827",
    padding: "14px 22px",
    borderRadius: "14px",
    fontWeight: 700,
    textDecoration: "none",
    boxShadow: "0 8px 20px rgba(250, 204, 21, 0.35)",
  };

  const buttonSecondary = {
    display: "inline-block",
    background: "#ffffff",
    color: "#111827",
    padding: "14px 22px",
    borderRadius: "14px",
    fontWeight: 700,
    textDecoration: "none",
    border: "1px solid #d1d5db",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fffdf7",
        color: "#111827",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <section
        style={{
          background: "linear-gradient(135deg, #fffdf7 0%, #fff7d6 100%)",
          borderBottom: "1px solid #f3f4f6",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            padding: "80px 24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "36px",
            alignItems: "center",
          }}
        >
          <div>
            <div style={sectionTitle}>DataBridge BI • Power BI • Data Integration</div>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.8rem)",
                lineHeight: 1.05,
                margin: "0 0 22px 0",
                fontWeight: 800,
              }}
            >
              Connecting your data.
              <br />
              <span style={{ color: "#d4a300" }}>Powering your decisions.</span>
            </h1>
            <p
              style={{
                fontSize: "1.14rem",
                lineHeight: 1.8,
                color: "#4b5563",
                maxWidth: "700px",
                marginBottom: "28px",
              }}
            >
              DataBridge BI helps businesses turn messy data into clear, automated reporting using Power BI, CRM integrations, and API-driven pipelines.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
              }}
            >
              <a href="tel:0795376639" style={buttonPrimary}>
                Book a Call · 0795376639
              </a>
              <a
                href="https://github.com/Afreenn04/Data-Analysis"
                target="_blank"
                rel="noopener noreferrer"
                style={buttonSecondary}
              >
                View Work
              </a>
            </div>
          </div>

          <div style={{ ...cardStyle, background: "#fffefb" }}>
            <div style={{ fontSize: "1.15rem", fontWeight: 800, marginBottom: "16px" }}>What you get</div>
            <div style={{ display: "grid", gap: "14px" }}>
              {[
                "Clear, executive-ready dashboards",
                "Automated reporting workflows",
                "HubSpot, CRM, and API integration",
                "Reliable data for better decisions",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "14px 16px",
                    borderRadius: "14px",
                    background: "#ffffff",
                    border: "1px solid #f3f4f6",
                    color: "#374151",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "1180px", margin: "0 auto", padding: "70px 24px 20px" }}>
        <div style={{ ...cardStyle, display: "grid", gap: "22px" }}>
          <div style={sectionTitle}>Portfolio</div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <div>
              <h2 style={{ fontSize: "2rem", margin: "0 0 10px 0", fontWeight: 800 }}>
                See my Power BI and data analysis work
              </h2>
              <p style={{ color: "#4b5563", fontSize: "1.05rem", lineHeight: 1.8, margin: 0 }}>
                Explore dashboard and reporting examples from my GitHub portfolio and project repository.
              </p>
            </div>
            <div style={{ textAlign: "left" }}>
              <a
                href="https://github.com/Afreenn04/Data-Analysis"
                target="_blank"
                rel="noopener noreferrer"
                style={buttonPrimary}
              >
                Open GitHub Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "1180px", margin: "0 auto", padding: "40px 24px 20px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          <div style={cardStyle}>
            <div style={sectionTitle}>About DataBridge BI</div>
            <div style={sectionTitle}>Founded by Afreen Fatima</div>
            <p style={{ color: "#4b5563", lineHeight: 1.9, fontSize: "1.03rem" }}>
              DataBridge BI was founded by Afreen Fatima, a Data Integration Specialist with over 7 years of experience in data science and data analytics. Her work focuses on transforming complex, disconnected business data into clear, automated, and reliable reporting systems.
            </p>
            <p style={{ color: "#4b5563", lineHeight: 1.9, fontSize: "1.03rem" }}>
              She specializes in Power BI dashboards, API integrations, ETL pipelines, HubSpot reporting, and data workflow automation, helping businesses improve reporting accuracy, operational visibility, and retention insight.
            </p>
            <p style={{ color: "#4b5563", lineHeight: 1.9, fontSize: "1.03rem", marginBottom: 0 }}>
              Afreen holds a Master’s degree in Data Science from Robert Gordon University and is PL-300 certified in Microsoft Power BI.
            </p>
          </div>

          <div style={{ ...cardStyle, background: "#fff9db" }}>
            <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#a16207", marginBottom: "10px" }}>
              CEO & Founder
            </div>
            
            <p style={{ color: "#4b5563", lineHeight: 1.8, marginTop: 0 }}>
              Power BI Specialist | Data Integration & Pipeline Expert
            </p>
            <div style={{ display: "grid", gap: "12px", marginTop: "20px" }}>
              {founderPoints.map((point) => (
                <div
                  key={point}
                  style={{
                    background: "rgba(255,255,255,0.75)",
                    border: "1px solid #fde68a",
                    padding: "14px 16px",
                    borderRadius: "14px",
                    color: "#374151",
                    fontWeight: 500,
                  }}
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "1180px", margin: "0 auto", padding: "40px 24px" }}>
        <div style={sectionTitle}>Services</div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {services.map((service) => (
            <div key={service.title} style={cardStyle}>
              <h3 style={{ fontSize: "1.3rem", margin: "0 0 12px 0", fontWeight: 800 }}>{service.title}</h3>
              <p style={{ color: "#4b5563", lineHeight: 1.8, margin: 0 }}>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#fff7d6", marginTop: "20px" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto", padding: "70px 24px", textAlign: "center" }}>
          <div style={sectionTitle}>Why DataBridge BI</div>
          <h2 style={{ fontSize: "2.3rem", fontWeight: 800, margin: "0 0 16px 0" }}>
            Most dashboards fail because of bad data, not bad visuals.
          </h2>
          <p style={{ color: "#4b5563", fontSize: "1.08rem", lineHeight: 1.9, margin: "0 auto", maxWidth: "760px" }}>
            DataBridge BI focuses on the full data journey, from data cleaning and integration to Power BI dashboard delivery, so your reporting is trusted, automated, and actually useful.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ ...cardStyle, background: "#ffffff" }}>
          <div style={sectionTitle}>Get in touch</div>
          <h2 style={{ fontSize: "2.3rem", fontWeight: 800, margin: "0 0 16px 0" }}>
            Ready to automate your reporting?
          </h2>
          <p style={{ color: "#4b5563", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "24px" }}>
            Let’s build dashboards and systems that save time, improve visibility, and give you accurate business insight.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "14px", marginBottom: "18px" }}>
            <a href="mailto:afreenn04@gmail.com" style={buttonPrimary}>
              Get in Touch
            </a>
            <a href="tel:00447985376639" style={buttonSecondary}>
              Call 00447985376639
            </a>
          </div>
          <div style={{ color: "#6b7280", fontSize: "0.98rem" }}>
            afreenn04@gmail.com
          </div>
        </div>
      </section>
    </div>
  );
}

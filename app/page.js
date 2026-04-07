export default function DataBridgeBIWebsite() {
  const services = [
    {
      title: "Power BI Dashboards",
      description:
        "Executive-ready dashboards designed for sales, marketing, finance, and operations reporting.",
    },
    {
      title: "Power Platform Automation",
      description:
        "Automation workflows using Power Automate, Dataflows, and Power Platform tools to reduce manual work.",
    },
    {
      title: "CRM & API Integrations",
      description:
        "HubSpot and third-party system integrations that create reliable, connected reporting workflows.",
    },
    {
      title: "Data Cleaning & ETL Pipelines",
      description:
        "Structured ETL pipelines that transform inconsistent, fragmented data into reporting-ready datasets.",
    },
  ];

  const caseStudies = [
    {
      title: "Automating CRM Data Integration from BigQuery to HubSpot",
      problem:
        "Business data needed to flow from BigQuery into HubSpot reliably without duplicate company records or manual intervention.",
      solution:
        "Designed and implemented a scalable Microsoft Fabric pipeline by connecting Dataflow Gen2 tables to a Fabric notebook, enabling URN-based matching and accurate syncing of advertiser names and MAIDs into HubSpot.",
      result:
        "Replaced manual Python scripts with a structured, repeatable process that improved data consistency, reduced operational effort, and created a strong foundation for broader CRM and campaign-level integrations.",
      image: "/bigquery-hubspot.png",
    },
    {
      title: "Daily Spend Report Migration: MySQL to BigQuery",
      problem:
        "Growing data volumes and performance limitations in MySQL were causing slow reporting and unreliable dashboard refreshes.",
      solution:
        "Migrated the daily spend reporting pipeline from MySQL to BigQuery and rebuilt ingestion and transformation logic to handle large-scale data efficiently.",
      result:
        "Improved query performance, reduced refresh failures, enhanced data accuracy, and enabled near real-time monitoring of campaign spend for better decision-making.",
      image: "/mysql-bigquery.png",
    },
  ];

  const page = {
    minHeight: "100vh",
    background: "#fffdf7",
    color: "#111827",
    fontFamily: 'Inter, Arial, sans-serif',
  };

  const container = {
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "0 24px",
  };

  const sectionLabel = {
    color: "#b7791f",
    fontSize: "14px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: "12px",
  };

  const card = {
    background: "#ffffff",
    border: "1px solid #ece7da",
    borderRadius: "22px",
    padding: "28px",
    boxShadow: "0 10px 25px rgba(17,24,39,0.05)",
  };

  const primaryButton = {
    display: "inline-block",
    background: "#facc15",
    color: "#111827",
    textDecoration: "none",
    fontWeight: 700,
    padding: "14px 20px",
    borderRadius: "14px",
    boxShadow: "0 8px 18px rgba(250,204,21,0.35)",
  };

  const secondaryButton = {
    display: "inline-block",
    background: "#ffffff",
    color: "#111827",
    textDecoration: "none",
    fontWeight: 700,
    padding: "14px 20px",
    borderRadius: "14px",
    border: "1px solid #d1d5db",
  };

  return (
    <div style={page}>
      <section
        style={{
          background: "linear-gradient(135deg, #fffdf7 0%, #fff5cc 100%)",
          borderBottom: "1px solid #efe8d8",
        }}
      >
        <div
          style={{
            ...container,
            paddingTop: "80px",
            paddingBottom: "80px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
            alignItems: "center",
          }}
        >
          <div>
            <div style={sectionLabel}>DataBridge BI • Power BI • Power Platform • Data Integration</div>
            <h1
              style={{
                fontSize: "clamp(2.6rem, 5vw, 4.8rem)",
                lineHeight: 1.05,
                fontWeight: 800,
                margin: "0 0 20px 0",
              }}
            >
              Connecting your data.
              <br />
              <span style={{ color: "#c98a00" }}>Powering your decisions.</span>
            </h1>
            <p
              style={{
                fontSize: "1.12rem",
                lineHeight: 1.8,
                color: "#4b5563",
                maxWidth: "720px",
                marginBottom: "28px",
              }}
            >
              DataBridge BI helps businesses design scalable reporting systems using Power BI, Power Platform, CRM integrations, API connections, and ETL pipelines. The focus is on turning fragmented data into reliable, automated reporting that supports better business decisions.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
              <a href="tel:0795376639" style={primaryButton}>Book a Call</a>
              <a href="https://databridge-bi-jpuk.vercel.app/" target="_blank" rel="noopener noreferrer" style={secondaryButton}>Visit Website</a>
              <a href="portfolio" target="_blank" rel="noopener noreferrer" style={secondaryButton}>View Work</a>
            </div>
          </div>

          <div style={{ ...card, background: "#fffef9" }}>
            <div style={{ fontSize: "1.15rem", fontWeight: 800, marginBottom: "16px" }}>Business Outcomes</div>
            <div style={{ display: "grid", gap: "12px" }}>
              {[
                "Executive-ready dashboards aligned with business KPIs",
                "Automated reporting and data refresh workflows",
                "Connected CRM, API, and HubSpot data systems",
                "Trusted data for faster, more confident decisions",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #f1ead9",
                    borderRadius: "14px",
                    padding: "14px 16px",
                    color: "#374151",
                    lineHeight: 1.6,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "70px 0 20px" }}>
        <div style={container}>
          <div style={sectionLabel}>Featured Use Case</div>
          {caseStudies.map((study) => (
            <div
              key={study.title}
              style={{
                ...card,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "28px",
                alignItems: "start",
              }}
            >
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.3, margin: "0 0 16px 0" }}>
                  {study.title}
                </h2>
                <p style={{ color: "#4b5563", lineHeight: 1.9, fontSize: "1.05rem", margin: "0 0 16px 0" }}>
                  We designed and implemented a scalable data pipeline to automate the flow of business data from BigQuery into HubSpot using Microsoft Fabric.
                </p>
                <p style={{ color: "#4b5563", lineHeight: 1.9, fontSize: "1.05rem", margin: "0 0 16px 0" }}>
                  By connecting Dataflow Gen2 tables to a Fabric notebook, we enabled reliable updates of HubSpot company records through URN-based matching, ensuring accurate syncing of advertiser names and MAIDs without creating duplicates.
                </p>
                <p style={{ color: "#4b5563", lineHeight: 1.9, fontSize: "1.05rem", margin: 0 }}>
                  This approach replaced manual Python scripts with a structured, repeatable process, improving data consistency and significantly reducing operational effort. It also establishes a strong foundation for extending into campaign-level syncing and broader CRM integrations as business needs evolve.
                </p>
              </div>

              <div>
                <div
                  style={{
                    borderRadius: "18px",
                    overflow: "hidden",
                    border: "1px solid #ece7da",
                    background: "#fffef9",
                  }}
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    style={{ width: "100%", display: "block", objectFit: "cover" }}
                  />
                </div>

                <div style={{ marginTop: "16px" }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#a16207", marginBottom: "8px" }}>
                    Tech Stack
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {[
                      "BigQuery",
                      "Microsoft Fabric",
                      "Dataflow Gen2",
                      "Fabric Notebook",
                      "HubSpot API",
                    ].map((tech) => (
                      <span
                        key={tech}
                        style={{
                          background: "#fff3c4",
                          border: "1px solid #fde68a",
                          borderRadius: "999px",
                          padding: "6px 10px",
                          fontSize: "0.85rem",
                          color: "#92400e",
                          fontWeight: 500,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "50px 0 20px" }}>
        <div
          style={{
            ...container,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          <div style={card}>
            <div style={sectionLabel}>About DataBridge BI</div>
            <div style={{ ...sectionLabel, marginBottom: "18px" }}>Founded by Afreen Fatima</div>
            <p style={{ color: "#4b5563", lineHeight: 1.9, fontSize: "1.03rem", marginTop: 0 }}>
              DataBridge BI was founded by Afreen Fatima, a Data Integration Specialist with over 7 years of experience in data science and analytics. The business focuses on helping teams move from fragmented, manual reporting to scalable, automated reporting systems.
            </p>
            <p style={{ color: "#4b5563", lineHeight: 1.9, fontSize: "1.03rem" }}>
              Expertise includes Power BI dashboards, Power Platform automation, ETL pipelines, API integrations, dataflows, and CRM systems such as HubSpot. The goal is to deliver data solutions that improve reporting accuracy, operational visibility, and decision-making.
            </p>
            <p style={{ color: "#4b5563", lineHeight: 1.9, fontSize: "1.03rem", marginBottom: 0 }}>
              Afreen holds a Master’s degree from Robert Gordon University and is PL-300 certified in Microsoft Power BI.
            </p>
          </div>

          <div style={{ ...card, background: "#fff9e6" }}>
            <div style={sectionLabel}>CEO & Founder</div>
            <p style={{ marginTop: 0, color: "#374151", lineHeight: 1.8 }}>
              Power BI Specialist | Data Integration & Pipeline Expert
            </p>
            <div style={{ display: "grid", gap: "12px" }}>
              {[
                "7+ years in data science and analytics",
                "Power BI specialist with PL-300 certification",
                "Master’s from Robert Gordon University",
                "Experience in Power Platform, ETL, HubSpot, APIs, and CRM reporting",
              ].map((point) => (
                <div
                  key={point}
                  style={{
                    background: "rgba(255,255,255,0.75)",
                    border: "1px solid #f2d989",
                    borderRadius: "14px",
                    padding: "14px 16px",
                    color: "#374151",
                  }}
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "50px 0 20px" }}>
        <div style={container}>
          <div style={sectionLabel}>Core Services</div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            {services.map((service) => (
              <div key={service.title} style={card}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, margin: "0 0 12px 0" }}>{service.title}</h3>
                <p style={{ color: "#4b5563", lineHeight: 1.8, margin: 0 }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#fff7d6", marginTop: "30px" }}>
        <div style={{ ...container, maxWidth: "980px", textAlign: "center", paddingTop: "70px", paddingBottom: "70px" }}>
          <div style={sectionLabel}>Why DataBridge BI</div>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 800, margin: "0 0 16px 0" }}>
            Most reporting issues are not dashboard problems — they are data system problems.
          </h2>
          <p style={{ color: "#4b5563", lineHeight: 1.9, fontSize: "1.06rem", margin: 0 }}>
            DataBridge BI focuses on the full data lifecycle, from integration and transformation to reporting and automation, so your reporting is accurate, scalable, and genuinely useful to the business.
          </p>
        </div>
      </section>

      <section style={{ padding: "80px 0" }}>
        <div style={{ ...container, maxWidth: "900px" }}>
          <div style={{ ...card, textAlign: "center" }}>
            <div style={sectionLabel}>Get in Touch</div>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, margin: "0 0 16px 0" }}>
              Ready to improve your reporting systems?
            </h2>
            <p style={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1.04rem", marginBottom: "24px" }}>
              Whether you need a dashboard, automation workflow, ETL pipeline, or CRM integration, DataBridge BI can help you build a cleaner, more reliable reporting setup.
            </p>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "14px", marginBottom: "16px" }}>
              <a href="mailto:afreenn04@gmail.com" style={primaryButton}>Get in Touch</a>
              <a href="tel:00447985376639" style={secondaryButton}>Call 00447985376639</a>
            </div>
            <div style={{ color: "#6b7280" }}>afreenn04@gmail.com</div>
          </div>
        </div>
      </section>
    </div>
  );
}

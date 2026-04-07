export default function PortfolioPage() {
  const projects = [
    {
      title: "Automating CRM Data Integration from BigQuery to HubSpot",
      image: "/bigquery-hubspot.png",
      summary:
        "Designed and implemented a scalable Microsoft Fabric pipeline to automate business data flow from BigQuery into HubSpot.",
      details: [
        "Connected Dataflow Gen2 tables to a Fabric notebook for structured processing.",
        "Enabled URN-based matching to update HubSpot company records accurately without duplicates.",
        "Improved data consistency and reduced manual operational effort.",
      ],
      tools: ["BigQuery", "Microsoft Fabric", "Dataflow Gen2", "Fabric Notebook", "HubSpot API"],
    },
    {
      title: "Daily Spend Report Migration: MySQL to BigQuery",
      image: "/mysql-bigquery.png",
      summary:
        "Migrated the daily spend reporting pipeline from MySQL to BigQuery to improve scalability, performance, and dashboard refresh reliability.",
      details: [
        "Rebuilt ingestion and transformation logic for large-scale daily spend data.",
        "Improved query performance and reduced refresh failures.",
        "Enabled near real-time campaign spend monitoring for better decision-making.",
      ],
      tools: ["MySQL", "BigQuery", "Power BI", "ETL", "Reporting Pipeline"],
    },
    {
  title: "Customer Churn Analysis Dashboard (Power BI)",
  image: "/churn-dashboard.png",
  summary:
    "Developed an interactive Power BI dashboard to analyse customer churn, identify key drivers, and support data-driven retention strategies.",
  details: [
    "Created a comprehensive churn overview with KPIs including revenue, contracts, and customer segmentation.",
    "Enabled drill-down analysis across regions, advertisers, and sales teams.",
    "Built visual breakdowns of churn categories and trends for faster insight.",
    "Improved visibility into churn drivers to support proactive decision-making.",
  ],
  tools: ["Power BI", "DAX", "Data Modelling", "Dashboard Design", "Business Analytics"],
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

  const buttonPrimary = {
    display: "inline-block",
    background: "#facc15",
    color: "#111827",
    textDecoration: "none",
    fontWeight: 700,
    padding: "14px 20px",
    borderRadius: "14px",
    boxShadow: "0 8px 18px rgba(250,204,21,0.35)",
  };

  const buttonSecondary = {
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
            paddingTop: "70px",
            paddingBottom: "70px",
          }}
        >
          <div style={sectionLabel}>Portfolio</div>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              lineHeight: 1.1,
              fontWeight: 800,
              margin: "0 0 18px 0",
            }}
          >
            Selected Dashboards & Data Solutions
          </h1>
          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: 1.8,
              color: "#4b5563",
              maxWidth: "760px",
              margin: 0,
            }}
          >
            A selection of reporting, integration, and automation projects built to solve real business data challenges.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "24px" }}>
            <a href="/" style={buttonPrimary}>Back to Home</a>
            <a href="mailto:afreenn04@gmail.com" style={buttonSecondary}>Get in Touch</a>
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 0 80px" }}>
        <div style={container}>
          <div style={{ display: "grid", gap: "28px" }}>
            {projects.map((project) => (
              <div
                key={project.title}
                style={{
                  ...card,
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "28px",
                  alignItems: "start",
                }}
              >
                <div>
                  <div style={sectionLabel}>Case Study</div>
                  <h2
                    style={{
                      fontSize: "1.6rem",
                      lineHeight: 1.3,
                      fontWeight: 800,
                      margin: "0 0 16px 0",
                    }}
                  >
                    {project.title}
                  </h2>
                  <p
                    style={{
                      color: "#4b5563",
                      lineHeight: 1.9,
                      fontSize: "1.03rem",
                      margin: "0 0 18px 0",
                    }}
                  >
                    {project.summary}
                  </p>

                  <div style={{ display: "grid", gap: "10px", marginBottom: "18px" }}>
                    {project.details.map((item) => (
                      <div
                        key={item}
                        style={{
                          background: "#fffef9",
                          border: "1px solid #f1ead9",
                          borderRadius: "14px",
                          padding: "12px 14px",
                          color: "#374151",
                          lineHeight: 1.7,
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div>
                    <div
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: "#a16207",
                        marginBottom: "8px",
                      }}
                    >
                      Tech Stack
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
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
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
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
                      src={project.image}
                      alt={project.title}
                      style={{ width: "100%", display: "block", objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


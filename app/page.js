export default function DataBridgeBIWebsite() {
  const services = [
    {
      title: "Power BI Dashboards",
      description:
        "Clean, modern dashboards designed for clear business decisions across sales, marketing, and operations.",
    },
    {
      title: "CRM & API Integrations",
      description:
        "Seamless HubSpot and API integrations to ensure your data flows accurately and in real time.",
    },
    {
      title: "Data Cleaning & ETL",
      description:
        "Transform messy, inconsistent data into structured, reliable datasets ready for reporting.",
    },
    {
      title: "Reporting Automation",
      description:
        "Eliminate manual reporting with automated pipelines and scheduled data refresh.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="bg-gradient-to-br from-white to-yellow-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-yellow-600 mb-4">
              DataBridge BI • Power BI • Data Integration
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Connecting your data. <span className="text-yellow-500">Powering your decisions.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              DataBridge BI helps businesses turn messy data into automated dashboards using Power BI, CRM integrations, and API pipelines.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:0795376639"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold shadow inline-block"
              >
                Book a Call · 0795376639
              </a>
              <a
                href="https://github.com/Afreenn04/Data-Analysis"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 inline-block"
              >
                View Work
              </a>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 bg-white rounded-2xl shadow-xl p-6 border">
            <p className="font-semibold mb-2">What you get:</p>
            <ul className="space-y-2 text-gray-600">
              <li>• Clean, reliable dashboards</li>
              <li>• Automated reporting</li>
              <li>• CRM + API integrations</li>
              <li>• Better business decisions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white border rounded-3xl p-8 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-yellow-600">Portfolio</p>
              <h2 className="text-2xl font-bold mt-2">See my Power BI and data analysis work</h2>
              <p className="mt-3 text-gray-600 max-w-2xl">
                Explore dashboard and data analysis examples on my GitHub repository.
              </p>
            </div>
            <a
              href="https://github.com/Afreenn04/Data-Analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold shadow inline-block"
            >
              Open GitHub Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold text-yellow-600">About DataBridge BI</p>
            <h2 className="text-3xl font-bold mt-4">Founded by Afreen Fatima</h2>
            <p className="mt-6 text-gray-600 leading-7">
              DataBridge BI was founded by Afreen Fatima, a Data Integration Specialist with over 7 years of experience in Data Science and Data Analytics. With deep expertise in Power BI, API integrations, and data pipeline development, the focus is on transforming complex, disconnected data into clear, automated, and reliable reporting systems.
            </p>
            <p className="mt-4 text-gray-600 leading-7">
              Afreen specializes in building end-to-end data solutions including ETL pipelines, CRM integrations (HubSpot), and reporting automation. Her work has helped improve data accuracy, streamline reporting processes, and enhance business performance through better insights and improved retention strategies.
            </p>
            <p className="mt-4 text-gray-600 leading-7">
              She holds a Master’s degree in Data Science from Robert Gordon University and is PL-300 (Microsoft Power BI) certified, combining strong academic knowledge with real-world business impact.
            </p>
          </div>

          <div className="bg-yellow-50 border rounded-2xl p-6">
            <p className="font-semibold mb-2 text-yellow-700">CEO & Founder</p>
            <h3 className="text-xl font-bold">Afreen Fatima</h3>
            <p className="mt-3 text-gray-600 text-sm">
              7+ years experience in Data Science & Analytics | Power BI Specialist | Data Integration & Pipeline Expert
            </p>
            <div className="mt-4 text-sm text-gray-700 space-y-1">
              <p>• Power BI (PL-300 Certified)</p>
              <p>• HubSpot & CRM Integrations</p>
              <p>• API & Data Pipelines</p>
              <p>• ETL & Data Automation</p>
              <p>• Data Quality & Reporting Optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="mt-3 text-gray-600 text-sm">{s.description}</p>
          </div>
        ))}
      </section>

      {/* VALUE SECTION */}
      <section className="bg-yellow-50 py-16">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold">
            Most dashboards fail because of bad data — not bad visuals.
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            DataBridge BI focuses on fixing your data pipelines, integrations, and structure so your dashboards actually work.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">Ready to automate your reporting?</h2>
        <p className="mt-4 text-gray-600">
          Let’s build dashboards and systems that save time and give you accurate insights.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href="mailto:afreenn04@gmail.com"
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold shadow-lg inline-block"
          >
            Get in Touch
          </a>
          <div className="text-sm text-gray-600">
            <a href="mailto:afreenn04@gmail.com" className="hover:text-yellow-600">
              afreenn04@gmail.com
            </a>
            <span className="mx-2">•</span>
            <a href="tel:00447985376639" className="hover:text-yellow-600">
              00447985376639
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export const metadata = {
  title: "DataBridge BI",
  description: "Power BI dashboards, data integration and automation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import {
  FaIndustry, FaMoneyCheckAlt, FaFileInvoiceDollar,
  FaBookOpen, FaGlobe, FaWarehouse, FaHeartbeat, FaTasks
} from 'react-icons/fa';

const serviceData = [{
  id: 1,
  title: "Start-Ups & MSME Subsidy",
  icon: <FaIndustry />,
  content: [
    "Subsidies and support for new Start-Ups and MSMEs",
    "Guidance on government schemes for Start-Ups",
    "Financial assistance and loan schemes for MSMEs",
    "Tax benefits for new businesses and MSMEs",
    "Support for business registration and formalities"
  ]
},
{
  id: 2,
  title: "Goods and Service Tax (GST)",
  icon: <FaMoneyCheckAlt />,
  content: [
    "GST registration and compliance",
    "GST return filing and advisory services",
    "GST impact analysis and planning",
    "Taxation structure under GST for businesses",
    "GST refund assistance and audits"
  ]
}, {
  id: 3,
  title: "Income Tax – Salary, Company, TDS etc.",
  icon: <FaFileInvoiceDollar />,
  content: [
    "Income Tax filing and consultancy services",
    "TDS (Tax Deducted at Source) returns and compliance",
    "Salary and corporate tax filing solutions",
    "Tax planning and saving strategies for individuals and businesses",
    "Support for tax audits and assessments"
  ]
},
{
  id: 4,
  title: "Book Keeping",
  icon: <FaBookOpen />,
  content: [
    "Accurate and reliable bookkeeping services",
    "Financial statement preparation and analysis",
    "Maintenance of ledgers, journals, and cash flow",
    "Payroll processing and management",
    "Tax-compliant bookkeeping for individuals and businesses"
  ]
},
{
  id: 5,
  title: "Foreign Trade Management (Import and Export) – DGFT",
  icon: <FaGlobe />,
  content: [
    "IEC Certificate",
    "Certificate of Origin (Preferential / Non-Preferential)",
    "Free Sale Certificate",
    "Advance Authorisation (AA)",
    "Export Promotion Capital Goods (EPCG)",
    "SCOMET License",
    "Restricted License",
    "Policy Relaxation Committee approval at DGFT, New Delhi"
  ]
},
{
  id: 6,
  title: "Customs Clearance & Warehouse Licensing (MOOWR)",
  icon: <FaWarehouse />,
  content: [
    "Import and Export Customs Clearance",
    "Once Time Certificate for Gold Procurement",
    "Warehouse License",
    "Bonding and Ex-Bonding",
    "Used Machine / Scrap import clearance"
  ]
},
{
  id: 7,
  title: "Health, Wealth and Marine Insurance Advisor",
  icon: <FaHeartbeat />,
  content: [
    "Life secured investments in LIC plan",
    "Mediclaim Policy & Tailor made Group Medical and PA Policy",
    "Marine, Motor and General Insurance, Cargo, Fire and Building, Break down Insurance",
    "Wealth Management in Mutual Fund Schemes",
    "Post Office Fixed Deposits & Tax Savings Schemes"
  ]
},
{
  id: 8,
  title: "Other Misc. in Statutory Requirements",
  icon: <FaTasks />,
  content: [
    "ESI",
    "PF",
    "Inspector of Factories",
    "TNPCB Clearance for all Industries",
    "Fire License",
    "eMudhra DSC tokens for IT, GST, RoC, ICEGATE, DGFT & Foreign Directors"
  ]
}

];

export default serviceData;

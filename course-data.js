window.COURSE_DATA = {
  course: {
    code: "LW6167E",
    title: "International Economic Law and Relations",
    subtitle: "The international economic order as law, power, and political economy",
    level: "P6",
    creditUnits: 3,
    medium: "English",
    duration: "One semester",
    sourceBaseline:
      "LW6167E International Economic Law & Relations Syllabus (Rev 2025-clean).doc",
    sourceNote:
      "The original Word syllabus is preserved untouched. This companion reorganizes its crisis-oriented material into a theory-to-problem teaching sequence.",
    lastSourceCheck: "16 May 2026",
  },
  architecture: {
    premise:
      "Each class begins with a theory problem, then works through legal materials, institutional design, and a current controversy in the international economic system.",
    method:
      "Students move between doctrine, institutional practice, and geopolitical explanation. The course keeps trade, investment, and finance as foundations while treating sanctions, export controls, reserve currencies, digital governance, climate measures, and negotiation design as fundamental features of the contemporary order.",
    throughLine:
      "US-China rivalry is the recurring case lens, but the course remains anchored in WTO, IMF, World Bank, regional, and transnational legal regimes.",
  },
  tags: {
    theories: [
      "legalization",
      "fragmentation",
      "embedded liberalism",
      "hegemonic stability",
      "institutional legitimacy",
      "two-level games",
      "weaponized interdependence",
      "geoeconomics",
      "monetary hierarchy",
      "regulatory competition",
      "developmental state",
      "climate club",
    ],
    issues: [
      "trade",
      "investment",
      "finance",
      "trade war",
      "negotiations",
      "sanctions",
      "export controls",
      "reserve currencies",
      "digital trade",
      "CBAM",
      "critical minerals",
      "state capitalism",
    ],
    institutions: [
      "WTO",
      "IMF",
      "World Bank",
      "UNCITRAL",
      "BIS",
      "OFAC",
      "BIS Export Administration",
      "European Commission",
      "CPTPP",
      "RCEP",
      "IPEF",
    ],
    regions: ["Global", "US", "China", "EU", "Asia-Pacific", "Global South"],
  },
  assessment: {
    continuousAssessment: 40,
    examination: 60,
    participation: {
      weight: 10,
      description:
        "Prepared participation in class discussion, role-play, negotiation exercises, and theory-to-problem analysis.",
    },
    strategyMemo: {
      weight: 30,
      title: "Strategy Memo or Negotiation Simulation Project",
      description:
        "Students prepare a legal-geoeconomic strategy memo, negotiation brief, or simulation dossier on a current international economic conflict.",
      requiredMoves: [
        "Identify the legal regime and the institutional forum.",
        "Explain the relevant international law and IR/IPE theory.",
        "Map the parties' incentives, constraints, and bargaining power.",
        "Evaluate lawful options, retaliation risk, institutional legitimacy, and geopolitical consequences.",
        "Disclose responsible AI use and verify primary sources.",
      ],
    },
    exam:
      "Three-hour exam testing legal doctrine, theory application, institutional analysis, and problem-solving under factual scenarios.",
  },
  aiPolicy: [
    "AI may be used for source discovery, issue spotting, outlining, and counterargument generation.",
    "Students remain responsible for legal accuracy, source verification, citation, and independent judgment.",
    "AI-generated statements about current law, sanctions, export controls, or monetary policy must be checked against primary sources.",
    "Submissions must include a short AI-use note when AI materially assisted the work.",
  ],
  weeks: [
    {
      id: "week-01",
      week: 1,
      title: "How to Study the International Economic Order",
      shortTitle: "Law, IR, IPE, Geopolitics",
      problem:
        "Is the international economic order best understood as law, market governance, institutional bargain, or power politics?",
      thesis:
        "International economic law is not separate from power; it is one of the main forms through which power is legalized, constrained, and contested.",
      theory: {
        il: [
          "sources and subjects of international economic law",
          "fragmentation and regime interaction",
          "legalization as delegation, obligation, and precision",
        ],
        ir: [
          "realism, liberal institutionalism, constructivism",
          "international political economy",
          "geopolitics and geoeconomics",
        ],
      },
      legalFrame: ["WTO, IMF, World Bank, treaties, soft law, unilateral measures"],
      institutions: ["WTO", "IMF", "World Bank"],
      issues: ["trade", "investment", "finance"],
      regions: ["Global"],
      readings: {
        required: [
          {
            label: "Herdegen, Principles of International Economic Law, introductory chapters",
            type: "book chapter",
            accessMode: "course folder/coursepack",
            source: "Course folder",
          },
          {
            label: "Slaughter, International Law and International Relations Theory: A Prospectus",
            type: "article",
            accessMode: "course folder/coursepack",
            source: "Course folder",
          },
        ],
        recommended: [
          {
            label: "Lowenfeld, International Economic Law, introductory chapters",
            type: "book chapter",
            accessMode: "course folder/coursepack",
            source: "Course folder",
          },
        ],
      },
      discussionQuestions: [
        "What does legal analysis miss when it brackets power?",
        "What does geopolitical analysis miss when it treats law as mere rhetoric?",
      ],
      activity:
        "Build a shared map of legal regimes, institutions, actors, and power channels in the international economic order.",
      output: "One-page theory map with three hypotheses about order and crisis.",
    },
    {
      id: "week-02",
      week: 2,
      title: "Bretton Woods, Embedded Liberalism, and Institutional Legitimacy",
      shortTitle: "Bretton Woods",
      problem:
        "Why did the postwar order combine open markets with domestic policy space, and why is that bargain under stress?",
      thesis:
        "The Bretton Woods order was a political compromise, not a natural market constitution; its legitimacy depends on how well institutions mediate openness, adjustment, and distribution.",
      theory: {
        il: ["institutional design", "treaty-based organizations", "legitimacy and consent"],
        ir: ["embedded liberalism", "hegemonic stability", "complex interdependence"],
      },
      legalFrame: ["GATT 1947/WTO, IMF Articles, World Bank development mandate"],
      institutions: ["WTO", "IMF", "World Bank"],
      issues: ["trade", "finance", "development"],
      regions: ["Global", "Global South"],
      readings: {
        required: [
          {
            label: "Gilpin, Global Political Economy, chapters on the international economic order",
            type: "book chapter",
            accessMode: "course folder/coursepack",
            source: "Course folder",
          },
          {
            label: "IMF Articles of Agreement",
            type: "primary legal text",
            accessMode: "official source",
            source: "IMF",
            url: "https://www.imf.org/external/pubs/ft/aa/",
          },
        ],
        recommended: [
          {
            label: "Creation of the Bretton Woods System",
            type: "background reading",
            accessMode: "course folder/coursepack",
            source: "Course folder",
          },
        ],
      },
      discussionQuestions: [
        "Was Bretton Woods a legal order, a US-led bargain, or both?",
        "What kind of legitimacy do economic institutions need: output, consent, legality, or fairness?",
      ],
      activity:
        "Compare the design logic of the WTO and IMF through delegation, voting, dispute settlement, and compliance.",
      output: "Institutional legitimacy matrix.",
    },
    {
      id: "week-03",
      week: 3,
      title: "WTO Law, Trade Theory, Nondiscrimination, and Legalization",
      shortTitle: "WTO and Legalization",
      problem:
        "Can a legalized trading system survive when its dispute settlement and negotiating functions are weakened?",
      thesis:
        "The WTO crisis is not only a dispute-settlement crisis; it is a crisis of bargain updating, institutional authority, and distributional trust.",
      theory: {
        il: ["nondiscrimination", "reciprocity", "legalization", "compliance"],
        ir: ["liberal institutionalism", "domestic distribution", "forum legitimacy"],
      },
      legalFrame: ["GATT Articles I, III, XX, XXI; DSU; WTO Appellate Body"],
      institutions: ["WTO"],
      issues: ["trade", "dispute settlement", "legalization"],
      regions: ["Global", "US", "China", "EU"],
      readings: {
        required: [
          {
            label: "WTO Appellate Body official page",
            type: "institutional source",
            accessMode: "official source",
            source: "WTO",
            url: "https://www.wto.org/english/tratop_e/dispu_e/appellate_body_e.htm",
          },
          {
            label: "Van den Bossche and Zdouc, The Law and Policy of the WTO, selected chapters",
            type: "book chapter",
            accessMode: "course folder/coursepack",
            source: "Course folder",
          },
        ],
        recommended: [
          {
            label: "WTO dispute settlement reform gateway",
            type: "institutional source",
            accessMode: "official source",
            source: "WTO",
            url: "https://www.wto.org/english/tratop_e/dispu_e/dsr_e.htm",
          },
        ],
      },
      discussionQuestions: [
        "Is the Appellate Body impasse a failure of law or a correction of over-legalization?",
        "How do national security and industrial policy pressures change nondiscrimination analysis?",
      ],
      activity:
        "Students argue whether a hypothetical trade restriction should be defended under ordinary WTO rules or a security exception.",
      output: "Short legal issue tree for a WTO dispute.",
    },
    {
      id: "week-04",
      week: 4,
      title: "Trade War and International Economic Negotiations",
      shortTitle: "Trade War and Bargaining",
      problem:
        "When do tariffs, retaliation, and negotiation become legal strategy rather than a breakdown of legal order?",
      thesis:
        "Trade wars expose the limits of legalization because governments use domestic law, bargaining leverage, and institutional pressure together.",
      theory: {
        il: ["unilateralism", "retaliation", "safeguards and countermeasures", "WTO compatibility"],
        ir: ["two-level games", "bargaining theory", "reciprocity", "audience costs"],
      },
      legalFrame: ["US Section 301, WTO retaliation rules, IFD plurilateral negotiation"],
      institutions: ["WTO", "USTR"],
      issues: ["trade war", "negotiations", "trade"],
      regions: ["US", "China", "Global"],
      readings: {
        required: [
          {
            label: "USTR Four-Year Review of China Section 301 tariff actions",
            type: "official policy source",
            accessMode: "official source",
            source: "USTR",
            url: "https://ustr.gov/issue-areas/enforcement/section-301-investigations/section-301-china-technology-transfer/china-section-301-tariff-actions-and-exclusion-process/four-year-review",
          },
          {
            label: "WTO Investment Facilitation for Development Agreement overview",
            type: "official negotiation source",
            accessMode: "official source",
            source: "WTO",
            url: "https://www.wto.org/english/tratop_e/invfac_public_e/invfac_intro_e.htm",
          },
        ],
        recommended: [
          {
            label: "China-US debate on the 2024 Trade Policy Review",
            type: "course material",
            accessMode: "course folder/coursepack",
            source: "Course folder",
          },
        ],
      },
      discussionQuestions: [
        "Can unilateral tariffs be defended as bargaining instruments inside a legal order?",
        "How do domestic coalitions shape international economic negotiation positions?",
      ],
      activity:
        "Simulate a WTO-adjacent negotiation over tariffs, technology transfer, and face-saving settlement terms.",
      output: "Negotiation objective and fallback position memo.",
    },
    {
      id: "week-05",
      week: 5,
      title: "Regionalism and Minilateralism",
      shortTitle: "CPTPP, RCEP, IPEF",
      problem:
        "Are regional and minilateral arrangements building blocks, escape routes, or rival constitutional projects?",
      thesis:
        "Regionalism now does more than liberalize trade; it sorts economies into rule communities and strategic supply-chain networks.",
      theory: {
        il: ["WTO Article XXIV", "plurilateralism", "fragmentation", "treaty design"],
        ir: ["clubs", "minilateralism", "competitive liberalization", "strategic alignment"],
      },
      legalFrame: ["CPTPP, RCEP, IPEF, WTO regional trade agreement rules"],
      institutions: ["CPTPP", "RCEP", "IPEF", "WTO"],
      issues: ["trade", "regionalism", "supply chains"],
      regions: ["Asia-Pacific", "US", "China"],
      readings: {
        required: [
          {
            label: "CPTPP agreement text and resources",
            type: "primary legal text",
            accessMode: "official source",
            source: "New Zealand MFAT",
            url: "https://www.mfat.govt.nz/en/trade/free-trade-agreements/free-trade-agreements-in-force/cptpp/comprehensive-and-progressive-agreement-for-trans-pacific-partnership-text-and-resources",
          },
          {
            label: "RCEP Agreement full text",
            type: "primary legal text",
            accessMode: "official source",
            source: "ASEAN",
            url: "https://asean.org/wp-content/uploads/2024/10/Regional-Comprehensive-Economic-Partnership-RCEP-Agreement-Full-Text.pdf",
          },
        ],
        recommended: [
          {
            label: "Agreement on the Indo-Pacific Economic Framework",
            type: "official policy source",
            accessMode: "official source",
            source: "USTR",
            url: "https://ustr.gov/trade-agreements/agreements-under-negotiation/indo-pacific-economic-framework-prosperity-ipef/agreement-indo-pacific-framework",
          },
        ],
      },
      discussionQuestions: [
        "Does CPTPP discipline state capitalism more effectively than RCEP?",
        "Is IPEF a trade agreement, a governance platform, or an instrument of alignment?",
      ],
      activity:
        "Compare CPTPP, RCEP, and IPEF across market access, dispute settlement, supply chains, and strategic signaling.",
      output: "Regionalism comparison table.",
    },
    {
      id: "week-06",
      week: 6,
      title: "Investment Law, Regulatory Autonomy, and Screening",
      shortTitle: "Investment and Screening",
      problem:
        "How should investment law protect foreign investors while preserving sovereignty over security, public welfare, and industrial policy?",
      thesis:
        "Investment law is moving from depoliticized protection toward a contested governance field where security screening and ISDS reform reshape the bargain.",
      theory: {
        il: ["FET", "expropriation", "national treatment", "ISDS reform", "police powers"],
        ir: ["credible commitment", "regulatory autonomy", "economic security", "backlash politics"],
      },
      legalFrame: ["BITs, ICSID Convention, UNCITRAL Working Group III, FDI screening"],
      institutions: ["UNCITRAL", "ICSID", "World Bank"],
      issues: ["investment", "ISDS reform", "investment screening"],
      regions: ["Global", "US", "EU", "China"],
      readings: {
        required: [
          {
            label: "UNCITRAL Working Group III on ISDS Reform",
            type: "institutional source",
            accessMode: "official source",
            source: "UNCITRAL",
            url: "https://uncitral.un.org/en/working_groups/3/investor-state",
          },
          {
            label: "Basic Documents on International Investment Protection, selected treaty texts",
            type: "primary legal materials",
            accessMode: "course folder/coursepack",
            source: "Course folder",
          },
        ],
        recommended: [
          {
            label: "Sornarajah, The International Law on Foreign Investment, selected chapters",
            type: "book chapter",
            accessMode: "course folder/coursepack",
            source: "Course folder",
          },
        ],
      },
      discussionQuestions: [
        "Is ISDS legitimacy mainly a procedure problem or a sovereignty problem?",
        "Should national security investment screening be treated as an exception, a right, or a new baseline?",
      ],
      activity:
        "Draft a screening decision note for a foreign acquisition of a semiconductor or port-logistics asset.",
      output: "Screening risk matrix.",
    },
    {
      id: "week-07",
      week: 7,
      title: "Finance and the Monetary Order",
      shortTitle: "Reserve Currencies",
      problem:
        "Why does the dollar remain central to the international monetary system, and what would real monetary multipolarity require?",
      thesis:
        "Reserve-currency power is legal, institutional, infrastructural, and geopolitical; it cannot be explained by exchange rates alone.",
      theory: {
        il: ["monetary sovereignty", "IMF surveillance", "capital controls", "payment-system governance"],
        ir: ["monetary hierarchy", "network power", "safe assets", "financial interdependence"],
      },
      legalFrame: ["IMF Articles, SDR basket, COFER data, BIS monetary system work"],
      institutions: ["IMF", "BIS"],
      issues: ["finance", "reserve currencies", "stablecoins", "CBDCs"],
      regions: ["Global", "US", "China", "EU"],
      readings: {
        required: [
          {
            label: "IMF factsheet: Special Drawing Rights",
            type: "institutional source",
            accessMode: "official source",
            source: "IMF",
            url: "https://www.imf.org/en/About/Factsheets/Sheets/2023/special-drawing-rights-sdr",
          },
          {
            label: "Dollar dominance and international law",
            type: "article",
            accessMode: "course folder/coursepack",
            source: "Course folder",
          },
        ],
        recommended: [
          {
            label: "BIS Annual Economic Report 2025, chapter on the next-generation monetary and financial system",
            type: "institutional source",
            accessMode: "official source",
            source: "BIS",
            url: "https://www.bis.org/publ/arpdf/ar2025e3.htm",
          },
          {
            label: "IMF COFER data portal",
            type: "data source",
            accessMode: "official source",
            source: "IMF",
            url: "https://data.imf.org/?sId=1408206455231&sk=E6A5F467-C14B-4AA8-9F6D-5A09EC4E62A4",
          },
        ],
      },
      discussionQuestions: [
        "What makes a currency a reserve currency: market depth, law, coercion, or trust?",
        "Could CBDCs or stablecoins weaken dollar dominance, or do they reinforce existing hierarchy?",
      ],
      activity:
        "Assess a hypothetical RMB internationalization initiative through legal, market, and geopolitical constraints.",
      output: "Reserve-currency constraint map.",
    },
    {
      id: "week-08",
      week: 8,
      title: "Sanctions and Financial Statecraft",
      shortTitle: "Sanctions",
      problem:
        "When do sanctions operate as lawful foreign policy, and when do they become contested economic coercion?",
      thesis:
        "Sanctions are a legal technology of power that depends on jurisdiction, financial networks, compliance infrastructure, and legitimacy narratives.",
      theory: {
        il: ["jurisdiction", "countermeasures", "UN sanctions", "secondary sanctions", "blocking statutes"],
        ir: ["weaponized interdependence", "financial statecraft", "coercion", "norm-building"],
      },
      legalFrame: ["OFAC programs, EU restrictive measures, UN sanctions practice"],
      institutions: ["OFAC", "European Commission", "UN"],
      issues: ["sanctions", "finance", "jurisdiction"],
      regions: ["US", "EU", "China", "Global"],
      readings: {
        required: [
          {
            label: "OFAC sanctions programs and lists",
            type: "official sanctions source",
            accessMode: "official source",
            source: "US Treasury",
            url: "https://ofac.treasury.gov/",
          },
          {
            label: "Weaponized interdependence",
            type: "article",
            accessMode: "course folder/coursepack",
            source: "Course folder",
          },
        ],
        recommended: [
          {
            label: "European Commission overview of sanctions and related resources",
            type: "official sanctions source",
            accessMode: "official source",
            source: "European Commission",
            url: "https://finance.ec.europa.eu/eu-and-world/sanctions-restrictive-measures/overview-sanctions-and-related-resources_en",
          },
          {
            label: "Geoeconomics and financial statecraft",
            type: "article",
            accessMode: "course folder/coursepack",
            source: "Course folder",
          },
        ],
      },
      discussionQuestions: [
        "Are secondary sanctions a jurisdictional overreach or a predictable effect of financial network centrality?",
        "How should a non-target state respond legally to sanctions that affect its firms?",
      ],
      activity:
        "Advise a multinational bank on a sanctions-risk scenario involving dollar clearing, EU operations, and China exposure.",
      output: "Sanctions compliance and policy memo outline.",
    },
    {
      id: "week-09",
      week: 9,
      title: "Export Controls and Technology Rivalry",
      shortTitle: "Export Controls",
      problem:
        "Can export controls govern strategic technology without destroying the legal assumptions of open trade?",
      thesis:
        "Export controls turn private supply chains into security infrastructure and force trade law to confront military-civil fusion, chokepoints, and technological dependency.",
      theory: {
        il: ["national security exceptions", "extraterritorial controls", "dual-use regulation"],
        ir: ["chokepoint power", "techno-nationalism", "security dilemma", "supply-chain resilience"],
      },
      legalFrame: ["US Export Administration Regulations, GATT Article XXI, semiconductor controls"],
      institutions: ["BIS Export Administration", "WTO"],
      issues: ["export controls", "technology", "AI", "supply chains"],
      regions: ["US", "China", "EU", "Asia-Pacific"],
      readings: {
        required: [
          {
            label: "BIS public information on advanced computing and semiconductor manufacturing controls to the PRC",
            type: "official export-control source",
            accessMode: "official source",
            source: "US Bureau of Industry and Security",
            url: "https://www.bis.doc.gov/index.php/policy-guidance/advanced-computing-and-semiconductor-manufacturing-items-controls-to-prc",
          },
          {
            label: "China 2049: Technological Rivalry",
            type: "policy report",
            accessMode: "course folder/coursepack",
            source: "Course folder",
          },
        ],
        recommended: [
          {
            label: "Financial lawfare between US and China",
            type: "article",
            accessMode: "course folder/coursepack",
            source: "Course folder",
          },
        ],
      },
      discussionQuestions: [
        "How should WTO law treat national security measures that are economically structural rather than temporary?",
        "Are semiconductor controls a narrow security measure or a strategy of technological containment?",
      ],
      activity:
        "Map a semiconductor supply chain and identify legal chokepoints, license triggers, and retaliation risks.",
      output: "Export-control risk map.",
    },
    {
      id: "week-10",
      week: 10,
      title: "Industrial Policy, State Capitalism, and the Global South",
      shortTitle: "State Capitalism",
      problem:
        "Can the trading system regulate state capitalism when major economies are also returning to industrial policy?",
      thesis:
        "The state is back inside the market, but international economic law still lacks a stable theory of acceptable state intervention.",
      theory: {
        il: ["SCM Agreement", "SOE disciplines", "non-market economy rules", "development exceptions"],
        ir: ["developmental state", "strategic autonomy", "dependency", "contested development models"],
      },
      legalFrame: ["WTO subsidies rules, SOE provisions, BRI finance, development finance"],
      institutions: ["WTO", "World Bank", "RCEP", "CPTPP"],
      issues: ["state capitalism", "industrial policy", "subsidies", "Global South"],
      regions: ["China", "US", "EU", "Global South"],
      readings: {
        required: [
          {
            label: "Shaffer, Emerging Powers and the World Trading System, selected chapters",
            type: "book chapter",
            accessMode: "course folder/coursepack",
            source: "Course folder",
          },
          {
            label: "China 2049: Role of Government and Industrial Policies",
            type: "policy report",
            accessMode: "course folder/coursepack",
            source: "Course folder",
          },
        ],
        recommended: [
          {
            label: "WTO Agreement on Subsidies and Countervailing Measures",
            type: "primary legal text",
            accessMode: "official source",
            source: "WTO",
            url: "https://www.wto.org/english/docs_e/legal_e/24-scm.pdf",
          },
        ],
      },
      discussionQuestions: [
        "Why is state capitalism hard to discipline through rules originally designed for border measures?",
        "Are green subsidies and semiconductor subsidies evidence of convergence with state capitalism?",
      ],
      activity:
        "Compare a China SOE subsidy problem with a US or EU industrial-policy problem under WTO rules.",
      output: "Subsidy legality and legitimacy grid.",
    },
    {
      id: "week-11",
      week: 11,
      title: "Digital Trade, Data Governance, and Regulatory Competition",
      shortTitle: "Digital Governance",
      problem:
        "Who should govern cross-border data flows: trade agreements, privacy regulators, security agencies, or platform markets?",
      thesis:
        "Digital trade turns information governance into economic law, making privacy, security, market access, and sovereignty inseparable.",
      theory: {
        il: ["digital trade chapters", "privacy and data localization", "AI governance", "regulatory jurisdiction"],
        ir: ["regulatory competition", "digital sovereignty", "platform power", "standard-setting"],
      },
      legalFrame: ["DEPA, USMCA digital trade, GDPR model, China cyber-sovereignty model"],
      institutions: ["CPTPP", "RCEP", "IPEF", "European Commission"],
      issues: ["digital trade", "data flows", "AI governance", "regulatory competition"],
      regions: ["US", "China", "EU", "Asia-Pacific"],
      readings: {
        required: [
          {
            label: "Convergence and divergence in digital trade regulation",
            type: "article/report",
            accessMode: "course folder/coursepack",
            source: "Course folder",
          },
          {
            label: "Washington Needs to Craft New Rules for the Digital Age",
            type: "policy article",
            accessMode: "course folder/coursepack",
            source: "Course folder",
          },
        ],
        recommended: [
          {
            label: "Defending Digital Globalization",
            type: "policy article",
            accessMode: "course folder/coursepack",
            source: "Course folder",
          },
        ],
      },
      discussionQuestions: [
        "Is data localization a trade barrier, a privacy tool, or a sovereignty claim?",
        "Can digital trade agreements discipline AI governance without freezing regulatory experimentation?",
      ],
      activity:
        "Draft competing clauses for cross-border data flows from US, EU, and China perspectives.",
      output: "Digital trade clause comparison.",
    },
    {
      id: "week-12",
      week: 12,
      title: "Climate, Strategic Resources, and the Future Order",
      shortTitle: "Climate and Minerals",
      problem:
        "Can international economic law reconcile decarbonization, industrial policy, trade equality, and resource security?",
      thesis:
        "Climate measures and critical-minerals policy are becoming the new constitutional tests of the economic order because they combine public goods, protectionism risk, and strategic scarcity.",
      theory: {
        il: ["GATT Article XX", "CBAM legality", "green subsidies", "sustainable development"],
        ir: ["climate clubs", "resource security", "just transition", "North-South bargaining"],
      },
      legalFrame: ["EU CBAM, WTO environmental exceptions, green subsidy disputes, critical minerals agreements"],
      institutions: ["WTO", "European Commission", "IPEF"],
      issues: ["CBAM", "critical minerals", "climate", "green subsidies", "negotiations"],
      regions: ["EU", "US", "China", "Global South"],
      readings: {
        required: [
          {
            label: "European Commission Carbon Border Adjustment Mechanism page",
            type: "official policy source",
            accessMode: "official source",
            source: "European Commission",
            url: "https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism_en",
          },
          {
            label: "EU CBAM legislation and guidance",
            type: "primary legal materials",
            accessMode: "official source",
            source: "European Commission",
            url: "https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism/cbam-legislation-and-guidance_en",
          },
        ],
        recommended: [
          {
            label: "WTO GATT Article XX and environmental exceptions, selected legal text and cases",
            type: "primary legal materials",
            accessMode: "course folder/official source",
            source: "WTO and coursepack",
          },
        ],
      },
      discussionQuestions: [
        "Is CBAM an environmental measure, an industrial-policy measure, or both?",
        "How should a developing country negotiate climate-linked market access and critical-minerals supply obligations?",
      ],
      activity:
        "Capstone negotiation: EU, US, China, and Global South delegations negotiate a climate and critical-minerals package.",
      output: "Negotiated communique with legal basis and unresolved issues.",
    },
  ],
  sourceIndex: [
    {
      label: "WTO Appellate Body",
      authority: "Official WTO institutional source",
      url: "https://www.wto.org/english/tratop_e/dispu_e/appellate_body_e.htm",
      usedIn: ["Week 3"],
    },
    {
      label: "WTO dispute settlement reform gateway",
      authority: "Official WTO institutional source",
      url: "https://www.wto.org/english/tratop_e/dispu_e/dsr_e.htm",
      usedIn: ["Week 3"],
    },
    {
      label: "WTO Investment Facilitation for Development Agreement",
      authority: "Official WTO negotiation source",
      url: "https://www.wto.org/english/tratop_e/invfac_public_e/invfac_intro_e.htm",
      usedIn: ["Week 4"],
    },
    {
      label: "USTR Section 301 Four-Year Review",
      authority: "Official US trade-policy source",
      url: "https://ustr.gov/issue-areas/enforcement/section-301-investigations/section-301-china-technology-transfer/china-section-301-tariff-actions-and-exclusion-process/four-year-review",
      usedIn: ["Week 4"],
    },
    {
      label: "CPTPP text and resources",
      authority: "Official New Zealand depositary/source page",
      url: "https://www.mfat.govt.nz/en/trade/free-trade-agreements/free-trade-agreements-in-force/cptpp/comprehensive-and-progressive-agreement-for-trans-pacific-partnership-text-and-resources",
      usedIn: ["Week 5"],
    },
    {
      label: "RCEP Agreement full text",
      authority: "ASEAN official text",
      url: "https://asean.org/wp-content/uploads/2024/10/Regional-Comprehensive-Economic-Partnership-RCEP-Agreement-Full-Text.pdf",
      usedIn: ["Week 5"],
    },
    {
      label: "IPEF agreement page",
      authority: "Official USTR source",
      url: "https://ustr.gov/trade-agreements/agreements-under-negotiation/indo-pacific-economic-framework-prosperity-ipef/agreement-indo-pacific-framework",
      usedIn: ["Week 5", "Week 12"],
    },
    {
      label: "UNCITRAL Working Group III on ISDS Reform",
      authority: "Official UN source",
      url: "https://uncitral.un.org/en/working_groups/3/investor-state",
      usedIn: ["Week 6"],
    },
    {
      label: "IMF Special Drawing Rights factsheet",
      authority: "Official IMF source",
      url: "https://www.imf.org/en/About/Factsheets/Sheets/2023/special-drawing-rights-sdr",
      usedIn: ["Week 7"],
    },
    {
      label: "BIS Annual Economic Report 2025, monetary system chapter",
      authority: "Official BIS source",
      url: "https://www.bis.org/publ/arpdf/ar2025e3.htm",
      usedIn: ["Week 7"],
    },
    {
      label: "OFAC sanctions programs and lists",
      authority: "Official US sanctions source",
      url: "https://ofac.treasury.gov/",
      usedIn: ["Week 8"],
    },
    {
      label: "European Commission sanctions resources",
      authority: "Official EU sanctions source",
      url: "https://finance.ec.europa.eu/eu-and-world/sanctions-restrictive-measures/overview-sanctions-and-related-resources_en",
      usedIn: ["Week 8"],
    },
    {
      label: "BIS export controls on advanced computing and semiconductor manufacturing items to the PRC",
      authority: "Official US export-control source",
      url: "https://www.bis.doc.gov/index.php/policy-guidance/advanced-computing-and-semiconductor-manufacturing-items-controls-to-prc",
      usedIn: ["Week 9"],
    },
    {
      label: "WTO Agreement on Subsidies and Countervailing Measures",
      authority: "Official WTO legal text",
      url: "https://www.wto.org/english/docs_e/legal_e/24-scm.pdf",
      usedIn: ["Week 10"],
    },
    {
      label: "European Commission CBAM",
      authority: "Official EU CBAM source",
      url: "https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism_en",
      usedIn: ["Week 12"],
    },
    {
      label: "EU CBAM legislation and guidance",
      authority: "Official EU legal and guidance source",
      url: "https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism/cbam-legislation-and-guidance_en",
      usedIn: ["Week 12"],
    },
  ],
};

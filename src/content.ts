import { deepApplyTypography } from "./scripts/typography";

// Shared
const rawContent = {
  shared: {
    brand: {
      name: "Olga Bis",
      displayName: "OLGA BIS",
      profession: "UX / UI\u00A0DESIGNER",
      experienceStart: "2020",
      ariaLabel: "Go to homepage",
    },
    navigation: {
      primaryAriaLabel: "Primary",
      bottomNav: {
        previousLabel: "previous",
        nextLabel: "next",
      },
      items: {
        projects: {
          label: "PROJECTS",
          ariaLabel: "View selected case studies",
        },
        contacts: {
          label: "CONTACTS",
          ariaLabel: "Go to the contact section on the homepage",
        },
        about: {
          label: "ABOUT ME",
          ariaLabel: "About Olga Bis",
        },
      },
      mobileMenu: {
        triggerLabel: "Menu",
        dialogLabel: "Mobile navigation",
        closeLabel: "Close menu",
      },
    },
    footer: {
      about: {
        label: "ABOUT ME",
        ariaLabel: "About Olga Bis",
      },
    },
    location: {
      cityCountry: "Belgrade, Serbia",
      headerPrefix: "BASED IN SERBIA",
      contactsCountry: "Serbia",
    },
    contacts: {
      email: "olgabis.design@gmail.com",
      hintsLabel: "Contacts",
      mainTitle: "Let’s slow down, have a cup of tea, and find a solution for your project.",
      aboutTitle: "Let’s get in touch",
      links: {
        telegram: "Telegram",
        linkedin: "LinkedIn",
        cv: "CV",
      },
      mainImageAlt: "Contact me",
      aboutVideoTitle: "Cat typing",
    },
    meta: {
      defaultDescription:
        "Senior UX/UI Designer with 5+ years of experience in web and mobile product design, design systems, prototyping, visual design, and AI-assisted design across health tech, SaaS, travel, and B2B/B2C, with past experience in fintech.",
      ogAlt: "Portrait of Olga Bis with the title Senior UX/UI Designer",
      knowsAbout: [
        "Senior UX/UI Designer",
        "Product Design",
        "UX/UI Design",
        "User-Centered Design",
        "Web Design",
        "Mobile App Design",
        "Responsive Design",
        "Design Systems",
        "Figma",
        "Prototyping",
        "Interaction Design",
        "Visual Design",
        "Typography",
        "2D Graphics",
        "3D Graphics",
        "Cinema 4D",
        "AI-assisted Design",
        "Health Tech",
        "SaaS",
        "Travel",
        "B2B",
        "B2C",
        "Fintech",
      ],
    },
  },

  // Home
  home: {
    meta: {
      title: "Olga Bis — Senior UX/UI Designer Portfolio",
      description:
        "Portfolio of Olga Bis, Senior UX/UI Designer with 5+ years of experience in web and mobile product design, design systems, prototyping, visual design, and AI-assisted design across health tech, SaaS, travel, and B2B/B2C, with past experience in fintech.",
    },
    sections: {
      projects: "Projects",
      nda: "Confidential projects",
      showreel: "Additional work",
    },
    hero: {
      headlineParts: [
        {
          text:
          "Senior UX/UI Designer with 5+ years of experience shaping digital products from concept to delivery. I create clear, conversion-focused experiences for web and mobile, working with ",
          
        },
        {
          text: "design studios",
          highlight: true,
        },
        {
          text: ", ",
        },
        {
          text: "international startups",
          highlight: true,
        },
        {
          text: ", ",
        },
        {
          text: "cross-functional product teams",
          highlight: true,
        },
        {
          text: ".",
        },
      ],
      skillsLabel: "Skill set",
      skills: [
        "strong UX thinking",
        "interaction design",
        "human-centered design",
        "design systems",
        "2D & 3D visuals",
      ],
      cards: {
        saasAlt: "A screenshot of a mobile app interface showcasing a sleek and modern design with intuitive navigation and visually appealing graphics.",
        vetAlt: "A screenshot of a mobile app interface showcasing a sleek and modern design with intuitive navigation and visually appealing graphics.",
      },
      cursorAlt: "A cursor icon representing user interaction and navigation within a digital interface.",
    },
    projects: {
      ctaLabel: "see more",
      cards: [
        {
          title: ["Veterinary", "clinic software"],
          description:
            "Health tech product for appointments, patient records, and inpatient treatment, streamlining care operations and improving workflow clarity.",
          tags: [
            [
              "Health tech",
              "Product design",
              "UX/UI design"
            ],
            [
              "Prototyping",
              "Interaction design"
            ],
          ],
          linkLabel: "View veterinary software case",
        },
        {
          title: ["SaaS website", "optimization platform"],
          description:
            "SaaS product for user behavior analysis and hypothesis validation using heat maps and A/B testing, improving conversion performance.",
          tags: [
            [
              "SaaS",
              "Product design",
              "UX/UI design"
            ],
            [
              "Prototyping",
              "Visual design"
            ],
          ],
          linkLabel: "View SaaS conversion optimization case",
        },
      ],
    },
    confidential: {
      imageAlt: "Heavily blurred showcase with list of companies.",
      ndaLabel: "NDA protected",
      columns: [
        {
          title: "Roles",
          description: [["Senior UX/UI Designer", "Product Designer"]],
        },
        {
          title: "Past experience",
          description: [[
            "NDA-protected projects, including product design for digital platforms and interactive experiences. I have collaborated with design studios and product teams across health tech, SaaS, fintech, travel, B2C, and large-scale interactive museum experiences, delivering end-to-end product solutions — from research and user flows to interface design and delivery.",
          ]],
        },
        {
          title: "Core skills",
          description: [
            [
              "UX/UI design",
              "Product design",
              "Interaction design",
              "User flows",
              "Design systems",
              "Accessibility",
              "User testing",
              "Usability",
            ],
            [
              "Feedback analysis",
              "Competitive analysis",
              "A/B testing",
              "Product metrics",
              "Typography",
              "Prototyping",
              "2D & 3D graphics",
              "AI-assisted visuals",
            ],
          ],
        },
      ],
      stats: [
        { mark: "Delivered", title: "350+ UX wireframes" },
        { mark: "and", title: "450+ polished UI mockups" },
      ],
    },
    showreel: {
      videoAriaLabel: "Showreel video displayed inside an iPad-style frame",
    },
  },

  // About
  about: {
    meta: {
      title: "About Olga Bis — Senior UX/UI Designer",
      description:
        "Olga Bis is a Senior UX/UI Designer based in Belgrade, Serbia, with 5+ years of experience in product design, responsive web and mobile interfaces, Figma systems, prototyping, visual design, 2D/3D graphics, and AI-assisted workflows.",
    },
    photoAlt: "Self-portait photo",
    intro: {
      description: [
        [
          [
            { text: "Hello!" },
            { text: "My name is Olya, I'm a Senior UX/UI designer with" },
            { text: "5+ years of experience designing digital products", accent: true },
            { text: ". I’ve collaborated with leading design studios, international startups, and product teams, including " },
            { text: "Sila Sveta", accent: true },
            { text: ", " },
            { text: "Samolet", accent: true },
            { text: ", " },
            { text: "VTB Bank", accent: true },
            { text: ", pinkman, Fun&Sun, and Metacade." },
          ],
        ],
      ],
    },
    paragraphs: [
      "Design is more than my profession — it’s a big part of who I am. I focus on understanding context, exploring details, and shaping solutions that are clear, thoughtful, and effective.",
      "I combine UX thinking and human-centered design to create experiences that balance functionality and aesthetics. I’m inspired by nature, urban environments, and technology.",
    ],
  },

  // Projects / Veterinary
  projects: {
    vet: {
      meta: {
        title: "Veterinary Software Case — Olga Bis",
        description:
          "Health tech UX/UI case by Olga Bis, Senior UX/UI Designer specializing in dashboard design, inpatient workflows, treatment tracking, and product systems for complex digital products.",
      },
      pageTitle: "Veterinary clinic software",
      navHeading: "See more",
      nav: {
        previousTitle: "Confidential projects",
        previousAlt: "Confidential projects preview",
        nextTitle: "SaaS service",
        nextAlt: "SaaS conversion platform preview",
      },
      overview: {
        columns: [
          {
            title: "My role",
            description: [["Senior UX/UI designer"]],
          },
          {
            title: "Introduction",
            description: [["Product designed for desktop and mobile, supporting veterinary clinic operations, including appointment bookings, patient records, and inpatient treatment workflows."]],
          },
          {
            title: "Contribution",
            description: [
              [
                [
                  { text: "I"},
                  { text: "led the redesign of the inpatient care workflow", accent: true },
                  { text: " and daily task dashboard, improving patient identification accuracy and treatment tracking across clinical processes." }
                ]
              ]
            ],
            selected: true,
          },
        ],
      },
      media: {
        alts: {
          mobiles: "Mobile views of the veterinary software",
          desktop: "Desktop dashboard for the veterinary software",
        },
      },
      problem: {
        sections: [
          {
            title: "Problem",
            description:
              "The clinic lacked a reliable identification system for animals in the inpatient unit. Animals without microchips were sometimes misidentified, leading to missed or delayed treatments and increased operational risk.",
          },
          {
            title: "Opportunity",
            description:
              "Through research and customer journey mapping of the existing process, I identified key gaps and proposed a unified identification system. The solution included generating unique QR codes at admission, attaching them to each enclosure, and introducing clear procedural guidelines to ensure accurate tracking and reduce errors.",
          },
        ],
        alts: {
          board: "Research board with the inpatient care journey",
          notes: "Research notes and customer journey map details",
          collage: "Collage of inpatient workflow references",
          boxes: "System concept cards for the veterinary workflow",
        },
      },
      dashboard: {
        heading: {
          title: "Design",
          description:
            "Research insights and customer journey mapping findings directly informed interface decisions. I translated identified pain points into structured workflows, clear visual hierarchy, and system-level safeguards to reduce the risk of human error. The redesigned flow integrated QR-based identification and treatment tracking directly into the system, making the process more consistent, reliable, and easy for staff to follow.",
        },
        subHeaderTitle: "(  Daily Care Dashboard  )",
        copy: {
          overview:
            "The admin dashboard provides a clear overview of daily operations, enabling administrators to track task progress, monitor ongoing care activities, and quickly switch between filters for feeding schedules, medication administration, and other required procedures.",
          overviewSupport:
            "Icon-based markers support the task list, allowing administrators to quickly identify the type of procedure, such as feeding, medication, or other care activities, at a glance.",
          patientTop:
            "When selecting a patient row, additional details expand to display prescribed treatments and the procedures scheduled for that day.",
          patientBottom:
            "After scanning the QR code on the animal’s enclosure and verifying prescriptions in the system, administrators can proceed with the required procedures. Completed tasks can then be marked as done and recorded in the system.",
          tasksLead:
            "Administrators receive clear visual notifications when tasks are not completed within their assigned time windows. The system is structured around three predefined time periods — Morning, Day, and Evening, aligned with clinic shifts.",
          tasksSupport:
            "If a task is not completed within its time window, a red “Missed” status marker appears in the task list. Missed procedures are additionally highlighted to increase visibility and reduce the risk of oversight.",
          tasksFoot:
            "The system automatically refreshes in the background every minute, ensuring that task statuses remain up to date and accurately reflected in the interface.",
        },
        alts: {
          overview: "Daily care dashboard overview",
          tabs: "Dashboard tabs",
          markers: "Task type markers",
          patient: "Patient details workflow screen",
          cat: "Expanded patient card view",
          table: "Procedure checklist detail",
          tasks: "Task status dashboard with alerts",
          clinic: "Veterinary clinic workspace",
          mobiles: "Mobile mockups for treatment workflow",
        },
      },
      testing: {
        title: "User Testing & Feedback",
        paragraphs: [
          "User testing with clinic administrators showed a reduction in identification errors and missed treatments after implementing the redesigned workflow. The QR-based verification step added a reliable control layer, reducing the risk of animal mix-ups during inpatient care.",
          "The Daily Task Dashboard improved cross-shift visibility, enabling real-time task monitoring. Automated “Missed” markers ensured incomplete procedures were immediately visible, while time-based segmentation (Morning / Day / Evening) improved task organization across shifts.",
          "Following implementation, administrators reported increased confidence and reduced cognitive load, as the system minimized manual tracking and the need for double-checking, improving workflow reliability and patient safety.",
        ],
      },
      artifacts: {
        sectionTitle: "Artifacts",
        headers: {
          prototype: "(  Prototyping  )",
          uikit: "(  UI-kit  )",
        },
        alts: {
          prototype: "Prototype overview for the veterinary platform",
          uikit: "UI-kit overview for the veterinary platform",
        },
      },
      gallery: {
        alts: {
          first: "Prototype detail screen",
          second: "Field photography from the veterinary project",
        },
      },
    },

    // Projects / SaaS
    saas: {
      meta: {
        title: "SaaS Conversion Optimization Case — Olga Bis",
        description:
          "SaaS UX/UI case by Olga Bis, Senior UX/UI Designer specializing in responsive web design, heatmaps, A/B testing, prototyping, and UI systems for product growth.",
      },
      pageTitle: ["Conversion optimization", "and Personalization platform"],
      navHeading: "See more",
      nav: {
        previousTitle: "Vet Clinic software",
        previousAlt: "Veterinary clinic software preview",
        nextTitle: "Confidential projects",
        nextAlt: "Confidential projects preview",
      },
      carousel: {
        ariaLabel: "SaaS product previews",
        srText:
          "Animated carousel of SaaS product screens moving continuously from right to left.",
        imageAltPrefix: "SaaS hero preview image",
      },
      headingInfo: {
        columns: [
          {
            title: "My role",
            description: [["Senior UX/UI designer"]],
          },
          {
            title: "Introduction",
            description: [[
              "Data-driven SaaS platform for website optimization, helping businesses improve digital performance and validate hypotheses through A/B testing and heat maps.",
            ]],
          },
          {
            title: "Contribution",
            selected: true,
            description: [[[
              { text: "I led the redesign of the platform and its marketing website, " },
              { text: "refining user scenarios,", accent: true },
              { text: "improving user flows ", accent: true },
              { text: "and visual system to enable clearer navigation", accent: true },
              { text: " " },
              { text: "and more effective interaction.", accent: true },
            ]]],
          },
        ],
      },
      problem: {
        sections: [
          {
            title: "Problem",
            items: [
              {
                title: "Brand & Positioning",
                width: "326px",
                description:
                  "The marketing website and platform no longer reflected the product’s value proposition or competitive positioning, weakening overall brand perception and user trust.",
              },
              {
                title: "Usability & structure",
                width: "292px",
                description:
                  "An outdated visual language and unclear information architecture reduced usability and made the product difficult to navigate and use effectively.",
              },
            ],
            columnsGap: "72px",
          },
          {
            title: "Opportunity",
            contentWidth: "350px",
            description: [
              "Redesign the product ecosystem by modernizing the visual system, clarifying the information architecture, and strengthening positioning ",
              "to improve usability, credibility, and conversion performance.",
            ],
          },
        ],
        imageAlt: "Key Scenarios image",
      },
      test: {
        heading: {
          title: "Design",
          description: [
            "The visual approach is built on the contrast of typography ",
            "and vibrant accents, creating a clear visual hierarchy ",
            "and strengthening brand expression.",
          ],
        },
        subHeaderTitle: "(  A/B test  )",
        alts: {
          first: "A/B test setup screen.",
          second: "Goal management screen.",
          bottomLeft: "Traffic split and participation settings.",
          bottomRight: "A/B test analytics dashboard.",
        },
      },
      heatmaps: {
        headerTitle: "( Heatmaps )",
        imageAlts: [
          "Heatmap image 1.",
          "Heatmap image 2.",
          "Heatmap image 3.",
        ],
      },
      productPage: {
        header: {
          title: "( Product page )",
          description: [
            "Highlighted the core functionality of the platform, ",
            "focusing user attention on the value of detailed ",
            "heat maps, and A/B testing.",
          ],
        },
        videoTitle: "Video presentation of SaaS landing by Olga Bis",
      },
      illustrations: {
        artifactsTitle: "Artifacts",
        headers: {
          model: {
            title: "( 3D illustrations )",
            description: [
              "Created in Cinema 4D and rendered with Arnold Renderer ",
              "to support the visual identity of the product.",
            ],
          },
          prototype: {
            title: "( Prototyping )",
          },
          uikit: {
            title: "( UI-kit )",
          },
        },
        alts: {
          model: "Showcase of 3D models",
          prototype: "UI prototype image",
          uikit: "UI Kit presentation",
        },
      },
    },
  },
};

export const content = deepApplyTypography(rawContent);

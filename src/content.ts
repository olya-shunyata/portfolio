// Shared
export const content = {
  shared: {
    brand: {
      name: "Olga Bis",
      displayName: "OLGA BIS",
      profession: "UX / UI DESIGNER",
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
      mainTitle: "Let’s pause for a moment, brew some tea, and discuss your project",
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
          text: "Senior UX/UI designer with 5 years of experience shaping digital products from concept to launch. I’ve collaborated with ",
        },
        {
          text: "leading design studios",
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
          text: "product teams",
          highlight: true,
        },
        {
          text: " designing websites and apps.",
        },
      ],
      skillsLabel: "Skill set",
      skills: [
        "strong UX thinking",
        "human-centered design",
        "interactive interfaces",
        "2D & 3D visuals",
        "AI-tools",
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
            "Health tech product for appointments, patient records, inpatient treatment, and daily care operations.",
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
          linkLabel: "View veterinary software case study",
        },
        {
          title: ["SaaS website", "optimization platform"],
          description:
            "Using tools like heat maps and A/B testing, teams can validate hypotheses.",
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
          linkLabel: "View SaaS conversion optimization case study",
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
            "I’ve collaborated with design studios and product teams on health tech, SaaS, travel, B2B/B2C, and selected fintech products, as well as large-scale interactive museum experiences.",
          ]],
        },
        {
          title: "Core skills",
          description: [
            [
              "UX/UI design",
              "Product design",
              "Interaction design",
              "Design systems",
              "Accessibility",
              "Typography & visual systems",
            ],
            [
              "Prototyping",
              "User testing & feedback",
              "Competitive analysis",
              "A/B testing",
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
            { text: "My name is Olya, I'm a Senior UX/UI designer and" },
            { text: "I have been working in this field for 5 years", accent: true },
            { text: ". I have worked with leading design studios, international startups, and product teams such as " },
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
      "Design is more than my profession — it’s a big part of who I am. I love diving into details, understanding the full context, and shaping solutions that feel thoughtful, clear, and effective.",
      "I blend UX thinking and human-centered design to create experiences that are both functional and aesthetic. I’m inspired by nature, urban spaces, and technology.",
    ],
  },

  // Projects / Veterinary
  projects: {
    vet: {
      meta: {
        title: "Veterinary Software Case Study — Olga Bis",
        description:
          "Health tech UX/UI case study by Olga Bis, Senior UX/UI Designer specializing in dashboard design, inpatient workflows, treatment tracking, and product systems for complex digital products.",
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
            description: [["Senior UX / UI designer"]],
          },
          {
            title: "Introduction",
            description: [["App & PC software for managing veterinary clinics, designed to manage appointment bookings, patient records and inpatient treatment workflows."]],
          },
          {
            title: "Contribution",
            description: [
              [
                [
                  { text: "I"},
                  { text: "led the redesign of the inpatient care workflow", accent: true },
                  { text: " and daily task dashboard, focusing on improving identification accuracy and treatment tracking within the veterinary clinic." }
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
              "The clinic lacked a reliable identification system for animals in the inpatient unit. Animals without microchips were sometimes confused, leading to missed or delayed treatments and increased operational risk.",
          },
          {
            title: "Opportunity",
            description:
              "Based on research and CJM mapping of the existing process, I identified key gaps and proposed a unified identification system. The solution included generating unique QR codes at admission, attaching them to each enclosure, and introducing clear procedural guidelines to ensure accurate tracking and reduce errors.",
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
            "Research insights and CJM findings directly shaped the interface decisions. I translated identified pain points into structured workflows, clear visual hierarchy, and system-based safeguards to reduce human error. The redesigned flow integrated QR identification and treatment tracking directly into the system, making the process clear, consistent, and easy for staff to follow.",
        },
        subHeaderTitle: "(  Daily Care Dashboard  )",
        copy: {
          overview:
            "The admin dashboard provides a clear overview of daily operations. Administrators can track the progress of completed tasks, view current care activities, and quickly switch between filters to monitor feeding schedules, medication administration, and other required procedures.",
          overviewSupport:
            "Icon-based markers visually support the task list, allowing administrators to quickly identify the type of procedure, such as feeding, medication, or other care activities, at a glance.",
          patientTop:
            "When clicking on a patient row, additional details expand to show prescribed treatments and the specific procedures scheduled for that day.",
          patientBottom:
            "After scanning the QR code on the animal’s enclosure and verifying the prescriptions in the system, the administrator can proceed with the required procedures. Once completed, the tasks can be marked as done and saved in the system.",
          tasksLead:
            "Administrators receive clear visual notifications when tasks are not completed on time. The system is structured around three predefined time periods: Morning, Day, and Evening, aligned with clinic shifts.",
          tasksSupport:
            "If a task is not completed within its assigned time window, a red “Missed” status marker appears in the task list. Missed procedures are additionally highlighted to increase visibility and reduce the risk of oversight.",
          tasksFoot:
            "The system automatically refreshes in the background every minute to ensure that task statuses remain up to date and accurately reflected in the interface.",
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
          "User testing with clinic administrators showed a reduction in identification errors and missed treatments after implementing the redesigned workflow. The QR-based verification step added a reliable control layer, decreasing the risk of animal mix-ups during inpatient care.",
          "The Daily Task Dashboard improved visibility across shifts, enabling real-time task monitoring. Time-based segmentation (Morning / Day / Evening) and automated “Missed” markers ensured incomplete procedures were immediately visible.",
          "Following implementation, administrators reported greater confidence and reduced cognitive load, as the system minimized manual tracking and double-checking. Overall, the solution strengthened workflow reliability and enhanced patient safety.",
        ],
      },
      artifacts: {
        sectionTitle: "Artifacts",
        headers: {
          prototype: "(  Prorotyping  )",
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
        title: "SaaS Conversion Optimization Case Study — Olga Bis",
        description:
          "SaaS UX/UI case study by Olga Bis, Senior UX/UI Designer specializing in responsive web design, heatmaps, A/B testing, prototyping, and UI systems for product growth.",
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
            description: [["Senior UX / UI designer"]],
          },
          {
            title: "Introduction",
            description: [[
              "SaaS service is a data-driven website optimization platform that helps businesses improve digital performance. Using tools like heat maps and A/B testing, teams can validate hypotheses.",
            ]],
          },
          {
            title: "Contribution",
            selected: true,
            description: [[[
              { text: "I led the redesign of the platform and its marketing website, conducting competitive research, " },
              { text: "refining key user scenarios,", accent: true },
              { text: "and rebuilding feature hierarchy.", accent: true },
              { text: "I improved user flow,", accent: true },
              { text: " " },
              { text: "modernized the visual system.", accent: true },
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
                  "The marketing website and platform no longer reflected the product's value or competitive positioning, weakening overall brand perception.",
              },
              {
                title: "Usability & structure",
                width: "292px",
                description:
                  "An outdated visual language and unclear information architecture made the product difficult to navigate and use effectively.",
              },
            ],
            columnsGap: "72px",
          },
          {
            title: "Opportunity",
            contentWidth: "350px",
            description: [
              "Redesign the ecosystem by modernizing the visual system, clarifying structure, and strengthening positioning to improve usability, credibility,",
              "and conversion performance.",
            ],
          },
        ],
        imageAlt: "Key Scenarios image",
      },
      test: {
        heading: {
          title: "Design",
          description: [
            "The stylistic solution relies on the interplay of contrasting",
            "typography and vibrant accents.",
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
            "I underscored the pivotal functionality that propels the service, ",
            "bringing users' attention to the potential and benefits associated with ",
            "the use of detailed analytics, heatmaps and A/B testing.",
          ],
        },
        videoTitle: "Video presentation of SaaS landing by Olga Bis",
      },
      illustrations: {
        artifactsTitle: "Artifacts",
        headers: {
          model: {
            title: "( 3D illustrations )",
            description: ["Created in Cinema 4D and rendered using Arnold Render"],
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

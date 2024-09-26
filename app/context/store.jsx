"use client";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      activeEventId: null,
      modalIsOpen: false,
      isNavOpen: false,
      showContactModal: false,
      isLargeScreen: false,
      isClient: false,
      windowWidth: 0,
      zeffyWarningText:
        "A donation to the payment platform Zeffy will automatically populate at ~9% of your donation to this project. To prevent this charge, enter the amount of your donation to this project, choose Other from the dropdown menu in the Summary section, then enter the amount that you want to donate to Zeffy ($0 is fine).",
      fiscalFilms: [
        {
          title: "All That's Left Of You",
          type: "Fiction Feature",
          status: "Pre-Production",
          director: "Cherien Dabis",
          producer: "Thanassis Karathanos",
          execProducer: "Karim Amer",
          image: "/img/all-thats-left-of-you.jpeg",
          directorBio:
            "Cherien Dabis is a critically acclaimed Palestinian American filmmaker and Emmy nominated television director. She is best known for her critically acclaimed independent feature films, AMREEKA (2009), and MAY IN THE SUMMER (2013), which premiered at the Sundance, Cannes and Venice film festivals and won dozens of international awards. AMREEKA was nominated for three Independent Spirit Awards, including Best Picture, and broke records in its theatrical release by becoming the most-screened Arab-directed film in US-cinema history. Dabis is highly sought after in television for her standout episodic directing work on Emmy and Golden Globe-winning shows like ONLY MURDERS IN THE BUILDING (Hulu), RAMY (Hulu) and OZARK (Netflix)",
          producerBio:
            "Thanassis Karathanos studied political sciences and economics in Athens and Berlin. In 1998 he founded the film production company TWENTY TWENTY VISION in Berlin and in 2003 the production company PALLAS FILM in Halle (Saale). He has produced dozens of international films that have been celebrated at top tier film festivals and enjoy theatrical success worldwide. Recent credits include Cannes official selection MEDITERRANEAN FEVER (2022), THE GRAVEDIGGER’S WIFE (2021), Academy Award-nominated THE MAN WHO SOLD HIS SKIN (2020) and Cannes competition title IT MUST BE HEAVEN (2019). He is a member of the European and German Film Academy.",
          execProducerBio:
            "Karim Amer is an Academy Award-nominated filmmaker. His most recent film DEFIANT (2023) premiered at the Toronto Film Festival. THE GREAT HACK (2019), which he directed and produced, premiered at the Sundance Film Festival, was BAFTA and Emmy-nominated, and won a Cinema Eye Award. He also directed and produced HBO’s THE VOW (2020), a series about the self-improvement group NXIVM.  He has also produced Emmy-winning and Oscar-nominated THE SQUARE (2013), Audience Award-winner at the Sundance Film Festival and the Toronto Film Festival. He has produced the Golden Globe-winning series RAMY (2019) and teamed up with Angelina Jolie to produce Academy Award-nominated THE BREADWINNER (2017). Karim is a member of the Academy of Motion Picture Arts and Sciences.",
          logline:
            "In the moments before a Palestinian teen is confronted by Israeli soldiers at a protest in the West Bank, his mother recounts the series of events that led him to that fateful moment, starting with his grandfather’s displacement from Jaffa in 1948. All That’s Left of You is an epic historical drama chronicling the story of one family over three generations and examining the passage of trauma to each.",
          synopsis:
            "The year is 1948. Hundreds of thousands of Palestinians have been forced to flee their homes. But Palestinian citrus farmer SHARIF refuses to go anywhere. Instead, he sends his family to safety and stays behind to protect their multigenerational land. Soon after, the city falls, and Sharif is captured. Months go by, and his family fears the worst. Even his youngest son SALIM, who’s desperate to hold out hope, starts to mourn. A year later, they’ve given up on ever seeing Sharif again. That’s when Sharif unexpectedly turns up on their doorstep. A shadow of the man he used to be, he can barely hold himself upright. Salim can’t help but feel that he’s lost his father for good. Decades later, Sharif is still haunted by how quickly his life, his entire society was erased. He obsesses over what he could’ve done to change his family’s fate. His son SALIM now has a family of his own, and they’ve managed to build their lives in a dilapidated refugee camp in the occupied West Bank. One day, Salim is rushing his young son NOOR home at the onset of an unexpected curfew. But they’re caught by a group of Israeli soldiers. In a troubling encounter, Noor is forced to see that his own father can’t protect him. In that instant, his perspective shifts, and the man who was once his hero is deemed a coward.  Nearly a decade later, the West Bank is ablaze with resistance. NOOR, now a rebellious teen, fearlessly confronts Israeli soldiers at a protest that descends into chaos. He’s injured and taken to a hospital. As doctors set out to save their son, Salim and Hanan manage to find a glimmer of hope to help them make meaning of all the pain they’ve had to carry.",
        },

        {
          title: "Untitled Ukrainian Cello Documentary",
          type: "Hour-long Documentary",
          status: "Pre-Production",
          director: "Keith Maitland",
          producer: "Carolyn Pfeiffer & Megan Gilbride",

          image: "/img/ukraine.jpg",
          directorBio:
            "KEITH MAITLAND is a writer/director/producer of fiction and non-fiction. Named one of Variety’s “10 Documakers to Watch,” in 2016 he released TOWER, an emotional and action-packed retelling of America’s first mass shooting. TOWER took three awards at SXSW, was nominated for Gotham, PGA and Peabody awards, was short-listed for the Academy Award, and won the Emmy for Best Historical Documentary — as well as the first-ever Critics Choice Award for Most Innovative Documentary. Keith’s latest doc, DEAR MR. BRODY — a psychedelic journey into the heart (and bank account) of Michael Brody, Jr, the hippie-millionaire who offered the world peace for the price of a postage stamp — an official selection of Telluride, Tribeca and SXSW, is now streaming on MAX.",
          producerBio:
            "CAROLYN PFEIFFER  is a pioneering producer in the world of American independent film. Having run two successful film companies, Alive Films and Island Alive, and having worked with directors such as Alan Rudolph, Sam Shepard, Mary Lambert, and Wes Craven, Carolyn was dubbed a “mini-mogul” by the Wall Street Journal. Carolyn was also the founding president of the Los Angeles Film School, the vice chair of the American Film Institute Conservatory, and the founding president of Burnt Orange Productions at the University of Texas.             In her early years working in film, she lived in Rome, Paris, and London. Her formative experiences introduced her to a cast of characters ranging from Luchino Visconti, Federico Fellini, Omar Sharif, and François Truffaut to Robert Altman, Tennessee Williams and the Beatles, and she came of age on the sets of films like Fellini’s 8 1/2, The Leopard, and Doctor Zhivago.             Carolyn has produced twenty plus films.  She most recently executive produced ROBERT IRWIN: A DESERT OF PURE FEELING and before that Keith Maitland’s DEAR MR. BRODY. Her memoir Chasing the Panther: Adventures & Misadventures of a Cinematic Life was published by Harper Horizon in June of 2023.",
          producer2Bio:
            "MEGAN GILBRIDE is a multiple Emmy-winning and Independent Spirit Award-nominated producer of narrative and documentary films. Her work has played at film festivals on five continents including Sundance, Telluride, HotDocs, IDFA, Busan, Karlovy Vary, BFI London, AFIDocs, CPH:DOX, New Zealand IFF, and Dubai. She produced the visionary documentary feature, TOWER (Emmy Award, Peabody nomination, shortlisted for the Best Documentary Academy Award), which broadcast on PBS's Independent Lens and was distributed by Netflix and Kino Lorber. She produced LOVERS OF HATE, a Sundance U.S. Dramatic Competition premiere, released by IFC and nominated for an Independent Spirit Award. Last year, Apple TV+ released her sci-fi documentary feature, FATHOM (Emmy Award), which follows two groundbreaking bio-acousticians as they uncover the mysteries of humpback whale communication and culture. Her other films include DEAR MR. BRODY, currently on Max, and WHERE SOLDIERS COME FROM (Emmy Award, FIND Truer than Fiction Award). In 2022, Megan was one of four recipients of the inaugural Dear Producer Award, an honor recognizing independent producers’ creative vision and leadership in the field. She serves on the advisory board of the Documentary Producers Alliance and is a member of the Producers Guild of America.",

          logline:
            "Defiantly pitting art against totalitarianism,  cellist Matt Haimovitz travels from Marfa, Texas to war-weary Ukraine, to perform Ukrainian composer Thomas de Hartmann’s forgotten anti-fascist Cello Concerto (1935) with the Odesa Symphony. Presented with Ukrainian voices, past and present, Matt reveals the power of music to inspire hope amidst chaos.",
          synopsis: "",
        },
        {
          title: "The School of Hope",
          type: "Short Documentary",
          status: "Pre-Production",
          director: "Amy Martinez",
          producer: "Chelsea Hernandez",
          image: "/img/tsoh.png",
          directorBio:
            "Amy is an Emmy®-nominated Mexican American filmmaker, with a long successful career in documentary features, series and branded content for works featured on Netflix, Prime Video, Hulu, PBS, and National Geographic whose production work was selected for the 2020 Telluride Film Festival. She has produced acclaimed documentaries such as FARMLAND (Netflix), directed by Academy Award winner James Moll and A WHISPER TO A ROAR (Prime). Currently developing a career as an independent film director based in Austin, Texas, after years of living and working in Chicago and Los Angeles, Amy is drawn to stories that center dignity, joy and tenderness discovered in unexpected places, especially centered on women’s interconnected care for one another and their communities. She is an active member of the Documentary Producers Alliance, Video Consortium and Brown Girls Doc Mafia. Originally from South Texas, Amy is a graduate of Northwestern University’s Medill School of Journalism.",
          producerBio:
            "At the heart of Chelsea Hernandez’s storytelling are themes of community, representation and social justice. Named as one of Texas Monthly’s “Texas filmmakers poised to usher in a new Golden Age of Texas cinema” and DOC NYC’s “40 Under 40” class of 2021, Chelsea has directed and produced award-winning feature and short documentaries for over 15 years and produced television docuseries for El Rey Network, Paramount+ and PBS.          She is a National Emmy-nominated Director for her first feature documentary BUILDING THE AMERICAN DREAM (SXSW, PBS), Winner of the 2021 Silver Telly Award for Social Impact, an 8-time Lone Star Emmy Winning Director, Producer and Editor, an SFFilm Rainin Grant Recipient, Warner Media 150 Artist, Winner of the David Carr Award for Truth in Nonfiction Filmmaking, and a fellow of Firelight Media Doc Lab, Tribeca All Access, BAVC National Mediamaker, Gotham Week and NALIP Latino Media Market.          As director and producer, Chelsea’s second feature documentary BREAKING THE NEWS, a co-production of ITVS is streaming now on Independent Lens/PBS. Chelsea is also a founding member of Tejanas in Film, a collective that aims to support and uplift Latina and Latinx filmmakers living and working in Texas.",
          producer2Bio:
            "Monica Wise is a freelance Colombian American documentary filmmaker and video journalist based in Mexico City. She has produced documentaries with The Guardian, NYT and the BBC, among other outlets. Her first short documentary LUPITA, about a Maya massacre survivor, premiered at the Ambulante festival in Mexico, Sheffield Doc/Fest and Doc NYC in 2020, receiving awards from several others. She was a cinematographer on Netflix’s TRIALS OF GABRIEL FERNÁNDEZ (2018), Iliana Sosa’s feature WHAT WE LEAVE BEHIND (2022 SXSW award winner, NYT Critic Pick and Gotham Awards Nominee for Best Documentary feature), AFTER THE FLOOD (2022 Emmy Winner) and NIÑAS // SOMOS EL FUEGO (2022 Premio Gabo Winner).",
          logline:
            "At the Texas-Mexico border, The Sidewalk School defies seemingly insurmountable odds to offer free education, safety and security to vulnerable child asylum seekers.",
          synopsis:
            "We enter The Sidewalk School at a child's eye level. Little by little cumulative scenes reveal its students are in Matamoros, Mexico at the border of the U.S. waiting for a chance to seek asylum and facing huge stress. Yet, even after long, unimaginable treks fleeing violence, persecution, and climate change, in this makeshift space childhood can still safely function. Children form friendships, enjoy play, form a beloved community, process strong emotions like fear and rage, experience trusting multigenerational connections, and learn. We'll follow two students as they flourish through vibrant moments of connection with supportive teachers, many of whom are former asylum seekers themselves.The story shifts to show the school's founders, Felicia Rangel-Samponaro and Victor Cavazos wrestling with daily pressures. Perspective broadens. All around the children is danger. Violence, racism, hostility, the cartel. Felicia and Victor get the sick to treatment, deal with emergencies, speak out against racist denial of care. As first responders and care workers providing a vital community hub, they bear witness to realities and decry disinformation. The enriching environment Felicia, Victor and their team provide is like a precious oasis subsisting precariously amid life-threatening circumstances and hateful policies as they strive to provide a DIY solution in a vacuum of care.",
        },
      ],
      content: [
        {
          title: "Apocalypse Now",
          year: "1979",
          image: "/img/apocalypse-now-1979.jpeg",
          category: "suspense",
          category2: "new",
          trailer: "https://youtu.be/9l-ViOOFH-s",
          description: "this is the description",
        },
      ],
      events: [
        {
          id: 1,
          title: "DIY ANALOG FILMMAKING",
          image: "/img/bolex2.jpg",
          category: "new",
          description:
            "Get hands-on experience shooting with a Bolex Reflex camera, processing film using non-toxic household items, and editing by hand using analog equipment. The workshop will take place in Austin Texas. (If you have access to the necessary equipment you're welcome to join online!)",
          instruction2: "",
          instruction:
            "E-mail info@ccearts.org to be included in the next cohort.",
          trailer: "",
          date: "2025-01-01",
          link: "",
        },
        {
          id: 2,
          title: "LEGAL CHALLENGES IN DOCUMENTARY FILM",
          image: "/img/mwmc.png",
          category: "staff",
          bullet1: "Livestream",
          description:
            "This 90 minute workshop offers guidance on some of the most common legal issues in documentary filmmaking, including fundraising and distribution.  We encourage you to come with questions.",
          instruction2: "",
          instruction:
            "E-mail info@ccearts.org to be notified of the next workshop.",
          trailer: "",
          date: "2025-01-01",
          link: "",
        },
        {
          id: 3,
          title: "",
          image: "/img/CCEARETREATSMALLER.png",
          category: "staff",
          description: "",
          instruction2: "",
          instruction: "",
          trailer: "",
          date: "2024-01-01",
          link: "",
        },
      ],
    },
    actions: {
      initializeScreenSize: () => {
        setStore({
          isLargeScreen: window.innerWidth > 1000,
          isClient: true,
          windowWidth: window.innerWidth,
        });
      },

      updateScreenSize: () => {
        setStore({
          isLargeScreen: window.innerWidth > 1000,
          windowWidth: window.innerWidth,
        });
      },
      toggleNavOpen: () => {
        const store = getStore();
        setStore({ isNavOpen: !store.isNavOpen });
      },
      setShowContactModal: (show) => {
        setStore({ showContactModal: show });
      },
      setIsNavOpen: (isOpen) => {
        setStore({ isNavOpen: isOpen });
      },
      toggleContactModal: () => {
        const store = getStore();
        setStore({ showContactModal: !store.showContactModal });
      },
      openModal: () => {
        setStore({ modalIsOpen: true });
      },
      closeModal: () => {
        setStore({ modalIsOpen: false });
      },
      toggleModal: (id = null) => {
        const store = getStore();
        if (id === null) {
          setStore({ modalIsOpen: false, activeEventId: null });
        } else {
          setStore({ modalIsOpen: true, activeEventId: id });
        }
      },
    },
  };
};

export default getState;

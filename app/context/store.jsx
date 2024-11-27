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
      content: [],
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
          title: "LEGAL CHALLENGES IN DOCUMENTARY",
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

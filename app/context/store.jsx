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
          date: "12 / 12 / 2027",
          title: "Test Event 1",
          images: ["2.jpg", "7.jpg", "8.jpg"],
        },
        {
          date: "12/12/2027",
          title: "Test Event 2",
          images: ["2.jpg", "7.jpg", "8.jpg"],
        },
        {
          date: "12/12/2024",
          title: "Test Event 3",
          images: ["2.jpg", "7.jpg", "8.jpg"],
        },
      ],
      zeffyWarningText:
        "A donation to the payment platform Zeffy will populate at ~9%. To prevent this charge, enter donation amount, choose OTHER from the dropdown in the Summary section, and enter the amount you want to give Zeffy.",

      rooms: [
        {
          name: "THEATER SPACE",
          images: ["theater.png"],
          sq: "Theater: 4500 sq., Stage - 18’ H x 26’ L",
          text: "A beautifully maintained 350-seat Victorian theater, featuring: Elegant period architecture and exceptional acoustics. A fully equipped stage. Ideal for lectures, theatrical productions, film screenings, and live music.",
        },
        {
          name: "FILMING LOCATION",
          images: ["2.jpg"],
          sq: "Theater: 4500 sq., Stage - 18’ H x 26’ L",
          text: "A beautifully maintained 350-seat Victorian theater, featuring: Elegant period architecture and exceptional acoustics. A fully equipped stage. Ideal for lectures, theatrical productions, film screenings, and live music.",
        },
        {
          name: "MEETING ROOM AND OFFICES",
          sq: "",
          images: ["4.jpg"],
          text: "Workshops, small-group discussions, and private meetings. Organizational events and study sessions.",
        },
        {
          name: "GARDEN AND OUTDOOR AREA",
          sq: "Garden is ~8,000 sq.",
          images: ["7.jpg"],
          text: "A peaceful, scenic garden ideal for receptions and outdoor gatherings. Perfect for meditation retreats, social mixers, and networking events.",
        },
        // {
        //   name: "Press Room",
        //   images: ["2.jpg", "7.jpg", "8.jpg"],
        //   sq: "200 sq.",
        //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        // },
        // {
        //   name: "Gita Room",
        //   images: ["4.jpg", "7.jpg", "8.jpg"],
        //   sq: "680 sq.",
        //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        // },
        // {
        //   name: "Foryer, Main Entrance",
        //   images: ["2.jpg", "7.jpg", "8.jpg"],
        //   sq: "450 sq.",
        //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        // },
        // {
        //   name: "Kitchen",
        //   images: ["5.jpg", "8.jpg"],
        //   sq: "Kitchen - 350 sq.",
        //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        // },
        // {
        //   name: "Sitting Room, Upstairs",
        //   images: ["2.jpg", "5.jpg"],
        //   sq: "875 sq.",
        //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        // },
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

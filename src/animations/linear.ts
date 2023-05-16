export const bottom = {
    init: {
      opacity: 0,
      y: "25px",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 1,
      },
    },
  };
  
  export const left = {
    init: {
      opacity: 0,
      x: "-25px",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 1,
      },
    },
  };
  export const right = {
    init: {
      opacity: 0,
      x: "25px",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 1,
      },
    },
  };
  
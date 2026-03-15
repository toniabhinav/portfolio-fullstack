type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
  title: "Abhinav Kumar — Developer Portfolio",
  fullName: "Abhinav Kumar",
  email: "abhinavkm048@gmail.com",
},
hero: {
  name: "Abhinav Kumar",
  p: [
    "AI & Data Application Developer"
  ],
},
  contact: {
  p: "Let's connect",
  h2: "Contact Me.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I am an Information Science Engineering student passionate about
building scalable software systems and data-driven solutions.

I have experience in Full Stack Development using the MERN stack and
in Data Analytics using Python, Pandas, and visualization tools.

I also work on computer vision applications such as sports tactical
analysis systems using OpenCV and machine learning techniques.
`,
    },
    experience: {
  p: "My professional journey",
  h2: "Experience.",
},
    feedbacks: {
  p: "Achievements",
  h2: "Certifications.",
},
    works: {
  p: "My projects",
  h2: "Projects.",
      content: `These projects showcase my experience in software development,
data analytics, and machine learning.

Each project demonstrates my ability to build full stack applications,
analyze complex datasets, and develop intelligent systems using modern
technologies.`,
    },
  },
};

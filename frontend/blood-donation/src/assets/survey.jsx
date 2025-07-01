const steps = [
  {
    section: 2,
    totalQuestions: 3,
    questions: [
      {
        title: "Have you ever donated?",
        options: ["Yes", "No"],
        subQuestion: {
          condition: "Yes",
          title: "When was your last donation?",
          options: ["1 month ago", "3 months ago", "More than 6 months ago"],
        },
      },
      {
        title: "Do you feel healthy today?",
        options: ["Yes", "No"],
      },
      {
        title: "Have you slept at least 5 hours?",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    section: 3,
    totalQuestions: 2,
    questions: [
      {
        title: "Did you eat in the last 4 hours?",
        options: ["Yes", "No"],
      },
      {
        title: "Do you weigh more than 50kg?",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    section: 4,
    totalQuestions: 2,
    questions: [
      {
        title: "Do you have any chronic diseases?",
        options: ["Yes", "No"],
      },
      {
        title: "Have you taken any medication in the last 48 hours?",
        options: ["Yes", "No"],
      },
    ],
  },
];

export {steps}
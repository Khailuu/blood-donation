import { blog1, blog2, blog3, blog4 } from "./index";

const categories = ["ALL", "BLOG", "THEY TALK ABOUT US", "SUCCESS STORIES"];

const articles = [
  {
    key: 1,
    title:
      "Il Mattino: “Verso Sud Youth” the Rosso startup: «Fast blood donations with a click»",
    description:
      "Receiving enthusiastic applause from Italian and international business leaders is not easy.Filippo Toni (in the circle), 18 years old, has had it and a lot. At the “Verso Sud Youth” panel he presented “Rosso”, his startup created in 2023, from which an app was also born, which allows you to book a blood or plasma donation throughout the country without wasting time and, above all, putting together all the data of donors, blood banks and so on.",
    date: "20/05/2025",
    label: "THEY TALK ABOUT US",
    image: blog1,
  },
  {
    key: 2,
    title:
      "“Donating is an act that enriches those who do it and saves those who receive it”: Dialogue with Dr. Sandro Macchi",
    description:
      "In our work with Rosso we often meet exceptional professionals, but some meetings really leave us speechless.",
    date: "05/13/2025",
    label: "SUCCESS STORIES",
    image: blog2,
  },
  {
    key: 3,
    title: "Blood Donation and Hashimoto's Thyroiditis: Can You Donate?",
    description:
      "Hashimoto's thyroiditis is an autoimmune disease that affects the thyroid and is the leading cause of...",
    date: "12/05/2025",
    label: "BLOG",
    image: blog3,
  },
  {
    key: 4,
    title: "Donating Blood After a Trip Abroad",
    description:
      "Have you been abroad recently or are you planning to go? On this page you will find all the information you need",
    date: "29/05/2024",
    label: "BLOG",
    image: blog4,
  },
];

const labelColors = {
  BLOG: "black",
  "THEY TALK ABOUT US": "black",
  "SUCCESS STORIES": "black",
};

const selectedTag = "ALL";

export { categories, articles, labelColors, selectedTag };

import { donation, interview, registration } from "./index.jsx";

const items = [
  {
    checked: false,
    content: (
      <>
        Donation accessible in a few clicks with our{" "}
        <span className="highlight">App!</span>
      </>
    ),
  },
  {
    checked: true,
    content: (
      <>
        Awareness and <span className="highlight">information</span> events for
        prevention
      </>
    ),
  },
  {
    checked: false,
    content: (
      <>
        Donation events and <span className="highlight">active support</span>:
        to associations and hospitals!
      </>
    ),
  },
  {
    checked: false,
    content: (
      <>
        Promoting giving within{" "}
        <span className="highlight">corporate communities.</span>
      </>
    ),
  },
  {
    checked: false,
    content: (
      <>
        Engaging <span className="highlight">Gen Z</span> in the Culture of
        Giving
      </>
    ),
  },
];

const cardData = [
  {
    id: 1,
    title: "People",
    content:
      "Book your donation in less than 24 hours. <br /> Receive support, reminders, useful information.",
    buttonText: "Find out how to donate",
  },
  {
    id: 2,
    title: "Associations and Hospitals",
    content: "We help you engage new donors and better manage bookings.",
    buttonText: "Collaborate with us",
  },
  {
    id: 3,
    title: "Companies",
    content: "Custom projects to bring the culture of giving into the office.",
    buttonText: "Become a Partner",
  },
];

const requirements = [
  {
    checked: true,
    content: "Be between 18 and 65 years old",
  },
  {
    checked: true,
    content: "Be between 18 and 65 years old",
  },
  {
    checked: false,
    content: "Be between 18 and 65 years old",
  },
];

const features = [
  { text: "+ 1000 centers throughout Italy", bold: "+1000 centers" },
  {
    text: "+ Choose between blood or plasma donation",
    bold: "+ Choose between blood or plasma",
  },
  { text: "Find out now if you are eligible to donate!", bold: "Find out" },
  { text: "Personalized reminders.", bold: "Personalized reminders" },
];

const donationSteps = [
  {
    id: 1,
    title: "Registration",
    image: registration,
    description:
      "Become a blood superhero with just one click! Join us to be part of our awesome community.",
  },
  {
    id: 2,
    title: "Interview",
    image: interview,
    description:
      "Have a one-on-one interview with a hematologist. Then, get a blood pressure test and a complete blood count to verify your eligibility. (Tests may vary at some collection centers based on their policies.)",
  },
  {
    id: 3,
    title: "Donation",
    image: donation,
    description:
      "Donate your blood! It only takes 10 minutes of your time and a pinch of courage to make an extraordinary gesture.",
  },
];

const beforeDonation = [
  {
    checked: true,
    content: "Don't stay up late: sleep is an ally of donors",
  },
  {
    checked: true,
    content: "Eat a light breakfast, avoiding fats and dairy products",
  },
  {
    checked: false,
    content: "Avoid cigarettes close to donation",
  },
];

const afterDonation = [
  {
    checked: true,
    content: "Don't stay up late: sleep is an ally of donors",
  },
  {
    checked: true,
    content: "Eat a light breakfast, avoiding fats and dairy products",
  },
  {
    checked: false,
    content: "Avoid cigarettes close to donation",
  },
];

const duringDonation = [
  {
    checked: true,
    content:
      "If you are afraid of needles , talk to the nursing staff, they will put you at ea",
  },
  {
    checked: true,
    content:
      "Squeeze and open the palm of the hand from which you are donating.",
  },
  {
    checked: false,
    content: "Relax and do not cross your legs: this would impede blood flow.",
  },
];

const types = [
  {
    checked: true,
    title: "Treatments for patients",
    subtitle: "Red, White and Platelet Blood Cells",
    content:
      "Red blood cells, platelets, plasma, and white blood cells are used to treat various medical conditions such as anemia, bleeding disorders, burns, immune deficiencies, and blood disorders. These blood components are essential to providing targeted care to patients.",
  },
  {
    checked: true,
    title: "Emergencies and accidents",
    subtitle: "Red Blood Cells and Platelets",
    content:
      "Red blood cells are used in emergency situations and blood loss , while platelets are used to manage acute bleeding",
  },
  {
    checked: false,
    title: "Drug manufacturing",
    subtitle: "Blood components",
    content: "Use of blood components for the production of drugs",
  },
  {
    checked: false,
    title: "Medical research",
    subtitle: "The research pockets",
    content:
      "Donated blood is used in scientific research and in the development of new treatments and drugs.",
  },
];

export {
  items,
  requirements,
  features,
  donationSteps,
  beforeDonation,
  afterDonation,
  duringDonation,
  cardData,
  types,
};

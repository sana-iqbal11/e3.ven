// pages/index.tsx

import Accordion from "@/components/shared/accordion";

const items = [
  {
    id: "1",
    title: "What is the program duration?",
    content:
      "The program consists of a 2-month intensive phase, followed by a 1-month support phase, providing necessary resources such as office spaces and accommodation in Saudi Arabia, to ensure a smooth transition and continued growth.",
    },
  {
    id: "2",
    title: "Who is this program for?",
    firstList:"Established MENA startups across various industries with a strong desire and potential to enter the Saudi market. Only the founders can apply, regardless of team size.",
    secondlist:"Seed & Series A Stage Startups: The Program is designed for early-stage startups with a validated product or service in their home market (typically Egypt).",
    thirdlist:"Market-validated Solutions: We seek startups with existing customer traction, sales data, or pilot program results demonstrating product-market fit. This indicates a strong foundation for successful expansion into Saudi Arabia.",
    fourthList:"Saudi Market Relevance: Your product or service should address a clear need or gap in the Saudi market. We look for solutions that leverage existing demand within the Saudi business landscape.",
    fifthList:"Innovative & Differentiated Offerings: Does your startup offer a unique and valuable solution for Saudi customers? Highlight innovative technology, disruptive approaches, or clear differentiation from existing competitors.",
    sixList:"Experienced Founding Team: A strong founding team with industry knowledge, leadership skills, and a passion for your business is crucial. Your team's experience should equip them to navigate the Saudi market effectively.",
},
  {
    id: "3",
    title: "Are there any fees for application or participation?",
      firstList:"No, there are no fees to apply or participate in the Startup Acceleration Program. All expenses during the program are covered by E3.Ventures.",
    },
  {
    id: "4",
    title: "How can I apply?",
      firstList:"You can apply through the application form available on this",
      link:" link."
    },
  {
    id: "5",
    title: "Will I receive feedback on my application?",
      firstList:"We will notify you of your application status (acceptance or rejection) via email.",
    },
  {
    id: "6",
    title: "How many times is the program offered per year?",
      firstList:"The Startup Acceleration Program is offered 2 to 4 times a year. Stay tuned to our website for upcoming application deadlines.",
    },
  {
    id: "7",
    title: "How many startups will be selected for this cohort?",
      firstList:"Only 5 startups will be selected for this cohort. The Startup Acceleration Program is highly competitive, and we seek the most promising startups with the potential to make a significant impact in the Saudi market.",
    },
  {
    id: "8",
    title: "Where will the program be held?",
      firstList:"The program will be held in two locations: Cairo, Egypt and Riyadh, Saudi Arabia.",
    },
  {
    id: "9",
    title: "How much time commitment is required?",
      firstList:"Full dedication to the program is required. There should be no absences during the program. Sessions will be held in the mornings within regular working hours, but the program hours may be extended in special cases.",
    },
  {
    id: "10",
    title: "Can I participate in another program simultaneously?",
      firstList:"Unfortunately, participation in another program during the Startup Acceleration Program is not recommended.",
    },
  {
    id: "11",
    title: "Can I withdraw from the program after being accepted?",
      firstList:"Withdrawing from the program after acceptance is not possible.",
    },
];

const AccordionPrograms: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <Accordion items={items} />
    </div>
  );
};

export default AccordionPrograms;

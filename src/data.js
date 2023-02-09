import img1 from "./assets/img-1.jpg";
import img2 from "./assets/img-2.jpg";
import img3 from "./assets/img-3.jpg";
export const projectListData = [
  {
    projectID: crypto.randomUUID,
    projectTitle: "تدوین و صداگذاری",
    showMore: true,
    contents: [
      {
        id: crypto.randomUUID,
        title: "تدوین تیزر تبلیغاتی نوشیدنی",
        image: img1,
      },
      {
        id: crypto.randomUUID,
        title: "تدوین تیزر تبلیغاتی نوشیدنی",
        image: img1,
      },
      {
        id: crypto.randomUUID,
        title: "تدوین تیزر تبلیغاتی نوشیدنی",
        image: img1,
      },
    ],
  },
  {
    projectID: crypto.randomUUID,
    projectTitle: "طراحی و گرافیک",
    showMore: false,
    contents: [
      { id: crypto.randomUUID, title: "طراحی سایت آموزشی آشپزی", image: img2 },
      { id: crypto.randomUUID, title: "طراحی سایت آموزشی آشپزی", image: img2 },
    ],
  },
  {
    projectID: crypto.randomUUID,
    projectTitle: "گویندگی و خوانندگی",
    showMore: true,
    contents: [
      {
        id: crypto.randomUUID,
        title: 'خوانش کتاب صوتی "کتابخانه نیمه شب"',
        image: img3,
      },
      {
        id: crypto.randomUUID,
        title: 'خوانش کتاب صوتی "کتابخانه نیمه شب"',
        image: img3,
      },
      {
        id: crypto.randomUUID,
        title: 'خوانش کتاب صوتی "کتابخانه نیمه شب"',
        image: img3,
      },
    ],
  },
];

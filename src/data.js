import {
  Squares2X2Icon,
  UserCircleIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  NewspaperIcon,
  UserPlusIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";
import img1 from "./assets/img-1.jpg";
import img2 from "./assets/img-2.jpg";
import img3 from "./assets/img-3.jpg";
export const projectListData = [
  {
    projectID: crypto.randomUUID(),
    projectTitle: "تدوین و صداگذاری",
    showMore: true,
    contents: [
      {
        id: crypto.randomUUID(),
        title: "تدوین تیزر تبلیغاتی نوشیدنی",
        image: img1,
      },
      {
        id: crypto.randomUUID(),
        title: "تدوین تیزر تبلیغاتی نوشیدنی",
        image: img1,
      },
      {
        id: crypto.randomUUID(),
        title: "تدوین تیزر تبلیغاتی نوشیدنی",
        image: img1,
      },
    ],
  },
  {
    projectID: crypto.randomUUID(),
    projectTitle: "طراحی و گرافیک",
    showMore: false,
    contents: [
      {
        id: crypto.randomUUID(),
        title: "طراحی سایت آموزشی آشپزی",
        image: img2,
      },
      {
        id: crypto.randomUUID(),
        title: "طراحی سایت آموزشی آشپزی",
        image: img2,
      },
    ],
  },
  {
    projectID: crypto.randomUUID(),
    projectTitle: "گویندگی و خوانندگی",
    showMore: true,
    contents: [
      {
        id: crypto.randomUUID(),
        title: 'خوانش کتاب صوتی "کتابخانه نیمه شب"',
        image: img3,
      },
      {
        id: crypto.randomUUID(),
        title: 'خوانش کتاب صوتی "کتابخانه نیمه شب"',
        image: img3,
      },
      {
        id: crypto.randomUUID(),
        title: 'خوانش کتاب صوتی "کتابخانه نیمه شب"',
        image: img3,
      },
    ],
  },
];

export const linkData = [
  { linkName: "داشبورد", path: "/", Icon: Squares2X2Icon },
  {
    linkName: "پروفایل",

    path: "/profile",
    Icon: UserCircleIcon,
  },
  {
    linkName: "گفتگو ها",

    path: "/conversations",
    Icon: ChatBubbleLeftRightIcon,
  },
  {
    linkName: "ارسال دعوت نامه",

    path: "/sending-invitation",
    Icon: EnvelopeIcon,
  },
  {
    linkName: "صدور پیش فاکتور",

    path: "/invoice-issuance",
    Icon: NewspaperIcon,
  },
  {
    linkName: "عضویت در کانتمو",

    path: "/join-to-contemo",
    Icon: UserPlusIcon,
  },
  {
    linkName: "نمایش آثار",

    path: "/show-result",
    Icon: CubeIcon,
  },
];

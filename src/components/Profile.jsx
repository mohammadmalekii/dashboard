import ProfileTitle from "./ProfileTitle";
import user from "../assets/user.jpg";
import facebook from "../assets/facebook.svg";
import internet from "../assets/internet.svg";
import whatsapp from "../assets/whatsapp.svg";
export default function Profile() {
  return (
    <div className="w-[30%] bg-white dark:bg-slate-800 dark:text-white rounded-2xl mx-10 my-5 px-5 py-8">
      <ProfileTitle title="اطلاعات شناسایی">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex justify-center items-center">
            <img
              className="w-1/2 rounded-full border-2 border-blue-600"
              src={user}
              alt="profile-picture"
            />
          </div>
          <h1 className="text-2xl text-blue-600">محمد ملکی</h1>
          <ul className="flex justify-center items-center gap-4">
            <li>
              <img
                className="w-7 h-7 border p-[6px] border-slate-300 rounded-full grayscale cursor-pointer"
                src={facebook}
                alt="facebook"
              />
            </li>
            <li>
              <img
                className="w-7 h-7 border p-[6px] border-slate-300 rounded-full grayscale cursor-pointer"
                src={internet}
                alt="internet"
              />
            </li>
            <li>
              <img
                className="w-7 h-7 border p-[6px] border-slate-300 rounded-full grayscale cursor-pointer"
                src={whatsapp}
                alt="whatsapp"
              />
            </li>
          </ul>
        </div>
      </ProfileTitle>
      <ProfileTitle title="تگ لاین ها">
        <div className="flex flex-wrap justify-center items-center gap-4">
          <button className="rounded-2xl bg-slate-100 p-2 hover:bg-slate-200 dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-600 transition-colors duration-200">
            تجربه کاربری
          </button>
          <button className="rounded-2xl bg-slate-100 p-2 hover:bg-slate-200 dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-600 transition-colors duration-200">
            طراحی سایت
          </button>
          <button className="rounded-2xl bg-slate-100 p-2 hover:bg-slate-200 dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-600 transition-colors duration-200">
            گرافیک
          </button>
        </div>
      </ProfileTitle>
      <ProfileTitle title="درباره من">
        <p className="text-right" dir="rtl">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است.
        </p>
      </ProfileTitle>
      <ProfileTitle title="مهارت ها">
        <div className="flex flex-wrap justify-center items-center gap-4">
          <button className="rounded-2xl bg-slate-100 p-2 hover:bg-slate-200 dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-600 transition-colors duration-200">
            تجربه کاربری
          </button>
          <button className="rounded-2xl bg-slate-100 p-2 hover:bg-slate-200 dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-600 transition-colors duration-200">
            طراحی سایت
          </button>
          <button className="rounded-2xl bg-slate-100 p-2 hover:bg-slate-200 dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-600 transition-colors duration-200">
            گرافیک
          </button>
        </div>
      </ProfileTitle>
      <ProfileTitle title="گواهینامه ها و مدارک تحصیلی">
        <ul className="list-disc list-inside" dir="rtl">
          <li>کارشناسی کامپیوتر - دانشگاه تبریز</li>
          <li> Udemy - مبانی طراحی</li>
        </ul>
      </ProfileTitle>
      <ProfileTitle title="سوابق شغلی">
        <ul className="list-disc list-inside" dir="rtl">
          <li>طراح تجربه کاربری - شرکت همراه</li>
          <li> طراح گرافیک - شرکت آینده سازان</li>
        </ul>
      </ProfileTitle>
    </div>
  );
}

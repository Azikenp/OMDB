import { HiChevronRight } from "react-icons/hi";

const footerLinks = [
  "FAQ",
  "HelpCenter",
  "Account",
  "Media Center",
  "Investor Relations",
  "Jobs",
  "Ways to Watch",
  "Terms of Use",
  "Privacy",
  "Cookie Preferences",
  "Coporate Information",
  "Contact us",
  "Speed Test",
  "Legal Notices",
  "Only on Netflix",
];

const Footer = () => {
  return (
    <div className="px-8 md:px-16 mt-4 pb-20">
      <div className="flex gap-4 flex-col md:items-center">
        <p className="text-white leading-7">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <input type="text" name="email" placeholder="Email Address" className="bg-transparent border p-2 border-gray-500 rounded-md  placeholder:text-gray-400 placeholder:text-[12px] md:w-[70%] text-white" />
        <button className="flex items-center w-fit md:w-[13%] bg-red-600 hover:bg-red-500 border-none text-white">
          Get Started <HiChevronRight className="text-[25px]" />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white mt-12">
        {footerLinks.map((link, index) => (
          <p className="cursor-pointer hover:underline" key={index}>{link}</p>
        ))}
      </div>
    </div>
  );
};

export default Footer;

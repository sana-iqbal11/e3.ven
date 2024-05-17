/* eslint-disable react/no-unescaped-entities */
"use client";
import Header from "@/components/base/header";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Footer from "@/components/base/footer";

function Program() {
  const [activeSection, setActiveSection] = useState("privacy");
  const [mobactiveSection, setmobActiveSection] = useState("Interpretation");
  const sections = [
    "Interpretation",
    "personal",
    "Tracking",
    "usedata",
    "retention",
    "transfer",
    "delete",
    "disclose",
    "secure",
    "link",
    "policy",
    "contact",
  ];
  const handlemobSectionClick = (section: any) => {
    setmobActiveSection(section);
  };

  const handlePreviousClick = () => {
    const currentIndex = sections.indexOf(mobactiveSection);
    const previousIndex =
      (currentIndex - 1 + sections.length) % sections.length;
    const previousSection = sections[previousIndex];
    setmobActiveSection(previousSection);
    scrollToSection(previousSection);
  };

  const handleNextClick = () => {
    const currentIndex = sections.indexOf(mobactiveSection);
    const nextIndex = (currentIndex + 1) % sections.length;
    const nextSection = sections[nextIndex];
    setmobActiveSection(nextSection);
    scrollToSection(nextSection);
  };

  const scrollToSection = (section: any) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSectionClick = (sectionName: any) => {
    setActiveSection(sectionName);
  };
  return (
    <div
      className="relative"
      style={{ backgroundImage: `url('/images/noise.png')` }}
    >
      <main className="text-white  lg:max-w-7xl xl:px-0 px-5 mx-auto">
        <div className="mb-10">
          <Header />
        </div>

        <div className="text-white min-h-[100vh] max-w-[65rem] mb-16 mx-auto md:grid hidden md:grid-cols-3 grid-cols-1 border rounded-xl p-6 bg-purple border-gray/20">
          <div className="overflow-x-auto">
            <div className="flex md:flex-col flex-row gap-6 col-span-1 pr-3">
              <h2
                className={`text-3xl font-medium cursor-pointer ${
                  activeSection === "privacy" ? "text-orange" : "text-white"
                }`}
                onClick={() => handleSectionClick("privacy")}
              >
                Privacy Policy
              </h2>
              <ul className="pl-10 flex flex-col gap-4">
                <li
                  className={`text-sm font-light cursor-pointer ${
                    activeSection === "Interpretation"
                      ? "text-orange"
                      : "text-white"
                  }`}
                  onClick={() => handleSectionClick("Interpretation")}
                >
                  1. Interpretation and Definitions
                </li>
                <li
                  className={`text-sm font-light cursor-pointer ${
                    activeSection === "personal" ? "text-orange" : "text-white"
                  }`}
                  onClick={() => handleSectionClick("personal")}
                >
                  2. Collecting and Using Your Personal Data
                </li>
                <li
                  className={`text-sm font-light cursor-pointer ${
                    activeSection === "Tracking" ? "text-orange" : "text-white"
                  }`}
                  onClick={() => handleSectionClick("Tracking")}
                >
                  3. Tracking Technologies and Cookies
                </li>
                <li
                  className={`text-sm font-light cursor-pointer ${
                    activeSection === "usedata" ? "text-orange" : "text-white"
                  }`}
                  onClick={() => handleSectionClick("usedata")}
                >
                  4. Use of Your Personal Data
                </li>
                <li
                  className={`text-sm font-light cursor-pointer ${
                    activeSection === "retention" ? "text-orange" : "text-white"
                  }`}
                  onClick={() => handleSectionClick("retention")}
                >
                  5. Retention of Your Personal Data{" "}
                </li>
                <li
                  className={`text-sm font-light cursor-pointer ${
                    activeSection === "transfer" ? "text-orange" : "text-white"
                  }`}
                  onClick={() => handleSectionClick("transfer")}
                >
                  6. Transfer of Your Personal Data{" "}
                </li>
                <li
                  className={`text-sm font-light cursor-pointer ${
                    activeSection === "delete" ? "text-orange" : "text-white"
                  }`}
                  onClick={() => handleSectionClick("delete")}
                >
                  7. Delete Your Personal Data{" "}
                </li>
                <li
                  className={`text-sm font-light cursor-pointer ${
                    activeSection === "disclose" ? "text-orange" : "text-white"
                  }`}
                  onClick={() => handleSectionClick("disclose")}
                >
                  8. Disclosure of Your Personal Data{" "}
                </li>
                <li
                  className={`text-sm font-light cursor-pointer ${
                    activeSection === "secure" ? "text-orange" : "text-white"
                  }`}
                  onClick={() => handleSectionClick("secure")}
                >
                  9. Security of Your Personal Data{" "}
                </li>
                <li
                  className={`text-sm font-light cursor-pointer ${
                    activeSection === "link" ? "text-orange" : "text-white"
                  }`}
                  onClick={() => handleSectionClick("link")}
                >
                  10. Links to Other Websites{" "}
                </li>
                <li
                  className={`text-sm font-light cursor-pointer ${
                    activeSection === "policy" ? "text-orange" : "text-white"
                  }`}
                  onClick={() => handleSectionClick("policy")}
                >
                  11. Changes to this Privacy Policy{" "}
                </li>
                <li
                  className={`text-sm font-light cursor-pointer ${
                    activeSection === "contact" ? "text-orange" : "text-white"
                  }`}
                  onClick={() => handleSectionClick("contact")}
                >
                  12. Contact Us{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-2 pl-10  border-l border-gray/10 min-h-[100vh]">
            {activeSection === "privacy" && (
              <div className="text-base font-light flex flex-col gap-3">
                <h3 className="text-lg font-bold text-orange">
                  Privacy Policy
                </h3>

                <p>Last updated: April 30, 2024</p>
                <p>
                  This Privacy Policy describes Our policies and procedures on
                  the collection, use and disclosure of Your information when
                  You use the Service and tells You about Your privacy rights
                  and how the law protects You.
                </p>
                <p>
                  We use Your Personal data to provide and improve the Service.
                  By using the Service, You agree to the collection and use of
                  information in accordance with this Privacy Policy. This
                  Privacy Policy has been created with the help of the{" "}
                  <a
                    href="https://www.termsfeed.com/privacy-policy-generator/"
                    target="_blank"
                  >
                    Privacy Policy Generator
                  </a>
                  .
                </p>
              </div>
            )}
            {activeSection === "Interpretation" && (
              <div className="text-base font-light flex flex-col gap-3">
                <h3 className="text-lg font-bold text-orange">
                  Interpretation
                </h3>
                <p>
                  The words of which the initial letter is capitalized have
                  meanings defined under the following conditions. The following
                  definitions shall have the same meaning regardless of whether
                  they appear in singular or in plural.
                </p>
                <h3 className="text-lg font-bold text-orange">Definitions</h3>
                <p>For the purposes of this Privacy Policy:</p>
                <ul className="list-disc pl-10 text-sm flex flex-col gap-3">
                  <li>
                    <p>
                      <strong>Account</strong> means a unique account created
                      for You to access our Service or parts of our Service.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Affiliate</strong> means an entity that controls,
                      is controlled by or is under common control with a party,
                      where &quot;control&quot; means ownership of 50% or more
                      of the shares, equity interest or other securities
                      entitled to vote for election of directors or other
                      managing authority.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Company</strong> (referred to as either &quot;the
                      Company&quot;, &quot;We&quot;, &quot;Us&quot; or
                      &quot;Our&quot; in this Agreement) refers to E3.Ventures,
                      Prince Muhammad Ibn Saad Ibn Abdulaziz Rd, Al Qirawan,
                      Riyadh, Saudi Arabia.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Cookies</strong> are small files that are placed
                      on Your computer, mobile device or any other device by a
                      website, containing the details of Your browsing history
                      on that website among its many uses.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Country</strong> refers to: Saudi Arabia
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Device</strong> means any device that can access
                      the Service such as a computer, a cellphone or a digital
                      tablet.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Personal Data</strong> is any information that
                      relates to an identified or identifiable individual.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Service</strong> refers to the Website.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Service Provider</strong> means any natural or
                      legal person who processes the data on behalf of the
                      Company. It refers to third-party companies or individuals
                      employed by the Company to facilitate the Service, to
                      provide the Service on behalf of the Company, to perform
                      services related to the Service or to assist the Company
                      in analyzing how the Service is used.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Third-party Social Media Service</strong> refers
                      to any website or any social network website through which
                      a User can log in or create an account to use the Service.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Usage Data</strong> refers to data collected
                      automatically, either generated by the use of the Service
                      or from the Service infrastructure itself (for example,
                      the duration of a page visit).
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Website</strong> refers to E3.Ventures, accessible
                      from{" "}
                      <a
                        href="https://e3.ventures/"
                        rel="external nofollow noopener"
                        target="_blank"
                      >
                        https://e3.ventures/
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>You</strong> means the individual accessing or
                      using the Service, or the company, or other legal entity
                      on behalf of which such individual is accessing or using
                      the Service, as applicable.
                    </p>
                  </li>
                </ul>
              </div>
            )}
            {activeSection === "personal" && (
              <div className="text-base font-light flex flex-col gap-3">
                <h3 className="text-lg font-bold text-orange">
                  Types of Data Collected
                </h3>
                <h4 className="text-base font-bold text-orange">
                  Personal Data
                </h4>
                <p>
                  While using Our Service, We may ask You to provide Us with
                  certain personally identifiable information that can be used
                  to contact or identify You. Personally identifiable
                  information may include, but is not limited to:
                </p>
                <ul className="text-sm list-disc flex flex-col gap-3 pl-10">
                  <li>
                    <p>Email address</p>
                  </li>
                  <li>
                    <p>First name and last name</p>
                  </li>
                  <li>
                    <p>Phone number</p>
                  </li>
                  <li>
                    <p>Address, State, Province, ZIP/Postal code, City</p>
                  </li>
                  <li>
                    <p>Usage Data</p>
                  </li>
                </ul>
                <h4 className="text-base font-bold text-orange">Usage Data</h4>
                <p>
                  Usage Data is collected automatically when using the Service.
                </p>
                <p>
                  Usage Data may include information such as Your Device's
                  Internet Protocol address (e.g. IP address), browser type,
                  browser version, the pages of our Service that You visit, the
                  time and date of Your visit, the time spent on those pages,
                  unique device identifiers and other diagnostic data.
                </p>
                <p>
                  When You access the Service by or through a mobile device, We
                  may collect certain information automatically, including, but
                  not limited to, the type of mobile device You use, Your mobile
                  device unique ID, the IP address of Your mobile device, Your
                  mobile operating system, the type of mobile Internet browser
                  You use, unique device identifiers and other diagnostic data.
                </p>
                <p>
                  We may also collect information that Your browser sends
                  whenever You visit our Service or when You access the Service
                  by or through a mobile device.
                </p>
                <h4>Information from Third-Party Social Media Services</h4>
                <p>
                  The Company allows You to create an account and log in to use
                  the Service through the following Third-party Social Media
                  Services:
                </p>
                <ul className="text-sm list-disc flex flex-col gap-3 pl-10">
                  <li>Google</li>
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>LinkedIn</li>
                </ul>
                <p>
                  If You decide to register through or otherwise grant us access
                  to a Third-Party Social Media Service, We may collect Personal
                  data that is already associated with Your Third-Party Social
                  Media Service's account, such as Your name, Your email
                  address, Your activities or Your contact list associated with
                  that account.
                </p>
                <p>
                  You may also have the option of sharing additional information
                  with the Company through Your Third-Party Social Media
                  Service's account. If You choose to provide such information
                  and Personal Data, during registration or otherwise, You are
                  giving the Company permission to use, share, and store it in a
                  manner consistent with this Privacy Policy.
                </p>
              </div>
            )}
            {activeSection === "Tracking" && (
              <div className="text-base font-light flex flex-col gap-3">
                <h3 className="text-lg font-bold text-orange">
                  Tracking Technologies and Cookies
                </h3>
                <p>
                  We use Cookies and similar tracking technologies to track the
                  activity on Our Service and store certain information.
                  Tracking technologies used are beacons, tags, and scripts to
                  collect and track information and to improve and analyze Our
                  Service. The technologies We use may include:
                </p>
                <ul className="text-sm list-disc flex flex-col gap-3 pl-10">
                  <li>
                    <strong>Cookies or Browser Cookies.</strong> A cookie is a
                    small file placed on Your Device. You can instruct Your
                    browser to refuse all Cookies or to indicate when a Cookie
                    is being sent. However, if You do not accept Cookies, You
                    may not be able to use some parts of our Service. Unless you
                    have adjusted Your browser setting so that it will refuse
                    Cookies, our Service may use Cookies.
                  </li>
                  <li>
                    <strong>Web Beacons.</strong> Certain sections of our
                    Service and our emails may contain small electronic files
                    known as web beacons (also referred to as clear gifs, pixel
                    tags, and single-pixel gifs) that permit the Company, for
                    example, to count users who have visited those pages or
                    opened an email and for other related website statistics
                    (for example, recording the popularity of a certain section
                    and verifying system and server integrity).
                  </li>
                </ul>
                <p>
                  Cookies can be &quot;Persistent&quot; or &quot;Session&quot;
                  Cookies. Persistent Cookies remain on Your personal computer
                  or mobile device when You go offline, while Session Cookies
                  are deleted as soon as You close Your web browser. You can
                  learn more about cookies on{" "}
                  <a
                    href="https://www.termsfeed.com/blog/cookies/#What_Are_Cookies"
                    target="_blank"
                  >
                    TermsFeed website
                  </a>{" "}
                  article.
                </p>
                <p>
                  We use both Session and Persistent Cookies for the purposes
                  set out below:
                </p>
                <ul className="text-sm list-disc flex flex-col gap-3 pl-10">
                  <li>
                    <p>
                      <strong>Necessary / Essential Cookies</strong>
                    </p>
                    <p>Type: Session Cookies</p>
                    <p>Administered by: Us</p>
                    <p>
                      Purpose: These Cookies are essential to provide You with
                      services available through the Website and to enable You
                      to use some of its features. They help to authenticate
                      users and prevent fraudulent use of user accounts. Without
                      these Cookies, the services that You have asked for cannot
                      be provided, and We only use these Cookies to provide You
                      with those services.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>
                        Cookies Policy / Notice Acceptance Cookies
                      </strong>
                    </p>
                    <p>Type: Persistent Cookies</p>
                    <p>Administered by: Us</p>
                    <p>
                      Purpose: These Cookies identify if users have accepted the
                      use of cookies on the Website.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Functionality Cookies</strong>
                    </p>
                    <p>Type: Persistent Cookies</p>
                    <p>Administered by: Us</p>
                    <p>
                      Purpose: These Cookies allow us to remember choices You
                      make when You use the Website, such as remembering your
                      login details or language preference. The purpose of these
                      Cookies is to provide You with a more personal experience
                      and to avoid You having to re-enter your preferences every
                      time You use the Website.
                    </p>
                  </li>
                </ul>
                <p>
                  For more information about the cookies we use and your choices
                  regarding cookies, please visit our Cookies Policy or the
                  Cookies section of our Privacy Policy.
                </p>
              </div>
            )}
            {activeSection === "usedata" && (
              <div className="text-base font-light flex flex-col gap-3">
                <h3 className="text-lg font-bold text-orange">
                  Use of Your Personal Data
                </h3>
                <p>
                  The Company may use Personal Data for the following purposes:
                </p>
                <ul className="text-sm list-disc flex flex-col gap-3 pl-10">
                  <li>
                    <p>
                      <strong>To provide and maintain our Service</strong>,
                      including to monitor the usage of our Service.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>To manage Your Account:</strong> to manage Your
                      registration as a user of the Service. The Personal Data
                      You provide can give You access to different
                      functionalities of the Service that are available to You
                      as a registered user.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>For the performance of a contract:</strong> the
                      development, compliance and undertaking of the purchase
                      contract for the products, items or services You have
                      purchased or of any other contract with Us through the
                      Service.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>To contact You:</strong> To contact You by email,
                      telephone calls, SMS, or other equivalent forms of
                      electronic communication, such as a mobile application's
                      push notifications regarding updates or informative
                      communications related to the functionalities, products or
                      contracted services, including the security updates, when
                      necessary or reasonable for their implementation.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>To provide You</strong> with news, special offers
                      and general information about other goods, services and
                      events which we offer that are similar to those that you
                      have already purchased or enquired about unless You have
                      opted not to receive such information.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>To manage Your requests:</strong> To attend and
                      manage Your requests to Us.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>For business transfers:</strong> We may use Your
                      information to evaluate or conduct a merger, divestiture,
                      restructuring, reorganization, dissolution, or other sale
                      or transfer of some or all of Our assets, whether as a
                      going concern or as part of bankruptcy, liquidation, or
                      similar proceeding, in which Personal Data held by Us
                      about our Service users is among the assets transferred.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>For other purposes</strong>: We may use Your
                      information for other purposes, such as data analysis,
                      identifying usage trends, determining the effectiveness of
                      our promotional campaigns and to evaluate and improve our
                      Service, products, services, marketing and your
                      experience.
                    </p>
                  </li>
                </ul>
                <p>
                  We may share Your personal information in the following
                  situations:
                </p>
                <ul className="text-sm list-disc flex flex-col gap-3 pl-10">
                  <li>
                    <strong>With Service Providers:</strong> We may share Your
                    personal information with Service Providers to monitor and
                    analyze the use of our Service, to contact You.
                  </li>
                  <li>
                    <strong>For business transfers:</strong> We may share or
                    transfer Your personal information in connection with, or
                    during negotiations of, any merger, sale of Company assets,
                    financing, or acquisition of all or a portion of Our
                    business to another company.
                  </li>
                  <li>
                    <strong>With Affiliates:</strong> We may share Your
                    information with Our affiliates, in which case we will
                    require those affiliates to honor this Privacy Policy.
                    Affiliates include Our parent company and any other
                    subsidiaries, joint venture partners or other companies that
                    We control or that are under common control with Us.
                  </li>
                  <li>
                    <strong>With business partners:</strong> We may share Your
                    information with Our business partners to offer You certain
                    products, services or promotions.
                  </li>
                  <li>
                    <strong>With other users:</strong> when You share personal
                    information or otherwise interact in the public areas with
                    other users, such information may be viewed by all users and
                    may be publicly distributed outside. If You interact with
                    other users or register through a Third-Party Social Media
                    Service, Your contacts on the Third-Party Social Media
                    Service may see Your name, profile, pictures and description
                    of Your activity. Similarly, other users will be able to
                    view descriptions of Your activity, communicate with You and
                    view Your profile.
                  </li>
                  <li>
                    <strong>With Your consent</strong>: We may disclose Your
                    personal information for any other purpose with Your
                    consent.
                  </li>
                </ul>
              </div>
            )}
            {activeSection === "retention" && (
              <div className="text-base font-light flex flex-col gap-3">
                <h3 className="text-lg font-bold text-orange">
                  Retention of Your Personal Data
                </h3>
                <p>
                  The Company will retain Your Personal Data only for as long as
                  is necessary for the purposes set out in this Privacy Policy.
                  We will retain and use Your Personal Data to the extent
                  necessary to comply with our legal obligations (for example,
                  if we are required to retain your data to comply with
                  applicable laws), resolve disputes, and enforce our legal
                  agreements and policies.
                </p>
                <p>
                  The Company will also retain Usage Data for internal analysis
                  purposes. Usage Data is generally retained for a shorter
                  period of time, except when this data is used to strengthen
                  the security or to improve the functionality of Our Service,
                  or We are legally obligated to retain this data for longer
                  time periods.
                </p>
              </div>
            )}
            {activeSection === "transfer" && (
              <div className="text-base font-light flex flex-col gap-3">
                <h3 className="text-lg font-bold text-orange">
                  Transfer of Your Personal Data
                </h3>
                <p>
                  Your information, including Personal Data, is processed at the
                  Company's operating offices and in any other places where the
                  parties involved in the processing are located. It means that
                  this information may be transferred to — and maintained on —
                  computers located outside of Your state, province, country or
                  other governmental jurisdiction where the data protection laws
                  may differ than those from Your jurisdiction.
                </p>
                <p>
                  Your consent to this Privacy Policy followed by Your
                  submission of such information represents Your agreement to
                  that transfer.
                </p>
                <p>
                  The Company will take all steps reasonably necessary to ensure
                  that Your data is treated securely and in accordance with this
                  Privacy Policy and no transfer of Your Personal Data will take
                  place to an organization or a country unless there are
                  adequate controls in place including the security of Your data
                  and other personal information.
                </p>
              </div>
            )}
            {activeSection === "delete" && (
              <div className="text-base font-light flex flex-col gap-3">
                <h3 className="text-lg font-bold text-orange">
                  Delete Your Personal Data
                </h3>
                <p>
                  You have the right to delete or request that We assist in
                  deleting the Personal Data that We have collected about You.
                </p>
                <p>
                  Our Service may give You the ability to delete certain
                  information about You from within the Service.
                </p>
                <p>
                  You may update, amend, or delete Your information at any time
                  by signing in to Your Account, if you have one, and visiting
                  the account settings section that allows you to manage Your
                  personal information. You may also contact Us to request
                  access to, correct, or delete any personal information that
                  You have provided to Us.
                </p>
                <p>
                  Please note, however, that We may need to retain certain
                  information when we have a legal obligation or lawful basis to
                  do so.
                </p>
              </div>
            )}
            {activeSection === "disclose" && (
              <div className="text-base font-light flex flex-col gap-3">
                <h4 className="text-lg font-bold text-orange">
                  Business Transactions
                </h4>
                <p>
                  If the Company is involved in a merger, acquisition or asset
                  sale, Your Personal Data may be transferred. We will provide
                  notice before Your Personal Data is transferred and becomes
                  subject to a different Privacy Policy.
                </p>
                <h4 className="text-lg font-bold text-orange">
                  Law enforcement
                </h4>
                <p>
                  Under certain circumstances, the Company may be required to
                  disclose Your Personal Data if required to do so by law or in
                  response to valid requests by public authorities (e.g. a court
                  or a government agency).
                </p>
                <h4 className="text-lg font-bold text-orange">
                  Other legal requirements
                </h4>
                <p>
                  The Company may disclose Your Personal Data in the good faith
                  belief that such action is necessary to:
                </p>
                <ul className="list-disc pl-10 text-sm flex flex-col gap-3">
                  <li>Comply with a legal obligation</li>
                  <li>
                    Protect and defend the rights or property of the Company
                  </li>
                  <li>
                    Prevent or investigate possible wrongdoing in connection
                    with the Service
                  </li>
                  <li>
                    Protect the personal safety of Users of the Service or the
                    public
                  </li>
                  <li>Protect against legal liability</li>
                </ul>
              </div>
            )}
            {activeSection === "secure" && (
              <div className="text-base font-light flex flex-col gap-3">
                <h3 className="text-lg font-bold text-orange">
                  Security of Your Personal Data
                </h3>
                <p>
                  The security of Your Personal Data is important to Us, but
                  remember that no method of transmission over the Internet, or
                  method of electronic storage is 100% secure. While We strive
                  to use commercially acceptable means to protect Your Personal
                  Data, We cannot guarantee its absolute security.
                </p>
              </div>
            )}
            {activeSection === "link" && (
              <div className="text-base font-light flex flex-col gap-3">
                <h3 className="text-lg font-bold text-orange">
                  Links to Other Websites{" "}
                </h3>
                <p>
                  Our Service may contain links to other websites that are not
                  operated by Us. If You click on a third party link, You will
                  be directed to that third party's site. We strongly advise You
                  to review the Privacy Policy of every site You visit.
                </p>
                <p>
                  We have no control over and assume no responsibility for the
                  content, privacy policies or practices of any third party
                  sites or services.
                </p>
              </div>
            )}
            {activeSection === "policy" && (
              <div className="text-base font-light flex flex-col gap-3">
                <h3 className="text-lg font-bold text-orange">
                  Changes to this Privacy Policy{" "}
                </h3>
                <p>
                  We may update Our Privacy Policy from time to time. We will
                  notify You of any changes by posting the new Privacy Policy on
                  this page.
                </p>
                <p>
                  We will let You know via email and/or a prominent notice on
                  Our Service, prior to the change becoming effective and update
                  the &quot;Last updated&quot; date at the top of this Privacy
                  Policy.
                </p>
                <p>
                  You are advised to review this Privacy Policy periodically for
                  any changes. Changes to this Privacy Policy are effective when
                  they are posted on this page.
                </p>
              </div>
            )}
            {activeSection === "contact" && (
              <div className="text-base font-light flex flex-col gap-3">
                <h3 className="text-lg font-bold text-orange">Contact Us </h3>
                <p>
                  If you have any questions about this Privacy Policy, You can
                  contact us:
                </p>
                <ul className="text-sm list-disc flex flex-col gap-3 pl-10 mb-16">
                  <li>By email: info@e3.ventures</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="text-white min-h-[100vh] max-w-full mb-16 mx-auto md:hidden grid md:grid-cols-3 grid-cols-1 border rounded-xl p-6 bg-purple border-gray/20">
          <div className="flex md:flex-col flex-col">
            <h2
              className={`text-3xl font-medium cursor-pointer text-orange` }
            >
              Privacy Policy
            </h2>
            <div className="text-base font-light flex flex-col gap-3">
                <p>Last updated: April 30, 2024</p>
                <p>
                  This Privacy Policy describes Our policies and procedures on
                  the collection, use and disclosure of Your information when
                  You use the Service and tells You about Your privacy rights
                  and how the law protects You.
                </p>
                <p>
                  We use Your Personal data to provide and improve the Service.
                  By using the Service, You agree to the collection and use of
                  information in accordance with this Privacy Policy. This
                  Privacy Policy has been created with the help of the{" "}
                  <a
                    href="https://www.termsfeed.com/privacy-policy-generator/"
                    target="_blank"
                  >
                    Privacy Policy Generator
                  </a>
                  .
                </p>
              </div>
            <div className="section-list-container">
              <ul className="flex flex-row gap-4 mt-10">
                {sections.map((section, index) => (
                  <li
                    key={index}
                    id={section}
                    className={`text-base font-bold cursor-pointer ${
                      mobactiveSection === section
                        ? "text-orange"
                        : "text-white"
                    }`}
                    onClick={() => handlemobSectionClick(section)}
                  >
                    {index + 1}. {section}
                  </li>
                ))}
              </ul>
            </div>

            {/* Previous and Next buttons */}
            <div className="flex justify-center gap-6 mt-6 mb-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 bg-purple text-white font-bold py-2 px-2  border rounded-full border-gray/10"
                onClick={handlePreviousClick}
              >
                <FaChevronLeft />
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 bg-purple text-white font-bold py-2 px-2 border rounded-full border-gray/10"
                onClick={handleNextClick}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          <div className="col-span-2 pl-10  border-l border-gray/10 min-h-[100vh]">
            {mobactiveSection === "Interpretation" && (
              <div className="text-base font-light flex flex-col gap-3">
                <h3 className="text-lg font-bold text-orange">
                  Interpretation
                </h3>
                <p>
                  The words of which the initial letter is capitalized have
                  meanings defined under the following conditions. The following
                  definitions shall have the same meaning regardless of whether
                  they appear in singular or in plural.
                </p>
                <h3 className="text-lg font-bold text-orange">Definitions</h3>
                <p>For the purposes of this Privacy Policy:</p>
                <ul className="list-disc pl-10 text-sm flex flex-col gap-3">
                  <li>
                    <p>
                      <strong>Account</strong> means a unique account created
                      for You to access our Service or parts of our Service.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Affiliate</strong> means an entity that controls,
                      is controlled by or is under common control with a party,
                      where &quot;control&quot; means ownership of 50% or more
                      of the shares, equity interest or other securities
                      entitled to vote for election of directors or other
                      managing authority.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Company</strong> (referred to as either &quot;the
                      Company&quot;, &quot;We&quot;, &quot;Us&quot; or
                      &quot;Our&quot; in this Agreement) refers to E3.Ventures,
                      Prince Muhammad Ibn Saad Ibn Abdulaziz Rd, Al Qirawan,
                      Riyadh, Saudi Arabia.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Cookies</strong> are small files that are placed
                      on Your computer, mobile device or any other device by a
                      website, containing the details of Your browsing history
                      on that website among its many uses.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Country</strong> refers to: Saudi Arabia
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Device</strong> means any device that can access
                      the Service such as a computer, a cellphone or a digital
                      tablet.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Personal Data</strong> is any information that
                      relates to an identified or identifiable individual.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Service</strong> refers to the Website.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Service Provider</strong> means any natural or
                      legal person who processes the data on behalf of the
                      Company. It refers to third-party companies or individuals
                      employed by the Company to facilitate the Service, to
                      provide the Service on behalf of the Company, to perform
                      services related to the Service or to assist the Company
                      in analyzing how the Service is used.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Third-party Social Media Service</strong> refers
                      to any website or any social network website through which
                      a User can log in or create an account to use the Service.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Usage Data</strong> refers to data collected
                      automatically, either generated by the use of the Service
                      or from the Service infrastructure itself (for example,
                      the duration of a page visit).
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Website</strong> refers to E3.Ventures, accessible
                      from{" "}
                      <a
                        href="https://e3.ventures/"
                        rel="external nofollow noopener"
                        target="_blank"
                      >
                        https://e3.ventures/
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>You</strong> means the individual accessing or
                      using the Service, or the company, or other legal entity
                      on behalf of which such individual is accessing or using
                      the Service, as applicable.
                    </p>
                  </li>
                </ul>
              </div>
            )}
            {mobactiveSection === "personal" && (
              <div className="text-base font-light flex flex-col gap-3">
                <h3 className="text-lg font-bold text-orange">
                  Types of Data Collected
                </h3>
                <h4 className="text-base font-bold text-orange">
                  Personal Data
                </h4>
                <p>
                  While using Our Service, We may ask You to provide Us with
                  certain personally identifiable information that can be used
                  to contact or identify You. Personally identifiable
                  information may include, but is not limited to:
                </p>
                <ul className="text-sm list-disc flex flex-col gap-3 pl-10">
                  <li>
                    <p>Email address</p>
                  </li>
                  <li>
                    <p>First name and last name</p>
                  </li>
                  <li>
                    <p>Phone number</p>
                  </li>
                  <li>
                    <p>Address, State, Province, ZIP/Postal code, City</p>
                  </li>
                  <li>
                    <p>Usage Data</p>
                  </li>
                </ul>
                <h4 className="text-base font-bold text-orange">Usage Data</h4>
                <p>
                  Usage Data is collected automatically when using the Service.
                </p>
                <p>
                  Usage Data may include information such as Your Device's
                  Internet Protocol address (e.g. IP address), browser type,
                  browser version, the pages of our Service that You visit, the
                  time and date of Your visit, the time spent on those pages,
                  unique device identifiers and other diagnostic data.
                </p>
                <p>
                  When You access the Service by or through a mobile device, We
                  may collect certain information automatically, including, but
                  not limited to, the type of mobile device You use, Your mobile
                  device unique ID, the IP address of Your mobile device, Your
                  mobile operating system, the type of mobile Internet browser
                  You use, unique device identifiers and other diagnostic data.
                </p>
                <p>
                  We may also collect information that Your browser sends
                  whenever You visit our Service or when You access the Service
                  by or through a mobile device.
                </p>
                <h4>Information from Third-Party Social Media Services</h4>
                <p>
                  The Company allows You to create an account and log in to use
                  the Service through the following Third-party Social Media
                  Services:
                </p>
                <ul className="text-sm list-disc flex flex-col gap-3 pl-10">
                  <li>Google</li>
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>LinkedIn</li>
                </ul>
                <p>
                  If You decide to register through or otherwise grant us access
                  to a Third-Party Social Media Service, We may collect Personal
                  data that is already associated with Your Third-Party Social
                  Media Service's account, such as Your name, Your email
                  address, Your activities or Your contact list associated with
                  that account.
                </p>
                <p>
                  You may also have the option of sharing additional information
                  with the Company through Your Third-Party Social Media
                  Service's account. If You choose to provide such information
                  and Personal Data, during registration or otherwise, You are
                  giving the Company permission to use, share, and store it in a
                  manner consistent with this Privacy Policy.
                </p>
              </div>
            )}
            {mobactiveSection === "Tracking" && (
              <div className="text-base font-light flex flex-col gap-3">
                <h3 className="text-lg font-bold text-orange">
                  Tracking Technologies and Cookies
                </h3>
                <p>
                  We use Cookies and similar tracking technologies to track the
                  activity on Our Service and store certain information.
                  Tracking technologies used are beacons, tags, and scripts to
                  collect and track information and to improve and analyze Our
                  Service. The technologies We use may include:
                </p>
                <ul className="text-sm list-disc flex flex-col gap-3 pl-10">
                  <li>
                    <strong>Cookies or Browser Cookies.</strong> A cookie is a
                    small file placed on Your Device. You can instruct Your
                    browser to refuse all Cookies or to indicate when a Cookie
                    is being sent. However, if You do not accept Cookies, You
                    may not be able to use some parts of our Service. Unless you
                    have adjusted Your browser setting so that it will refuse
                    Cookies, our Service may use Cookies.
                  </li>
                  <li>
                    <strong>Web Beacons.</strong> Certain sections of our
                    Service and our emails may contain small electronic files
                    known as web beacons (also referred to as clear gifs, pixel
                    tags, and single-pixel gifs) that permit the Company, for
                    example, to count users who have visited those pages or
                    opened an email and for other related website statistics
                    (for example, recording the popularity of a certain section
                    and verifying system and server integrity).
                  </li>
                </ul>
                <p>
                  Cookies can be &quot;Persistent&quot; or &quot;Session&quot;
                  Cookies. Persistent Cookies remain on Your personal computer
                  or mobile device when You go offline, while Session Cookies
                  are deleted as soon as You close Your web browser. You can
                  learn more about cookies on{" "}
                  <a
                    href="https://www.termsfeed.com/blog/cookies/#What_Are_Cookies"
                    target="_blank"
                  >
                    TermsFeed website
                  </a>{" "}
                  article.
                </p>
                <p>
                  We use both Session and Persistent Cookies for the purposes
                  set out below:
                </p>
                <ul className="text-sm list-disc flex flex-col gap-3 pl-10">
                  <li>
                    <p>
                      <strong>Necessary / Essential Cookies</strong>
                    </p>
                    <p>Type: Session Cookies</p>
                    <p>Administered by: Us</p>
                    <p>
                      Purpose: These Cookies are essential to provide You with
                      services available through the Website and to enable You
                      to use some of its features. They help to authenticate
                      users and prevent fraudulent use of user accounts. Without
                      these Cookies, the services that You have asked for cannot
                      be provided, and We only use these Cookies to provide You
                      with those services.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>
                        Cookies Policy / Notice Acceptance Cookies
                      </strong>
                    </p>
                    <p>Type: Persistent Cookies</p>
                    <p>Administered by: Us</p>
                    <p>
                      Purpose: These Cookies identify if users have accepted the
                      use of cookies on the Website.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Functionality Cookies</strong>
                    </p>
                    <p>Type: Persistent Cookies</p>
                    <p>Administered by: Us</p>
                    <p>
                      Purpose: These Cookies allow us to remember choices You
                      make when You use the Website, such as remembering your
                      login details or language preference. The purpose of these
                      Cookies is to provide You with a more personal experience
                      and to avoid You having to re-enter your preferences every
                      time You use the Website.
                    </p>
                  </li>
                </ul>
                <p>
                  For more information about the cookies we use and your choices
                  regarding cookies, please visit our Cookies Policy or the
                  Cookies section of our Privacy Policy.
                </p>
              </div>
            )}
            {mobactiveSection === "usedata" && (
              <div className="text-base font-light flex flex-col gap-3">
                <h3 className="text-lg font-bold text-orange">
                  Use of Your Personal Data
                </h3>
                <p>
                  The Company may use Personal Data for the following purposes:
                </p>
                <ul className="text-sm list-disc flex flex-col gap-3 pl-10">
                  <li>
                    <p>
                      <strong>To provide and maintain our Service</strong>,
                      including to monitor the usage of our Service.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>To manage Your Account:</strong> to manage Your
                      registration as a user of the Service. The Personal Data
                      You provide can give You access to different
                      functionalities of the Service that are available to You
                      as a registered user.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>For the performance of a contract:</strong> the
                      development, compliance and undertaking of the purchase
                      contract for the products, items or services You have
                      purchased or of any other contract with Us through the
                      Service.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>To contact You:</strong> To contact You by email,
                      telephone calls, SMS, or other equivalent forms of
                      electronic communication, such as a mobile application's
                      push notifications regarding updates or informative
                      communications related to the functionalities, products or
                      contracted services, including the security updates, when
                      necessary or reasonable for their implementation.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>To provide You</strong> with news, special offers
                      and general information about other goods, services and
                      events which we offer that are similar to those that you
                      have already purchased or enquired about unless You have
                      opted not to receive such information.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>To manage Your requests:</strong> To attend and
                      manage Your requests to Us.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>For business transfers:</strong> We may use Your
                      information to evaluate or conduct a merger, divestiture,
                      restructuring, reorganization, dissolution, or other sale
                      or transfer of some or all of Our assets, whether as a
                      going concern or as part of bankruptcy, liquidation, or
                      similar proceeding, in which Personal Data held by Us
                      about our Service users is among the assets transferred.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>For other purposes</strong>: We may use Your
                      information for other purposes, such as data analysis,
                      identifying usage trends, determining the effectiveness of
                      our promotional campaigns and to evaluate and improve our
                      Service, products, services, marketing and your
                      experience.
                    </p>
                  </li>
                </ul>
                <p>
                  We may share Your personal information in the following
                  situations:
                </p>
                <ul className="text-sm list-disc flex flex-col gap-3 pl-10">
                  <li>
                    <strong>With Service Providers:</strong> We may share Your
                    personal information with Service Providers to monitor and
                    analyze the use of our Service, to contact You.
                  </li>
                  <li>
                    <strong>For business transfers:</strong> We may share or
                    transfer Your personal information in connection with, or
                    during negotiations of, any merger, sale of Company assets,
                    financing, or acquisition of all or a portion of Our
                    business to another company.
                  </li>
                  <li>
                    <strong>With Affiliates:</strong> We may share Your
                    information with Our affiliates, in which case we will
                    require those affiliates to honor this Privacy Policy.
                    Affiliates include Our parent company and any other
                    subsidiaries, joint venture partners or other companies that
                    We control or that are under common control with Us.
                  </li>
                  <li>
                    <strong>With business partners:</strong> We may share Your
                    information with Our business partners to offer You certain
                    products, services or promotions.
                  </li>
                  <li>
                    <strong>With other users:</strong> when You share personal
                    information or otherwise interact in the public areas with
                    other users, such information may be viewed by all users and
                    may be publicly distributed outside. If You interact with
                    other users or register through a Third-Party Social Media
                    Service, Your contacts on the Third-Party Social Media
                    Service may see Your name, profile, pictures and description
                    of Your activity. Similarly, other users will be able to
                    view descriptions of Your activity, communicate with You and
                    view Your profile.
                  </li>
                  <li>
                    <strong>With Your consent</strong>: We may disclose Your
                    personal information for any other purpose with Your
                    consent.
                  </li>
                </ul>
              </div>
            )}
            {mobactiveSection === "retention" && (
              <div className="text-base font-light flex flex-col gap-3">
                <h3 className="text-lg font-bold text-orange">
                  Retention of Your Personal Data
                </h3>
                <p>
                  The Company will retain Your Personal Data only for as long as
                  is necessary for the purposes set out in this Privacy Policy.
                  We will retain and use Your Personal Data to the extent
                  necessary to comply with our legal obligations (for example,
                  if we are required to retain your data to comply with
                  applicable laws), resolve disputes, and enforce our legal
                  agreements and policies.
                </p>
                <p>
                  The Company will also retain Usage Data for internal analysis
                  purposes. Usage Data is generally retained for a shorter
                  period of time, except when this data is used to strengthen
                  the security or to improve the functionality of Our Service,
                  or We are legally obligated to retain this data for longer
                  time periods.
                </p>
              </div>
            )}
            {mobactiveSection === "transfer" && (
              <div className="text-base font-light flex flex-col gap-3">
                <h3 className="text-lg font-bold text-orange">
                  Transfer of Your Personal Data
                </h3>
                <p>
                  Your information, including Personal Data, is processed at the
                  Company's operating offices and in any other places where the
                  parties involved in the processing are located. It means that
                  this information may be transferred to — and maintained on —
                  computers located outside of Your state, province, country or
                  other governmental jurisdiction where the data protection laws
                  may differ than those from Your jurisdiction.
                </p>
                <p>
                  Your consent to this Privacy Policy followed by Your
                  submission of such information represents Your agreement to
                  that transfer.
                </p>
                <p>
                  The Company will take all steps reasonably necessary to ensure
                  that Your data is treated securely and in accordance with this
                  Privacy Policy and no transfer of Your Personal Data will take
                  place to an organization or a country unless there are
                  adequate controls in place including the security of Your data
                  and other personal information.
                </p>
              </div>
            )}
            {mobactiveSection === "delete" && (
              <div className="text-base font-light flex flex-col gap-3">
                <h3 className="text-lg font-bold text-orange">
                  Delete Your Personal Data
                </h3>
                <p>
                  You have the right to delete or request that We assist in
                  deleting the Personal Data that We have collected about You.
                </p>
                <p>
                  Our Service may give You the ability to delete certain
                  information about You from within the Service.
                </p>
                <p>
                  You may update, amend, or delete Your information at any time
                  by signing in to Your Account, if you have one, and visiting
                  the account settings section that allows you to manage Your
                  personal information. You may also contact Us to request
                  access to, correct, or delete any personal information that
                  You have provided to Us.
                </p>
                <p>
                  Please note, however, that We may need to retain certain
                  information when we have a legal obligation or lawful basis to
                  do so.
                </p>
              </div>
            )}
            {mobactiveSection === "disclose" && (
              <div className="text-base font-light flex flex-col gap-3">
                <h4 className="text-lg font-bold text-orange">
                  Business Transactions
                </h4>
                <p>
                  If the Company is involved in a merger, acquisition or asset
                  sale, Your Personal Data may be transferred. We will provide
                  notice before Your Personal Data is transferred and becomes
                  subject to a different Privacy Policy.
                </p>
                <h4 className="text-lg font-bold text-orange">
                  Law enforcement
                </h4>
                <p>
                  Under certain circumstances, the Company may be required to
                  disclose Your Personal Data if required to do so by law or in
                  response to valid requests by public authorities (e.g. a court
                  or a government agency).
                </p>
                <h4 className="text-lg font-bold text-orange">
                  Other legal requirements
                </h4>
                <p>
                  The Company may disclose Your Personal Data in the good faith
                  belief that such action is necessary to:
                </p>
                <ul className="list-disc pl-10 text-sm flex flex-col gap-3">
                  <li>Comply with a legal obligation</li>
                  <li>
                    Protect and defend the rights or property of the Company
                  </li>
                  <li>
                    Prevent or investigate possible wrongdoing in connection
                    with the Service
                  </li>
                  <li>
                    Protect the personal safety of Users of the Service or the
                    public
                  </li>
                  <li>Protect against legal liability</li>
                </ul>
              </div>
            )}
            {mobactiveSection === "secure" && (
              <div className="text-base font-light flex flex-col gap-3">
                <h3 className="text-lg font-bold text-orange">
                  Security of Your Personal Data
                </h3>
                <p>
                  The security of Your Personal Data is important to Us, but
                  remember that no method of transmission over the Internet, or
                  method of electronic storage is 100% secure. While We strive
                  to use commercially acceptable means to protect Your Personal
                  Data, We cannot guarantee its absolute security.
                </p>
              </div>
            )}
            {mobactiveSection === "link" && (
              <div className="text-base font-light flex flex-col gap-3">
                <h3 className="text-lg font-bold text-orange">
                  Links to Other Websites{" "}
                </h3>
                <p>
                  Our Service may contain links to other websites that are not
                  operated by Us. If You click on a third party link, You will
                  be directed to that third party's site. We strongly advise You
                  to review the Privacy Policy of every site You visit.
                </p>
                <p>
                  We have no control over and assume no responsibility for the
                  content, privacy policies or practices of any third party
                  sites or services.
                </p>
              </div>
            )}
            {mobactiveSection === "policy" && (
              <div className="text-base font-light flex flex-col gap-3">
                <h3 className="text-lg font-bold text-orange">
                  Changes to this Privacy Policy{" "}
                </h3>
                <p>
                  We may update Our Privacy Policy from time to time. We will
                  notify You of any changes by posting the new Privacy Policy on
                  this page.
                </p>
                <p>
                  We will let You know via email and/or a prominent notice on
                  Our Service, prior to the change becoming effective and update
                  the &quot;Last updated&quot; date at the top of this Privacy
                  Policy.
                </p>
                <p>
                  You are advised to review this Privacy Policy periodically for
                  any changes. Changes to this Privacy Policy are effective when
                  they are posted on this page.
                </p>
              </div>
            )}
            {mobactiveSection === "contact" && (
              <div className="text-base font-light flex flex-col gap-3">
                <h3 className="text-lg font-bold text-orange">Contact Us </h3>
                <p>
                  If you have any questions about this Privacy Policy, You can
                  contact us:
                </p>
                <ul className="text-sm list-disc flex flex-col gap-3 pl-10 mb-16">
                  <li>By email: info@e3.ventures</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* <div className="flex flex-col gap-5 py-4 md:hidden">
        <p className="text-4xl font-bold text-orange">Privacy Policy</p>
        <p className="text-base">Last updated: April 30, 2024</p>
        <p className="text-base">
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You.
        </p>
        <p className="text-base">
          We use Your Personal data to provide and improve the Service. By using
          the Service, You agree to the collection and use of information in
          accordance with this Privacy Policy. This Privacy Policy has been
          created with the help of the{" "}
          <a
            href="https://www.termsfeed.com/privacy-policy-generator/"
            target="_blank"
          >
            Privacy Policy Generator
          </a>
          .
        </p>
        <h2 className="text-3xl font-bold text-orange">Interpretation and Definitions</h2>
        <h3 className="text-2xl font-bold">Interpretation</h3>
        <p className="text-base">
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </p>
        <h3 className="text-2xl font-bold">Definitions</h3>
        <p className="text-base">For the purposes of this Prvacy Policy:</p>
        <ul className="list-disc flex flex-col gap-3 pl-10">
          <li>
            <p className="text-base">
              <strong>Account</strong> means a unique account created for You to
              access our Service or parts of our Service.
            </p>
          </li>
          <li>
            <p className="text-base">
              <strong>Affiliate</strong> means an entity that controls, is
              controlled by or is under common control with a party, where
              &quot;control&quot; means ownership of 50% or more of the shares,
              equity interest or other securities entitled to vote for election
              of directors or other managing authority.
            </p>
          </li>
          <li>
            <p className="text-base">
              <strong>Company</strong> (referred to as either &quot;the
              Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot;
              in this Agreement) refers to E3.Ventures, Prince Muhammad Ibn Saad
              Ibn Abdulaziz Rd, Al Qirawan, Riyadh, Saudi Arabia.
            </p>
          </li>
          <li>
            <p className="text-base">
              <strong>Cookies</strong> are small files that are placed on Your
              computer, mobile device or any other device by a website,
              containing the details of Your browsing history on that website
              among its many uses.
            </p>
          </li>
          <li>
            <p className="text-base">
              <strong>Country</strong> refers to: Saudi Arabia
            </p>
          </li>
          <li>
            <p className="text-base">
              <strong>Device</strong> means any device that can access the
              Service such as a computer, a cellphone or a digital tablet.
            </p>
          </li>
          <li>
            <p className="text-base">
              <strong>Personal Data</strong> is any information that relates to
              an identified or identifiable individual.
            </p>
          </li>
          <li>
            <p className="text-base">
              <strong>Service</strong> refers to the Website.
            </p>
          </li>
          <li>
            <p className="text-base">
              <strong>Service Provider</strong> means any natural or legal
              person who processes the data on behalf of the Company. It refers
              to third-party companies or individuals employed by the Company to
              facilitate the Service, to provide the Service on behalf of the
              Company, to perform services related to the Service or to assist
              the Company in analyzing how the Service is used.
            </p>
          </li>
          <li>
            <p className="text-base">
              <strong>Third-party Social Media Service</strong> refers to any
              website or any social network website through which a User can log
              in or create an account to use the Service.
            </p>
          </li>
          <li>
            <p className="text-base">
              <strong>Usage Data</strong> refers to data collected
              automatically, either generated by the use of the Service or from
              the Service infrastructure itself (for example, the duration of a
              page visit).
            </p>
          </li>
          <li>
            <p className="text-base">
              <strong>Website</strong> refers to E3.Ventures, accessible from{" "}
              <a
                href="https://e3.ventures/"
                rel="external nofollow noopener"
                target="_blank"
                className="text-orange"
              >
                https://e3.ventures/
              </a>
            </p>
          </li>
          <li>
            <p className="text-base">
              <strong>You</strong> means the individual accessing or using the
              Service, or the company, or other legal entity on behalf of which
              such individual is accessing or using the Service, as applicable.
            </p>
          </li>
        </ul>
        <h2 className="text-3xl font-bold text-orange">
          Collecting and Using Your Personal Data
        </h2>
        <h3 className="text-2xl font-bold">Types of Data Collected</h3>
        <h4 className="text-xl">Personal Data</h4>
        <p className="text-base">
          While using Our Service, We may ask You to provide Us with certain
          personally identifiable information that can be used to contact or
          identify You. Personally identifiable information may include, but is
          not limited to:
        </p>
        <ul className="list-disc flex flex-col gap-2 pl-10">
          <li>
            <p className="text-base">Email address</p>
          </li>
          <li>
            <p className="text-base">First name and last name</p>
          </li>
          <li>
            <p className="text-base">Phone number</p>
          </li>
          <li>
            <p className="text-base">
              Address, State, Province, ZIP/Postal code, City
            </p>
          </li>
          <li>
            <p className="text-base">Usage Data</p>
          </li>
        </ul>
        <h4 className="text-xl">Usage Data</h4>
        <p className="text-base">
          Usage Data is collected automatically when using the Service.
        </p>
        <p className="text-base">
          Usage Data may include information such as Your Device's Internet
          Protocol address (e.g. IP address), browser type, browser version, the
          pages of our Service that You visit, the time and date of Your visit,
          the time spent on those pages, unique device identifiers and other
          diagnostic data.
        </p>
        <p className="text-base">
          When You access the Service by or through a mobile device, We may
          collect certain information automatically, including, but not limited
          to, the type of mobile device You use, Your mobile device unique ID,
          the IP address of Your mobile device, Your mobile operating system,
          the type of mobile Internet browser You use, unique device identifiers
          and other diagnostic data.
        </p>
        <p className="text-base">
          We may also collect information that Your browser sends whenever You
          visit our Service or when You access the Service by or through a
          mobile device.
        </p>
        <h4 className="text-xl">Information from Third-Party Social Media Services</h4>
        <p className="text-base">
          The Company allows You to create an account and log in to use the
          Service through the following Third-party Social Media Services:
        </p>
        <ul className="list-disc flex flex-col gap-2 pl-10">
          <li>Google</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
        </ul>
        <p className="text-base">
          If You decide to register through or otherwise grant us access to a
          Third-Party Social Media Service, We may collect Personal data that is
          already associated with Your Third-Party Social Media Service's
          account, such as Your name, Your email address, Your activities or
          Your contact list associated with that account.
        </p>
        <p className="text-base">
          You may also have the option of sharing additional information with
          the Company through Your Third-Party Social Media Service's account.
          If You choose to provide such information and Personal Data, during
          registration or otherwise, You are giving the Company permission to
          use, share, and store it in a manner consistent with this Privacy
          Policy.
        </p>
        <h4 className="text-xl font-bold">Tracking Technologies and Cookies</h4>
        <p className="text-base">
          We use Cookies and similar tracking technologies to track the activity
          on Our Service and store certain information. Tracking technologies
          used are beacons, tags, and scripts to collect and track information
          and to improve and analyze Our Service. The technologies We use may
          include:
        </p>
        <ul className="list-disc flex flex-col gap-3 pl-10">
          <li>
            <strong>Cookies or Browser Cookies.</strong> A cookie is a small
            file placed on Your Device. You can instruct Your browser to refuse
            all Cookies or to indicate when a Cookie is being sent. However, if
            You do not accept Cookies, You may not be able to use some parts of
            our Service. Unless you have adjusted Your browser setting so that
            it will refuse Cookies, our Service may use Cookies.
          </li>
          <li>
            <strong>Web Beacons.</strong> Certain sections of our Service and
            our emails may contain small electronic files known as web beacons
            (also referred to as clear gifs, pixel tags, and single-pixel gifs)
            that permit the Company, for example, to count users who have
            visited those pages or opened an email and for other related website
            statistics (for example, recording the popularity of a certain
            section and verifying system and server integrity).
          </li>
        </ul>
        <p className="text-base">
          Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies.
          Persistent Cookies remain on Your personal computer or mobile device
          when You go offline, while Session Cookies are deleted as soon as You
          close Your web browser. You can learn more about cookies on{" "}
          <a
            href="https://www.termsfeed.com/blog/cookies/#What_Are_Cookies"
            target="_blank"
          >
            TermsFeed website
          </a>{" "}
          article.
        </p>
        <p className="text-base">
          We use both Session and Persistent Cookies for the purposes set out
          below:
        </p>
        <ul className="list-disc flex flex-col gap-3 pl-10">
          <li>
            <p className="text-base">
              <strong>Necessary / Essential Cookies</strong>
            </p>
            <p className="text-base">Type: Session Cookies</p>
            <p className="text-base">Administered by: Us</p>
            <p className="text-base">
              Purpose: These Cookies are essential to provide You with services
              available through the Website and to enable You to use some of its
              features. They help to authenticate users and prevent fraudulent
              use of user accounts. Without these Cookies, the services that You
              have asked for cannot be provided, and We only use these Cookies
              to provide You with those services.
            </p>
          </li>
          <li>
            <p className="text-base">
              <strong>Cookies Policy / Notice Acceptance Cookies</strong>
            </p>
            <p className="text-base">Type: Persistent Cookies</p>
            <p className="text-base">Administered by: Us</p>
            <p className="text-base">
              Purpose: These Cookies identify if users have accepted the use of
              cookies on the Website.
            </p>
          </li>
          <li>
            <p className="text-base">
              <strong>Functionality Cookies</strong>
            </p>
            <p className="text-base">Type: Persistent Cookies</p>
            <p className="text-base">Administered by: Us</p>
            <p className="text-base">
              Purpose: These Cookies allow us to remember choices You make when
              You use the Website, such as remembering your login details or
              language preference. The purpose of these Cookies is to provide
              You with a more personal experience and to avoid You having to
              re-enter your preferences every time You use the Website.
            </p>
          </li>
        </ul>
        <p className="text-base">
          For more information about the cookies we use and your choices
          regarding cookies, please visit our Cookies Policy or the Cookies
          section of our Privacy Policy.
        </p>
        <h3 className="text-2xl font-bold text-orange">Use of Your Personal Data</h3>
        <p className="text-base">
          The Company may use Personal Data for the following purposes:
        </p>
        <ul className="list-disc flex flex-col gap-3 pl-10">
          <li>
            <p className="text-base">
              <strong>To provide and maintain our Service</strong>, including to
              monitor the usage of our Service.
            </p>
          </li>
          <li>
            <p className="text-base">
              <strong>To manage Your Account:</strong> to manage Your
              registration as a user of the Service. The Personal Data You
              provide can give You access to different functionalities of the
              Service that are available to You as a registered user.
            </p>
          </li>
          <li>
            <p className="text-base">
              <strong>For the performance of a contract:</strong> the
              development, compliance and undertaking of the purchase contract
              for the products, items or services You have purchased or of any
              other contract with Us through the Service.
            </p>
          </li>
          <li>
            <p className="text-base">
              <strong>To contact You:</strong> To contact You by email,
              telephone calls, SMS, or other equivalent forms of electronic
              communication, such as a mobile application's push notifications
              regarding updates or informative communications related to the
              functionalities, products or contracted services, including the
              security updates, when necessary or reasonable for their
              implementation.
            </p>
          </li>
          <li>
            <p className="text-base">
              <strong>To provide You</strong> with news, special offers and
              general information about other goods, services and events which
              we offer that are similar to those that you have already purchased
              or enquired about unless You have opted not to receive such
              information.
            </p>
          </li>
          <li>
            <p className="text-base">
              <strong>To manage Your requests:</strong> To attend and manage
              Your requests to Us.
            </p>
          </li>
          <li>
            <p className="text-base">
              <strong>For business transfers:</strong> We may use Your
              information to evaluate or conduct a merger, divestiture,
              restructuring, reorganization, dissolution, or other sale or
              transfer of some or all of Our assets, whether as a going concern
              or as part of bankruptcy, liquidation, or similar proceeding, in
              which Personal Data held by Us about our Service users is among
              the assets transferred.
            </p>
          </li>
          <li>
            <p className="text-base">
              <strong>For other purposes</strong>: We may use Your information
              for other purposes, such as data analysis, identifying usage
              trends, determining the effectiveness of our promotional campaigns
              and to evaluate and improve our Service, products, services,
              marketing and your experience.
            </p>
          </li>
        </ul>
        <p className="text-base">
          We may share Your personal information in the following situations:
        </p>
        <ul className="list-disc flex flex-col gap-3 pl-10">
          <li>
            <strong>With Service Providers:</strong> We may share Your personal
            information with Service Providers to monitor and analyze the use of
            our Service, to contact You.
          </li>
          <li>
            <strong>For business transfers:</strong> We may share or transfer
            Your personal information in connection with, or during negotiations
            of, any merger, sale of Company assets, financing, or acquisition of
            all or a portion of Our business to another company.
          </li>
          <li>
            <strong>With Affiliates:</strong> We may share Your information with
            Our affiliates, in which case we will require those affiliates to
            honor this Privacy Policy. Affiliates include Our parent company and
            any other subsidiaries, joint venture partners or other companies
            that We control or that are under common control with Us.
          </li>
          <li>
            <strong>With business partners:</strong> We may share Your
            information with Our business partners to offer You certain
            products, services or promotions.
          </li>
          <li>
            <strong>With other users:</strong> when You share personal
            information or otherwise interact in the public areas with other
            users, such information may be viewed by all users and may be
            publicly distributed outside. If You interact with other users or
            register through a Third-Party Social Media Service, Your contacts
            on the Third-Party Social Media Service may see Your name, profile,
            pictures and description of Your activity. Similarly, other users
            will be able to view descriptions of Your activity, communicate with
            You and view Your profile.
          </li>
          <li>
            <strong>With Your consent</strong>: We may disclose Your personal
            information for any other purpose with Your consent.
          </li>
        </ul>
        <h3 className="text-2xl font-bold text-orange">Retention of Your Personal Data</h3>
        <p className="text-base">
          The Company will retain Your Personal Data only for as long as is
          necessary for the purposes set out in this Privacy Policy. We will
          retain and use Your Personal Data to the extent necessary to comply
          with our legal obligations (for example, if we are required to retain
          your data to comply with applicable laws), resolve disputes, and
          enforce our legal agreements and policies.
        </p>
        <p className="text-base">
          The Company will also retain Usage Data for internal analysis
          purposes. Usage Data is generally retained for a shorter period of
          time, except when this data is used to strengthen the security or to
          improve the functionality of Our Service, or We are legally obligated
          to retain this data for longer time periods.
        </p>
        <h3 className="text-2xl font-bold text-orange">Transfer of Your Personal Data</h3>
        <p className="text-base">
          Your information, including Personal Data, is processed at the
          Company's operating offices and in any other places where the parties
          involved in the processing are located. It means that this information
          may be transferred to — and maintained on — computers located outside
          of Your state, province, country or other governmental jurisdiction
          where the data protection laws may differ than those from Your
          jurisdiction.
        </p>
        <p className="text-base">
          Your consent to this Privacy Policy followed by Your submission of
          such information represents Your agreement to that transfer.
        </p>
        <p className="text-base">
          The Company will take all steps reasonably necessary to ensure that
          Your data is treated securely and in accordance with this Privacy
          Policy and no transfer of Your Personal Data will take place to an
          organization or a country unless there are adequate controls in place
          including the security of Your data and other personal information.
        </p>
        <h3 className="text-2xl font-bold text-orange">Delete Your Personal Data</h3>
        <p className="text-base">
          You have the right to delete or request that We assist in deleting the
          Personal Data that We have collected about You.
        </p>
        <p className="text-base">
          Our Service may give You the ability to delete certain information
          about You from within the Service.
        </p>
        <p className="text-base">
          You may update, amend, or delete Your information at any time by
          signing in to Your Account, if you have one, and visiting the account
          settings section that allows you to manage Your personal information.
          You may also contact Us to request access to, correct, or delete any
          personal information that You have provided to Us.
        </p>
        <p className="text-base">
          Please note, however, that We may need to retain certain information
          when we have a legal obligation or lawful basis to do so.
        </p>
        <h3 className="text-2xl font-bold text-orange">Disclosure of Your Personal Data</h3>
        <h4 className="text-xl font-bold">Business Transactions</h4>
        <p className="text-base">
          If the Company is involved in a merger, acquisition or asset sale,
          Your Personal Data may be transferred. We will provide notice before
          Your Personal Data is transferred and becomes subject to a different
          Privacy Policy.
        </p>
        <h4 className="text-xl font-bold ">Law enforcement</h4>
        <p className="text-base">
          Under certain circumstances, the Company may be required to disclose
          Your Personal Data if required to do so by law or in response to valid
          requests by public authorities (e.g. a court or a government agency).
        </p>
        <h4 className="text-xl font-bold">Other legal requirements</h4>
        <p className="text-base">
          The Company may disclose Your Personal Data in the good faith belief
          that such action is necessary to:
        </p>
        <ul className="list-disc flex flex-col pl-10 gap-3">
          <li>Comply with a legal obligation</li>
          <li>Protect and defend the rights or property of the Company</li>
          <li>
            Prevent or investigate possible wrongdoing in connection with the
            Service
          </li>
          <li>
            Protect the personal safety of Users of the Service or the public
          </li>
          <li>Protect against legal liability</li>
        </ul>
        <h3 className="text-2xl font-bold text-orange">Security of Your Personal Data</h3>
        <p className="text-base">
          The security of Your Personal Data is important to Us, but remember
          that no method of transmission over the Internet, or method of
          electronic storage is 100% secure. While We strive to use commercially
          acceptable means to protect Your Personal Data, We cannot guarantee
          its absolute security.
        </p>
        <h2 className="text-3xl font-bold text-orange">Links to Other Websites</h2>
        <p className="text-base">
          Our Service may contain links to other websites that are not operated
          by Us. If You click on a third party link, You will be directed to
          that third party's site. We strongly advise You to review the Privacy
          Policy of every site You visit.
        </p>
        <p className="text-base">
          We have no control over and assume no responsibility for the content,
          privacy policies or practices of any third party sites or services.
        </p>
        <h2 className="text-3xl font-bold text-orange">Changes to this Privacy Policy</h2>
        <p className="text-base">
          We may update Our Privacy Policy from time to time. We will notify You
          of any changes by posting the new Privacy Policy on this page.
        </p>
        <p className="text-base">
          We will let You know via email and/or a prominent notice on Our
          Service, prior to the change becoming effective and update the
          &quot;Last updated&quot; date at the top of this Privacy Policy.
        </p>
        <p className="text-base">
          You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.
        </p>
        <h2 className="text-3xl font-bold text-orange">Contact Us</h2>
        <p className="text-base">
          If you have any questions about this Privacy Policy, You can contact
          us:
        </p>
        <ul className="list-disc flex flex-col pl-10 gap-3 mb-8">
          <li>By email: info@e3.ventures</li>
        </ul>
      </div> */}
      <Footer/>
      </main>
    </div>
  );
}

export default Program;

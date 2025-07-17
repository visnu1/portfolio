"use client";

import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";
import { Button } from "@/components/Button/Button";
import { Chip } from "@/components/Chip/Chip";
import HighlightCard from "@/components/HighlightCard/HighlightCard";
import LocationInfo from "@/components/LocationInfo/LocationInfo";
import { Rating } from "@/components/Rating/Rating";
import { Icon } from "@/components/Icon/Icon";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast, { Toaster, ToastOptions } from 'react-hot-toast';


type ContactForm = {
  name?: string
  email?: string,
  message?: string,
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  // weight: ['400', '500'],
});

const profileOverview = "I'm a seasoned Software Developer & Engineer dropping fire software that's scalable, secure, and blazing fast. I'm a whiz at designing modular architectures, optimizing backend systems, and locking down authentication (OAuth, JWT, MFA). I'm also into spicing up applications with AI/ML, to build cutting-edge tools that enhance decision-making. I'm a team player who collaborates with squads to ship innovative, user-friendly apps that crush business goals."

const skills = {
  "Programming Languages": ["JavaScript (ES6+)", "TypeScript", "Python", "PHP", "Java", "C++"],
  "Frameworks & Libraries": ["React.js", "Angular", "Node.js", "Spring Boot", "Laravel", "Flask"],
  "Databases": ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "Redis"],
  "Cloud Platforms": ["AWS", "Firebase"],
  "DevOps & CI/CD": ["Docker", "Jenkins", "GitHub Actions"],
  "Web Development": ["HTML5", "CSS3", "SASS", "Bootstrap", "Material-UI", "Tailwind CSS", "Responsive Design", "Dynamic Template Builders"],
  "Testing": ["Jest", "Mocha", "Chai", "Jasmine", "A/B Testing", "Unit Testing"],
  "Tools & Technologies": ["Git", "Jira", "ClickUp", "Zapier", "Stripe", "Twilio", "Google Analytics"],
  "Software Engineering": [
    "REST API Development",
    "Microservices Architecture",
    "Service-Oriented Architecture",
    "Backend Optimization",
    "Database Optimization",
    "Continuous Integration/Delivery (CI/CD)",
    "Containerization",
  ],
  "Data Science": ["Data Mining", "Machine Learning", "Data Cleaning", "Data Wrangling", "Data Visualization", "Deep Learning", "classification", "Regression Analysis", "Clustering", "Natural Language Processing"],
  "Cybersecurity": ["Authentication & Access Control", "Secure API Development", "Data Encryption"],
  "Project Management": ["Agile Methodologies", "Team Leadership", "Mentoring", "Sprint Planning", "Scrum"],
  "Other Skills": ["Schema Design", "Code Modularization", "Folder Structure Optimization", "Code Documentation", "Code Review", "Client Communication", "Team Collaboration"]
};

const languages = [
  {
    name: "English",
    proficiency: "Fluent in speaking, reading, and writing. Widely used in academic, professional, and business contexts.",
    rating: 4.5,
  },
  {
    name: "Kannada",
    proficiency: "Fluent in speaking, reading, and writing. Grew up speaking it with friends and neighbors.",
    rating: 4.5,
  },
  {
    name: "Telugu",
    proficiency: "Native speaker. Fluent in speaking, with good comprehension in reading and writing, and a deep cultural understanding.",
    rating: 4,
  },
  {
    name: "Tamil",
    proficiency: "Conversational proficiency. Able to understand and hold basic conversations.",
    rating: 3,
  },
  {
    name: "Hindi",
    proficiency: "Conversational proficiency. Capable of understanding and communicating basic information.",
    rating: 3,
  },
];

const education = [
  {
    institution: "Rutgers University",
    degree: "Master's degree - Information Technology and Analytics",
    duration: "Sep 2023 - Dec 2024",
    location: "Newark, New Jersey, USA",
  },
  {
    institution: "Global Academy of Technology",
    degree: "Bachelor's degree - Electrical and Electronics Engineering",
    duration: "Aug 2014 - May 2018",
    location: "Bengaluru, Karnataka, India",
  },
];

const workExperience = [
  {
    title: "Software Developer & Engineer",
    company: "Zibtek",
    duration: "Jul 2019 - Aug 2023",
    location: "Bengaluru, Karnataka, India",
    description: "I dove headfirst into the startup grind, showing major hustle on a bunch of projects both our own stuff and client work. This gave me a crazy diverse skillset and leveled up my problem-solving game. I was all about collaborating with different teams, contributing to and learning from Agile/Scrum. Basically, I was a project lead pro, flexing my project management skills. On top of that, I was designing architecture, doing code reviews, and building hybrid microservices using cloud tools. This meant I was tight with the DevOps team, sometimes even building, debugging, and fixing code live in production. Startup life could be intense, and mentorship wasn't always a thing, but that just made me a master of DIY learning—heavy on the research, docs, and trial and error, which seriously boosted my self-reliance.",
  },
  {
    title: "Software Developer",
    company: "BridgeLabz",
    duration: "Sep 2018 - Jun 2019",
    location: "Mumbai, Maharastra, India",
    description: "This was a total career twist. It had that full-on coding bootcamp vibe – fast-paced and jam-packed with hands-on projects that seriously leveled up my dev game. I was deep-diving into code, sharpening my logic, and getting hands-on with basic data structures using Java and TypeScript. I even built some cool stuff, like chat and note-taking apps, using JavaScript, Node.js, AngularJS, Core Java, and the MERN stack. I also got my hands dirty installing libraries, testing out new tools, and integrating third-party APIs like Stripe and Twilio, super fun stuff. The mentorship, with a focus on teamwork, communication, and getting to the bottom of problems. I was constantly bouncing ideas off tech leads and project managers, hitting up product docs and online resources to cream on solutions. This whole experience was the foundation stone for my journey into full-stack development and modern engineering."
  }
]

const credentials = [
  {
    name: "Docker Foundations Professional Certificate",
    dateIssued: "Nov 2024",
    companyIssued: "Docker",
    source: "https://www.linkedin.com/learning/certificates/dff5b47e0a728789340a7efe1e6ec7fb8aa71c9d753816ab5dee209d88629446"
  },
  {
    name: "Angular - The Complete Guide",
    dateIssued: "Jul 2024",
    companyIssued: "Udemy",
    source: "https://ude.my/UC-f4bac940-bcef-465a-b44b-d1a89be920c3"
  },
  {
    name: "Cloud Foundations",
    dateIssued: "Nov 2023",
    companyIssued: "AWS",
    source: "https://www.credly.com/badges/079af767-57c6-4bd2-a10b-3cb320c0ad64/linked_in_profile"
  },
  {
    name: "Machine Learning Foundations",
    dateIssued: "Dec 2024",
    companyIssued: "Amazon Web Services (AWS)",
    source: "https://www.credly.com/badges/c63c48de-7d20-4fb0-bc0a-ffb2814a412d/linked_in_profile"
  },
  {
    name: "Data Engineering",
    dateIssued: "Jan 2024",
    companyIssued: "AWS",
    source: "https://www.credly.com/badges/adbf0565-b1ca-4a92-8c07-48501f601047/linked_in_profile"
  },
  {
    name: "Learning Docker",
    dateIssued: "Nov 2024",
    companyIssued: "LinkedIn",
    source: "https://www.linkedin.com/learning/certificates/d6c9f58196c975646707b6b87c0b7b8fdcffeac5ea639982618a076bca2a4f35"
  },
  {
    name: "Docker: Your First Project",
    dateIssued: "Nov 2024",
    companyIssued: "LinkedIn",
    source: "https://www.linkedin.com/learning/certificates/986fefb7ea49fca637c5d4540eb2302a796953c14bc91cafa677b2f20ead41a2"
  },
  {
    name: "Learning Docker Compose",
    dateIssued: "Nov 2024",
    companyIssued: "LinkedIn",
    source: "https://www.linkedin.com/learning/certificates/02a48cedf31229255d18706bc07f606f44a3c2262e57fc2dca72c057772202a1"
  }
]


export default function Home() {
  const [form, setForm] = useState<ContactForm>({})

  const toastOpts: Partial<ToastOptions> = {
    duration: 4000,
    position: 'bottom-right',
  }

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    // Function to handle url change
    const updateUrlFragment = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) window.history.replaceState(null, "", `#${id}`);
        }
      });
    };
    const observer = new IntersectionObserver(updateUrlFragment, {
      rootMargin: "-10px 0px 0px 0px",
      threshold: 0.4,
    });
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    const uuid = localStorage.getItem("visitorUUID") || crypto.randomUUID();
    localStorage.setItem("visitorUUID", uuid);

    // const visited = localStorage.getItem("visitedMeta");

    // if (!visited) {
    const fetchAndSendMetadata = async () => {
      try {
        const geo = await fetch("https://ipapi.co/json").then(res => res.json());

        const metaPayload = {
          uuid,
          sheet: "user-meta-details",
          ip: geo.ip,
          city: geo.city,
          region: geo.region,
          country: geo.country_name,
          postal: geo.postal,
          latitude: geo.latitude,
          longitude: geo.longitude,
          userAgent: navigator.userAgent,
          screenResolution: `${window.screen.width}x${window.screen.height}`,
        };

        await fetch('https://script.google.com/macros/s/AKfycby3gkjdHMNqgus13fhRAWE8XUTG-QZplBKOtCU_R2XehlyzOHLEOZXLfnMQxGB-2kqc/exec', {
          method: "POST",
          // headers: { "Content-Type": "application/json" },
          body: JSON.stringify(metaPayload),
        });

        localStorage.setItem("visitedMeta", "true");
      } catch (err) {
        console.error("Meta data failed to send", err);
      }
    };

    fetchAndSendMetadata();
    // }
  }, []);


  const updateForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: value }));
  };

  const contactSubmit = async () => {

    if (!(form.name && form.email && form.message)) {
      toast.error('Please, fill all the fields. Thanks! ☺️🙏🏻', toastOpts);
      return;
    }

    const uuid = localStorage.getItem("visitorUUID");
    toast.loading('Saving...', toastOpts);

    const payload = {
      ...form, uuid, sheet: 'contact-messages',
    };
    // debugger
    try {
      const res = await fetch(
        'https://script.google.com/macros/s/AKfycby3gkjdHMNqgus13fhRAWE8XUTG-QZplBKOtCU_R2XehlyzOHLEOZXLfnMQxGB-2kqc/exec',
        {
          method: 'POST',
          // headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const result = await res.json();

      if (result.success) {
        toast.dismiss();
        toast.success('Thanks for contacting 😊', toastOpts);
        setForm({});
      } else {
        throw new Error('Failed to submit');
      }
    } catch (err) {
      toast.dismiss();
      toast.error('Oops! Something went wrong.', toastOpts);
      console.error(err);
    }
  };

  return (
    <>
      <Toaster />
      <Head>
        <title>Vishnu Sri Ranjan - Portfolio</title>
        <meta
          name="description"
          content="Explore the portfolio of Vishnu Sri Ranjan 😎, a passionate Software Developer & Engineer specializing in Full-Stack Development. Check out my projects and get in touch!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/*  Open Graph Tags */}
        <meta property="og:title" content="Vishnu Sri Ranjan | Software Developer & Engineer Portfolio" />
        <meta
          property="og:description"
          content="Explore the portfolio of Vishnu Sri Ranjan, a passionate Software Developer & Engineer. Check out my projects and get in touch!"
        />
        <meta property="og:image" content="/portfolio_thumbnail.png" />
        <meta property="og:url" content="/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="My Portfolio" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Vishnu Sri Ranjan | Software Developer & Engineer Portfolio" />
        <meta name="twitter:description" content="Explore the portfolio of Vishnu Sri Ranjan, a passionate Software Developer & Engineer. Check out my projects and get in touch!" />
        <meta name="twitter:image" content="/portfolio_thumb_twitter.jpg" />
      </Head>
      <div className={`${styles.page} ${inter.variable}`}>
        <Header />
        <main className={styles.main}>
          <div className={styles.mainCtn}>
            <section id="home" className={`${styles.sec1} d-flex align-center card`}>
              <div className="d-flex align-center flex-column mb-6">
                <div>
                  <div className="gradient-glow-1"
                    style={{
                      padding: "5px 12px",
                      border: "2px solid #45c91e",
                      borderRadius: "8px",
                      position: "relative"
                    }}
                  >
                    <p className={styles.status}>Available for work!</p>
                  </div>
                </div>
                <div style={{ padding: "1rem 0" }}>
                  <h1 className={styles.name}>Vishnu Sri Ranjan D.R.</h1>
                </div>
                <div>
                  <div>
                    <p className={styles.subheading}>
                      Software Developer, Engineer, & Data Scientist
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="d-flex">
                  <div className="gradient-glow-2" style={{ width: "150px", margin: "0 8px", position: "relative" }}>
                    <Button
                      name="Send Email"
                      icon="/mail.svg"
                      href="mailto:k0rj32ra5@mozmail.com"
                      alt="mail"
                    />
                  </div>
                  <div className="gradient-glow-2" style={{ width: "150px", margin: "0 8px", position: "relative" }}>
                    <Button
                      name="Download CV"
                      icon="/download.svg"
                      href="./resume.pdf"
                      alt="download"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex align-center f-gap-2">
                  <a
                    href="https://linkedin.com/in/srivisnu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon path="./linkedin.svg" size={25} />
                  </a>
                  <a
                    href="https://github.com/visnu1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon path="./github.svg" size={25} />
                  </a>
                  <a
                    href="https://instagram.com/sri_visnu_"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon path="./instagram.svg" size={25} />
                  </a>
                </div>
              </div>
            </section>

            <div className="d-flex flex-column f-gap-3">
              {/* Profile */}
              <section
                id="profile"
                className={`${styles.profileSec} d-flex f-gap-1`}
              >
                <div className={styles.profileCtn}>
                  <div className={styles.profile}>
                    <Image
                      className={styles.profileImg}
                      src="/my-photo.jpg"
                      alt="Vishnu Sri Ranjan Profile Photo"
                      width={100}
                      height={100}
                      unoptimized
                    />
                  </div>
                </div>
                <div style={{ flex: "1" }}>
                  <div className="card-border">
                    <HighlightCard
                      title="Professional Background"
                      description={profileOverview}
                      icon="/badge.svg"
                      additionalComps={[
                        <LocationInfo
                          key="additional-comps"
                          location="Based in Harrison, New Jersey, USA"
                        />,
                      ]}
                    />
                  </div>
                </div>
              </section>

              {/* Work Experience */}
              <section id="experience">
                <div className="border-top-style">
                  <HighlightCard
                    title="Work Experience"
                    description="Proven track record in data science and business consulting, delivering impactful insights and results across industries."
                    icon="/work-history.svg"
                  />
                </div>
                <div className={`${styles.workCtn} d-flex flex-column`}>
                  {workExperience.map((work, index) => (
                    <div key={index} className={styles.workItemWrapper}>
                      <div className="d-flex f-gap-3 w-100">
                        <div>
                          <div className={styles.bullet} />
                        </div>
                        <div className={`${styles.workInfo} d-flex flex-column`}>
                          <div className="d-flex f-gap-2">
                            <div className={`${styles.workTitle} f-gap-1 d-flex flex-column`}>
                              <div>
                                <h3>{work.title}</h3>
                              </div>
                              <div>
                                <p>{work.company} - Full-Time</p>
                              </div>
                            </div>
                            <div>
                              <Chip icon="/calendar.svg" html={work.duration} />
                            </div>
                          </div>
                          <div>
                            <LocationInfo location={work.location} />
                          </div>
                          <div className={styles.workDesc}>
                            <p>{work.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Professional Skills */}
              <section id="skills">
                <div></div>
                <div className="border-top-style">
                  <HighlightCard
                    title="Professional Skills"
                    description="Key competencies essential for navigating and excelling in various professional contexts."
                    icon="/diamond.svg"
                  />
                </div>
                <div className={`${styles.workCtn} d-flex flex-column`}>
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className={styles.workItemWrapper}>
                      <div className={`${styles.workInfo} d-flex flex-column`}>
                        <div>
                          <h3>{category}</h3>
                        </div>
                        <div>
                          {skillList.map((skill, index) => (
                            <div key={index} className="mr-2 mb-2 d-inline-block">
                              <Chip icon="/check.svg" html={skill} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section id="education">
                <div className="border-top-style">
                  <HighlightCard
                    title="Education"
                    description="My educational background and degrees include:"
                    icon="/school.svg"
                  />
                </div>
                <div className={`${styles.workCtn} d-flex flex-column`}>
                  {education.map((edu, index) => (
                    <div key={index} className={styles.workItemWrapper}>
                      <div className={`${styles.workInfo} d-flex flex-column`}>
                        <div className="d-flex f-gap-2">
                          <div className={`${styles.workTitle} f-gap-1 d-flex flex-column`}>
                            <div>
                              <h3>{edu.institution}</h3>
                            </div>
                            <div>
                              <p>{edu.duration}</p>
                            </div>
                          </div>
                          <div>
                            <Chip icon="/calendar.svg" html={edu.duration} />
                          </div>
                        </div>
                        <div>
                          <LocationInfo location={edu.location} />
                        </div>
                      </div>
                      {index < education.length - 1 && (
                        <hr className="mt-3" />
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Licenses & Certifications */}
              <section id="certifications">
                <div className="border-top-style">
                  <HighlightCard
                    title="Licenses & Certifications"
                    description="Got the certs and badges to show I know my stuff and I'm on top of industry standards."
                    icon="/certificate.svg"
                  />
                </div>
                <div className={`${styles.workCtn} d-flex flex-column`}>
                  <div className={`${styles.workItemWrapper} ${styles.credentialItemsCtn}`}>
                    {credentials.map((credential, index) => (
                      <div key={index} className={styles.workInfo}>
                        <div className="d-flex flex-column f-gap-2">
                          <div className={`${styles.workTitle} f-gap-1 d-flex flex-column`}>
                            <div>
                              <h3>{credential.name}</h3>
                            </div>
                            <div>
                              <p>
                                {credential.companyIssued} - Issued{" "}
                                {credential.dateIssued}
                              </p>
                            </div>
                          </div>
                          <div>
                            <Button
                              name="Show Credentials"
                              target="_blank"
                              icon="/north_east.svg"
                              alt="link"
                              href={credential.source}
                              className="btn-max-width"
                            />
                          </div>
                        </div>
                        {index < credentials.length - 1 && <hr />}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Languages */}
              <section id="languages">
                <div className="border-top-style">
                  <HighlightCard
                    title="Languages"
                    description="Proficient in multiple languages, facilitating effective communication and collaboration in diverse settings."
                    icon="/language.svg"
                  />
                </div>
                <div className={`${styles.workCtn} d-flex flex-column`}>
                  {languages.map((language, index) => (
                    <div key={index}>
                      <div className={styles.workItemWrapper}>
                        <div
                          className={`${styles.workTitle} f-gap-1 d-flex flex-column`}
                        >
                          <div className="d-flex f-gap-2-1 flex-column">
                            <h3>{language.name}</h3>
                            <Rating total={5} value={language.rating} />
                          </div>
                          <div>
                            <p>{language.proficiency}</p>
                          </div>
                        </div>
                      </div>
                      {index < languages.length - 1 && (
                        <hr className="mt-3" />
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Contact */}
              <section id="contact">
                <div className={styles.contactHandIllus}>
                  <div>
                    <Image
                      className={styles.contactHandIllusImg}
                      src="/hand-2.png"
                      alt="Contact by pointing"
                      width={100}
                      height={100}
                      unoptimized
                    />
                  </div>
                </div>
                <div className={`${styles.contactSection} d-flex align-center flex-column`}>
                  <div>
                    <div className="border-top-style">
                      <HighlightCard
                        title="Holla at me!"
                        description="Questions? Feedback? Or just wanna chat? Don't be shy, drop me a message, I'm always down to talk!"
                        icon="/person.svg"
                      />
                    </div>
                    <div className={styles.contactFormCtn}>
                      <form action="" className="d-flex flex-column f-gap-3">
                        <div style={{ display: "contents" }}>
                          <div>
                            <input
                              placeholder="Full Name"
                              name="name"
                              type="text"
                              onChange={updateForm}
                            />
                          </div>
                          <div>
                            <input
                              placeholder="Email"
                              type="text"
                              name="email"
                              onChange={updateForm}
                            />
                          </div>
                          <div>
                            <textarea
                              placeholder="Message"
                              name="message"
                              onChange={updateForm}
                            ></textarea>
                          </div>
                        </div>
                        <div>
                          <Button name="Send Message" alt="send" click={contactSubmit} />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-center f-gap-2">
                      <a
                        href="https://linkedin.com/in/srivisnu"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon path="./linkedin.svg" size={30} />
                      </a>
                      <a
                        href="https://github.com/visnu1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon path="./github.svg" size={30} />
                      </a>
                      <a
                        href="https://instagram.com/sri_visnu_"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon path="./instagram.svg" size={30} />
                      </a>
                      <Button
                        href="mailto:k0rj32ra5@mozmail.com"
                        name="Email"
                        icon="/mail.svg"
                        alt="mail"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}
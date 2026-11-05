import js from "../assets/icon/js.png";
import db from "../assets/icon/mongo.png";
import nd from "../assets/icon/nodejs.png";
import rt from "../assets/icon/react.png";
import rn from "../assets/icon/native.png";
import rq from "../assets/icon/react-query-seeklogo.png";
import CardTech from "../Components/Cards/CardTech";
import TechMarquee from "../Components/TechMarquee";
import Title from "../Components/Title";
import ShopifyExperience from "../Components/Experience/ShopifyExperience";

const techs = [
  {
    title: "JavaScript",
    category: "Core Language",
    desc: "Comprehensive expertise in ES6+ syntax, asynchronous control flow, closures, and browser APIs to construct responsive and maintainable web applications.",
    tags: ["ES6+", "Async/Await", "DOM APIs", "Event Loop"],
    img: js,
    bg: "bg-amber-100",
  },
  {
    title: "Node.js",
    category: "Backend Runtime",
    desc: "Building robust, event-driven server-side architectures, designing scalable RESTful APIs, and implementing secure token-based authentication workflows.",
    tags: ["REST APIs", "Express", "Microservices", "Auth"],
    img: nd,
    bg: "bg-emerald-100",
  },
  {
    title: "React.js",
    category: "Frontend Architecture",
    desc: "Developing modern, modular user interfaces with functional components, custom hooks, centralized state, and performance-optimized rendering.",
    tags: ["Hooks", "Context API", "Component Design", "Vite"],
    img: rt,
    bg: "bg-cyan-100",
  },
  {
    title: "MongoDB",
    category: "Database & Modeling",
    desc: "Hands-on data modeling, index optimization, complex aggregation pipelines, and Mongoose integration to power reliable data-driven applications.",
    tags: ["Mongoose", "Aggregations", "Schema Design", "NoSQL"],
    img: db,
    bg: "bg-green-100",
  },
  {
    title: "React Native",
    category: "Mobile Apps",
    desc: "Crafting cross-platform native-feel applications for iOS and Android, focusing on fluid navigation, performance tuning, and responsive layouts.",
    tags: ["iOS & Android", "Native UI", "Cross-Platform", "Mobile APIs"],
    img: rn,
    bg: "bg-sky-100",
  },
  {
    title: "React Query",
    category: "State & Data Fetching",
    desc: "Streamlining server state management with automatic background refetching, smart client caching, optimistic updates, and mutation synchronization.",
    tags: ["Server State", "Cache Sync", "Optimistic UI", "Query Keys"],
    img: rq,
    bg: "bg-rose-100",
  },
];

const BodySection = () => {
  return (
    <section id="skills" className="w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Title title={"SKILLS & EXPERTISE"} />

        {/* Modernized Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
          {techs.map((tech) => (
            <CardTech
              key={tech.title}
              title={tech.title}
              category={tech.category}
              desc={tech.desc}
              tags={tech.tags}
              img={tech.img}
              bg={tech.bg}
            />
          ))}
        </div>

        {/* Compact & Minimal Shopify Liquid Experience Section */}
        <ShopifyExperience />
      </div>

      <div className="p-8 xl:max-w-7xl mx-auto">
        <TechMarquee />
      </div>
    </section>
  );
};

export default BodySection;

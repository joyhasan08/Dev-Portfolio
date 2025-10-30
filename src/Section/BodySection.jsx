import js from "../assets/icon/js.png";
import db from "../assets/icon/mongo.png";
import nd from "../assets/icon/nodejs.png";
import rt from "../assets/icon/react.png";
import rn from "../assets/icon/native.png";
import rq from "../assets/icon/react-query-seeklogo.png";
import CardTech from "../Components/Cards/CardTech";
import TechMarquee from "../Components/TechMarquee";
import Title from "../Components/Title";

// const techs = [
//   {
//     title: "JavaScript",
//     desc: "With 2 years of experience in JavaScript, I’ve mastered the language’s fundamentals and advanced concepts, enabling me to build dynamic, interactive, and efficient web applications. My expertise extends across ES6+ features, ensuring clean and modern code.",
//     img: `${js}`,
//   },
//   {
//     title: "Node.js",
//     desc: "Over the past 2 years, I’ve leveraged Node.js to create robust and scalable backend services. I specialize in developing RESTful APIs and server-side applications, ensuring seamless performance and integration with various databases and client-side technologies.",
//     img: `${nd}`,
//   },
//   {
//     title: "React.js",
//     desc: "React.js has been at the core of my frontend development for the last 2 years. I’ve crafted responsive, component-based user interfaces that are both intuitive and performant. My experience includes state management, hooks, and optimizing React applications for better user experiences.",
//     img: `${rt}`,
//   },
//   {
//     title: "MongoDB",
//     desc: "With 2 years of hands-on experience with MongoDB, I’ve effectively managed and queried large datasets for various applications. I’m proficient in designing schemas, working with Mongoose for Node.js, and implementing complex queries to support data-driven functionalities.",
//     img: `${db}`,
//   },
// ];

const techs = [
  {
    title: "JavaScript",
    desc: "With 2 years of experience in JavaScript, I’ve mastered the language’s fundamentals and advanced concepts, enabling me to build dynamic, interactive, and efficient web applications. My expertise extends across ES6+ features, ensuring clean and modern code.",
    img: `${js}`,
  },
  {
    title: "Node.js",
    desc: "Over the past 2 years, I’ve leveraged Node.js to create robust and scalable backend services. I specialize in developing RESTful APIs and server-side applications, ensuring seamless performance and integration with various databases and client-side technologies.",
    img: `${nd}`,
  },
  {
    title: "React.js",
    desc: "React.js has been at the core of my frontend development for the last 2 years. I’ve crafted responsive, component-based user interfaces that are both intuitive and performant. My experience includes state management, hooks, and optimizing React applications for better user experiences.",
    img: `${rt}`,
  },
  {
    title: "MongoDB",
    desc: "With 2 years of hands-on experience with MongoDB, I’ve effectively managed and queried large datasets for various applications. I’m proficient in designing schemas, working with Mongoose for Node.js, and implementing complex queries to support data-driven functionalities.",
    img: `${db}`,
  },
  {
    title: "React Native",
    desc: "I have practical experience developing cross-platform mobile applications using React Native. I focus on building fast, responsive, and visually appealing mobile apps that deliver a smooth user experience on both Android and iOS platforms.",
    img: `${rn}`,
  },
  {
    title: "React Query",
    desc: "React Query has been an essential part of my workflow for managing server state efficiently. I use it to simplify data fetching, caching, synchronization, and background updates, ensuring optimal performance and a seamless user experience.",
    img: `${rq}`,
  },
];


// bg-[#FFE6C0]
// bg-gradient-to-b from-[#FFE6C0] via-[#feedd4] to-[#fcfcfc]
// border-[#FFDE59]
// #C1FF72
const BodySection = () => {
  return (
    <section className="w-full  ">
     <div className="max-w-7xl mx-auto">
      <Title  title={"SKILLS SET"} />  
     </div>
      <div className="  grid md:grid-cols-2 gap-2 p-4 w-full  md:p-8 xl:max-w-7xl mx-auto ">
        {techs.map((tech) => (
          <CardTech
            key={tech.title}
            title={tech.title}
            desc={tech.desc}
            img={tech.img}
          />
        ))}
      </div>
      <div className="p-8 xl:max-w-7xl mx-auto">
        <TechMarquee />
      </div>
    </section>
  );
};

export default BodySection;

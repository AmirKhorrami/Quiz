// import React from "react";

// const About = () => {
//   return (
//     <main>
//       <div>
//         <h1 className="text-xl text-blue-200">
//           توسعه دهنده اپلیکیشن :{" "}
//           <span className="text-xl text-blue-400">امیرحسین خرمی</span>{" "}
//         </h1>
//       </div>
//     </main>
//   );
// };

// export default About;
export default async function About() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className="quiz-container" style={{ backgroundColor: "teal" }}>
      <h2>بخش اصلی</h2>
    </div>
  );
}

export default async function Skills() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className="quiz-container" style={{ backgroundColor: "green" }}>
      مهارت های من
    </div>
  );
}

import Link from "next/link";

const Home = () => {
  return (
    <main>
      <div className="container ">
        <h1>اپلیکیشن آزمون</h1>
        <Link href="/quiz">
          <button>شروع آزمون</button>
        </Link>
      </div>
    </main>
  );
};

export default Home;

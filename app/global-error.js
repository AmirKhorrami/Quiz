"use client";

export default function Error({ error, reset }) {
  console.log('the error: ',error);
  return (
    <html lang="fa-IR">
      <body>
        <div className="container">
          <div className="quiz-container">
            <h2 className="text-blue-800">مشکلی پیش اومده</h2>
            <h3 className="text-blue-800">لایوت اصلی</h3>
            <button onClick={() => reset()}>دوباره تلاش کن</button>
          </div>
        </div>
      </body>
    </html>
  );
}

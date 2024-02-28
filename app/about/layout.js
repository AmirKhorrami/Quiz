export default function Layout({ children, info, skills }) {
  const adminAuth = () => {
    return false;
  };
  const isAdmin = adminAuth();
  return (
    <div className="container" style={{ textAlign: "center" }}>
      {children}
      {isAdmin && info}
      {skills}
    </div>
  );
}

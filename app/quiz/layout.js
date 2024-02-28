export default function Layout({children, about}){
    return (
      <div className="container">
        {about}
        {children}
      </div>
    );
} 
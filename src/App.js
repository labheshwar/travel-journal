import Navbar from "./components/Navbar";
import Main from "./components/Main";
import data from "./data";

export default function App() {
  const locations = data.map(location => {
    return (
      <Main 
        key={location.id}
        item={location}
      />
    )
  });

  return (
    <div className="container">
      <Navbar />
      {locations}
    </div>
  );
}
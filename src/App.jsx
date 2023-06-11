import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setisLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newtours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newtours);
  };

  const fetchTours = async () => {
    setisLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setTours(data);
    } catch (error) {
      console.log(error);
    }
    setisLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />{" "}
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left </h2>
          <button
            style={{ marginTop: "2rem" }}
            type="button"
            className="btn"
            onClick={fetchTours}
          >
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;

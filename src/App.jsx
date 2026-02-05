// import NavBar from "./components/NavBar";
// import AppRoutes from "./routes/AppRoutes"
// const App = () => {
//   return (
//     <>
//       <NavBar/>
//       <AppRoutes/>
//     </>
//   );
// };

// export default App;
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default App;

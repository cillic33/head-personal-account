import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainPage from "@pages/MainPage";
import {Route, Routes} from "react-router-dom";
import EmployeesPage from "@pages/EmployeesPage";
import {AppRoutes} from "@utils/const";
import TrainingPage from "@pages/TrainingPage";

function App() {
  return (
    <Routes>
      <Route path={AppRoutes.Main} element={<MainPage />} />
      <Route path={AppRoutes.Employees} element={<EmployeesPage />} />
      <Route path={AppRoutes.Training} element={<TrainingPage />} />
    </Routes>
  )
}

export default App;

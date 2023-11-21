import { createHashRouter, RouterProvider } from "react-router-dom";

import MainPage from "./pages/main_page";
import MaterialsPage from "./pages/materials_page";
import LoginPage from "./pages/login_page";
import NotFoundPage from "./pages/notfound_page";
import DesignEngineeringPage from "./pages/design_engineering_page";
import PolygraphyPage from "./pages/polygraphy_page";
import SouvenirsPage from "./pages/souvenirs_page";
import AdvertProduction from "./pages/advert_production_page";
import SuppliersPage from "./pages/suppliers_page";
import MovingGoodsPage from "./pages/moving goods_page";
import AccessLevelsPage from "./pages/access_levels_page";

const router = createHashRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <NotFoundPage />,
  },
  
  //Дизайн и проектирование
  {
    path: "/designEngineering",
    element: <DesignEngineeringPage/>,
  },

  //Прикладная полиграфия
  {
    path: "/polygraphy",
    element: <PolygraphyPage/>,
  },

  //Сувенирная продукция
  {
    path: "/souvenirs",
    element: <SouvenirsPage/>,
  },

  //Рекламное производство
  {
    path: "/advertProduction",
    element: <AdvertProduction/>,
  },

  //Поставщики
  {
    path: "/suppliers",
    element: <SuppliersPage/>,
  },

  //Материалы
  {
    path: "/materials",
    element: <MaterialsPage />,
  },

  //Перемещение товаров
  {
    path: "/movingGoods",
    element: <MovingGoodsPage/>,
  },

  //Уровни доступа
  {
    path: "/accessLevels",
    element: <AccessLevelsPage/>
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

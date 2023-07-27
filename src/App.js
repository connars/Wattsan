import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { AppProvider } from "./context/AppContext";

import Header from "./container/header/Header";
import Footer from "./container/footer/Footer";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import Profile from "./pages/profile/Profile";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import homecard1 from "./assets/images/home/p1.webp";

function App() {
  const categories = [
    {
      title: "laser",
      subtitle: "Подзаголовок Один",
      video: "путь/к/видео/интро01.mp4",
      cardsData: [
        {
          img: `${homecard1}`,
          title: "товар 1",
          link: "/11",
        },
        {
          img: `${homecard1}`,
          title: "товар 1",
          link: "/2",
        },
        {
          img: `${homecard1}`,
          title: "товар 1",
          link: "/ссылка_2",
        },
        {
          img: `${homecard1}`,
          title: "товар 1",
          link: "/ссылка_2",
        },
        {
          img: `${homecard1}`,
          title: "товар 1",
          link: "/ссылка_2",
        },
        {
          img: `${homecard1}`,
          title: "товар 1",
          link: "/ссылка_2",
        },
      ],
    },
    {
      title: "2",
      subtitle: "Подзаголовок Два",
      video: "путь/к/видео/интро02.mp4",
      cardsData: [
        {
          img: `${homecard1}`,
          title: "товар 2",
          link: "/login",
        },
        {
          img: `${homecard1}`,
          title: "товар 2",
          link: "/ссылка_2",
        },
        {
          img: `${homecard1}`,
          title: "товар 2",
          link: "/ссылка_2",
        },
        {
          img: `${homecard1}`,
          title: "товар 2",
          link: "/ссылка_2",
        },
        {
          img: `${homecard1}`,
          title: "товар 2",
          link: "/ссылка_2",
        },
        {
          img: `${homecard1}`,
          title: "товар 2",
          link: "/ссылка_2",
        },
      ],
    },
  ];

  const allRoutes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/profile", element: <Profile /> },
    ...categories.map((category) => ({
      path: `/${category.title.toLowerCase().replace(/\s/g, "-")}`,
      element: (
        <CategoryPage
          title={category.title}
          subtitle={category.subtitle}
          video={category.video}
          cardsData={category.cardsData}
        />
      ),
    })),
    ...categories.map((category) =>
      category.cardsData.map((card, cardIndex) => ({
        path: `/${category.title.toLowerCase().replace(/\s/g, "-")}${card.link}`,
        element: (
          <div>
            <h3>{card.title}</h3>
            {/* ДОБАВИТЬ СТРАНИЦУ ТОВАРА И ЗАПОЛНИТЬ ЕЕ ДАННЫМИ */}
          </div>
        ),
      }))
    ),
  ];

  console.log(allRoutes);

  return (
    <AppProvider allRoutes={allRoutes}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          {/* Маршруты для каждой категории */}
          {categories.map((category, index) => (
            <Route
              key={index}
              path={`/${category.title.toLowerCase().replace(/\s/g, "-")}`}
              element={
                <CategoryPage
                  title={category.title}
                  subtitle={category.subtitle}
                  video={category.video}
                  cardsData={category.cardsData}
                />
              }
            />
          ))}
          {/* Маршруты для каждого товара внутри каждой категории */}
          {categories.map((category, index) =>
            category.cardsData.map((card, cardIndex) => (
              <Route
                key={index + cardIndex}
                path={`/${category.title.toLowerCase().replace(/\s/g, "-")}${
                  card.link
                }`}
                element={
                  <div>
                    <h3>{card.title}</h3>
                    {/* ДОБАВИТЬ СТРАНИЦУ ТОВАРА И ЗПОНЯТЬ ЕЕ ДАННЫМИ*/}
                  </div>
                }
              />
            ))
          )}
       
        </Routes>
        <Footer />
      </AppProvider>
  );
}

export const allRoutes = [
  // Ваши маршруты
];
export default App;

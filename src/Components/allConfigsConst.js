import home from "../assets/icons/menu/home.svg";
import menu from "../assets/icons/menu/menu.svg";
import settings from "../assets/icons/menu/settings.svg";
import trending from "../assets/icons/menu/trending.svg";

import allDishes from "../assets/img/menu_dishes/all_dishes.png";
import burger from "../assets/img/menu_dishes/burger.png";
import pizza from "../assets/img/menu_dishes/pizza.png";
import salads from "../assets/img/menu_dishes/salad.png";
import donut from "../assets/img/menu_dishes/donut.png";
import drinks from "../assets/img/menu_dishes/drinks.png";

import chickenIcon from "../assets/icons/mini_icons/mini_chicken.png";
import coronaIcon from "../assets/icons/mini_icons/emoji_corona.png";
import cookieIcon from "../assets/icons/mini_icons/mini_cookie.png";
import pizzaIcon from "../assets/icons/mini_icons/mini_pizza.png";

import miniAva1 from "../assets/icons/mini_icons/mini_ava_1.png";
import miniAva2 from "../assets/icons/mini_icons/mini_ava_2.png";
import miniAva3 from "../assets/icons/mini_icons/mini_ava_alka.png";

import miniLike from "../assets/icons/mini_icons/mini_like.png";
import star from "../assets/img/dishes_items/rating/star.svg";
let id = Date.now();

export const menuConfig = [
  { id: id++, img: home, title: "Home" },
  { id: id++, img: menu, title: "Menu" },
  { id: id++, img: settings, title: "Settings" },
  { id: id++, img: trending, title: "Trending" },
];

export const menuDishesConfig = [
  { id: id++, title: "all", img: allDishes },
  { id: id++, title: "burgers", img: burger },
  { id: id++, title: "pizzas", img: pizza },
  { id: id++, title: "lunch", img: salads },
  { id: id++, title: "donuts", img: donut },
  { id: id++, title: "drinks", img: drinks },
];

export const newsConfig = [
  {
    id: id++,
    icon: chickenIcon,
    background: "#FFF0A5",
    title: "How to cook turkey on Natural Gas",
    miniAva: [
      { id: id++, miniAva: miniAva1 },
      { id: id++, miniAva: miniAva2 },
    ],
    miniLike,
    likeCount: 28,
  },
  {
    id: id++,
    icon: coronaIcon,
    background: "#D6F5FF",
    title: "Corona virus update: 3,43,287+ cases",
    miniAva: [
      { id: id++, miniAva: miniAva1 },
      { id: id++, miniAva: miniAva3 },
    ],
    miniLike,
    likeCount: 28,
  },
  {
    id: id++,
    icon: cookieIcon,
    background: "#FFDDF0",
    title: "Tasty chunk donuts with chocolate",
    miniAva: [
      { id: id++, miniAva: miniAva1 },
      { id: id++, miniAva: miniAva3 },
    ],
    miniLike,
    likeCount: 28,
  },
  {
    id: id++,
    icon: pizzaIcon,
    background: "#C1FFF4",
    title: "Home made double cheese with popcorn respies",
    miniAva: [
      { id: id++, miniAva: miniAva1 },
      { id: id++, miniAva: miniAva3 },
    ],
    miniLike,
    likeCount: 28,
  },
];

export const loginPageConfig = [
  {
    id: "login-input",
    label: "Login",
    placeholder: "test@gmail.com",
    name: "login",
    type: "text",
  },
  {
    id: "password-input",
    label: "Password",
    placeholder: "***************",
    name: "password",
    type: "password",
  },
];

export const registerPageConfig = [
  {
    id: "name-input",
    label: "Name",
    placeholder: "Name",
    name: "name",
    type: "text",
  },
  {
    id: "password-input",
    label: "Password",
    placeholder: "***************",
    name: "password",
    type: "password",
  },
  {
    id: "confirm-password-input",
    label: "Confirm password",
    placeholder: "***************",
    name: "confirmPassword",
    type: "password",
  },
];

export const ratingConfig = [
  { id: id++, img: star },
  { id: id++, img: star },
  { id: id++, img: star },
  { id: id++, img: star },
  { id: id++, img: star },
];

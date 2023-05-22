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

import burgerWanted from "../assets/img/trending/burger_wanted_trending.webp";
import doubleOliver from "../assets/img/trending/double_oliver_trending.webp";
import fishburger from "../assets/img/trending/fishburger.webp";

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

export const profileInputsConfig = [
  {
    id: id++,
    name: "name",
    type: "text",
    label: "user's first name",
    placeholder: "enter your name",
  },
  {
    id: id++,
    name: "surname",
    type: "text",
    label: "user's last name",
    placeholder: "enter your surname",
  },
  {
    id: id++,
    name: "age",
    type: "text",
    label: "user's age",
    placeholder: "enter your age",
  },
  {
    id: id++,
    name: "deliveryAddress",
    type: "text",
    label: "delivery address",
    placeholder: "enter your address",
  },
  {
    id: id++,
    name: "phoneNumber",
    type: "text",
    label: "phone number",
    placeholder: "enter your phone number",
  },
  {
    id: id++,
    name: "email",
    type: "text",
    label: "email for delivery orders",
    placeholder: "enter your email",
  },
];

export const trendingConfig = [
  {
    id: id++,
    img: burgerWanted,
    name: "Burger Wanted",
    description:
      "A huckleberry-crusted burger covered in white cheddar cheese and stacked with shaved brisket on a potato roll with bread & butter pickles, shredded lettuce, sliced tomato, red onion jam.",
  },
  {
    id: id++,
    img: doubleOliver,
    name: "Double Oliver",
    description:
      "Hand-pressed adobo-seasoned ground chuck and chorizo patty with house-made roasted pepper mayonnaise, chipotle jack cheese, and sauteed peppers on potato roll.",
  },
  {
    id: id++,
    img: fishburger,
    name: "Fishburger",
    description:
      "Tangy salmon Blue Cheese spread on a steak-burger patty with caramelized onion compote, butter lettuce, Balsamic Vinaigrette, on a French Roll.",
  },
];

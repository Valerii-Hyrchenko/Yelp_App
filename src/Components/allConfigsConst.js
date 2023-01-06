import wantedBurger from "../assets/img/dishes_items/dishes/burger_wanted.png";
import doubleBurger from "../assets/img/dishes_items/dishes/double_burger.png";
import fishBurger from "../assets/img/dishes_items/dishes/fish_burger.png";

import butterChicken from "../assets/img/dishes_items/dishes/butter_chicken.png";
import salmonSalad from "../assets/img/dishes_items/dishes/salmon.png";
import chickenBiryani from "../assets/img/dishes_items/dishes/chicken_biryani.png";
import redSalad from "../assets/img/dishes_items/dishes/red_salad.png";
import tomatoChiken from "../assets/img/dishes_items/dishes/tomato_chicken.png";

import californiaPizza from "../assets/img/dishes_items/dishes/california_pizza.png";
import margaritaPizza from "../assets/img/dishes_items/dishes/margarita_pizza.png";
import pepperoniPizza from "../assets/img/dishes_items/dishes/pepperoni_pizza.png";

import limeFreshness from "../assets/img/dishes_items/dishes/lime_freshness_cocktail.png";
import pinkDiamond from "../assets/img/dishes_items/dishes/pink_diamond_cocktail.png";
import tomatoStorm from "../assets/img/dishes_items/dishes/tomato_storm_cocktail.png";

import chocolateDonut from "../assets/img/dishes_items/dishes/chocolate_donut.png";
import vanillaDonut from "../assets/img/dishes_items/dishes/vanilla_donut.png";
import pinkChocolateDonut from "../assets/img/dishes_items/dishes/pink_chocolate_donut.png";

import home from "../assets/icons/menu/home.svg";
import menu from "../assets/icons/menu/menu.svg";
import settings from "../assets/icons/menu/settings.svg";
import trending from "../assets/icons/menu/trending.svg";

import allDishes from "../assets/img/menu_dishes/all_dishes.svg";
import burger from "../assets/img/menu_dishes/burger.svg";
import pizza from "../assets/img/menu_dishes/pizza.svg";
import salads from "../assets/img/menu_dishes/salad.svg";
import donut from "../assets/img/menu_dishes/donut.svg";
import drinks from "../assets/img/menu_dishes/drinks.svg";

import chickenIcon from "../assets/icons/mini_icons/mini_chicken.svg";
import coronaIcon from "../assets/icons/mini_icons/emoji_corona.svg";
import cookieIcon from "../assets/icons/mini_icons/mini_cookie.svg";
import pizzaIcon from "../assets/icons/mini_icons/mini_pizza.svg";

import miniAva1 from "../assets/icons/mini_icons/mini_ava_1.svg";
import miniAva2 from "../assets/icons/mini_icons/mini_ava_2.svg";
import miniAva3 from "../assets/icons/mini_icons/mini_ava_alka.svg";

import miniLike from "../assets/icons/mini_icons/mini_like.svg";

export const menuConfig = [
  { id: Math.floor(Math.random() * 100000), img: home, title: "Home" },
  { id: Math.floor(Math.random() * 100000), img: menu, title: "Menu" },
  { id: Math.floor(Math.random() * 100000), img: settings, title: "Settings" },
  { id: Math.floor(Math.random() * 100000), img: trending, title: "Trending" },
];

export const menuDishesConfig = [
  { id: Math.floor(Math.random() * 100000), title: "All", img: allDishes },
  { id: Math.floor(Math.random() * 100000), title: "Burger", img: burger },
  { id: Math.floor(Math.random() * 100000), title: "Pizza", img: pizza },
  { id: Math.floor(Math.random() * 100000), title: "Salads", img: salads },
  { id: Math.floor(Math.random() * 100000), title: "Donut", img: donut },
  { id: Math.floor(Math.random() * 100000), title: "Drinks", img: drinks },
];

export const dishesConfig = [
  {
    id: Math.floor(Math.random() * 100000),
    group: "Burger",
    img: wantedBurger,
    title: "Burger Wanted",
    text: "Veal, Zoodies, Garnein Sesasam Dessigns, Redeshchein, Avocade",
    quantity: 1,
    price: 29,
  },
  {
    id: Math.floor(Math.random() * 100000),
    group: "Burger",
    img: doubleBurger,
    title: "Double Oliver",
    text: "Veal, Zoodies, Cheese, Garnein Sesasam Dessigns, Redeshchein",
    quantity: 1,
    price: 35,
  },
  {
    id: Math.floor(Math.random() * 100000),
    group: "Burger",
    img: fishBurger,
    title: "Fishburger",
    text: "Fish, Zoodies, Avocado, Cheese, Garnein Sesasam Dessigns, Sous",
    quantity: 1,
    price: 38,
  },
  {
    id: Math.floor(Math.random() * 100000),
    group: "Pizza",
    img: californiaPizza,
    title: "California",
    text: "Flat base, Sous, Oil, Oregano, Meat, Tomato, Olives, Mozzarella",
    quantity: 1,
    price: 45,
  },
  {
    id: Math.floor(Math.random() * 100000),
    group: "Pizza",
    img: margaritaPizza,
    title: "Margarita",
    text: "Flat base, Sous, Oil, Oregano, Tomato, Mozzarella, Parmesan",
    quantity: 1,
    price: 35,
  },
  {
    id: Math.floor(Math.random() * 100000),
    group: "Pizza",
    img: pepperoniPizza,
    title: "Pepperoni",
    text: "Flat base, Sous, Oil, Sausage pepperoni, Oregano, Tomato, Mozzarella",
    quantity: 1,
    price: 51,
  },
  {
    id: Math.floor(Math.random() * 100000),
    group: "Salads",
    img: tomatoChiken,
    title: "Tomato Chiken",
    text: "Rise, Sous-vide Chicken, Penaut Satay, Babyspian",
    quantity: 1,
    price: 56,
  },
  {
    id: Math.floor(Math.random() * 100000),
    group: "Salads",
    img: salmonSalad,
    title: "Hi, Salmon",
    text: "Rise, Zoodies, Garnein Dressings, Avocado, Edanmame, Maris",
    quantity: 1,
    price: 69,
  },
  {
    id: Math.floor(Math.random() * 100000),
    group: "Salads",
    img: butterChicken,
    title: "Butter Chicken",
    text: "Potato, Butter, Garnein Dressings, Avocado, Chicken, Maris",
    quantity: 1,
    price: 45,
  },
  {
    id: Math.floor(Math.random() * 100000),
    group: "Salads",
    img: chickenBiryani,
    title: "Chicken Biryani",
    text: "Noodles, Cheese, Garnein Dressings, Avocado, Chicken, Rise",
    quantity: 1,
    price: 52,
  },
  {
    id: Math.floor(Math.random() * 100000),
    group: "Salads",
    img: redSalad,
    title: "Red Dragon",
    text: "Tomato, Pork, Potato, Beet, Garnein Dressings, Avocado, Veal",
    quantity: 1,
    price: 79,
  },
  {
    id: Math.floor(Math.random() * 100000),
    group: "Donut",
    img: chocolateDonut,
    title: "Chocolate Donut",
    text: "Flour, Chocolate, Sugar, Eggs, Salt, Shortening, Milk Solids",
    quantity: 1,
    price: 10,
  },
  {
    id: Math.floor(Math.random() * 100000),
    group: "Donut",
    img: vanillaDonut,
    title: "Vanilla Donut",
    text: "Flour, Leavening Agent, Sugar, Eggs, Salt, Shortening, Milk Solids",
    quantity: 1,
    price: 8,
  },
  {
    id: Math.floor(Math.random() * 100000),
    group: "Donut",
    img: pinkChocolateDonut,
    title: "Pink Donut",
    text: "Flour, Pink Chocolate, Sugar, Eggs, Salt, Shortening, Milk Solids",
    quantity: 1,
    price: 12,
  },
  {
    id: Math.floor(Math.random() * 100000),
    group: "Drinks",
    img: limeFreshness,
    title: "Lime Freshness",
    text: "Tonik, Lime, White Rum, Ice, Mint",
    quantity: 1,
    price: 15,
  },
  {
    id: Math.floor(Math.random() * 100000),
    group: "Drinks",
    img: pinkDiamond,
    title: "Pink Diamond",
    text: "Martini Rosso, Absolute, Ice, Cherry Juice",
    quantity: 1,
    price: 25,
  },
  {
    id: Math.floor(Math.random() * 100000),
    group: "Drinks",
    img: tomatoStorm,
    title: "Tomato Storm",
    text: "Tomato Juice, Finlandia, Salt",
    quantity: 1,
    price: 22,
  },
];

export const newsConfig = [
  {
    id: Math.floor(Math.random() * 100000),
    icon: chickenIcon,
    background: "#FFF0A5",
    title: "How to cook turkey on Natural Gas",
    miniAva: [
      { id: Math.floor(Math.random() * 100000), miniAva: miniAva1 },
      { id: Math.floor(Math.random() * 100000), miniAva: miniAva2 },
    ],
    miniLike,
    likeCount: 28,
  },
  {
    id: Math.floor(Math.random() * 100000),
    icon: coronaIcon,
    background: "#D6F5FF",
    title: "Corona virus update: 3,43,287+ cases",
    miniAva: [
      { id: Math.floor(Math.random() * 100000), miniAva: miniAva1 },
      { id: Math.floor(Math.random() * 100000), miniAva: miniAva3 },
    ],
    miniLike,
    likeCount: 28,
  },
  {
    id: Math.floor(Math.random() * 100000),
    icon: cookieIcon,
    background: "#FFDDF0",
    title: "Tasty chunk donuts with chocolate",
    miniAva: [
      { id: Math.floor(Math.random() * 100000), miniAva: miniAva1 },
      { id: Math.floor(Math.random() * 100000), miniAva: miniAva3 },
    ],
    miniLike,
    likeCount: 28,
  },
  {
    id: Math.floor(Math.random() * 100000),
    icon: pizzaIcon,
    background: "#C1FFF4",
    title: "Home made double cheese with popcorn respies",
    miniAva: [
      { id: Math.floor(Math.random() * 100000), miniAva: miniAva1 },
      { id: Math.floor(Math.random() * 100000), miniAva: miniAva3 },
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

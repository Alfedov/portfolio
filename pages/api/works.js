const works = [
  {
    _id: "link_1",
    icon: {
      path: "/project_icons/rainford.png",
      width: 76
    },
    gradient: {
      from: "",
      to: ""
    },
    links: "https://github.com/Alfedov",
    title: "Rainford Project | Веб-Разработчик"
  },
  {
    _id: "link_2",
    icon: {
      path: "/project_icons/astral.jpg",
      width: 76
    },
    gradient: {
      from: "",
      to: ""
    },
    links: "https://github.com/Alfedov",
    title: "Astral RolePlay | Игровой разработчик"
  }
];

export default function handler(req, res) {
  res.status(200).json(works);
}

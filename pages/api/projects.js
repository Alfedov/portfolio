const project = [
  {
    _id: "link_1",
    icon: {
      path: "/icons/github.svg",
      width: 76
    },
    gradient: {
      from: "",
      to: ""
    },
    link: "https://github.com/Alfedov",
    title: "Rainford Project"
  }
];

export default function handler(req, res) {
  res.status(200).json(project);
}

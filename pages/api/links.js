const links = [
  {
    _id: "link_1",
    icon: {
      path: "",
      width: 76
    },
    link: "https://github.com/Alfedov",
    title: "Мой личный профиль на GitHub"
  }

];

export default function handler(req, res) {
  res.status(200).json(links);
}

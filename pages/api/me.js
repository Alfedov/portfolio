const me = {
  siteName: "ParkerDev",
  avatar: "/avatar.jpeg",
  description:
    "<p>Меня зовут Артём, я уже 2 года занимаюсь веб-разработкой.</p>" +
    "<p>Как и все, начинал с изучения верстки html, css, js. Затем появилась потребность в изучении Laravel для разработки игрового проекта.</p>" +
    "<p>Основная миссия – создавать крутые продукты, которые будут помогать людям и менять мир. Спасибо 😊</p>"
};

export default function handler(req, res) {
  res.status(200).json(me);
}

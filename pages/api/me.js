const me = {
  sitename: "ParkerDev",
  avatar: "",
  description: "<p>Bla-Bla</p>"
};

export default function handler(req, res) {
  res.status(200).json(me);
}
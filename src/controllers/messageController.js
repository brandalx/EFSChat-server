const messageController = {
  async getMessage(req, res) {
    try {
      res.json("router works");
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  },
};

export default messageController;

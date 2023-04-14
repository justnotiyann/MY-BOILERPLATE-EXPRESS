exports.notFoundMiddleware = (req, res, next) => {
  res.status(404).json({ code: 404, data: ["ROUTES DOESNT EXIST"] });
};

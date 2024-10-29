export const validateSchema = (schema) => async (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    if (Array.isArray(error.errors)) {
      return res
        .status(400)
        .json({ message: error.errors.map((err) => err.message) });
    }
    res.status(400).json({ message: error.errors });
  }
};

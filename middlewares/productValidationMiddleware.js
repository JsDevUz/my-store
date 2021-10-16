const errors = [];

function checkProduct(req, res, next) {
  const { name, description, price } = req.body;
  if (!name) errors.push("name is required");
  if (!description) errors.push("description is required");
  if (!price) errors.push("price is required");
  if (errors.length > 0) res.status(400).send(errors);
  next(); 
} 

module.exports = { checkProduct };

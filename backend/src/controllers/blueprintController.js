const Blueprint = require("../models/Blueprint");

exports.createBlueprint = async (req, res) => {
  try {
    const blueprint = await Blueprint.create(req.body);
    res.status(201).json(blueprint);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getBlueprints = async (req, res) => {
  const blueprints = await Blueprint.find();
  res.json(blueprints);
};

exports.getBlueprintById = async (req, res) => {
  const blueprint = await Blueprint.findById(req.params.id);
  if (!blueprint) {
    return res.status(404).json({ error: "Blueprint not found" });
  }
  res.json(blueprint);
};

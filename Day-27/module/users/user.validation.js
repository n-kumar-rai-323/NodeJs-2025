const Joi = require("joi");

// Define user schema
const userSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com"] }, // Limit to `.com` domain TLD
    })
    .required(),
  password: Joi.string().optional(), // Optional password field
});

// Validation middleware
const validate = async (req, res, next) => {
  try {
    // Perform async validation on request body
    await userSchema.validateAsync(req.body);
    next(); // Proceed if validation succeeds
  } catch (e) {
    // Send a structured error response if validation fails
    const { details } = e;
    const errorMessage = details[0]?.message;
    res.status(400).json({ error: errorMessage });
  }
};

module.exports = { validate };

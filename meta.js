module.exports = {
  prompts: {
    name: {
      type: "string",
      required: true,
      message: "Project name"
    },
    description: {
      type: "string",
      required: false,
      message: "Project description",
      default: "A typescript package"
    },
    author: {
      type: "string",
      message: "Author"
    },
    version: {
      type: "string",
      required: false,
      message: "Project version",
      default: "0.1.0"
    }
  },

  completeMessage: "download success"
};

function status(request, response) {
  response
    .status(200)
    .json({ message: "Muito massa esse curso.dev, do balaco baco" });
}

export default status;

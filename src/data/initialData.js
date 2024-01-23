const initialData = [
  {
    id: crypto.randomUUID().toString(),
    title: "Integration API",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    tags: ["Tag1", "Tag2", "Tag3"],
    priority: "High",
    isFavorite: true,
  },
  {
    id: crypto.randomUUID().toString(),
    title: "User Authentication",
    description:
      "Implement user authentication and authorization functionality for a web application.",
    tags: ["Authentication", "Security", "Web Development"],
    priority: "Medium",
    isFavorite: false,
  },
];
export { initialData };

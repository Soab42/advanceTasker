export function checkFormField(formData) {
  const formInput = ["title", "description", "tags", "priority"];
  const missingFields = [];

  for (const field of formInput) {
    const fieldValue = formData[field];

    // Check if the field is missing or an array not filled with non-empty strings

    if (
      !fieldValue ||
      (Array.isArray(fieldValue) &&
        fieldValue.every((item) => item.trim() === ""))
    ) {
      missingFields.push(field);
    }
  }

  return missingFields.length === 0 ? true : missingFields;
}

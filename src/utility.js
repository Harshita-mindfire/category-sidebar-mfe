export function sortCategories(categories) {
  // Sort the categories alphabetically, with "Top Stories" as the first value
  return categories.sort((a, b) => {
    if (a === "Top Stories") {
      return -1; // a comes before b
    } else if (b === "Top Stories") {
      return 1; // b comes before a
    } else {
      return a.localeCompare(b); // Sort alphabetically
    }
  });
}

const LANGUAGES = ["JavaScript", "C++", "Ruby", "Java", "PHP", "Go"];

export function getLanguages() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(LANGUAGES);
    }, 1000);
  });
}

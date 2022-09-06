export const isDarkStorage = () => {
    const saveMode = JSON.parse(localStorage.getItem("dark") || "{}");
    return saveMode === true || saveMode === false
      ? saveMode
      : window.matchMedia
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false;
  };
  
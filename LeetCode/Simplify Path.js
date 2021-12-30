var simplifyPath = function (path) {
  let stack = [];

  paths = path.split("/").filter((path) => path !== "");

  for (const element of paths) {
    if (element === "..") {
      stack.pop();
    } else if (element === ".") {
      continue;
    } else {
      stack.push(element);
    }
  }

  return "/" + stack.join("/");
};

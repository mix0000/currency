export const createLink = (url: string, id?: string) => {
  const link = document.createElement("link");
  link.setAttribute("href", url);
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  id && link.setAttribute("id", id);
  return link;
};

export const appendElement = (element: HTMLElement, parent: HTMLElement) => {
  if (parent) {
    parent.append(element);
  }
};

export const removeElement = (selector: string, usageParent?: HTMLElement) => {
  const elements = Array.from(document.querySelectorAll(selector));

  for (const element of elements) {
    const parent = usageParent || element.parentNode;
    if (parent) {
      parent.removeChild(element);
    }
  }
};

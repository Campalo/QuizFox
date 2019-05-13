const htmlDecode = strHTML => {
  const element = document.createElement("div");
  element.innerHTML = strHTML;

  return element.innerText;
};

export default htmlDecode;

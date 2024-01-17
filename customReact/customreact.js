//customRender Function ki definition

function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type); //yha element create ho gya hai

  //ab element k andr kuch inject krva dete hai

  domElement.innerHTML = reactElement.children;

  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);

  container.appendChild(domElement);
}

///ye toh humara elment define kia h jaise ex: <p> hota h vese <reactElement> h pe bnega upr function me
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com/",
    target: "_blank",
  },
  children: "click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer); //function ka call kia a with para

import { products } from "../core/data";
import {
  cartItemGroup,
  openDrawer,
  productGroup,
  productTemplate,
} from "../core/selectors";
import {
  countCartItem,
  crateCartItem,
  updateCartItemCount,
  updateCartTotal,
} from "./cart";

export const renderStar = (rate) => {
  let stars = "";

  for (let i = 1; i <= 5; i++) {
    stars += `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="w-4 h-4 ${i <= Math.round(rate) ? "fill-gray-700" : "fill-gray-400"}"
  >
    <path
      fill-rule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
      clip-rule="evenodd"
    />
  </svg>`;
  }
  return stars;
};

export const createProduct = (product) => {
  const template = productTemplate.content.cloneNode(true);
  template
    .querySelector(".product-card")
    .setAttribute("product-id", product.id);
  template.querySelector(".product-img").src = product.image;
  template.querySelector(".product-title").innerText = product.title;
  template.querySelector(".product-description").innerText =
    product.description;
  template.querySelector(".product-price").innerText = product.price;
  template.querySelector(
    ".product-rating"
  ).innerText = `( ${product.rating.rate} / ${product.rating.count} )`;

  template.querySelector(".product-star").innerHTML = renderStar(
    product.rating.rate
  );

  const isExitedInCart = cartItemGroup.querySelector(
    `[cart-product-id='${product.id}']`
  );
  if (isExitedInCart) {
    template
      .querySelector(".product-add-cart-btn")
      .setAttribute("disabled", true);
    template.querySelector(".product-add-cart-btn").innerText = "Added";
  }

  return template;
};

export const renderProduct = (products) => {
  productGroup.innerHTML = null;
  products.forEach((product) => productGroup.append(createProduct(product)));
};

export const handleProductGroup = (event) => {
  if (event.target.classList.contains("product-add-cart-btn")) {
    const currentBtn = event.target;
    currentBtn.setAttribute("disabled", true);
    currentBtn.innerText = "Added";

    const currentProductCard = event.target.closest(".product-card");
    const currentProductCardId = parseInt(
      currentProductCard.getAttribute("product-id")
    );
    const currentProduct = products.find(
      (product) => product.id === currentProductCardId
    );

    const currentProductCardImg =
      currentProductCard.querySelector(".product-img");

    // console.log(currentProductCardImg);
    // console.log(openDrawer.getBoundingClientRect());

    const animateImg = new Image();
    animateImg.src = currentProductCardImg.src;
    animateImg.style.position = "fixed";
    animateImg.style.top =
      currentProductCardImg.getBoundingClientRect().top + "px";
    animateImg.style.left =
      currentProductCardImg.getBoundingClientRect().left + "px";
    animateImg.style.width =
      currentProductCardImg.getBoundingClientRect().width + "px";
    animateImg.style.height =
      currentProductCardImg.getBoundingClientRect().height + "px";
    // animateImg.style.border = "5px solid black";
    document.body.append(animateImg);

    // console.log(animateImg.getBoundingClientRect());

    const keyframes = [
      {
        top: currentProductCardImg.getBoundingClientRect().top + "px",
        left: currentProductCardImg.getBoundingClientRect().left + "px",
      },
      {
        top: openDrawer.querySelector("svg").getBoundingClientRect().top + "px",
        left:
          openDrawer.querySelector("svg").getBoundingClientRect().left + "px",
        height: "0px",
        width: "0px",
        transform: "rotate(2turn)",
      },
    ];
    const duration = 500;

    const addToCartAnimation = animateImg.animate(keyframes, duration);

    const handleAnimationFinish = () => {
      animateImg.remove();
      openDrawer.classList.add("animate__tada");
      openDrawer.addEventListener("animationend", () => {
        openDrawer.classList.remove("animate__tada");
      });

      cartItemGroup.append(crateCartItem(currentProduct, 1));

      updateCartItemCount();
      updateCartTotal();
    };

    addToCartAnimation.addEventListener("finish", handleAnimationFinish);

    // countCartItem();
    // console.log(currentProduct);
  }
};

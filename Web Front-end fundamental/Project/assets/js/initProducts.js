const products = [
    {
        id: 1,
        name: "Laptop Asus ExpertBook 1",
        Image: "https://product.hstatic.net/200000680123/product/71394_expertbook_b1400cba_14_89949330564f4c5e85b5ce235a8bc98b_master.png",
    },

    {
        id: 2,
        name: "Laptop Asus ExpertBook 2",
        Image: "https://product.hstatic.net/200000680123/product/71394_expertbook_b1400cba_14_89949330564f4c5e85b5ce235a8bc98b_master.png",
    },

    {
        id: 3,
        name: "Laptop Asus ExpertBook 3",
        Image: "https://product.hstatic.net/200000680123/product/71394_expertbook_b1400cba_14_89949330564f4c5e85b5ce235a8bc98b_master.png",
    },

    {
        id: 4,
        name: "Laptop Asus ExpertBook 4",
        Image: "https://product.hstatic.net/200000680123/product/71394_expertbook_b1400cba_14_89949330564f4c5e85b5ce235a8bc98b_master.png",
    },

    {
        id: 5,
        name: "Laptop Asus ExpertBook 5",
        Image: "https://product.hstatic.net/200000680123/product/71394_expertbook_b1400cba_14_89949330564f4c5e85b5ce235a8bc98b_master.png",
    },

    {
        id: 6,
        name: "Laptop Asus ExpertBook 6",
        Image: "https://product.hstatic.net/200000680123/product/71394_expertbook_b1400cba_14_89949330564f4c5e85b5ce235a8bc98b_master.png",
    }
]

const getProducts = () => {
    return JSON.parse(localStorage.getItem("products")) ?? [];
  };
  

const initData = () => {
    const productsCheck = getProducts();
    if (productsCheck.length == 0) {
      localStorage.setItem("products", JSON.stringify(products));
    }
};
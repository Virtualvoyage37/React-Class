import React, { useEffect, useState } from "react";

const Cart = ({ cartData, setShowCart, RemoveItems }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const [qut, setQut] = useState({
    qty: 1,
  });

  // console.log("totalPrice", totalPrice);

  useEffect(() => {
    const total = cartData.map((data) => data?.price);

    //    const sum =
    //    console.log("sum",sum);

    // let sum = 0;
    // total.forEach(myFunction);

    // function myFunction(item) {
    //   sum += item;
    // }
    // setTotalPrice(sum);

    const totaldata = total.reduce((priv, curnt) => (priv += curnt));
    // total.reduce((priv, curnt) => {
    //   console.log("priv..", priv);
    //   console.log("curnt..", curnt);
    //   return <>hello</>;
    // });

    setTotalPrice(totaldata);

    // console.log("totaldata...", totaldata);
  }, [cartData]);

  const AddQty = (productprice, qty) => {
    // const subtotal = cartData.map((data) => data?.price);

    setTotalPrice((priv) => priv + productprice);
    setQut(qut.qty + 1);
  };

  return (
    <div
      class="relative z-10"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div class="pointer-events-auto w-screen max-w-md">
              <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div class="flex items-start justify-between">
                    <h2
                      class="text-lg font-medium text-gray-900"
                      id="slide-over-title"
                    >
                      Shopping cart
                    </h2>
                    <div class="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        class="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        onClick={() => setShowCart(false)}
                      >
                        <span class="absolute -inset-0.5"></span>
                        <span class="sr-only">Close panel</span>
                        <svg
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div class="mt-8">
                    <div class="flow-root">
                      <ul role="list" class="-my-6 divide-y divide-gray-200">
                        {cartData.map((productdata) => (
                          <>
                            <li class="flex py-6" key={productdata?.id}>
                              <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  src={productdata?.image}
                                  alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                  class="h-full w-full object-cover object-center"
                                />
                              </div>

                              <div class="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div class="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href="#">{productdata?.title}</a>
                                    </h3>
                                    <p class="ml-4">${productdata?.price}</p>
                                  </div>
                                  <p class="mt-1 text-sm text-gray-500">
                                    {productdata?.category}
                                  </p>
                                </div>
                                <div class="flex flex-1 items-end justify-between text-sm">
                                  <div className="flex justify-center items-center gap-2">
                                    <button className="text-2xl">-</button>
                                    <p class="text-gray-500">Qty {qut?.qty}</p>
                                    <button
                                      className="text-2xl"
                                      onClick={() =>
                                        AddQty(productdata?.price, qut.qty)
                                      }
                                    >
                                      +
                                    </button>
                                  </div>

                                  <div class="flex">
                                    <button
                                      type="button"
                                      class="font-medium text-indigo-600 hover:text-indigo-500"
                                      onClick={() =>
                                        RemoveItems(productdata?.id)
                                      }
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div class="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${totalPrice}</p>
                  </div>
                  <p class="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div class="mt-6">
                    <a
                      href="#"
                      class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                      Checkout
                    </a>
                  </div>
                  <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or
                      <button
                        type="button"
                        class="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

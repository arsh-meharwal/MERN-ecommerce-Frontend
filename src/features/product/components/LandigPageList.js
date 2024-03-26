import React, { useState, useEffect, useRef } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { discountedPrice } from "../../../app/constants";
import { fetchProductsByFilters } from "../productAPI";

export default function LandingPageList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const initialDataFetchedRef = useRef(false);
  const debounce = (func, delay) => {
    let timeoutId;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetchProductsByFilters();
      console.log(response);
      const newProducts = response.data.products;
      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = debounce(() => {
    // Check if the user has scrolled to the bottom of the page
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight - 200
    ) {
      fetchData();
    }
  }, 500);

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    // Fetch data only once on initial render
    if (!initialDataFetchedRef.current) {
      fetchData();
      initialDataFetchedRef.current = true;
    }
  }, []);

  return (
    // need to set Loader
    <div className="bg-slate-700 rounded-3xl">
      <div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-8 ">
            <h1 className="text-4xl font-bold tracking-tight text-white">
              Our Products
            </h1>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 ">
              {/* Product grid */}
              <div className="">
                <ProductGrid products={products}></ProductGrid>
              </div>
              {/* Product grid end */}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function ProductGrid({ products }) {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <Link to={`/product-detail/${product.id}`} key={product.id}>
              <div className="group relative border-solid border p-2 border-gray-200 rounded-xl">
                <div className="min-h-60 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-md text-white">
                      <div href={product.thumbnail}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </div>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      <StarIcon className="w-6 h-6 inline"></StarIcon>
                      <span className=" align-bottom">{product.rating}</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm block font-medium text-gray-900">
                      ${discountedPrice(product)}
                    </p>
                    <p className="text-sm block line-through font-medium text-gray-400">
                      ${product.price}
                    </p>
                  </div>
                </div>
                {product.deleted && (
                  <div>
                    <p className="text-sm text-red-400">product deleted</p>
                  </div>
                )}
                {product.stock <= 0 && (
                  <div>
                    <p className="text-sm text-red-400">out of stock</p>
                  </div>
                )}
                {/* TODO: will not be needed when backend is implemented */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

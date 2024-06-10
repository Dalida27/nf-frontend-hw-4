'use client'

const Home = () => {

  return (
    <div>
      <div className="w-4/5 m-auto">
        <p className="text-center mt-10 text-4xl font-semibold">Welcome to N!OLX service!</p>
        <div
            id="carouselExampleCaptions"
            className="relative mt-10"
            data-twe-carousel-init
            data-twe-ride="carousel">
            <div
                className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                <div
                className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-twe-carousel-active
                data-twe-carousel-item>
                <img
                    src="https://www.apparelsearch.com/influence/products/images/fashion_products.jpg"
                    className="block w-1/2 m-auto"
                    alt="..." />
                <div
                    className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                    <h5 className="text-xl">First slide label</h5>
                </div>
                </div>
                <div
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-twe-carousel-item>
                </div>
            </div>
        </div>
        <div className="m-auto w-1/6 mt-16">
         <a href="/products" className="text-center border px-5 py-4 bg-[#e14242] text-[#fff] font-semibold rounded-lg">Go to Products</a>
        </div>
        <p className="text-lg mt-10 w-10/12 m-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="text-xl mt-10 w-10/12 m-auto">You can create your own products: <a href="/products" className="text-[#e14242]">To Create</a></p>
      </div>
    </div>
  );  
};

export default Home;


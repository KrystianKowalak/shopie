import { useGlobalState } from "../utils/GlobalState";

const Marquee = () => {
    const [state, dispatch] = useGlobalState();
    const products = state.products;
    if (!products.length) {
        return <h3>Loading....</h3>;
    }

    return (
        <article
            className="w-full inline-flex flex-nowrap overflow-hidden"
            x-data="{}"
            x-init="$nextTick(() => {
            let ul = $refs.logos;
        })">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {products.map((product) => (
                    <li
                        className="marqueeItem"
                        key={product._id}>
                        <section>
                            <div className="border-1 rounded-xl shadow-gray-400 shadow-xl flex-col w-40 group cursor-pointer relative hover:scale-110 ease-in duration-300">
                                <div>
                                    <img
                                        className="rounded-xl group-hover:opacity-10"
                                        src={product.imagePath}
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                    />
                                </div>
                                <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%]">
                                    <p className="text-xs pb-4 pt-2 text-black text-center">
                                        {product.productDescription}
                                    </p>
                                </div>
                            </div>
                        </section>
                    </li>
                ))}
            </ul>

            <ul
                className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                aria-hidden="true">
                {products.map((product) => (
                    <li
                        className="marqueeItem"
                        key={product._id}>
                        <section>
                            <div className="border-1 rounded-xl shadow-gray-400 shadow-xl flex-col w-40 group cursor-pointer relative hover:scale-110 ease-in duration-300">
                                <div>
                                    <img
                                        className="rounded-xl group-hover:opacity-10"
                                        src={product.imagePath}
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                    />
                                </div>
                                <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%]">
                                    <p className="text-xs pb-4 pt-2 text-black text-center">
                                        {product.productDescription}
                                    </p>
                                </div>
                            </div>
                        </section>
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default Marquee;

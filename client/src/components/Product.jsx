import { useGlobalState } from "../utils/GlobalState";
import Auth from "../utils/auth";
import { useState } from 'react'
import { Link } from "react-router-dom";
import { Modal } from "flowbite-react";
import { XMarkIcon} from '@heroicons/react/24/outline'
const Product = (product) => {
    const [state, dispatch] = useGlobalState();

    const [openModal, setOpenModal] = useState(false);

    const {
        _id,
        imagePath,
        productName,
        categoryName,
        productPrice,
    } = product;

    return (
        <div>
             <productModal product={product}/>
            {state.products.length != 0 ? (
                <div className="border-1 rounded-lg shadow-gray-400 shadow-xl flex-col cursor-pointer m-10 hover:scale-110 ease-in duration-300">
                    <img className="rounded-t-lg" src={imagePath} />
                    <ul >
                        <li >
                            {productName}
                        </li>
                    </ul>
                    <ul className="flex justify-between m-2 p-2">
                        <li>
                            $ {productPrice}
                        </li>
                        <button onClick={() => setOpenModal(true) } className="">
                            Show Product

                        </button>
                        {Auth.loggedIn() ? (
                            <>
                                <button type="button" className="text-white #D1D5DB hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="contentfill" viewBox="0 0 18 21">
                                        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                    </svg>
                                </button>
                            </>
                        ) : (
                            <p>Login to shop</p>

                        )}
                    </ul>
                </div>
            ) : (
                <div>Loading...</div >
            )
            }

<Link as={Link} to="#" onClick={() => setOpenModal(true)}>
</Link>
<Modal show={openModal} onClose={() => setOpenModal(false)}>
    <Modal.Body>
        <div className='inset-0'>

            <div className="flex items-start justify-between">
                <img
                    src={imagePath}
                    className="h-full w-full object-cover object-center" />
                <div className="ml-3 flex h-7 items-center">
                    <button
                        type="button"
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        onClick={() => setOpenModal(false)}>
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </div>
            <div className="mt-8">
                <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {/* {products.map((product) => ( */}
                        <li key={product.id} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            </div>
                            <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                            <a>
                                                {productName}</a>
                                        </h3>
                                        <p className="ml-4">{productPrice}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className="flex">
                                        {/* <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            Remove
                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                        <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpenModal(false)}
                        >
                            Add to Cart
                            <span aria-hidden="true"> &rarr;</span>
                        </button>
                    </p>
                </div>
            </div>
        </div>
    </Modal.Body>
</Modal>

        </div>



    )
}

export default Product
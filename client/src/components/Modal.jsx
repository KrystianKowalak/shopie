//when the user clicks on a product, a modal pops up to display the product in a bigger window 
import { useState } from 'react'
//or is it supposed to be Global state?
// import Auth from "../utils/auth";
import {  Modal } from 'flowbite-react';

    const {
        _id,
        imagePath,
        productName,
        categoryName,
        productPrice,
    } = product;


export default function itemModal() {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
        {/* {state.products.length != 0 ? ( */}
        <Link as={Link} to="#" onClick={() => setOpenModal(true)}>
        </Link>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Body>
            <div className='inset-0'>

                <div className="flex items-start justify-between">
                    <h4 className="text-lg font-medium text-gray-900">Shopping cart</h4>
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
                            {products.map((product) => (
                            <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                    src={imagePath}
                                    className="h-full w-full object-cover object-center" />
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
                            ))}
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
        </>
        
    );
}
//how to add the product to the cart? are we doing that when the modal pops up?



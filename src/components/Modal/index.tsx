import { ReactNode } from "react";

interface IModal {
    title?: string;
    onClose: () => void;
    children: ReactNode
};

export const Modal = ({ title, onClose, children }: IModal) => {
    return (
        <div id="default-modal" aria-hidden="true" className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full">
            <div className="fixed w-full h-full bg-black opacity-50"></div>
            <div className="relative ml-auto mr-auto p-4 w-full max-w-2xl max-h-full">
                <div className="w-fit ml-auto mr-auto relative bg-[#1D1E22] rounded-lg shadow-sm dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600 border-gray-200">
                        {title &&
                            <h3 className="text-xl font-semibold">
                                {title}
                            </h3>}
                        <button onClick={onClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}
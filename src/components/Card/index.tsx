import { useState } from "react";
import Image from "next/image";
import { Modal } from "../../components";
import { IItem } from "../../types";


export const Card = ({ item }: { item: IItem }) => {

    const [openEdit, setOpenEdit] = useState(false);
    return (
        <>
            <div className="relative max-w-sm h-[190px] overflow-hidden border border-[#26272C] rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <Image
                    src={item.thumbnail}
                    width={1000}
                    height={1000}
                    alt="game"
                    style={{ width: "100%", height: "100%" }}
                />
                <div className="absolute py-8 bg-[black]/80 opacity-0 hover:opacity-100 transition-opacity duration-70 ease-in-out bottom-0 w-full h-full">
                    <h3 className="text-center mb-2 text-xl font-black">{item.fullName}</h3>
                    <p className="text-center font-bold">{item.providerName}</p>
                    <button onClick={() => setOpenEdit(true)} className="absolute bottom-3 mx-auto left-0 right-0 inline-flex w-[80px] h-[40px] mx-auto items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#FFC700] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Play Now
                    </button>
                </div>
            </div>
            {openEdit &&
                <Modal title={item.fullName} onClose={() => setOpenEdit(false)}>
                    <div className="w-[640px] p-4 md:p-5">
                        <div className="flex">
                            <div className="w-[200px] h-[265px]">
                                <Image
                                    src={item.thumbnail}
                                    width={200}
                                    height={265}
                                    alt="game"
                                    style={{ border: "1px solid #26272C", borderRadius: "16px" }}
                                />
                            </div>
                            <div className="ml-10 w-[350px]">
                                <div className="flex mb-2">
                                    {item?.tags.slice(0, 3).map((tag: string, index: number) =>
                                        <div key={index} className="w-[90px] h-[35px] truncate p-2 rounded mx-2 bg-[#303238]">{tag}</div>
                                    )}
                                </div>
                                <h2 className="font-black text-xl">Description:</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec metus orci, euismod ac aliquet eget, dictum sit amet ipsum. Donec suscipit ut lectus semper blandit. Aenean pellentesque ex dignissim mollis blandit. Duis gravida turpis sit amet quam laoreet varius. Vestibulum et porttitor velit</p>
                                <button onClick={() => setOpenEdit(false)} className="absolute bottom-6 mx-auto left-0 right-0 inline-flex w-[120px] h-[40px] mx-auto items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#FFC700] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Play Now
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
            }
        </>
    )
}
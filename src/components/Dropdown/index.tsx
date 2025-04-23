import { SetStateAction, useState } from "react";

export const Dropdown = ({ title, options, onClick }: { title: string; options: string[]; onClick: (value: SetStateAction<string>) => void }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative ml-4 inline-block text-left">
            <div>
                <button onClick={() => setOpen(!open)} type="button" className="inline-flex w-full bg-[black] justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-xs ring-1 ring-gray-300 ring-inset" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    {title}
                    <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            {open &&
                <div className="absolute right-0 z-10 bg-[#303238] mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                    <div className="py-1" role="none">
                        {options.map((option: string, index: number) =>
                            <span
                                key={index}
                                onClick={() => {
                                    onClick(option);
                                    setOpen(false);
                                }} className="block cursor-pointer px-4 py-2 text-sm" id="menu-item-0">{option}</span>)}
                    </div>
                </div>}
        </div>
    )
};

import { TextInputProps } from "@custom-types/input"

const TextInput = ({ id, type, placeholder, label, name, value, labelClassName, className, handleTextChange, ...props }: TextInputProps) => {
    return (
        <div className="">
            <label htmlFor={id} className={` text-base leading-[22px] uppercase ${labelClassName}`}>{label}</label>
            <input
                {...{ name, type, id, placeholder, value, ...props }}
                onChange={handleTextChange}
                className={`block py-[14px] px-3 placeholder:text-[#9696B4] text-black bg-[#FCFDFD] mt-2 rounded-[5px] border border-[#E8E8EF] focus:outline-none w-full ${className}`}
            />
        </div>
    )
}

export default TextInput;
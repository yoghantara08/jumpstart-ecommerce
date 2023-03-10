import { Listbox } from "@headlessui/react";
import React, { Dispatch, SetStateAction } from "react";
import { FiChevronDown } from "react-icons/fi";

interface Props {
  datas: number[] | string[];
  value: number | string;
  setValue: Dispatch<SetStateAction<any>>;
}

const SelectDate: React.FC<Props> = ({ datas, setValue, value }) => {
  return (
    <Listbox value={value} onChange={setValue}>
      <div className="relative w-full z-10 text-gray-700">
        <Listbox.Button className="px-5 py-2 w-full relative rounded border border-gray-300 bg-gray-50 flex items-center justify-between space-x-2">
          <span>{value}</span>
          <FiChevronDown className="h-5 w-5" />
        </Listbox.Button>
        <Listbox.Options className="absolute mt-1 max-h-60 overflow-auto rounded shadow bg-gray-50 py-1 w-full">
          {datas.map((data) => (
            <Listbox.Option
              key={data}
              value={data}
              className="cursor-pointer hover:bg-gray-200 py-2 px-5"
            >
              {data}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export default SelectDate;

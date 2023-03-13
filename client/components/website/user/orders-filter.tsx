import React, { SetStateAction } from "react";

interface Props {
  filterItems: { name: string; filter: string }[];
  filter: string;
  setFilter: React.Dispatch<SetStateAction<string>>;
}

const OrdersFilter: React.FC<Props> = ({ filter, setFilter, filterItems }) => {
  return (
    <div className="flex gap-3 flex-wrap my-3">
      {filterItems.map((item) => (
        <button
          key={item.name}
          className={`${
            filter === item.filter
              ? "button-primary-outlined"
              : "button-secondary-outlined"
          } py-2`}
          onClick={() => setFilter(item.filter)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default OrdersFilter;

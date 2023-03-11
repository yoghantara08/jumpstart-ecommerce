import React, { SetStateAction } from "react";

interface Props {
  filter: string;
  setFilter: React.Dispatch<SetStateAction<string>>;
}

const OrdersFilter: React.FC<Props> = ({ filter, setFilter }) => {
  return (
    <div className="flex gap-3 flex-wrap my-3">
      <button
        className={`${
          filter === "ALL"
            ? "button-primary-outlined"
            : "button-secondary-outlined"
        } py-2`}
        onClick={() => setFilter("ALL")}
      >
        All Orders
      </button>
      <button
        className={`${
          filter === "PROCESSED"
            ? "button-primary-outlined"
            : "button-secondary-outlined"
        } py-2`}
        onClick={() => setFilter("PROCESSED")}
      >
        Processed
      </button>
      <button
        className={`${
          filter === "COMPLETED"
            ? "button-primary-outlined"
            : "button-secondary-outlined"
        } py-2`}
        onClick={() => setFilter("COMPLETED")}
      >
        Completed
      </button>
      <button
        className={`${
          filter === "CANCELLED"
            ? "button-primary-outlined"
            : "button-secondary-outlined"
        } py-2`}
        onClick={() => setFilter("CANCELLED")}
      >
        Cancelled
      </button>
    </div>
  );
};

export default OrdersFilter;

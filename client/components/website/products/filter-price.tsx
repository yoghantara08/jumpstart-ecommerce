import { useRouter } from "next/router";
import { useState } from "react";

const FilterPrice = () => {
  const router = useRouter();
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);

  // min price handler
  const minPriceHandler = () => {
    router.replace({
      query: { ...router.query, min: minPrice },
    });
  };

  // max price handler
  const maxPriceHandler = () => {
    router.replace({
      query: { ...router.query, max: maxPrice },
    });
  };

  // Handle key press so user can only press number
  const handleKeyPress = (event: any) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    const regex = /^[0-9]*$/;

    const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight"];
    if (!regex.test(keyValue) && !allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <>
      <div className="mt-3">
        <input
          className="form-input p-3"
          placeholder="Min price $"
          onChange={(e) => {
            const value = parseFloat(e.target.value);
            if (!isNaN(value)) {
              setMinPrice(value);
            } else {
              setMinPrice(undefined);
            }
          }}
          onBlur={minPriceHandler}
          onKeyDown={handleKeyPress}
        />
      </div>
      <div className="mt-3">
        <input
          className="form-input p-3"
          placeholder="Max price $"
          onChange={(e) => {
            const value = parseFloat(e.target.value);
            if (!isNaN(value)) {
              setMaxPrice(value);
            } else {
              setMaxPrice(undefined);
            }
          }}
          onBlur={maxPriceHandler}
          onKeyDown={handleKeyPress}
        />
      </div>
    </>
  );
};

export default FilterPrice;

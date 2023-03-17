import Input from "@/components/website/form/input";
import TextArea from "@/components/website/form/text-area";
import AuthContext from "@/contexts/auth-context";
import { addCategoryAPI } from "@/lib/products-api";
import { ICategory } from "@/types/products-type";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const InventoryAddCategory = () => {
  const router = useRouter();
  const { token } = useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ICategory>({ criteriaMode: "all" });

  const submitHandler = (data: ICategory) => {
    addCategoryAPI(token, data)
      .then((res) => {
        console.log(res);
        router.push("/admin/inventory");
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-light rounded-lg shadow px-5 py-4 max-w-3xl">
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="mb-3">
          <Input
            label="Category Name"
            name="name"
            placeholder="Category name"
            register={register}
            errors={errors}
            className="px-5 py-3"
            validation={{ required: "Category name is required!" }}
          />
        </div>
        <div className="mb-3">
          <TextArea
            label="Description"
            name="description"
            placeholder="Category description"
            register={register}
            errors={errors}
            className="px-5 py-3"
            validation={{ required: "Category description is required!" }}
          />
        </div>

        <button
          type="submit"
          className="px-5 py-3 rounded bg-lightBlue text-light"
        >
          Add Category
        </button>
      </form>
    </div>
  );
};

export default InventoryAddCategory;

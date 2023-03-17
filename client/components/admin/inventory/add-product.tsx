import React, { useState, useEffect, useContext } from "react";
import Input from "@/components/website/form/input";
import Select from "@/components/website/form/select";
import TextArea from "@/components/website/form/text-area";
import { IProduct } from "@/types/products-type";
import { noSpacePattern, numberPattern } from "@/utils/validation-pattern";
import { Controller, useForm } from "react-hook-form";
import { addProductAPI, getCategoriesAPI } from "@/lib/products-api";
import AuthContext from "@/contexts/auth-context";
import { useRouter } from "next/router";

const conditionOptions = ["New", "Second Hand/Used"];

const InventoryAddProduct = () => {
  const [categoryOptions, setcategoryOptions] = useState<string[]>([]);
  const { token } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    getCategoriesAPI().then((res) => {
      const categories: string[] = [];
      res.data.map((category: any) => {
        categories.push(category.name);
      });
      setcategoryOptions(categories);
    });
  }, [token]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setError,
  } = useForm<IProduct>({ criteriaMode: "all" });

  const submitHandler = (data: IProduct) => {
    const file = data.image[0];

    const formData = new FormData();

    Object.entries(data).map(([key, value]) => {
      formData.append(key, value);
    });

    formData.set("image", data.image[0]);

    // Check file image type
    if (
      file.type !== "image/jpg" &&
      file.type !== "image/jpeg" &&
      file.type !== "image/png"
    ) {
      setError(
        "image",
        {
          types: {
            message: "Only jpg/jpeg/png are valid.",
          },
        },
        { shouldFocus: true }
      );
      return;
    }

    addProductAPI(token, formData)
      .then((res) => {
        console.log(res);
        router.push("/admin/inventory");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-light rounded-lg shadow px-5 py-4">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="grid md:grid-cols-2 md:gap-5"
      >
        {/* First Col */}
        <div className="first-col">
          <div className="mb-3">
            <Input
              label="Product Name"
              name="name"
              placeholder="Product name"
              register={register}
              errors={errors}
              validation={{ required: "Product name is required!" }}
              className="px-5 py-2"
            />
          </div>
          <div className="mb-3">
            <Input
              label="Product Slug"
              name="slug"
              placeholder="e.g headset-pro-5.0-audio-7.0"
              register={register}
              errors={errors}
              validation={{
                required: "Product slug is required!",
                pattern: noSpacePattern,
              }}
              className="px-5 py-2"
            />
          </div>
          <div className="mb-3">
            <Input
              label="Price"
              name="price"
              placeholder="Price in US$"
              register={register}
              errors={errors}
              validation={{
                required: "Price is required!",
                pattern: numberPattern,
              }}
              className="px-5 py-2"
            />
          </div>
          <div className="mb-3">
            <Input
              label="Image"
              name="image"
              type="file"
              register={register}
              errors={errors}
              validation={{
                required: "Image is required!",
              }}
              className="px-5 py-2"
            />
          </div>
          <div className="mb-3">
            <TextArea
              label="Description"
              name="description"
              errors={errors}
              register={register}
              validation={{
                required: "Description is required!",
              }}
              placeholder="Add product description"
              className="px-5 py-3 h-full "
            />
          </div>
        </div>

        {/* Second Col */}
        <div className="second-col">
          <div className="mb-3">
            <Controller
              name="condition"
              control={control}
              rules={{ required: "Condition is required" }}
              render={({ formState: { errors }, field }) => (
                <Select
                  name="condition"
                  errors={errors}
                  field={field}
                  options={conditionOptions}
                  label="Condition"
                  className="px-5 py-2"
                />
              )}
            />
          </div>
          <div className="mb-3">
            <Controller
              name="category"
              control={control}
              rules={{ required: "Category is required" }}
              render={({ formState: { errors }, field }) => (
                <Select
                  name="category"
                  errors={errors}
                  field={field}
                  options={categoryOptions}
                  label="Category"
                  className="px-5 py-2"
                />
              )}
            />
          </div>
          <div className="mb-3">
            <Input
              label="Stock"
              name="stock"
              placeholder="Count in stock"
              register={register}
              errors={errors}
              validation={{
                required: "Stock is required!",
                pattern: numberPattern,
              }}
              className="px-5 py-2"
            />
          </div>
          <div className="mb-3">
            <Input
              label="Product Weight"
              name="weight"
              placeholder="Weight in kg"
              register={register}
              errors={errors}
              validation={{
                required: "Product weight is required!",
                pattern: numberPattern,
              }}
              className="px-5 py-2"
            />
          </div>
        </div>
        <button type="submit" className="bg-lightBlue text-light py-3 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default InventoryAddProduct;

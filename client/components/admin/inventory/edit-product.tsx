import ErrorMessage from "@/components/website/auth/message-error";
import Input from "@/components/website/form/input";
import TextArea from "@/components/website/form/text-area";
import AuthContext from "@/contexts/auth-context";
import { editProductAPI, getProductDetailsAPI } from "@/lib/products-api";
import { IEditProduct } from "@/types/products-type";
import { decimalPattern, numberPattern } from "@/utils/validation-pattern";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const InventoryEditProduct = () => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { token } = useContext(AuthContext);
  const router = useRouter();
  const slug = router.query.slug as string;

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    setValue,
  } = useForm<IEditProduct>({
    criteriaMode: "all",
  });

  useEffect(() => {
    if (slug) {
      getProductDetailsAPI(slug)
        .then((res) => {
          setValue("name", res.data?.name);
          setValue("price", res.data?.price);
          setValue("description", res.data?.description);
          setValue("stock", res.data?.stock);
          setValue("weight", res.data?.weight);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [setValue, slug]);

  const submitHandler = (data: IEditProduct) => {
    const file = data.image[0];

    const formData = new FormData();

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

    Object.entries(data).map(([key, value]) => {
      formData.append(key, value);
    });

    formData.set("image", file);

    editProductAPI(token, formData, slug)
      .then((res) => {
        console.log(res);
        router.push("/admin/inventory");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.errors[0].msg);
        setIsError(true);
      });
  };

  return (
    <div className="bg-light rounded-lg shadow px-5 py-4">
      {isError && (
        <div className="mb-3">
          <ErrorMessage setClose={setIsError} message={errorMessage} />
        </div>
      )}
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
              label="Price"
              name="price"
              placeholder="Price in US$"
              register={register}
              errors={errors}
              validation={{
                required: "Price is required!",
                pattern: decimalPattern,
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
                pattern: decimalPattern,
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

export default InventoryEditProduct;

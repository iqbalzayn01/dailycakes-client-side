import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getData } from "../../utils/fetch";
import { setProducts } from "../../redux/productsSlice";
import { refreshAccessToken } from "../../redux/authSlice";
import { setImages } from "../../redux/imagesSlice";
import { config } from "../../config";
import CButton from "../../components/CButton";

export const RenderProductItems = () => {
  const products = useSelector((state) => state.products.products);
  const images = useSelector((state) => state.images.images);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, imagesRes] = await Promise.all([
          getData("/cms/products"),
          getData("/cms/images"),
        ]);

        dispatch(setProducts(productsRes.data.data));
        dispatch(setImages(imagesRes.data.data));
      } catch (err) {
        if (err.response && err.response.status === 401) {
          dispatch(refreshAccessToken());
        } else {
          console.error("Error fetching data:", err);
        }
      }
    };

    fetchData();
  }, [dispatch]);

  const formatPrice = (price) => {
    const priceString = price.toString();
    const decimalPart = priceString.slice(-3);
    const thousandPart = priceString.slice(0, -3);
    return `${thousandPart}.${decimalPart}`;
  };

  const handleAddToCart = () => {
    console.log("TEST CART");
    navigate("/cart");
  };

  return products.map((product) => {
    const productImage = images.find((image) => image._id === product.image);

    return (
      <li key={product._id} className="grid grid-cols-2 gap-5">
        <img
          src={
            productImage
              ? `${config.api_url}/cms/images/${productImage.name}`
              : "/path/to/default/image.jpg"
          }
          alt={product.productName}
          className="object-cover w-[250px] h-[250px] rounded-xl"
        />
        <div className="flex flex-col gap-2">
          <h2 className="font-style-primary font-semibold text-2xl">
            {product.productName}
          </h2>
          <p className="font-fontSecondary">{product.description}</p>
          <span className="font-fontPrimary font-semibold text-2xl">
            Rp. {formatPrice(product.price)}
          </span>
          <CButton
            action={handleAddToCart}
            type="button"
            className="bg-pinkcustom hover:bg-pink-400 px-5 py-2 text-center text-white rounded-lg"
          >
            Tambah Ke keranjang
          </CButton>
        </div>
      </li>
    );
  });
};

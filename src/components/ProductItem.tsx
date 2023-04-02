import { Image } from "react-bootstrap";
import { IProduct } from "../utils/types";
import { StarFill } from "react-bootstrap-icons";
import { ROUTE } from "../utils/consts";
import { useNavigate } from "react-router-dom";

interface Props {
  product: IProduct;
}

const ProductItem: React.FC<Props> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <tr
      className="align-middle text-center"
      key={product.id}
      onClick={() => navigate(ROUTE.PRODUCT + `/${product.id}`)}
    >
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>{product.description}</td>
      <td>{product.price}₴</td>
      <td>
        <Image height={100} width={100} src={product.thumbnail} />
      </td>
      <td>
        {product.rating} {<StarFill className="mb-1" />}
      </td>
      <td>{product.stock}</td>
      <td>{product.category}</td>
    </tr>
  );
};

export default ProductItem;

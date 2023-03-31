import { Image } from "react-bootstrap";
import { IProduct } from "../utils/types";
import { StarFill } from "react-bootstrap-icons";


interface Props {
  product: IProduct;
}

const ProductItem: React.FC<Props> = ({ product }) => {
  return (
    <tr key={product.id}>
      <td className="align-middle text-center">{product.id}</td>
      <td className="align-middle text-center">{product.title}</td>
      <td className="align-middle text-center">{product.description}</td>
      <td className="align-middle text-center">{product.price}₴</td>
      <td className="align-middle">
        <Image height={100} width={100} src={product.thumbnail} />
      </td>
      <td className="align-middle text-center">{product.rating} {<StarFill className="mb-1" />}</td>
      <td className="align-middle text-center">{product.stock}</td>
      <td className="align-middle text-center">{product.category}</td>
    </tr>
  );
}

export default ProductItem;

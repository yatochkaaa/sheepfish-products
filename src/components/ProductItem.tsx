import { Image } from "react-bootstrap";
import { IProduct } from "../utils/types";


interface Props {
  product: IProduct;
}

const ProductItem: React.FC<Props> = ({ product }) => {
  return (
    <tr key={product.id}>
      <td className="align-middle text-center">{product.id}</td>
      <td className="align-middle text-center">{product.title}</td>
      <td className="align-middle text-center">{product.description}</td>
      <td className="align-middle text-center">{product.price} грн</td>
      <td className="align-middle">
        <Image height={100} width={100} src={product.thumbnail} />
      </td>
      <td className="align-middle text-center">{product.rating}</td>
      <td className="align-middle text-center">{product.stock}</td>
      <td className="align-middle text-center">{product.category}</td>
    </tr>
  );
}

export default ProductItem;

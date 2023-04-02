import React from "react";
import { useParams } from "react-router-dom";
import {
  Alert,
  Col,
  Container,
  Row,
  Image,
  Carousel,
  Card,
} from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getOneProduct } from "../store/action-creators/products";
import bigStar from "../assets/bigStar.png";
import Loader from "../components/Loader";
import { COL } from "../utils/consts";

const ProductPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedProduct, isLoading, error } = useAppSelector(
    (state) => state.productReducer
  );
  const { id } = useParams();
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  React.useEffect(() => {
    if (id) {
      dispatch(getOneProduct(Number(id)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error || !selectedProduct) {
    return (
      <Container className="mt-3 text-center">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-3">
      <Row>
        <Col className="d-flex align-items-center" md={4}>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {selectedProduct.images.map((img) => (
              <Carousel.Item>
                <Image
                  className="d-block"
                  style={{ maxHeight: 300 }}
                  src={img}
                  alt={img}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2 className="text-center">{selectedProduct.title}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {selectedProduct.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              height: 300,
              width: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h2>Сток: {selectedProduct.stock} шт.</h2>
            <h2>От: {selectedProduct.price} грн</h2>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h2>Характеристики</h2>
        <Row
          style={{
            display: "inline-block",
            background: "lightgray",
            padding: 8,
          }}
        >
          <span style={{ fontWeight: "bold" }}>{COL.NAME} :</span>
          {selectedProduct.title}
        </Row>
        <Row
          style={{
            display: "inline-block",
            background: "transparent",
            padding: 8,
          }}
        >
          <span style={{ fontWeight: "bold" }}>{COL.DESCRIPTION} :</span>
          {selectedProduct.description}
        </Row>
        <Row
          style={{
            display: "inline-block",
            background: "lightgray",
            padding: 8,
          }}
        >
          <span style={{ fontWeight: "bold" }}>{COL.CATEGORY} :</span>
          {selectedProduct.category}
        </Row>
      </Row>
    </Container>
  );
};

export default ProductPage;

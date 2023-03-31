import React from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";

interface Props {
  show: boolean;
  onHide: () => void;
  categories: string[];
}

const CreateProduct: React.FC<Props> = ({ show, onHide, categories }) => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [brand, setBrand] = React.useState<string>("");
  const [price, setPrice] = React.useState<string>("");

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-3">
            <Dropdown.Toggle variant="outline-dark">
              {selectedCategory || "Оберіть категорію"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {categories.map((category) => (
                <Dropdown.Item
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-3"
            placeholder="Введіть назву продукту"
          />
          <Form.Control
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-3"
            as="textarea"
            placeholder="Введіть опис продукту"
            rows={3}
          />
          <Form.Control
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="mt-3"
            placeholder="Введіть бренд продукту"
          />
          <Form.Control
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-3"
            placeholder="Введіть вартість продукту"
            type="number"
          />
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-3"
            placeholder="Введіть посилання на зображення"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success">
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateProduct;

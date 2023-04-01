import React from "react";
import { Button, Form, FormGroup, InputGroup, Modal } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAppDispatch } from "../../store/hooks";
import { postProduct } from "../../store/action-creators/products";

interface Props {
  show: boolean;
  onHide: () => void;
  categories: string[];
  totalProducts: number;
}

const Create: React.FC<Props> = ({
  show,
  onHide,
  categories,
  totalProducts,
}) => {
  const dispatch = useAppDispatch();

  const validationSchema = yup.object({
    category: yup
      .string()
      .oneOf(categories, "Обрати один з категорії")
      .required("Необхідно обрати категорію"),
    title: yup.string().required("Необхідно вказати назву"),
    description: yup.string().required("Необхідно вказати опис"),
    brand: yup.string().required("Необхідно вказати бренд"),
    price: yup
      .number()
      .required("Необхідно вказати ціну")
      .positive("Ціна не може бути меншою за нуль"),
    thumbnail: yup
      .string()
      .url("Зображення має бути дійсною URL-адресою")
      .required("Необхідно вказати посилання на зображення"),
  });

  const formik = useFormik({
    initialValues: {
      category: "",
      title: "",
      description: "",
      brand: "",
      price: "",
      thumbnail: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const newProduct = {
        ...values,
        id: totalProducts + 1,
        price: Number(values.price),
        rating: 0,
        stock: 0,
        discountPercentage: 0,
        images: [],
      };
      dispatch(postProduct(newProduct));
      onHide();
    },
  });

  const isValidSubmit = () => {
    const isEmptyValue = Object.values(formik.values).some(
      (value) => value === ""
    );

    if (formik.isValid && !isEmptyValue) {
      return true;
    }

    return false;
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={formik.handleSubmit}>
        <Modal.Body>
          <FormGroup controlId="category">
            <Form.Select
              defaultValue="Choose a category"
              onChange={formik.handleChange}
            >
              <option
                value="Choose a category"
                disabled
                key="Choose a category"
              >
                Оберіть категорію
              </option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Form.Select>
            <Form.Text className="text-danger">
              {formik.errors.category ? (
                <div className="text-danger">{formik.errors.category}</div>
              ) : null}
            </Form.Text>
          </FormGroup>

          <FormGroup className="mt-3" controlId="title">
            <Form.Control
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Введіть назву продукту"
            />
            <Form.Text className="text-danger">
              {formik.touched.title && formik.errors.title ? (
                <div className="text-danger">{formik.errors.title}</div>
              ) : null}
            </Form.Text>
          </FormGroup>

          <FormGroup className="mt-3" controlId="description">
            <Form.Control
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              as="textarea"
              placeholder="Введіть опис продукту"
              rows={3}
            />
            <Form.Text className="text-danger">
              {formik.touched.description && formik.errors.description ? (
                <div className="text-danger">{formik.errors.description}</div>
              ) : null}
            </Form.Text>
          </FormGroup>

          <FormGroup className="mt-3" controlId="brand">
            <Form.Control
              value={formik.values.brand}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Введіть бренд продукту"
            />
            <Form.Text className="text-danger">
              {formik.touched.brand && formik.errors.brand ? (
                <div className="text-danger">{formik.errors.brand}</div>
              ) : null}
            </Form.Text>
          </FormGroup>

          <FormGroup className="mt-3" controlId="price">
            <InputGroup>
              <Form.Control
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Введіть вартість продукту"
                type="number"
              />
              <InputGroup.Text>₴</InputGroup.Text>
            </InputGroup>
            <Form.Text className="text-danger">
              {formik.touched.price && formik.errors.price ? (
                <div className="text-danger">{formik.errors.price}</div>
              ) : null}
            </Form.Text>
          </FormGroup>

          <FormGroup className="my-3" controlId="thumbnail">
            <Form.Control
              value={formik.values.thumbnail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Введіть посилання на зображення"
            />
            <Form.Text className="text-danger">
              {formik.touched.thumbnail && formik.errors.thumbnail ? (
                <div className="text-danger">{formik.errors.thumbnail}</div>
              ) : null}
            </Form.Text>
          </FormGroup>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="outline-dark" onClick={onHide}>
            Закрыть
          </Button>
          <Button
            type="submit"
            variant={isValidSubmit() ? "outline-success" : "outline-danger"}
            disabled={!isValidSubmit()}
          >
            Добавить
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default Create;

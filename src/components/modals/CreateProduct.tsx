import React from "react";
import { Button, Form, FormGroup, Modal } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";

interface Props {
  show: boolean;
  onHide: () => void;
  categories: string[];
}

const Create: React.FC<Props> = ({ show, onHide, categories }) => {
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
      .url()
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
      alert(JSON.stringify(values, null, 2));
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
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
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

          <FormGroup controlId="title">
            <Form.Control
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-3"
              placeholder="Введіть назву продукту"
            />
            <Form.Text className="text-danger">
              {formik.touched.title && formik.errors.title ? (
                <div className="text-danger">{formik.errors.title}</div>
              ) : null}
            </Form.Text>
          </FormGroup>

          <FormGroup controlId="description">
            <Form.Control
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-3"
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

          <FormGroup controlId="brand">
            <Form.Control
              value={formik.values.brand}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-3"
              placeholder="Введіть бренд продукту"
            />
            <Form.Text className="text-danger">
              {formik.touched.brand && formik.errors.brand ? (
                <div className="text-danger">{formik.errors.brand}</div>
              ) : null}
            </Form.Text>
          </FormGroup>

          <FormGroup controlId="price">
            <Form.Control
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-3"
              placeholder="Введіть вартість продукту"
              type="number"
            />
            <Form.Text className="text-danger">
              {formik.touched.price && formik.errors.price ? (
                <div className="text-danger">{formik.errors.price}</div>
              ) : null}
            </Form.Text>
          </FormGroup>

          <FormGroup controlId="thumbnail">
            <Form.Control
              value={formik.values.thumbnail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-3"
              placeholder="Введіть посилання на зображення"
            />
            <Form.Text className="text-danger">
              {formik.touched.thumbnail && formik.errors.thumbnail ? (
                <div className="text-danger">{formik.errors.thumbnail}</div>
              ) : null}
            </Form.Text>
          </FormGroup>
        </Form>
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
    </Modal>
  );
};

export default Create;

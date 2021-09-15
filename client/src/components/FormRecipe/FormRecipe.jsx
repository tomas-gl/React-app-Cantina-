// Styles import
import "../FormRecipe/style.css";

// Bootstrap/Icons imports
import { Button, Row, Col } from "react-bootstrap";
import { ImCross } from "react-icons/im";

// Formik imports
import { Formik, Form, Field, FieldArray } from "formik";

import * as yup from "yup";

const schema = yup.object().shape({
  // titre: yup.string().required(),
  // niveau: yup.string().required(),
});

const FormRecipe = () => {
  return (
    <div className="container-form">
      <Formik
        validationSchema={schema}
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{
          titre: "",
          niveau: "",
          ingredients: [
            { quantite: "", unite: "", nom: "", id: "" + Math.random() },
          ],
        }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          // make async call
          console.log("submit", data);
          setSubmitting(false);
        }}
        validate={(values) => {
          const errors = {};

          if (values.titre.includes("bob")) {
            errors.titre = "no bob";
          }

          return errors;
        }}
      >
        {({ values, errors }) => (
          <Form className="my-5 p-5">
            <Row className="mb-3">
              <Col xl={6}>
                <Field
                  placeholder="Titre"
                  className="w-100 my-2 form-control"
                  type="input"
                  name="titre"
                />
                <span type="invalid">{errors.titre}</span>
              </Col>
              <Col xl={6}>
                <Field
                  placeholder="Niveau"
                  className="w-100 my-2 form-control"
                  style={{ appearance: "auto" }}
                  as="select"
                  name="niveau"
                >
                  <option disabled value="">
                    Sélectionner un niveau
                  </option>
                  <option value="padawan">Padawan</option>
                  <option value="Jedi">Jedi</option>
                  <option value="Maitre">Maître</option>
                </Field>
                <span type="invalid">{errors.niveau}</span>
              </Col>
              <Col xl={12}>
                <Field
                  placeholder="Description"
                  className="w-100 my-2 form-control"
                  as="textarea"
                  name="description"
                ></Field>
                <span type="invalid">{errors.niveau}</span>
              </Col>
              <Col xl={6}>
                <Field
                  placeholder="Nombre de personnes"
                  className="w-100 my-2 form-control"
                  type="number"
                  as="input"
                  name="personnes"
                ></Field>
                <span type="invalid">{errors.niveau}</span>
              </Col>
              <Col xl={6}>
                <Field
                  placeholder="Temps de préparation (min)"
                  className="w-100 my-2 form-control"
                  type="number"
                  as="input"
                  name="tempsPreparation"
                ></Field>
                <span type="invalid">{errors.niveau}</span>
              </Col>
              <Col xl={12}>
                {/* <Field
                  placeholder="Ingrédients"
                  className="w-100 my-2 form-control"
                  type="number"
                  as="input"
                  name="ingredients"
                ></Field> */}
                <FieldArray name="ingredients">
                  {(arrayHelpers) => (
                    <div>
                      <Button
                        variant="success"
                        onClick={() =>
                          arrayHelpers.push({
                            quantite: "",
                            unite: "",
                            nom: "",
                            id: "" + Math.random(),
                          })
                        }
                      >
                        Ajouter un ingrédient
                      </Button>
                      {values.ingredients.map((ingredient, index) => {
                        return (
                          <div key={ingredient.id}>
                            <Row>
                              <Col xl={4}>
                                <Field
                                  placeholder="Quantité"
                                  className="w-100 my-2 form-control"
                                  type="number"
                                  as="input"
                                  name={`ingredients.${index}.quantite`}
                                ></Field>
                              </Col>
                              <Col xl={3}>
                                <Field
                                  placeholder="Unité"
                                  className="w-100 my-2 form-control"
                                  style={{ appearance: "auto" }}
                                  as="select"
                                  name={`ingredients.${index}.unite`}
                                >
                                  <option value=""></option>
                                  <option value="mg">mg</option>
                                  <option value="g">g</option>
                                  <option value="kg">kg</option>
                                  <option value="ml">ml</option>
                                  <option value="cl">cl</option>
                                  <option value="l">l</option>
                                </Field>
                              </Col>
                              <Col xl={4}>
                                <Field
                                  placeholder="Ingrédient"
                                  className="w-100 my-2 form-control"
                                  type="input"
                                  name={`ingredients.${index}.nom`}
                                ></Field>
                              </Col>
                              <Col xl={1} style={{ lineHeight: "3" }}>
                                <Button
                                  onClick={() => arrayHelpers.remove(index)}
                                  variant="danger"
                                >
                                  <ImCross className="mb-1" />
                                </Button>
                              </Col>
                            </Row>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </FieldArray>
                <span type="invalid">{errors.niveau}</span>
              </Col>
              <Col xl={12}>
                <Field
                  placeholder="Étapes"
                  className="w-100 my-2 form-control"
                  as="textarea"
                  name="etapes"
                ></Field>
                <span type="invalid">{errors.niveau}</span>
              </Col>
              <Col xl={12}>
                <Field
                  placeholder="Photo"
                  className="w-100 my-2 form-control"
                  type="file"
                  name="photo"
                ></Field>
                <span type="invalid">{errors.niveau}</span>
              </Col>
            </Row>
            <Button type="submit">Submit form</Button>
            <pre>{JSON.stringify(values, null, 2)}</pre>{" "}
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormRecipe;

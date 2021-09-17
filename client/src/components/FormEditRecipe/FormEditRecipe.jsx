// Styles import
// import "../FormAddRecipe/style.css";

// Bootstrap/Icons imports
import { Button, Row, Col } from "react-bootstrap";
import { ImCross } from "react-icons/im";
import { BsPlusCircleFill } from "react-icons/bs";

// Formik imports
import { Formik, Form, Field, FieldArray } from "formik";

import * as yup from "yup";

const schema = yup.object().shape({
  titre: yup.string().required("Veuillez rentrer un titre"),
  niveau: yup.string().required("Veuillez sélectionner un niveau"),
  description: yup.string().required("Veuillez rentrer une description"),
  personnes: yup.number().required("Veuillez choisir un nombre de personnes"),
  tempsPreparation: yup
    .number()
    .required("Veuillez choisir un temps de préparation"),
  ingredients: yup
    .array()
    .of(
      yup.object({
        nom: yup.string().required("Veuillez rentrer un nom"),
        quantite: yup.string().required("Veuillez rentrer une quantité"),
        unite: yup.string().required("Veuillez choisir une unité"),
      })
    )
    .min(1, "Veuillez au moins choisir un ingrédient"),
  etapes: yup
    .array()
    .of(
      yup.object({
        texte: yup.string().required("Veuillez renseigner l'étape"),
      })
    )
    .min(1, "Veuillez au moins renseigner une étape"),
});

const FormEditRecipe = ({ onEditRecipe, recipe, setRecipe }) => {
  // Edit form
  if (recipe) {
    return (
      <div className="container-form">
        <Formik
          validationSchema={schema}
          validateOnChange={false}
          validateOnBlur={false}
          initialValues={{
            titre: recipe.titre,
            niveau: recipe.niveau,
            description: recipe.description,
            personnes: recipe.personnes,
            tempsPreparation: recipe.tempsPreparation,
            ingredients: [
              { quantite: "", unite: "", nom: recipe.ingredients[0][1], id: "" + Math.random() },
            ],
            etapes: [
              {
                texte: recipe.etapes[0],
                id: "" + Math.random(),
              },
            ],
            photo: "",
          }}
          onSubmit={(data) => {
            let arrayIngredients = [];
            data.ingredients.forEach((el) => {
              let arrayIngredient = [];
              arrayIngredient.push(el.quantite + el.unite);
              arrayIngredient.push(el.nom);

              arrayIngredients.push(arrayIngredient);
            });
            data.ingredients = arrayIngredients;
            let arrayEtapes = [];
            data.etapes.forEach((el) => {
              arrayEtapes.push(el.texte);
            });
            data.etapes = arrayEtapes;
            onEditRecipe(data);
          }}
          validate={(values) => {
            const errors = {};

            return errors;
          }}
        >
          {({ values, errors }) => (
            <Form className="my-5 p-5">
              <Row className="mb-3">
              <h1 className="title">Modifier une recette</h1>
                <Col md={6} className="my-3">
                  <Field
                    placeholder="Titre"
                    className="w-100 my-2 form-control"
                    type="input"
                    name="titre"
                    value={values.titre}
                  />
                  <span type="invalid" className="error-msg">
                    {errors.titre}
                  </span>
                </Col>
                <Col md={6} className="my-3">
                  <Field
                    placeholder="Niveau"
                    className="w-100 my-2 form-control"
                    style={{ appearance: "auto" }}
                    as="select"
                    name="niveau"
                    value={values.niveau}
                  >
                    <option disabled value="">
                      Sélectionner un niveau
                    </option>
                    <option value="padawan">Padawan</option>
                    <option value="jedi">Jedi</option>
                    <option value="maitre">Maître</option>
                  </Field>
                  <span type="invalid" className="error-msg">
                    {errors.niveau}
                  </span>
                </Col>
                <Col md={12} className="my-3">
                  <Field
                    placeholder="Description"
                    className="w-100 my-2 form-control"
                    as="textarea"
                    name="description"
                    value={values.description}
                  ></Field>
                  <span type="invalid" className="error-msg">
                    {errors.description}
                  </span>
                </Col>
                <Col md={6} className="my-3">
                  <Field
                    placeholder="Nombre de personnes"
                    className="w-100 my-2 form-control"
                    type="number"
                    as="input"
                    name="personnes"
                    value={values.personnes}
                  ></Field>
                  <span type="invalid" className="error-msg">
                    {errors.personnes}
                  </span>
                </Col>
                <Col md={6} className="my-3">
                  <Field
                    placeholder="Temps de préparation (min)"
                    className="w-100 my-2 form-control"
                    type="number"
                    as="input"
                    name="tempsPreparation"
                  // value={tempsPreparation}
                  ></Field>
                  <span type="invalid" className="error-msg">
                    {errors.tempsPreparation}
                  </span>
                </Col>
                <Col md={12} className="my-3">
                  <FieldArray name="ingredients" value={values.ingredients}>
                    {(arrayHelpers) => (
                      <div>
                        <Button
                          variant="success"
                          className="mb-2"
                          onClick={() =>
                            arrayHelpers.push({
                              quantite: "",
                              unite: "",
                              nom: "",
                              id: "" + Math.random(),
                            })
                          }
                        >
                          <BsPlusCircleFill className="mb-1" /> Ajouter un
                          ingrédient
                        </Button>
                        {values.ingredients.map((ingredient, index) => {
                          return (
                            <div key={ingredient.id}>
                              <Row>
                                <Col md={4}>
                                  <Field
                                    placeholder="Quantité"
                                    className="w-100 my-2 form-control"
                                    type="number"
                                    as="input"
                                    name={`ingredients.${index}.quantite`}
                                  ></Field>
                                </Col>
                                <Col md={3}>
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
                                <Col md={4}>
                                  <Field
                                    placeholder="Ingrédient"
                                    className="w-100 my-2 form-control"
                                    type="input"
                                    name={`ingredients.${index}.nom`}
                                  ></Field>
                                </Col>
                                <Col md={1} style={{ lineHeight: "3" }}>
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
                  <pre type="invalid" className="error-msg">
                    {JSON.stringify(errors.ingredients, null, 2)}
                  </pre>
                </Col>
                <Col md={12} className="my-3">
                  <FieldArray name="etapes" value={values.etapes}>
                    {(arrayHelpers) => (
                      <div>
                        <Button
                          variant="success"
                          onClick={() =>
                            arrayHelpers.push({
                              id: "" + Math.random(),
                            })
                          }
                        >
                          <BsPlusCircleFill className="mb-1" /> Ajouter une étape
                        </Button>
                        {values.etapes.map((etape, index) => {
                          return (
                            <div key={etape.id}>
                              <Row>
                                <Col md={11}>
                                  <Field
                                    placeholder="Étapes"
                                    className="w-100 my-2 form-control"
                                    as="textarea"
                                    name={`etapes.${index}.texte`}
                                  ></Field>
                                </Col>
                                <Col md={1} style={{ lineHeight: "4" }}>
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
                  <pre type="invalid" className="error-msg">
                    {JSON.stringify(errors.etapes, null, 2)}
                  </pre>
                </Col>
                <Col md={12} className="my-3">
                  <Field
                    placeholder="Photo"
                    className="w-100 my-2 form-control"
                    type="file"
                    name="photo"
                    value={values.photo}
                  ></Field>
                </Col>
              </Row>
              <Button type="submit">Submit form</Button>
              <pre style={{ color: "white" }}>
                {JSON.stringify(values, null, 2)}
              </pre>{" "}
            </Form>
          )}
        </Formik>
      </div>
    );
  }
  return <> </>
};

export default FormEditRecipe;

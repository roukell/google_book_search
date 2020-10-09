import React from "react";
import { Form, Button } from "react-bootstrap";

const searchForm = props => {
return (
  <div className="container">
  <Form>
    <Form.Group>
      <Form.Label><h2>Search for and save Books of Interest</h2></Form.Label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search a Book"
        id="search"
      />
      <Button onClick={props.handleFormSubmit} className="btn btn-dark mt-3 mb-5">
        Search
        </Button>
    </Form.Group>
  </Form>
  </div>
);
}

export default searchForm;
import React from "react";
import SearchForm from "./SearchForm";
import renderer from "react-test-renderer";

it("sets submit movie by title on search page", () => {

    const errors = {};
    errors.title = "Movie Title is required.";

    const tree = renderer.create(
        <SearchForm
        movieTitle="Men in black"
         errors={errors}
         onSave={jest.fn()}
         saving={false}
         onChange={jest.fn()}
       />
    );
}); 

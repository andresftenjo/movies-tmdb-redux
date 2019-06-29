import React from "react";
import { cleanup, render} from "react-testing-library";
import SearchForm from "./SearchForm";
import { identifier } from "@babel/types";

afterEach(cleanup);

function renderSearchForm (args) {
    let defaultProps = {
        movieTitle: "Test title",
        onSave: () => {},
        onChange: () => {},
        saving : false,
        errors : {}
    };

    const props = {...defaultProps, ...args};
    return render(<SearchForm {...props } />);
}

it("should render movie search form", () => {
    const { getByText } = renderSearchForm();
    getByText("Search Movie by Title");
}); 


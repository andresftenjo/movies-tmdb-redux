import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

const SearchForm = ({
  movieTitle,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>Search Movie</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Movie Title"
        error={errors.title}
        onChange={onChange}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default SearchForm;

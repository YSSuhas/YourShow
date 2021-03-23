import React, { useState }  from "react";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

const Search = ({history}) => {
	const [keyword, setKeyword] = useState('')
	  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/${keyword}`)
    } else {
      history.push('/')
    }
  }
  return (
  	<div>
  	<form onSubmit={submitHandler}>
    <MDBCol md="12">
      <MDBFormInline className="md-form mr-auto mb-4">
        <input className="form-control mr-sm-2 white-text" type="text" placeholder="Search" aria-label="Search" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        <MDBBtn color="transparent" type="submit" className="white-text">
          Search
          </MDBBtn>
      </MDBFormInline>
    </MDBCol>
    </form>
    </div>
  );
}

export default Search;
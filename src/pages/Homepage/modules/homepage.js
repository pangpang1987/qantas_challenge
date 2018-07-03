import client from "graphqlApiClient";

const FETCH_HOMEPAGE = "homepage/FETCH_HOMEPAGE";

const query = `
  query {
    homepage {
      heading
      subheading
      heroImageUrl
    }
  }
`;

export const fetchHomepage = () => ({
  type: FETCH_HOMEPAGE,
  payload: client()
    .post({ query })
    .then(({ data }) => data.data.homepage)
});

const initialState = {
  homepage: {},
  isLoading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_HOMEPAGE}_PENDING`:
      return { ...state, isLoading: true };
    case `${FETCH_HOMEPAGE}_FULFILLED`:
      return { ...state, isLoading: false, homepage: action.payload };
    case `${FETCH_HOMEPAGE}_REJECTED`:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default reducer;

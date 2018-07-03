import client from "graphqlApiClient";

const FETCH_FAQS = "faq/FETCH_FAQS";

const query = `
  query {
    faqs {
      title
      body
    }
  }
`;

export const fetchFaqs = () => ({
  type: FETCH_FAQS,
  payload: client()
    .post({ query })
    .then(({ data }) => data.data.faqs)
});

const initialState = {
  faqs: [],
  isLoading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_FAQS}_PENDING`:
      return { ...state, isLoading: true };
    case `${FETCH_FAQS}_FULFILLED`:
      return { ...state, isLoading: false, faqs: action.payload };
    case `${FETCH_FAQS}_REJECTED`:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default reducer;

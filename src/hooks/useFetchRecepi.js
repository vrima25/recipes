import axios from "axios";
import { useReducer } from "react";

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
  params: {id: '8138'},
  headers: {
    'x-rapidapi-key': 'b1f36885f2msh22be793911d375dp1025f7jsnf7a6a472de41',
    'x-rapidapi-host': 'tasty.p.rapidapi.com'
  }
};

const initialState = {
  data : null,
  loading : false,
  error : null
}

const Action = {
  FETCHING_DATA: "FETCHING_DATA",
  FETCH_SUCCESSFUL: "FETCH_SUCCESSFUL",
  FETCH_ERROR: "FETCH_ERROR",
}

const reducer = (_, action) => {
  switch(action.type){
    case Action.FETCHING_DATA:
      return {
        data : null,
        loading : true,
        error : null
      };
    case Action.FETCH_SUCCESSFUL:
      return{
        data : action.payload,
        loading : false,
        error : false
      }
    case Action.FETCH_ERROR:
      return {
        data: null,
        loading: false,
        error: action.payload
      }
    default :
      return initialState
  }
}


const useFetchRecipe = () => {
    // const [recipe, setRecipe] = useState(null)
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(null)

    const [{data, loading,error}, dispatch] = useReducer(reducer, initialState);

    const fetchRecipe = async(id) => {
        // setLoading(true)
        // setRecipe(null)
        // setError(null)
        dispatch({type : Action.FETCHING_DATA})
        try {
            const reqOptions = {...options}
            reqOptions.params.id = id 

            const response = await axios.request(reqOptions);
            // setRecipe(response.data)
            // setLoading(false)
            dispatch({type : Action.FETCH_SUCCESSFUL, payload: response.data})
        } catch (err) {
            // setError(err.message)
            // setLoading(false)
            dispatch({type : Action.FETCH_ERROR, payload: err.message})
        }
    }

    return [fetchRecipe, {data, loading, error}]
}

export default useFetchRecipe
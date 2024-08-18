import { useParams } from "react-router-dom"
import useFetchRecipe from "../hooks/useFetchRecepi"
import { useEffect } from "react"
import RecipeHeader from "../components/RecipeHeader"
import Loading from "../components/Loading"
import RecipeInfo from "../components/RecipeInfo"
import Error from "../components/Error"


export default function RecipePage(){
    const {id} = useParams()
    const [fetchRecipe, {data, loading, error}] = useFetchRecipe()

    useEffect(()=> {
        fetchRecipe(id)
    }, [])

    if(loading)return <Loading/>
    if(error) return <p>{error}</p>
    if(data?.errors) return <Error explanation="Recipe Not Found"/>

    return(
        <div>
            {data && (
                <>
                <RecipeHeader nutritionalFacts={data.nutrition} name={data.name} />
                <RecipeInfo
                    instructions={data.instructions}
                    image={data.thumbnail_url}
                    ingredients={data.sections[0].components}
                />
                </>
            )}
        </div>
    )
}
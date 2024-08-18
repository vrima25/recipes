import { useNavigate } from "react-router-dom"

const Card = ({recipe}) => {
    const {thumbnail_url, name, topics, total_time_minutes, id} = recipe

    const navigate = useNavigate()

    const NavigateToRecipePage = () => {
        navigate(`/recipe/${id}/instructions`)
    }
    return (
        <div className="card" onClick={NavigateToRecipePage}>
                <img src={thumbnail_url}/>
                <div className="card-content">
                    <h3>{name}</h3>
                    <div className="card-info">
                        <div className="tag">
                            {topics.length > 0 ? <p>{topics[0].name}</p> : null }
                        </div>
                        {total_time_minutes ? <p className="time-tex">{total_time_minutes} mins</p> : null }
                    </div>
                </div>
            </div>
    )
}

export default Card
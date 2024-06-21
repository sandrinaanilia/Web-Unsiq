const Card =({image, title})=>{
    return <div className="card">
        <img src={image}alt={title} />
        <p>{title}</p>
    </div>
}

export default Card

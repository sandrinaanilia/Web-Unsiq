const Fasilitas = ({image, title, desc})=>{
    return <div className="facility">
        <img src= {image} alt={title} />
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
}

export default Fasilitas
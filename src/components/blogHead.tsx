import './style.css';
export default function BlogHead(props: any) {
    return (
        <div className="grid-container">
            <div className="image-container">
                <img src={props.image} alt={props.heading} />
            </div>
            <div className="text-container">
                <p className="genre">{props.genre}</p>
                <h1 className="heading">{props.heading} </h1>
                <p className="description">
                   { props.description}
                </p>
                <p className="author">By {props.author}</p>
                <p className="date">{props.date}</p>
            </div>
        </div>
    )
}
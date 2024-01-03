import {Link} from "react-router-dom";

function ProductCard(props) {
	
	return (
		<div class="card">
			<img
				src={props.product.thumbnail}
				class="card-img-top img-fluid"
				alt="..."
			/>
			<div class="card-body">
				<h5 class="card-title">{props.product.title}</h5>
				<p class="card-text">{props.product.description}</p>
				<Link to={`/products/${props.product.id}`} className="btn btn-primary">
					Detail
				</Link>
				<button className="btn btn-danger">
					Sil
					<Link to={`/products/delete/${props.product.id}`} className="btn btn-primary">
					</Link>
				</button>
			</div>
		</div>
	);
}

export default ProductCard;

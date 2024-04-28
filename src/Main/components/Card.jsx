const Card = () => {
    return (
        <div className="col-sm-12 col-md-3 col-lg-4">
            <div class="card mb-4">
                <img src={require("../../assets/images/work2.jpg")} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Card;
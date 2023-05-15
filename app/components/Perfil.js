export default function Perfil () {
    return <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-3">
                    <div className="card" style={{width: "18rem"}}>
                        <img src="https://fswceulp.nyc3.cdn.digitaloceanspaces.com/cpa%2Fmembros%2Fmadia.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Meu Nome</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Sobre min</h5>
                            <p className="card-text">Proin pretium ac sapien vel scelerisque. Nulla luctus magna a arcu pellentesque ultricies. Nam non accumsan lectus, vel porttitor tellus. Curabitur sit amet eros nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ut elit nec diam sagittis dictum. Pellentesque dolor tellus, blandit ac dignissim non, sodales id nisl. Fusce tristique volutpat nunc vel luctus. Aenean cursus orci at augue porttitor, vel cursus nisl mattis. Duis tempus faucibus egestas. Suspendisse eleifend lectus ultricies sagittis porttitor. Aenean mattis nec mauris in pulvinar.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
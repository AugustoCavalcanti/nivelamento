import Link from "next/link";

export default function CardResumo ({ link_imagem }) {
    return <>
        <div className="col">
                        <div className="card card-resumo">
                            <img src={link_imagem} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                            </div>
                            <div className="card-body">
                                <Link href="#" className='post-icons'><i className="fa fa-heart"></i></Link>
                                <Link href="#" className='post-icons mx-2'><i className="fa fa-comment"></i></Link>
                            </div>
                        </div>
                    </div>
    </>
}
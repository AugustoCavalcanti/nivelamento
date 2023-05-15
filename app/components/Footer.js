import Link from "next/link";

export default function Footer() {
    return <>
        <footer className="text-muted">
            <div className="container">
                <hr />
                <p>Desenvolvido com &nbsp;
                    <small style={{ color: "red" }}>
                        <i className="fa fa-heart"></i>
                    </small> &nbsp;
                    pela&nbsp;
                    <Link href="http://fabrica.ulbra-to.br/" target="_blank"> Fábrica de Software do CEULP/ULBRA</Link>
                    — Precisa de ajuda? Entre em contato pelo e-mail &nbsp;
                    <Link href="mailto:helpportal@ceulp.edu.br">helpportal@ceulp.edu.br</Link> ou <a href="https://wa.me/556332198235" style={{color: "#00897b"}}>WhatsApp</a>.
                </p>
            </div>
        </footer>
    </>
}
import Link from "next/link";
import CardResumo from "./CardResumo";

export default function Resumo() {
    return <>
        <section className="mt-3">
            <div className="container">
                <div className="row cols-4">
                    <CardResumo link_imagem="https://images4.alphacoders.com/936/thumb-1920-936378.jpg" />
                    <CardResumo link_imagem="https://tm.ibxk.com.br/2016/03/11/11153821330270.jpg?ims=1120x420" />
                    <CardResumo link_imagem="https://i.pinimg.com/originals/9e/79/ec/9e79ec44535698ecfefbf0c052187f96.png" />
                    <CardResumo link_imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp29sQkKp-SBnmmSRgaowmocCESKgIk7Aa-hfvLMNn&s" />
                </div>
            </div>
        </section>
    </>
}
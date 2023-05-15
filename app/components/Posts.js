"use client"
import Card from 'react-bootstrap/Card';

export default function Posts() {
    return <>
        <div className="container mt-3">
            <Card className='mb-3'>
                <Card.Img variant="top" src="https://w.wallhaven.cc/full/we/wallhaven-we628p.jpg" />
                <Card.Body>
                    <Card.Title>Primeiro Post do Meu Blog</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card&apos;s content.
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link href="#" className='post-icons'><i className="fa fa-heart"></i></Card.Link>
                    <Card.Link href="#" className='post-icons'><i className="fa fa-comment"></i></Card.Link>
                </Card.Body>
            </Card>
            <Card className='mb-3'>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/9e/79/ec/9e79ec44535698ecfefbf0c052187f96.png" />
                <Card.Body>
                    <Card.Text>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link href="#" className='post-icons'><i className="fa fa-heart"></i></Card.Link>
                    <Card.Link href="#" className='post-icons'><i className="fa fa-comment"></i></Card.Link>
                </Card.Body>
            </Card>
            <Card className='mb-3'>
                <Card.Img variant="top" src="https://tm.ibxk.com.br/2016/03/11/11153821330270.jpg?ims=1120x420" />
                <Card.Body>
                    <Card.Title>Segundo  Post do Meu Blog</Card.Title>
                    <Card.Text>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link href="#" className='post-icons'><i className="fa fa-heart"></i></Card.Link>
                    <Card.Link href="#" className='post-icons'><i className="fa fa-comment"></i></Card.Link>
                </Card.Body>
            </Card>
            <Card className='mb-3'>
                <Card.Img variant="top" src="https://images4.alphacoders.com/936/thumb-1920-936378.jpg" />
                <Card.Body>
                    <Card.Title>Terceiro  Post do Meu Blog</Card.Title>
                    <Card.Text>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link href="#" className='post-icons'><i className="fa fa-heart"></i></Card.Link>
                    <Card.Link href="#" className='post-icons'><i className="fa fa-comment"></i></Card.Link>
                </Card.Body>
            </Card>
        </div>
    </>
}
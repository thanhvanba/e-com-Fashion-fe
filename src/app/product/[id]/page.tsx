export default function ProductDetails({ params }: { params: { id: string } }) {
    return <div>My productId: { params.id }</div>
}
import { PostCardType } from "@/types/post";

export default function PostCard({post}: PostCardType) {
    return (
        <a href="#" className="hover:text-black flex flex-col justify-between h-full">
            <div>
                <img src={post.image} alt="poster" />
            </div>

            <h3 className="font-medium text-2xl mt-5">{post.title}</h3>

            <span className="text-gray-500 line-clamp-2">
                { post.description }
            </span>
        </a>
    )
}
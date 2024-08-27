import {
  Avatar,
  AvatarImage,
  AvatarFallback
} from "../../components/ui/avatar"
const AvatarUser = () => {
  return (
    <div>

<Avatar className="w-10 h-10 text-gray-500 cursor-pointer hover:bg-gray-200 rounded-full p-1 ">
      <AvatarImage sizes="sm" src="https://github.com/shadcn.png" className="text-gray-500 rounded-full" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    </div>
  )
}

export default AvatarUser
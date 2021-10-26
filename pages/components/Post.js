import{ BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    HeartIcon,
    PaperAirplaneIcon} from "@heroicons/react/outline"
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"
function Post({id,username,userimg,img,caption})
 {
    return ( 
        <div className="bg-white my-7 border rounded-sm">
            {console.log(id,username,caption)}
           <p>iam  a post</p>      
           {/*Header */}
           <div className="flex items-center p-5">
               <img src={userimg} className='rounded-full h-12 w-12 object-contain border p-1 mr-3' />
               <p className="flex-1 font-bold">{username}</p>
               <DotsHorizontalIcon className="h-5"/>
           </div>
           {/*img */}
           <img src={img} className="object-cover " />
           {/*Button */}
           <div className=" flex justify-between px-4 
           pt-4">
               <div className="flex space-x-4">
               <HeartIcon className="Btn" />
               <ChatIcon className="Btn"/>
               <PaperAirplaneIcon className="Btn"/>
           </div>
           
           </div>

           {/*caption */}
           <div className="p-5 truncate">
               <span className="font-bold mr-1">{username}</span>
               {caption}
               <p></p>

           </div>
           {/*comments */}
           
           {/*input */}
        </div>
    )
}

export default Post

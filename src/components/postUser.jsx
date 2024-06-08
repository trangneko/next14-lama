
// const getData = async (userId) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

import { getUser } from "@/lib/data";
import Image from "next/image";

  
//     if (!res.ok) {
//       throw new Error("Something went wrong");
//     }
  
//     return res.json();
//   };

const PostUser = async ({userId}) => {
    // const user = await getData(userId);
    const user = await getUser(userId);

    return (
        <div className="flex items-center gap-5">
            <Image className="object-cover rounded-full" src={user.img ? user.img : "/noavatar.png"} alt="" width={50} height={50} />
            <span>Author</span>
            <span className="font-medium">{user.username}</span>
        </div>
    );
}

export default PostUser;
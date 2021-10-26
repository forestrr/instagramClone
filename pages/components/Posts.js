import Post from "./Post"

const post=[{
    id:'123',
    username:"afiiiii_____",
    userimg:"https://i.guim.co.uk/img/media/a8e54ab92968f5ab2c9c18924cd3268a7649c96b/0_171_5142_3085/master/5142.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d1b6b1c91995211164058d68d3536faa",
    img:"https://i.guim.co.uk/img/media/a8e54ab92968f5ab2c9c18924cd3268a7649c96b/0_171_5142_3085/master/5142.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d1b6b1c91995211164058d68d3536faa",
    caption:"fucky'll"
},
{
    id:'135',
    username:"afiiiii_____",
    userimg:"https://i.guim.co.uk/img/media/a8e54ab92968f5ab2c9c18924cd3268a7649c96b/0_171_5142_3085/master/5142.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d1b6b1c91995211164058d68d3536faa",
    img:"https://i.guim.co.uk/img/media/a8e54ab92968f5ab2c9c18924cd3268a7649c96b/0_171_5142_3085/master/5142.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d1b6b1c91995211164058d68d3536faa",
    caption:"fucky'll"
}]
function Posts() {
    return (
        <div>
            {post.map((post)=>(
                <Post
                 key={post.id} 
                id={post.id}
                username={post.username}
                userimg={post.userimg}
                img={post.img}
                caption={post.caption}
                />
            ))}
        </div>
    )
}

export default Posts
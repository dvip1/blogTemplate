import BlogHead from "./blogHead"
import BlogBody from "./blogBody"
import BlogData from "./data"
export default function Home() {
  return (
    <>
      <BlogHead
        image='/cuteComputer.jpeg'
        genre='Technology'
        heading='Lorem ipsum dolor sit amet cons ectetur adipisicing'
        description=' Never gonna give you up
        Never gonna let you down
        Never gonna run around and desert you'
        author='Dvip Patel'
        date='Jan 11, 201X'
      />
      <BlogBody
        data={BlogData}
      />
    </>
  )
}
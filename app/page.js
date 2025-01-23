import getPost from "@/API/getPost";
import Banner from "@/components/banner/Banner";
import BlogCard from "@/components/blogCard/BlogCard";

const page = async () => {
  const posts = await getPost();

  return (
    <div className="">
      <Banner></Banner>
      <div className="grid md:grid-cols-3 gap-5 my-5">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default page;

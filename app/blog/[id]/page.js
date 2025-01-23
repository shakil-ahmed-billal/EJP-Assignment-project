import getPost from "@/API/getPost";
import postId from "@/API/postId";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const Page = async ({ params }) => {
  // Await the params if it's a Promise
  const resolvedParams = await params;

  // Validate the resolvedParams before destructuring
  if (!resolvedParams || !resolvedParams.id) {
    return <div>Error: Missing parameter ID.</div>;
  }

  const { id } = resolvedParams;
  // Fetch post data using the dynamic ID
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch post data");
  }

  const post = await response.json();
  const { title, body , userId} = post || {};
  
  return (
    <div className="w-10/12 mx-auto py-20">
      <Card>
        <CardHeader>
          <CardTitle><span className="font-bold">User Id:</span> {userId}</CardTitle>
          <CardTitle><span className="font-bold">Title:</span> {title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription><span className="font-bold">Description:</span> {body}</CardDescription>
        </CardContent>
        <CardFooter>
          <Link href={"/"}>
            <Button>Back to Home</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;

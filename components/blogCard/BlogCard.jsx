import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"

const BlogCard = ({post}) => {

    const {title , body} = post || {}
    return (
        <div>
            <Card className="p-4">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className="py-3">{body}</CardDescription>
                </CardContent>
                <CardFooter>
                    <Link href={`/blog/${post.id}`}>
                        <Button>Details</Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}

export default BlogCard
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

const page = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login?post_login_redirect_url=/profile");
  }

  return (
    <div className="py-20">
      <Card className="w-11/12 mx-auto">
        <CardHeader>
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl font-bold py-5">Welcome to your profile!✨</p>
            <Image
              className="rounded-full"
              src={user?.picture || "/blog_logo.png"}
              alt="blog site logo"
              width={80}
              height={80}
            ></Image>
          </div>
          <div className="flex flex-col justify-center  items-center  space-y-2">
            <CardTitle>Name: {user?.given_name}</CardTitle>
            <CardTitle>Email: {user?.email}</CardTitle>
            <CardContent>user id: {user?.id}</CardContent>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default page;

import PageTitle from "@/components/PageTitle";
import Post from "@/features/post/Posts";
export const revalidate = 10;

export default function Home() {
  return (
    <>
      <PageTitle title="Posts" />
      {/* <Post /> */}
    </>
  );
}

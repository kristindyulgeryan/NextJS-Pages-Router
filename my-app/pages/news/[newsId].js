// our-domain.com/news/something-important
import { useRouter } from "next/router";
function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;
  // this will be the dynamic part of the URL

  return <h1>The Detail Page.</h1>;
}

export default DetailPage;

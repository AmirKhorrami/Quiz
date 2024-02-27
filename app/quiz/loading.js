import Skeleton from "react-loading-skeleton";
export default function Loading({ count }) {
  return (
    <Skeleton
      count={count}
      direction="rtl"
      duration={2}
      height={50}
      // baseColor="#f8f8f8"
      // highlightColor="#d8d8d8"
      // circle={true}
    />
  );
}

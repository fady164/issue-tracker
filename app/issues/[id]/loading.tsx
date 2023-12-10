import { Skeleton } from "@/app/components";
import { Box, Card, Flex, Heading } from "@radix-ui/themes";

const LoadingIssueDetialPage = () => {
  return (
    <Box className="max-w-xl">
      <Heading as="h2">
        <Skeleton />
      </Heading>

      <Flex className="gap-3 my-2">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose lg:prose-xl mt-3 ">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetialPage;

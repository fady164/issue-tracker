import { IssueStatusBadge } from "@/app/components";
import { Issue } from "@prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <>
      <Heading as="h2">{issue.title}</Heading>

      <Flex className="gap-3 my-2">
        <IssueStatusBadge status={issue.status} />
        <Text as="p">{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose max-w-full mt-3 ">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </>
  );
};

export default IssueDetails;

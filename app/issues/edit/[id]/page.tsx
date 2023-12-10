import prisma from "@/prisma/client";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import React from "react";
import IssueFormSkeleton from "./loading";

interface Props {
  params: {
    id: string;
  };
}

const IssueForm = dynamic(() => import("../../_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

const EditIssuePage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  if (!issue) notFound();

  return <IssueForm issue={issue} />;
};

export default EditIssuePage;

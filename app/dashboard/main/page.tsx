import { SimpleWidget } from "@/app/components/SimpleWidget";
import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      <SimpleWidget />
    </div>
  );
};

export default Page;

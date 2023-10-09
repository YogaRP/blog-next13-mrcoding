import PageTitle from "@/components/PageTitle";
import { Card, CardBody } from "@chakra-ui/react";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";

const Page = async () => {
  return (
    <div className="my-4">
      <Card>
        <CardBody>
          <PageTitle title={"Contact"} />
          <div className="my-4">
            <p className="mb-4">Untuk konsultasi. Hubungi saya di:</p>
            <div className="flex items-center">
              <span>
                <AiOutlineMail />
              </span>
              <p className="ml-4">abcdefg@gmail.com</p>
            </div>
            <div className="flex items-center mt-3">
              <span>
                <AiFillPhone />
              </span>
              <p className="ml-4">12345678</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Page;

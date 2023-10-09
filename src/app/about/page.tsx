"use client";
import PageTitle from "@/components/PageTitle";
import { Card, CardBody } from "@chakra-ui/react";

const Page = () => {
  return (
    <div className="my-4">
      <Card maxW={{ xl: "xl", sm: "lg" }}>
        <CardBody>
          <PageTitle title={"About"} />
          <div className="my-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              error quam optio! Pariatur commodi eligendi necessitatibus porro.
              Natus, quia officia!{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, tenetur.
            </p>

            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              error quam optio! Pariatur commodi eligendi necessitatibus porro.
              Natus, quia officia!{" "}
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Page;

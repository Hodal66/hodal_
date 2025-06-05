/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

export function AlertSuccess() {
  return (
    <Alert
    //   additionalContent={<ExampleAdditionalContent />}
      additionalContent={"Additional Information brother you have to check well"}
      color="success"
      icon={HiInformationCircle}
      onDismiss={() => alert('Alert dismissed!')}
      rounded
    >
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
  );
}


import { FileInput, HelperText, Label } from "flowbite-react";

export function File1() {
  return (
    <div id="fileUpload" className="max-w-md">
      <Label className="mb-2 block" htmlFor="file">
        Upload file
      </Label>
      <FileInput id="file" />
      <HelperText className="mt-1">A profile picture is useful to confirm your are logged into your account</HelperText>
    </div>
  );
}

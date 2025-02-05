import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
interface ModalInterface {
  open: boolean;
  onClose: () => void;
}
enum ContentType {
  youtube = "youtube",
  twitter = "twitter",
}
export function CreateContentModal({ open, onClose }: ModalInterface) {
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.youtube);
  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    await axios.post(
      BACKEND_URL + "/api/v1/content",
      { title, link, type },
      { headers: { authorization: localStorage.getItem("token") } }
    );
    onClose();
  }
  return (
    <div>
      {open && (
        <div>
          <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center"></div>
          <div className="w-screen h-screen fixed top-0 left-0  flex justify-center">
            <div className="flex flex-col justify-center">
              <span className="bg-white opacity-100 p-4 rounded">
                <div className="flex justify-end">
                  <div onClick={onClose} className="cursor-pointer">
                    <CrossIcon size="md" />
                  </div>
                </div>
                <div>
                  <Input placeholder={"title"} reference={titleRef} />
                  <Input placeholder={"link"} reference={linkRef} />
                </div>
                <div>
                  <h1>Type</h1>
                  <div className="flex gap-1 justify-center pb-2">
                    <Button
                      onClick={() => {
                        setType(ContentType.youtube);
                      }}
                      size="sm"
                      text="youtube"
                      variant={
                        type === ContentType.youtube ? "primary" : "secondary"
                      }
                    />
                    <Button
                      onClick={() => {
                        setType(ContentType.twitter);
                      }}
                      size="sm"
                      text="twitter"
                      variant={
                        type === ContentType.twitter ? "primary" : "secondary"
                      }
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <Button
                    onClick={addContent}
                    variant="primary"
                    text="Submit"
                    size="md"
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

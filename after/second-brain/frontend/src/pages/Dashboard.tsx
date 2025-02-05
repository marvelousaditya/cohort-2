import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../config";
export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [contents, refresh] = useContent();
  useEffect(() => {
    refresh();
  }, [modalOpen]);
  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen border-2 bg-gray-100">
        <CreateContentModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
        <div className="flex justify-end gap-4">
          <Button
            startIcon={<PlusIcon size="md" />}
            variant="primary"
            text="Add Content"
            size="md"
            onClick={() => setModalOpen(true)}
          ></Button>
          <Button
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/brain/share`,
                {
                  share: true,
                },
                {
                  headers: {
                    authorization: localStorage.getItem("token"),
                  },
                }
              );
              const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
              navigator.clipboard.writeText(shareUrl);
              alert("link copied to clipboard");
            }}
            startIcon={<ShareIcon size="md" />}
            variant="secondary"
            text="Share Brain"
            size="md"
          ></Button>{" "}
        </div>
        <div className="flex gap-4 flex-wrap">
          {contents.map(({ type, link, title }) => {
            return <Card type={type} title={title} link={link} />;
          })}
        </div>
      </div>
    </div>
  );
}

import prismadb from "@/lib/prismadb";
import { BillboardForm } from "./_components/billboard-form";

type Props = {
  params: { storeId: string };
};

const BillboardPage = async ({ params }: { params: { storeId: string } }) => {
  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: params.storeId,
    },
  });
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
};

export default BillboardPage;
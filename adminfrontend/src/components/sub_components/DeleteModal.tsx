/** @format */

import React from "react";

interface DeleteModalProps {
  handleDelete: (id: string, index: number) => void;
  openDeleteModal: boolean;
  productId: string | undefined;
  productIndex: number | undefined;
}

export const DeleteModal: React.FC<DeleteModalProps> = ({
  handleDelete,
  openDeleteModal,
  productId,
  productIndex,
}) => {
  const closeDeleteModal = (e: React.MouseEvent<HTMLInputElement>) => {
    if ((e.target as HTMLElement).classList.contains("bg-back-color")) {
      openDeleteModal(false);
    }
  };

  const closeModal = () => {
    openDeleteModal(false);
  };
  const handleDeleteClick = () => {
    if (productId !== undefined && productIndex !== undefined) {
      handleDelete(productId, productIndex);
      openDeleteModal(false);
    }
  };
  return (
    <div>
      <div
        className="w-full h-full bg-back-color fixed z-50 px-[350px]"
        onClick={closeDeleteModal}>
        <div className="w-[384px] h-[200px] bg-white mt-[200px] rounded-2xl">
          <div className="flex items-center justify-center h-[167px] w-[230px] m-auto text-center">
            Та энэ бүтээгдэхүүнийг устгахдаа итгэлтэй байна уу?
          </div>
          <div className="h-[61px]">
            <button
              className="w-[192px] bg-gray-200 h-[61px] text-[#8B8E95] hover:bg-gray-500 hover:text-white rounded-bl-2xl duration-200"
              onClick={handleDeleteClick}>
              Тийм
            </button>
            <button
              className="w-[192px] bg-gray-200 h-[61px] text-[#8B8E95] hover:bg-gray-500 hover:text-white rounded-br-2xl duration-200"
              onClick={closeModal}>
              Үгүй
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

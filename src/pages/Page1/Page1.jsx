// src/pages/Page1/Page1.jsx
import React from "react";
import { formatDate } from "../../utils/formatDate"; // เรียกใช้งานฟังก์ชัน formatDate จาก utils

const Page1 = () => {
  const createDate = "2023-08-16T16:09:48.000Z"; // วันที่ตัวอย่าง
  const formattedDate = formatDate(createDate); // แปลงรูปแบบวันที่

  return (
    <div>
      <p>Formatted Create Date: {formattedDate}</p>
    </div>
  );
};

export default Page1;

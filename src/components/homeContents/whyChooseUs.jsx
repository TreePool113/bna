"use client";
import React from "react";
import { Grid } from "@mui/material";

export default function ReasonGrid() {
  return (
      <>
      <h1 className="text-4xl font-bold text-center mb-6">Tại sao nên chọn BNU</h1>
      <Grid
      container
      spacing={2}
      sx={{
        display: 'grid',
        gridTemplateAreas: `
          "a a a b b b"
          "c c d d e e"
        `,
        gridTemplateColumns: "repeat(6, 1fr)",
        justifyContent: 'center',
        alignItems: 'stretch',
        spaceBetween: '20px',
        padding: 2,
        gap: 2,
      }}>
      <Grid 
      item sx={{ gridArea: 'a' }}
      className="bg-gray-800 text-white rounded-lg w-full p-5">
        <h3 className="text-center text-xl font-bold">Huấn luyện viên chuyên nghiệp</h3>
        <p className="text-center mt-6">Đội ngũ huấn luyện viên có kinh nghiệm thi đấu và đào tạo, am hiểu kỹ thuật, chiến thuật, đồng thời biết cách truyền lửa và tạo động lực cho học viên.</p>
      </Grid>
      <Grid 
      item sx={{ gridArea: 'b' }}
      className="bg-gray-800 text-white rounded-lg w-full p-5">
        <h3 className="text-center text-xl font-bold">Chương trình đào tạo bài bản</h3>
        <p className="text-center mt-6">Giáo trình được xây dựng khoa học, phù hợp với từng độ tuổi và trình độ, từ cơ bản đến nâng cao, giúp học viên tiến bộ rõ rệt qua từng giai đoạn.</p>
      </Grid>
      <Grid 
      item sx={{ gridArea: 'c' }}
      className="bg-gray-800 text-white rounded-lg w-full p-5">
        <h3 className="text-center text-xl font-bold">Cơ sở vật chất hiện đại</h3>
        <p className="text-center mt-6">Sân bóng chuẩn, dụng cụ và trang thiết bị hỗ trợ tập luyện đầy đủ, tạo môi trường chuyên nghiệp, an toàn và thoải mái.</p>
      </Grid>
      <Grid 
      item sx={{ gridArea: 'd' }}
      className="bg-gray-800 text-white rounded-lg w-full p-5">
        <h3 className="text-center text-xl font-bold">Phát triển toàn diện</h3>
        <p className="text-center mt-6">Không chỉ rèn luyện kỹ năng bóng rổ mà còn nâng cao thể lực, kỷ luật, tinh thần đồng đội, và sự tự tin trong giao tiếp.</p>
      </Grid>
      <Grid 
      item sx={{ gridArea: 'e' }}
      className="bg-gray-800 text-white rounded-lg w-full p-5">
        <h3 className="text-center text-xl font-bold">Hoạt động đa dạng và cơ hội cọ xát</h3>
        <p className="text-center mt-6">Thường xuyên tổ chức các trận đấu giao hữu, giải đấu nội bộ, hoạt động ngoại khóa… giúp học viên có thêm trải nghiệm thực tế và niềm vui khi tập luyện.</p>
      </Grid>
    </Grid>
    </>
  );
}


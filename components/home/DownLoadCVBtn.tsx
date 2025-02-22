"use client"
import { Button } from '../ui/button';
import { FiDownload } from 'react-icons/fi';

const DownLoadCVBtn = () => {

  const handleDownload = () => {
    const files = [
      { name: "NguyenVanTaiCV-EN.pdf", url: "/assets/files/pdf/NguyenVanTaiCV-EN.pdf" },
      { name: "NguyenVanTaiCV-VN.pdf", url: "/assets/files/pdf/NguyenVanTaiCV-VN.pdf" },
    ];

    files.forEach((file) => {
      const link = document.createElement("a");
      link.href = file.url;
      link.download = file.name; // Chỉ hoạt động nếu trình duyệt hỗ trợ
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <Button onClick={handleDownload} className="d-flex items-center gap-2 w-[220px]" size="lg" variant="outline">
      <span>Download CV</span>
      <FiDownload />
    </Button>
  )
}

export default DownLoadCVBtn
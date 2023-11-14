import { AiOutlineFolderOpen, AiOutlineMessage } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";
import { RiAccountCircleLine } from "react-icons/ri";

export const projectData = [
    { icon: FaReact, color: "#61DBFB", text: "독서 버킷리스트" },
    { icon: FaReact, color: "#61DBFB", text: "와인 공유 커뮤니티" },
    { icon: FaReact, color: "#61DBFB", text: "메신저 대화 분석 시각화" },
    { icon: FaReact, color: "#61DBFB", text: "메시지 전달형 자살예방" },
  ];
  
  export const menuData = [
    { icon: BiHomeAlt, color: "#757575", menu: "home" },
    { icon: RiAccountCircleLine, color: "#757575", menu: "about" },
    { icon: AiOutlineFolderOpen, color: "#757575", menu: "project" },
    { icon: AiOutlineMessage, color: "#757575", menu: "contact" },
    { icon: FiAlertTriangle, color: "#757575", menu: "id" },
  ];
  
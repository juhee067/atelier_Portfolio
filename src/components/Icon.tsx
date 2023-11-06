import React from "react";
import styled from "styled-components";
import { IconType } from "react-icons";

interface IconProps {
  icon: IconType;
  size?: number;
  color?: string;
  margin?: string;
  padding?: string;
  onClick?: () => void;
}

const StyledIcon = styled.span<{ color?: string; margin?: string; padding?: string }>`
  color: ${(props) => (props.color ? props.color : "inherit")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
`;

const Icon: React.FC<IconProps> = ({ icon: IconComponent, size, color, margin, padding, onClick }) => {
  return (
    <StyledIcon color={color} margin={margin} padding={padding} onClick={onClick}>
      <IconComponent size={size} />
    </StyledIcon>
  );
};

export default Icon;

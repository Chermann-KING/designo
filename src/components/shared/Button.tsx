import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  href,
  className,
}) => {
  return (
    <Link href={href} passHref>
      <ButtonStyled variant={variant} className={className}>
        {children}
      </ButtonStyled>
    </Link>
  );
};

// Styles basic with variant
const buttonStyles = css<ButtonProps>`
  cursor: pointer;
  border: none;
  min-width: 152px;
  padding: 20px;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s;
  display: inline-block;
  text-align: center;

  background-color: ${({ variant }) =>
    variant === "secondary" ? "#ffad9b" : "#fff"};

  color: ${({ variant }) => (variant === "secondary" ? "#fff" : "#333136")};

  &:hover {
    background-color: ${({ variant }) =>
      variant === "secondary" ? "#fff" : "#ffad9b"};

    color: ${({ variant }) => (variant === "secondary" ? "#333136" : "#fff")};
  }
`;

const ButtonStyled = styled.a<ButtonProps>`
  ${buttonStyles}
`;

export default Button;

import { media, COLORS } from "@/constants";
import styled from "styled-components";

type TimelineHeaderProps = {
  title: string;
};

export const TimelineHeader = ({ title }: TimelineHeaderProps) => {
  return (
    <Header>
      <AccentLine />
      <Title>{title}</Title>
    </Header>
  );
};

const Header = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  display: flex;
  align-items: center;
  gap: 78px;
  ${media.mobile} {
    left: 20px;
    top: 60px;
  }
`;

const AccentLine = styled.div`
  width: 5px;
  height: 120px;
  background: linear-gradient(
    180deg,
    ${COLORS.ACCENT_BLUE} 0%,
    ${COLORS.ACCENT_PINK} 100%
  );
  ${media.mobile} {
    display: none;
  }
`;

const Title = styled.h2`
  color: ${COLORS.PRIMARY};
  font-size: 56px;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  max-width: 353px;
  ${media.mobile} {
    font-size: 20px;
    max-width: 123px;
  }
`;

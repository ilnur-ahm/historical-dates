import { media, COLORS } from "@/constants";
import styled from "styled-components";

type YearsContainerProps = {
  startYear: number;
  endYear: number;
};

export const YearsContainer = ({ startYear, endYear }: YearsContainerProps) => {
  return (
    <Container>
      <StartYear>{startYear}</StartYear>
      <EndYear>{endYear}</EndYear>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  gap: 72px;
  ${media.mobile} {
    position: relative;
    gap: 20px;
  }
`;

const StartYear = styled.div`
  font-size: 200px;
  font-weight: 700;
  color: ${COLORS.ACCENT_BLUE};
  line-height: 1;
  position: relative;
  ${media.mobile} {
    font-size: 56px;
  }
`;

const EndYear = styled.div`
  font-size: 200px;
  font-weight: 700;
  color: ${COLORS.ACCENT_PINK};
  line-height: 1;
  position: relative;
  ${media.mobile} {
    font-size: 56px;
  }
`;

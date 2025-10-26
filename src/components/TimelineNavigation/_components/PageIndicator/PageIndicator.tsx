import styled from "styled-components";
import { COLORS } from "@/constants";

type PageIndicatorProps = {
  activeSegment: number;
  totalSegments: number;
};

export const PageIndicator = ({
  activeSegment,
  totalSegments,
}: PageIndicatorProps) => {
  return (
    <Container>
      {String(activeSegment + 1).padStart(2, "0")}/
      {String(totalSegments).padStart(2, "0")}
    </Container>
  );
};

const Container = styled.div`
  font-size: 14px;
  color: ${COLORS.PRIMARY};
  font-weight: 400;
`;

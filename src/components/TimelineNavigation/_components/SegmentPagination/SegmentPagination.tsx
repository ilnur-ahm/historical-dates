import styled from "styled-components";
import { ANIMATION, COLORS } from "@/constants";

type SegmentPaginationProps = {
  activeSegment: number;
  totalSegments: number;
  onSegmentChange: (index: number) => void;
};

export const SegmentPagination = ({
  activeSegment,
  totalSegments,
  onSegmentChange,
}: SegmentPaginationProps) => {
  return (
    <PaginationContainer>
      {Array.from({ length: totalSegments }).map((_, index) => (
        <Dot
          key={index}
          $isActive={index === activeSegment}
          onClick={() => onSegmentChange(index)}
        />
      ))}
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.div<{ $isActive: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${COLORS.PRIMARY};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.4)};
  transition: opacity ${ANIMATION.DURATION.NORMAL} ${ANIMATION.EASING.EASE};
  cursor: pointer;

  &:hover {
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0.7)};
  }
`;

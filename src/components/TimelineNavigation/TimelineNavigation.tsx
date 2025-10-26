import styled from "styled-components";
import { PageIndicator } from "./_components/PageIndicator";
import { NavButtons } from "./_components/NavButtons";
import { SegmentPagination } from "./_components/SegmentPagination";
import { media } from "@/constants";

type TimelineNavigationProps = {
  activeSegment: number;
  totalSegments: number;
  onPrevSegment: () => void;
  onNextSegment: () => void;
  onSegmentChange: (index: number) => void;
};

export const TimelineNavigation = ({
  activeSegment,
  totalSegments,
  onPrevSegment,
  onNextSegment,
  onSegmentChange,
}: TimelineNavigationProps) => {
  return (
    <>
      <NavigationContainer>
        <PageIndicator
          activeSegment={activeSegment}
          totalSegments={totalSegments}
        />
        <NavButtons
          activeSegment={activeSegment}
          totalSegments={totalSegments}
          onPrevSegment={onPrevSegment}
          onNextSegment={onNextSegment}
        />
      </NavigationContainer>
      <MobilePagination>
        <SegmentPagination
          activeSegment={activeSegment}
          totalSegments={totalSegments}
          onSegmentChange={onSegmentChange}
        />
      </MobilePagination>
    </>
  );
};

const NavigationContainer = styled.div`
  position: absolute;
  top: -144px;
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  gap: 20px;

  ${media.mobile} {
    position: fixed;
    bottom: 12px;
    left: 20px;
    margin: 0;
    top: auto;
    gap: 10px;
  }
`;

const MobilePagination = styled.div`
  display: none;

  ${media.mobile} {
    position: fixed;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

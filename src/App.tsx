import styled from "styled-components";
import { segments } from "./mock";
import { media } from "./constants/media";
import { GlobalStyle } from "./styles/global";
import { TimelineHeader } from "./components/TimelineHeader";
import { TimeCircle } from "./components/TimeCircle";
import { EventsSlider } from "./components/EventsSlider";
import { TimelineNavigation } from "./components/TimelineNavigation";
import { useTimeline } from "./hooks/useTimeline";

export const App = () => {
  const {
    activeSegment,
    currentSegment,
    totalSegments,
    handleSegmentChange,
    handlePrevSegment,
    handleNextSegment,
  } = useTimeline();

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <TimelineContainer className="timeline-container">
          <TimelineHeader title="Исторические даты" />

          <TimeCircle
            segments={segments}
            activeSegment={activeSegment}
            onSegmentChange={handleSegmentChange}
          />

          <NavigationContainer>
            <TimelineNavigation
              activeSegment={activeSegment}
              totalSegments={totalSegments}
              onPrevSegment={handlePrevSegment}
              onNextSegment={handleNextSegment}
              onSegmentChange={handleSegmentChange}
            />

            <EventsSlider
              events={currentSegment.events}
              segmentId={currentSegment.id}
            />
          </NavigationContainer>
        </TimelineContainer>
      </AppContainer>
    </>
  );
};

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

const TimelineContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 1440px;
  padding-top: 120px;
  gap: 96px;
  ${media.mobile} {
    justify-content: center;
    width: 100%;
    padding: 0;
    gap: 32px;
  }
`;

const NavigationContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 56px;
  width: 100%;
`;

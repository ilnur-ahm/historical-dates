import styled from "styled-components";
import { useYearAnimation } from "@/hooks/useYearAnimation";
import { getDotAngle } from "@/utils/getDotAngle";
import { YearsContainer } from "./_components/YearsContainer";
import { media, ANIMATION, COLORS } from "@/constants";
import { useEffect, useState } from "react";
import { TimeSegment } from "@/types";

type TimeCircleProps = {
  segments: TimeSegment[];
  activeSegment: number;
  onSegmentChange: (index: number) => void;
};

export const TimeCircle = ({
  segments,
  activeSegment,
  onSegmentChange,
}: TimeCircleProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const currentSegment = segments[activeSegment];
  const { displayStartYear, displayEndYear } = useYearAnimation(
    currentSegment.startYear,
    currentSegment.endYear
  );

  useEffect(() => {
    setIsVisible(false);

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeSegment]);

  const rotationAngle = -getDotAngle(activeSegment, segments.length) - 60;

  return (
    <>
      <TimeCircleWrapper>
        <LargeCircle rotation={rotationAngle}>
          <DotsContainer>
            {segments.map((segment, index) => (
              <>
                <Dot
                  key={segment.id}
                  angle={getDotAngle(index, segments.length)}
                  isActive={index === activeSegment}
                  onClick={() => onSegmentChange(index)}
                >
                  <DotNumber
                    isActive={index === activeSegment}
                    rotation={rotationAngle}
                    angle={getDotAngle(index, segments.length)}
                    totalSegments={segments.length}
                    rotationAngle={rotationAngle}
                  >
                    {index + 1}
                    <DotLabel
                      isActive={index === activeSegment}
                      rotation={rotationAngle}
                    >
                      {currentSegment.category}
                    </DotLabel>
                  </DotNumber>
                </Dot>
              </>
            ))}
          </DotsContainer>
        </LargeCircle>
        <YearsContainer startYear={displayStartYear} endYear={displayEndYear} />
      </TimeCircleWrapper>
      <MobileContainer $isVisible={isVisible}>
        <MobileTitle>{currentSegment.category}</MobileTitle>
      </MobileContainer>
    </>
  );
};

const TimeCircleWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  &::before {
    content: "";
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: rgba(66, 86, 122, 0.2);
    transform: translateX(-50%);
    left: 50%;
    z-index: 0;
    ${media.mobile} {
      display: none;
    }
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    background-color: rgba(66, 86, 122, 0.2);
    transform: translateY(-50%);
    top: 50%;
    z-index: 0;
    ${media.mobile} {
      display: none;
    }
  }
`;

const LargeCircle = styled.div<{ rotation: number }>`
  position: relative;
  width: 37%;
  border-radius: 50%;
  border: 1px solid ${COLORS.BORDER_LIGHT};
  flex-shrink: 0;
  transform: rotate(${(props) => props.rotation}deg);
  transition: transform ${ANIMATION.DURATION.SLOWEST} ${ANIMATION.EASING.EASE};
  z-index: 3;
  aspect-ratio: 1/1;
  ${media.mobile} {
    display: none;
  }
`;

const DotsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Dot = styled.div<{ angle: number; isActive: boolean }>`
  position: absolute;
  width: ${(props) => (props.isActive ? "54px" : "6px")};
  height: ${(props) => (props.isActive ? "54px" : "6px")};
  border-radius: 50%;
  background-color: ${(props) =>
    props.isActive ? COLORS.BG_PRIMARY : COLORS.PRIMARY};
  border: ${(props) =>
    props.isActive ? `1px solid ${COLORS.BORDER_STRONG}` : "none"};
  top: calc(
    50% + ${(props) => Math.sin((props.angle * Math.PI) / 180) * 265}px
  );
  left: calc(
    50% + ${(props) => Math.cos((props.angle * Math.PI) / 180) * 265}px
  );
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: all ${ANIMATION.DURATION.SLOW} ${ANIMATION.EASING.CUBIC_BEZIER};
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: ${(props) => (props.isActive ? 10 : 1)};

  &:hover {
    background-color: ${COLORS.BG_PRIMARY};
    width: 54px;
    height: 54px;
    border: 1px solid ${COLORS.BORDER_STRONG};
  }
`;

const DotNumber = styled.div<{
  isActive: boolean;
  rotation: number;
  angle: number;
  totalSegments: number;
  rotationAngle: number;
}>`
  display: ${(props) => (props.isActive ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  color: ${COLORS.PRIMARY};
  font-size: 20px;
  font-weight: 400;
  position: relative;
  z-index: 11;
  transform: rotate(${(props) => -props.rotation}deg);
  transition: transform ${ANIMATION.DURATION.SLOW}
    ${ANIMATION.EASING.CUBIC_BEZIER};

  ${Dot}:hover & {
    display: flex;
    transform: rotate(${(props) => -props.rotationAngle}deg);
  }
`;

const DotLabel = styled.div<{ isActive: boolean; rotation: number }>`
  position: absolute;
  left: 42px;
  display: block;
  color: ${COLORS.PRIMARY};
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
  z-index: 12;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  visibility: ${(props) => (props.isActive ? "visible" : "hidden")};
  transition: opacity ${ANIMATION.DURATION.SLOW} ${ANIMATION.EASING.EASE}
      ${ANIMATION.DELAY.SMALL},
    visibility 0s linear ${(props) => (props.isActive ? "0s" : "0.8s")};
`;

const MobileContainer = styled.div<{ $isVisible: boolean }>`
  display: none;
  ${media.mobile} {
    display: flex;
    width: 100%;
    justify-content: start;
    padding: 0 20px;
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    transition: opacity ${ANIMATION.DURATION.SLOW} ${ANIMATION.EASING.EASE};
    margin-top: 24px;
  }
`;

const MobileTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${COLORS.PRIMARY};
  line-height: 1;
  text-align: center;
`;

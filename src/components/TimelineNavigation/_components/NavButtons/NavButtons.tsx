import { IconChevronLeft } from "@/assets/svg/IconChevronLeft";
import { IconChevronRight } from "@/assets/svg/IconChevronRight";
import { media, ANIMATION, COLORS } from "@/constants";
import styled from "styled-components";

type NavButtonsProps = {
  activeSegment: number;
  totalSegments: number;
  onPrevSegment: () => void;
  onNextSegment: () => void;
};

export const NavButtons = ({
  activeSegment,
  totalSegments,
  onPrevSegment,
  onNextSegment,
}: NavButtonsProps) => {
  return (
    <Container>
      <NavButton onClick={onPrevSegment} disabled={activeSegment === 0}>
        <IconChevronLeft />
      </NavButton>
      <NavButton
        onClick={onNextSegment}
        disabled={activeSegment === totalSegments - 1}
      >
        <IconChevronRight />
      </NavButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 20px;
  ${media.mobile} {
    gap: 8px;
  }
`;

const NavButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${COLORS.BG_PRIMARY};
  border: 1px solid ${COLORS.BORDER_MEDIUM};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${ANIMATION.DURATION.NORMAL} ${ANIMATION.EASING.EASE};
  color: ${COLORS.PRIMARY};
  font-size: 20px;

  ${media.mobile} {
    width: 25px;
    height: 25px;
    font-size: 12px;

    svg {
      width: 6px;
      height: 11px;
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

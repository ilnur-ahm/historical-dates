import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import { IconChevronLeft } from "@/assets/svg/IconChevronLeft";
import { IconChevronRight } from "@/assets/svg/IconChevronRight";
import { useEventsSlider } from "@/hooks/useEventsSlider";
import { media, ANIMATION, COLORS } from "@/constants";

type Event = {
  year: number;
  description: string;
};

type EventsSliderProps = {
  events: Event[];
  segmentId: number;
};

export const EventsSlider = ({ events, segmentId }: EventsSliderProps) => {
  const { prevRef, nextRef, setSwiper, isVisible } = useEventsSlider(segmentId);

  return (
    <EventsContainer $isVisible={isVisible}>
      <Swiper
        onSwiper={setSwiper}
        modules={[Navigation, FreeMode]}
        spaceBetween={20}
        slidesPerView={1.5}
        slidesOffsetAfter={20}
        freeMode={true}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 80,
            freeMode: false,
          },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="events-swiper"
      >
        {events.map((event, index) => (
          <SwiperSlide key={`${segmentId}-${event.year}-${index}`}>
            <EventCard className="event-card">
              <EventYear>{event.year}</EventYear>
              <EventDescription>{event.description}</EventDescription>
            </EventCard>
          </SwiperSlide>
        ))}
      </Swiper>

      <NavigationContainer>
        <NavButton ref={prevRef}>
          <IconChevronLeft />
        </NavButton>
        <NavButton ref={nextRef}>
          <IconChevronRight />
        </NavButton>
      </NavigationContainer>
    </EventsContainer>
  );
};

const EventsContainer = styled.div<{ $isVisible: boolean }>`
  position: relative;
  width: 100%;
  max-width: 1440px;
  padding: 0 80px;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity ${ANIMATION.DURATION.SLOW} ${ANIMATION.EASING.EASE};

  .swiper-wrapper {
    cursor: grab;
  }

  ${media.mobile} {
    border-top: 1px solid ${COLORS.DIVIDER};
    padding: 20px 0 0 0;

    .swiper-slide:first-child {
      padding-left: 20px;
    }
  }
`;

const NavigationContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  width: 100%;
  pointer-events: none;
  ${media.mobile} {
    display: none;
  }
`;

const NavButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${COLORS.BG_WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${ANIMATION.DURATION.NORMAL} ${ANIMATION.EASING.EASE};
  color: ${COLORS.PRIMARY_LIGHT};
  box-shadow: 0px 0px 15px 0px ${COLORS.SHADOW_BLUE};
  pointer-events: auto;

  &:disabled {
    visibility: hidden;
  }
`;

const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 16px;
`;

const EventYear = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-size: 25px;
  line-height: 120%;
  letter-spacing: 0%;
  font-weight: 400;
  color: ${COLORS.ACCENT_BLUE};
  ${media.mobile} {
    font-size: 16px;
  }
`;

const EventDescription = styled.p`
  font-size: 20px;
  line-height: 30px;
  color: ${COLORS.TEXT_PRIMARY};
  font-weight: 400;
  ${media.mobile} {
    font-size: 14px;
    line-height: 145%;
  }
`;

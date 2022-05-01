import { useState, useRef, useEffect, useContext } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import Button from './Button';
import Fieldset from './Fieldset';
import { RaceListContext } from './providers/RaceListProvider';
import { RaceEventsContext } from './providers/RaceEventsProvider';
import { fetchByEventAndDistance } from '../api/apiMethods';

function Filter({ events, distances }) {
  const [raceList, setRaceList] = useContext(RaceListContext);
  const [raceEvents, setRaceEvents] = useContext(RaceEventsContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const formRef = useRef();
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleClickOutside = (e) => {
    if (e.target.contains(formRef.current) && isModalOpen) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    window.document.addEventListener('click', handleClickOutside);

    return () => {
      window.document.removeEventListener('click', handleClickOutside);
    };
  });

  const ifEventsRendersField = () => {
    if (events) {
      return (
        <Fieldset
          selectedVal={events[0].value}
          register={register}
          label="Event Type"
          id="eventTypes"
          options={events}
        />
      );
    }
  };

  const ifDistancesRendersField = () => {
    if (distances) {
      return (
        <Fieldset
          selectedVal={distances[0].value}
          register={register}
          label="Distance"
          id="minDistance"
          options={distances}
        />
      );
    }
  };

  const onSubmit = async (filterValues) => {
    if (!filterValues.eventTypes) {
      filterValues.eventTypes = raceEvents.join(',');
    }
    const races = await fetchByEventAndDistance(filterValues);
    setRaceList(races);
    setRaceEvents(filterValues.eventTypes.split(','));
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button
        onClick={toggleModal}
        className="group border bg-white text-primary shadow-sm  transition-colors hover:bg-primary hover:text-white"
      >
        <span className="mr-2 hidden text-blueGrey-700 group-hover:text-white sm:block">
          Filter
        </span>
        <svg
          className="fill-blueGrey-900 group-hover:fill-white"
          width="28"
          height="28"
          viewBox="0 0 21 21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.5 11H15.5M6.5 4C6.76522 4 7.01957 4.10536 7.20711 4.29289C7.39464 4.48043 7.5 4.73478 7.5 5V7C7.5 7.26522 7.39464 7.51957 7.20711 7.70711C7.01957 7.89464 6.76522 8 6.5 8C6.23478 8 5.98043 7.89464 5.79289 7.70711C5.60536 7.51957 5.5 7.26522 5.5 7V5C5.5 4.73478 5.60536 4.48043 5.79289 4.29289C5.98043 4.10536 6.23478 4 6.5 4V4ZM18.5 6H7.5H18.5ZM5.5 6H2.5H5.5ZM6.5 14C6.76522 14 7.01957 14.1054 7.20711 14.2929C7.39464 14.4804 7.5 14.7348 7.5 15V17C7.5 17.2652 7.39464 17.5196 7.20711 17.7071C7.01957 17.8946 6.76522 18 6.5 18C6.23478 18 5.98043 17.8946 5.79289 17.7071C5.60536 17.5196 5.5 17.2652 5.5 17V15C5.5 14.7348 5.60536 14.4804 5.79289 14.2929C5.98043 14.1054 6.23478 14 6.5 14ZM18.5 16H7.5H18.5ZM5.5 16H2.5H5.5ZM14.5 9C14.7652 9 15.0196 9.10536 15.2071 9.29289C15.3946 9.48043 15.5 9.73478 15.5 10V12C15.5 12.2652 15.3946 12.5196 15.2071 12.7071C15.0196 12.8946 14.7652 13 14.5 13C14.2348 13 13.9804 12.8946 13.7929 12.7071C13.6054 12.5196 13.5 12.2652 13.5 12V10C13.5 9.73478 13.6054 9.48043 13.7929 9.29289C13.9804 9.10536 14.2348 9 14.5 9V9ZM13.5 11H2.5H13.5Z"
            stroke="#486581"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>

      <div
        ref={formRef}
        className={`${
          isModalOpen ? 'block' : 'hidden'
        } absolute top-[120%] left-0 w-full  bg-white shadow-2xl md:left-[auto] md:right-0 md:max-w-lg `}
      >
        <form className="relative" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-10 rounded bg-white py-8 px-4 sm:px-8 md:space-y-12 md:p-12">
            {ifEventsRendersField()}
            {ifDistancesRendersField()}
          </div>

          <div className="bg-blueGrey-100 px-4 py-8 md:px-12">
            <Button
              type="submit"
              className="ml-auto bg-primary text-lg text-white shadow shadow-primary/20 hover:bg-primary/75 md:text-xl"
            >
              Submit
            </Button>
          </div>
          <button
            onClick={toggleModal}
            className="absolute top-[20px] right-[20px] mt-0"
          >
            <Image height="18px" width="18px" src="/assets/close-icon.svg" />
          </button>
          <div className="arrow-up"></div>
        </form>
      </div>
    </div>
  );
}

Filter.propTypes = {
  events: PropTypes.array,
  distances: PropTypes.array,
};
export default Filter;

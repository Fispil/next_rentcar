import React, { Fragment } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';

import { CarProps } from '@/types';


interface CarDetailsModalProps {
  isOpen: boolean,
  closeModal: (isOpen: boolean) => void,
  car: CarProps
}

const CarDetailsModal: React.FC<CarDetailsModalProps> = ({ isOpen, closeModal, car }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child>
            <div className="fixed inset-0 bg-lback bg-opacity-25">
              
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}

export default CarDetailsModal
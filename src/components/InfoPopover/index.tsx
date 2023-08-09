import { Popover, Transition } from '@headlessui/react';
import { FaInfoCircle } from 'react-icons/fa';

export default function InfoPopover() {
  return (
    <Popover className="absolute top-8 right-8">
      <Popover.Button className='absolute top-0 right-0'>
        <FaInfoCircle size={24} className="text-light-silver" />
      </Popover.Button>

      <Transition>
        <Popover.Panel className='absolute top-5 right-5 text-faux-black w-48 bg-light-silver p-3 rounded-md'>
          <a
            className='text-onyx hover:text-lavander-indigo underline'
            href="https://www.freepik.com/free-photo/white-texture_946233.htm#query=paper%20texture&position=0&from_view=keyword&track=ais">
            Background image by bedneyimages
          </a> on Freepik
        </Popover.Panel>
      </Transition>

    </Popover>
  )
}

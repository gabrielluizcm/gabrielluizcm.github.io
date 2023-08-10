import { Popover, Transition } from '@headlessui/react';
import { FaInfoCircle } from 'react-icons/fa';

export default function InfoPopover() {
  return (
    <Popover className="absolute top-8 right-8">
      {({ open }) => (
        <>
          <Popover.Button className='absolute top-0 right-0 z-10  active:outline-none'>
            <FaInfoCircle size={24} className={open ? 'dark:text-lavander-indigo' : 'dark:text-light-silver'} />
          </Popover.Button>

          <Transition
            enter="transition-width duration-75"
            enterFrom="opacity-0"
            enterTo='opacity-100'
            leave='transition-width duration-150'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Popover.Panel
              className='absolute -top-1 -right-1 text-faux-black w-48 bg-light-silver p-3 pr-8 rounded-md z-9'>
              <a
                className='text-onyx hover:text-lavander-indigo underline'
                href="https://www.freepik.com/free-photo/white-texture_946233.htm#query=paper%20texture&position=0&from_view=keyword&track=ais"
                target='_blank'
                rel='nofollow'>
                Background image by bedneyimages
              </a> on Freepik
            </Popover.Panel>
          </Transition>
        </>
      )}


    </Popover>
  )
}

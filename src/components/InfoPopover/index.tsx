import { Popover, Transition } from '@headlessui/react';
import { FaInfoCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function InfoPopover() {
  const { t } = useTranslation();

  return (
    <Popover className="relative flex items-center">
      {({ open }) => (
        <>
          <Popover.Button className='relative z-10 focus:outline-none active:outline-none'>
            <FaInfoCircle size={24} className={open ? 'text-lavander dark:text-lavander-indigo' : 'text-faux-black dark:text-light-silver'} />
          </Popover.Button>

          <Transition
            enter="transition-width duration-75"
            enterFrom="opacity-0"
            enterTo='opacity-100'
            leave='transition-width duration-150'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Popover.Panel
              className='absolute -top-1 right-0 text-light-silver bg-dark-purple
                dark:text-faux-black w-48 dark:bg-light-silver p-3 pr-8 rounded-md z-9'>
              <a
                className='text-lavander hover:text-deep-purple
                  dark:text-onyx dark:hover:text-lavander-indigo underline'
                href="https://www.freepik.com/free-photo/paper-texture_1034617.htm#query=paper%20texture&position=11&from_view=search&track=ais"
                target='_blank'
                rel="noopener">
                {t('copyrightInfo.anchor')}
              </a> {t('copyrightInfo.location')}
            </Popover.Panel>
          </Transition>
        </>
      )
      }


    </Popover >
  )
}

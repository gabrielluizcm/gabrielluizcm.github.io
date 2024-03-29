import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

import MyPicture from '../../images/picture.webp';

type LinkAnchorProps = {
  to: string,
  Icon: React.ElementType,
}

function LinkAnchor({ to, Icon }: LinkAnchorProps) {
  return (
    <a href={to} target="_blank" rel="noopener" >
      <Icon className="w-8 h-8 hover:text-dark-purple dark:hover:text-khaki" />
    </a>
  )
}

export default function NameAndLinks() {
  const { t, i18n } = useTranslation();

  return (
    <section className="flex flex-col items-center gap-4 md:gap-8">
      <img src={MyPicture} alt={i18n.language === 'en' ? 'My profile picture' : 'Minha foto de perfil'}
        className='rounded-full w-24 h-24 md:w-32 md:h-32 border-dark-purple dark:border-khaki border-2' />
      <div className="flex flex-col items-center gap-4 md:gap-4">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-6xl text-dark-purple dark:text-khaki font-fira">Gabriel Luiz</h1>
          <h2 className="text-2xl md:text-4xl dark:text-light-silver font-lato">{t('subTitle')}</h2>
        </div>
        <div className="flex gap-6">
          <LinkAnchor to='https://github.com/gabrielluizcm' Icon={FaGithub} />
          <LinkAnchor to='https://linkedin.com/in/gabrielluizcm' Icon={FaLinkedin} />
          <LinkAnchor to='https://instagram.com/naooanjo' Icon={FaInstagram} />
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import HeaderItem from '../components/HeaderItem'

// Importing Icons from HeroIcons
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon
} from "@heroicons/react/outline"


const Header = () => {
  return (
    <header className="">
      <div>
        <HeaderItem title="HOME" Icon={HomeIcon} />

      </div>
      <Image
      src="https://links.papareact.com/ua6"
      alt=""
      height={200}
      width={200}
      className="object-contain" />

    </header>
  )
}

export default Header

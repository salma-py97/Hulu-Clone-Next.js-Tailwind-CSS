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
    <header className="flex flex-col sm:flex-row justify-between items-center m-5 h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />

      </div>
      {/* <div className="border"> */}
        <Image
        src="https://links.papareact.com/ua6"
        alt=""
        height={80}
        width={160}
        className="object-contain" />
      {/* </div> */}

    </header>
  )
}

export default Header

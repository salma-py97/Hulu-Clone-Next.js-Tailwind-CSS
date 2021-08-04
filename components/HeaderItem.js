const HeaderItem = ({title, Icon}) => {
  return (
    <div className="flex flex-col justify-center items-center cursor-pointer w-12 sm:w-20 group hover:text-white sm:mt-5">
      
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />

      <p className="opacity-0 group-hover:opacity-100 tracking-widest" >{title}</p>
    </div>
  )
}

export default HeaderItem

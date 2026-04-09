const Photo = () => {
  return (
    <div className="relative w-50 lg:w-100 aspect-square flex items-center justify-center">
      
      <div className="absolute w-full h-full rounded-full bg-gray-700 dark:bg-cyan-400 blur-3xl opacity-30"></div>

      <div className="relative w-full h-full rounded-full overflow-hidden border-3 border-gray-500 dark:border-cyan-300 shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:shadow-[0_0_20px_rgba(34,211,238,0.5)]">
        <img
          src="/images/Testimoni2.png"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

    </div>
  )
}

export default Photo